( function ( mw, $ ) {

	var createPreviewBehavior = mw.popups.createPreviewBehavior;

	QUnit.module( 'ext.popups.preview.settingsBehavior', {
		setup: function () {
			this.config = new mw.Map();
		}
	} );

	QUnit.test( 'it should set the settingsUrl on wgPopupsBetaFeature', function ( assert ) {
		var that = this,
			user = mw.popups.tests.stubs.createStubUser( /* isAnon = */ false ),
			actions = {},
			cases;

		cases = [
			[ true, 'Special:Preferences#mw-prefsection-betafeatures' ],
			[ false, 'Special:Preferences#mw-prefsection-rendering' ]
		];

		$.each( cases, function ( i, testCase ) {
			var behavior;

			that.config.set( 'wgPopupsBetaFeature', testCase[ 0 ] );

			behavior = createPreviewBehavior( that.config, user, actions );

			assert.deepEqual(
				behavior.settingsUrl,
				mw.Title.newFromText( testCase[ 1 ] ).getUrl()
			);
		} );
	} );

	QUnit.test( 'it shouldn\'t set the settingsUrl if the user is logged out', function ( assert ) {
		var user = mw.popups.tests.stubs.createStubUser( /* isAnon = */ true ),
			actions = {},
			behavior = createPreviewBehavior( this.config, user, actions );

		assert.strictEqual( behavior.settingsUrl, undefined );
	} );

	QUnit.test( 'it shouldn\'t set a showSettings handler if the user is logged in', function ( assert ) {
		var user = mw.popups.tests.stubs.createStubUser( /* isAnon = */ false ),
			actions = {},
			behavior = createPreviewBehavior( this.config, user, actions );

		assert.strictEqual( behavior.showSettings, $.noop );
	} );

	QUnit.test( 'it should set a showSettings handler if the user is logged out', function ( assert ) {
		var user = mw.popups.tests.stubs.createStubUser( /* isAnon = */ true ),
			event = {
				preventDefault: this.sandbox.spy()
			},
			actions = {
				showSettings: this.sandbox.spy()
			},
			behavior = createPreviewBehavior( this.config, user, actions );

		behavior.showSettings( event );

		assert.ok(
			event.preventDefault.called,
			'It should prevent the default action of the event.'
		);

		assert.ok(
			actions.showSettings.called,
			'It should dispatch the SETTINGS_SHOW action.'
		);
	} );

	QUnit.test( 'it should mix in default actions', function ( assert ) {
		var user = mw.popups.tests.stubs.createStubUser( /* isAnon = */ true ),
			actions = {},
			behavior;

		actions.previewDwell = function () {};
		actions.abandon = function () {};
		actions.previewShow = function () {};

		behavior = createPreviewBehavior( this.config, user, actions );

		assert.strictEqual( behavior.previewDwell, actions.previewDwell );
		assert.strictEqual( behavior.previewAbandon, actions.abandon );
		assert.strictEqual( behavior.previewShow, actions.previewShow );
	} );

}( mediaWiki, jQuery ) );