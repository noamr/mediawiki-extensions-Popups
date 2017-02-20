( function ( mw, $ ) {

	function generateToken() {
		return '9876543210';
	}

	QUnit.module( 'ext.popups/actions' );

	QUnit.test( '#boot', function ( assert ) {
		var config = new mw.Map(),
			stubUser = mw.popups.tests.stubs.createStubUser( /* isAnon = */ true ),
			stubUserSettings,
			action;

		config.set( {
			wgTitle: 'Foo',
			wgNamespaceNumber: 1,
			wgArticleId: 2,
			wgUserEditCount: 3,
			wgPopupsConflictsWithNavPopupGadget: true
		} );

		stubUserSettings = {
			getPreviewCount: function () {
				return 22;
			}
		};

		assert.expect( 1 );

		action = mw.popups.actions.boot(
			false,
			stubUser,
			stubUserSettings,
			generateToken,
			config
		);

		assert.deepEqual(
			action,
			{
				type: 'BOOT',
				isEnabled: false,
				isNavPopupsEnabled: true,
				sessionToken: '0123456789',
				pageToken: '9876543210',
				page: {
					title: 'Foo',
					namespaceID: 1,
					id: 2
				},
				user: {
					isAnon: true,
					editCount: 3,
					previewCount: 22
				}
			}
		);
	} );

	/**
	 * Stubs `mw.popups.wait` and adds the deferred and its promise as properties
	 * of the module.
	 *
	 * @param {Object} module
	 */
	function setupWait( module ) {
		module.waitDeferred = $.Deferred();
		module.waitPromise = module.waitDeferred.promise();

		module.sandbox.stub( mw.popups, 'wait', function () {
			return module.waitPromise;
		} );
	}

	/**
	 * Sets up an `a` element that can be passed to action creators.
	 *
	 * @param {Object} module
	 */
	function setupEl( module ) {
		module.el = $( '<a>' )
			.data( 'page-previews-title', 'Foo' )
			.eq( 0 );
	}

	QUnit.module( 'ext.popups/actions#linkDwell @integration', {
		setup: function () {
			var that = this;

			this.state = {
				preview: {}
			};
			this.getState = function () {
				return that.state;
			};

			setupWait( this );
			setupEl( this );
		}
	} );

	QUnit.test( '#linkDwell', function ( assert ) {
		var done = assert.async(),
			event = {},
			dispatch = this.sandbox.spy();

		this.sandbox.stub( mw, 'now' ).returns( new Date() );
		this.sandbox.stub( mw.popups.actions, 'fetch' );

		// Set the state for when dispatch is called. New token is accepted
		this.state.preview = {
			activeToken: generateToken()
		};

		mw.popups.actions.linkDwell( this.el, event, /* gateway = */ null, generateToken )(
			dispatch,
			this.getState
		);

		assert.deepEqual( dispatch.getCall( 0 ).args[ 0 ], {
			type: 'LINK_DWELL',
			el: this.el,
			event: event,
			token: '9876543210',
			timestamp: mw.now()
		} );

		// Stub the state tree being updated.
		this.state.preview = {
			enabled: true,
			activeLink: this.el,
			activeToken: generateToken()
		};

		// ---

		this.waitPromise.then( function () {
			assert.strictEqual(
				dispatch.callCount,
				2,
				'The fetch action is dispatched after 50 ms'
			);

			done();
		} );

		// After 50 ms...
		this.waitDeferred.resolve();
	} );

	QUnit.test( '#linkDwell doesn\'t continue when previews are disabled', function ( assert ) {
		var done = assert.async(),
			event = {},
			dispatch = this.sandbox.spy();

		mw.popups.actions.linkDwell( this.el, event, /* gateway = */ null, generateToken )(
			dispatch,
			this.getState
		);

		this.state.preview = {
			enabled: false
		};

		this.waitPromise.then( function () {
			assert.strictEqual( dispatch.callCount, 1 );

			done();
		} );

		// After 500 ms...
		this.waitDeferred.resolve();
	} );

	QUnit.test( '#linkDwell doesn\'t continue if the token has changed', function ( assert ) {
		var done = assert.async(),
			event = {},
			dispatch = this.sandbox.spy();

		mw.popups.actions.linkDwell( this.el, event, /* gateway = */ null, generateToken )(
			dispatch,
			this.getState
		);

		this.state.preview = {
			enabled: true,

			// Consider the user tabbing back and forth between two links in the time
			// it takes to start fetching data via the gateway: the active link hasn't
			// changed, but the active token has.
			activeLink: this.el,

			activeToken: '0123456789'
		};

		this.waitPromise.then( function () {
			assert.strictEqual( dispatch.callCount, 1 );

			done();
		} );

		// After 500 ms...
		this.waitDeferred.resolve();
	} );

	QUnit.test( '#linkDwell doesn\'t continue if the interaction is the same one', function ( assert ) {
		var done = assert.async(),
			event = {},
			dispatch = this.sandbox.spy();

		this.state.preview = {
			activeToken: '0123456789'
		};

		mw.popups.actions.linkDwell( this.el, event, /* gateway = */ null, generateToken )(
			dispatch,
			this.getState
		);

		this.waitPromise.then( function () {
			assert.strictEqual( dispatch.callCount, 1 );

			done();
		} );

		// After 500 ms...
		this.waitDeferred.resolve();
	} );

	QUnit.module( 'ext.popups/actions#fetch', {
		setup: function () {
			var that = this;

			this.gatewayDeferred = $.Deferred(),
			this.gatewayPromise = this.gatewayDeferred.promise();
			this.gateway = {
				getPageSummary: this.sandbox.stub().returns( this.gatewayPromise )
			};

			// Setup the mw.now stub.
			that.now = 0;

			this.sandbox.stub( mw, 'now', function () {
				return that.now;
			} );

			setupWait( this );
			setupEl( this );

			this.dispatch = this.sandbox.spy();

			// Sugar.
			this.fetch = function () {
				mw.popups.actions.fetch( that.gateway, that.el, that.now )( that.dispatch );
			};
		}
	} );

	QUnit.test( 'it should fetch data from the gateway immediately', function ( assert ) {
		this.fetch();

		assert.ok( this.gateway.getPageSummary.calledWith( 'Foo' ) );

		assert.ok(
			this.dispatch.calledWith( {
				type: 'FETCH_START',
				el: this.el,
				title: 'Foo'
			} ),
			'It dispatches the FETCH_START action immediately.'
		);
	} );

	QUnit.test( 'it should delay dispatching the FETCH_END action', function ( assert ) {
		var that = this,
			result = {};

		this.fetch();

		this.gatewayPromise.then( function () {
			assert.ok(
				mw.popups.wait.calledWith( 250 ),
				'FETCH_END is delayed by 250 (500 - 250) ms. ' +
				'If you\'ve changed FETCH_END_TARGET_DELAY, then have you spoken with #Design about changing this value?'
			);

			that.waitDeferred.resolve();

			assert.ok( that.dispatch.calledWith( {
				type: 'FETCH_END',
				el: that.el,
				result: result
			} ) );
		} );

		// The API request took 250 ms.
		this.now += 250;
		this.gatewayDeferred.resolve( result );
	} );

	QUnit.test(
		'it shouldn\'t delay dispatching the FETCH_END action if the API request is over the target',
		function ( assert ) {

			this.fetch();

			this.gatewayPromise.then( function () {
				assert.ok(
					mw.popups.wait.calledWith( 0 ),
					'FETCH_END isn\'t delayed.'
				);
			} );

			// The API request took 301 ms.
			this.now += 501;
			this.gatewayDeferred.resolve();
		}
	);

	QUnit.module( 'ext.popups/actions#abandon', {
		setup: function () {
			setupWait( this );
		}
	} );

	QUnit.test( 'it should dispatch start and end actions', function ( assert ) {
		var that = this,
			dispatch = that.sandbox.spy(),
			token = '0123456789',
			getState = function () {
				return {
					preview: {
						activeToken: token
					}
				};
			},
			done = assert.async();

		this.sandbox.stub( mw, 'now' ).returns( new Date() );

		mw.popups.actions.abandon( that.el )( dispatch, getState );

		assert.ok( dispatch.calledWith( {
			type: 'ABANDON_START',
			timestamp: mw.now(),
			token: token
		} ) );

		// ---

		assert.ok(
			mw.popups.wait.calledWith( 300 ),
			'Have you spoken with #Design about changing this value?'
		);

		that.waitPromise.then( function () {
			assert.ok(
				dispatch.calledWith( {
					type: 'ABANDON_END',
					token: token
				} ),
				'ABANDON_* share the same token.'
			);

			done();
		} );

		// After 300 ms...
		that.waitDeferred.resolve();
	} );

	QUnit.module( 'ext.popups/actions#saveSettings' );

	QUnit.test( 'it should dispatch an action with previous and current enabled state', function ( assert ) {
		var dispatch = this.sandbox.spy(),
			getState = this.sandbox.stub().returns( {
				preview: {
					enabled: false
				}
			} );

		mw.popups.actions.saveSettings( /* enabled = */ true )( dispatch, getState );

		assert.ok( getState.calledOnce, 'it should query the global state for the current state' );
		assert.ok( dispatch.calledWith( {
			type: 'SETTINGS_CHANGE',
			wasEnabled: false,
			enabled: true
		} ), 'it should dispatch the action with the previous and next enabled state' );
	} );
}( mediaWiki, jQuery ) );