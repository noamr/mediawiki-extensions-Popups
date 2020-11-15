/**
 * @module popups
 */

import * as Redux from 'redux';
import * as ReduxThunk from 'redux-thunk';

import createPagePreviewGateway from './gateway/page';
import createReferenceGateway from './gateway/reference';
import createUserSettings from './userSettings';
import createPreviewBehavior from './previewBehavior';
import createSettingsDialogRenderer from './ui/settingsDialogRenderer';
import registerChangeListener from './changeListener';
import createIsEnabled from './isEnabled';
import { fromElement as titleFromElement } from './title';
import { init as rendererInit } from './ui/renderer';
import createExperiments from './experiments';
import { isEnabled as isStatsvEnabled } from './instrumentation/statsv';
import { isEnabled as isEventLoggingEnabled }
	from './instrumentation/eventLogging';
import changeListeners from './changeListeners';
import * as actions from './actions';
import reducers from './reducers';
import createMediaWikiPopupsObject from './integrations/mwpopups';
import getPageviewTracker, { getSendBeacon } from './getPageviewTracker';
import { previewTypes, getPreviewType } from './preview/model';

const EXCLUDED_LINK_SELECTORS = [
	'.extiw',
	'.image',
	'.new',
	'.internal',
	'.external',
	'.mw-cite-backlink a',
	'.oo-ui-buttonedElement-button',
	'.ve-ce-surface a', // T259889
	'.cancelLink a'
];

/**
 * @typedef {Function} EventTracker
 *
 * An analytics event tracker, i.e. `mw.track`.
 *
 * @param {string} topic
 * @param {Object} data
 *
 * @global
 */

/**
 * Gets the appropriate analytics event tracker for logging metrics to StatsD
 * via [the "StatsD timers and counters" analytics event protocol][0].
 *
 * If logging metrics to StatsD is enabled for the duration of the user's
 * session, then the appriopriate function is `mw.track`; otherwise it's
 * `() => {}`.
 *
 * [0]: https://github.com/wikimedia/mediawiki-extensions-WikimediaEvents/blob/29c864a0/modules/ext.wikimediaEvents.statsd.js
 *
 * @param {Object} user
 * @param {Object} config
 * @param {Experiments} experiments
 * @return {EventTracker}
 */
function getStatsvTracker( user, config, experiments ) {
	return isStatsvEnabled( user, config, experiments ) ? mw.track : () => {};
}

/**
 * Gets the appropriate analytics event tracker for logging EventLogging events
 * via [the "EventLogging subscriber" analytics event protocol][0].
 *
 * If logging EventLogging events is enabled for the duration of the user's
 * session, then the appriopriate function is `mw.track`; otherwise it's
 * `() => {}`.
 *
 * [0]: https://github.com/wikimedia/mediawiki-extensions-EventLogging/blob/d1409759/modules/ext.eventLogging.subscriber.js
 *
 * @param {Object} user
 * @param {Object} config
 * @param {Window} window
 * @return {EventTracker}
 */
function getEventLoggingTracker( user, config, window ) {
	return isEventLoggingEnabled(
		user,
		config,
		window
	) ? mw.track : () => {};
}

/**
 * Returns timestamp since the beginning of the current document's origin
 * as reported by `window.performance.now()`. See
 * https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp#The_time_origin
 * for a detailed explanation of the time origin.
 *
 * The value returned by this function is used for [the `timestamp` property
 * of the Schema:Popups events sent by the EventLogging
 * instrumentation](./src/changeListeners/eventLogging.js).
 *
 * @return {number|null}
 */
function getCurrentTimestamp() {
	if ( window.performance && window.performance.now ) {
		// return an integer; see T182000
		return Math.round( window.performance.now() );
	}
	return null;
}

/**
 * Subscribes the registered change listeners to the
 * [store](http://redux.js.org/docs/api/Store.html#store).
 *
 * @param {Redux.Store} store
 * @param {Object} registerActions
 * @param {UserSettings} userSettings
 * @param {Function} settingsDialog
 * @param {PreviewBehavior} previewBehavior
 * @param {EventTracker} statsvTracker
 * @param {EventTracker} eventLoggingTracker
 * @param {EventTracker} pageviewTracker
 * @param {Function} callbackCurrentTimestamp
 * @return {void}
 */
function registerChangeListeners(
	store, registerActions, userSettings, settingsDialog, previewBehavior,
	statsvTracker, eventLoggingTracker, pageviewTracker, callbackCurrentTimestamp
) {
	registerChangeListener( store, changeListeners.footerLink( actions ) );
	registerChangeListener( store, changeListeners.render( previewBehavior ) );
	registerChangeListener(
		store, changeListeners.statsv( registerActions, statsvTracker ) );
	registerChangeListener(
		store, changeListeners.syncUserSettings( userSettings ) );
	registerChangeListener(
		store, changeListeners.settings( registerActions, settingsDialog ) );
	registerChangeListener(
		store,
		changeListeners.eventLogging(
			registerActions, eventLoggingTracker, callbackCurrentTimestamp
		) );
	registerChangeListener( store,
		changeListeners.pageviews( registerActions, pageviewTracker )
	);
}

/*
 * Initialize the application by:
 * 1. Initializing side-effects and "services"
 * 2. Creating the state store
 * 3. Binding the actions to such store
 * 4. Registering change listeners
 * 5. Triggering the boot action to bootstrap the system
 * 6. When the page content is ready:
 *   - Initializing the renderer
 *   - Binding hover and click events to the eligible links to trigger actions
 */
( function init() {
	let compose = Redux.compose;
	const
		// So-called "services".
		generateToken = mw.user.generateRandomSessionId,
		pagePreviewGateway = createPagePreviewGateway( mw.config ),
		referenceGateway = createReferenceGateway(),
		userSettings = createUserSettings( mw.storage ),
		settingsDialog = createSettingsDialogRenderer(),
		experiments = createExperiments( mw.experiments ),
		statsvTracker = getStatsvTracker( mw.user, mw.config, experiments ),
		// Virtual pageviews are always tracked.
		pageviewTracker = getPageviewTracker( mw.config,
			mw.loader.using,
			() => mw.eventLog,
			getSendBeacon( window.navigator )
		),
		eventLoggingTracker = getEventLoggingTracker(
			mw.user,
			mw.config,
			window
		),
		isEnabled = createIsEnabled( mw.user, userSettings, mw.config );

	// If debug mode is enabled, then enable Redux DevTools.
	if ( mw.config.get( 'debug' ) === true ||
		/* global process */
		process.env.NODE_ENV !== 'production' ) {
		// eslint-disable-next-line no-underscore-dangle
		compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	}

	const store = Redux.createStore(
		Redux.combineReducers( reducers ),
		compose( Redux.applyMiddleware(
			ReduxThunk.default
		) )
	);
	const boundActions = Redux.bindActionCreators( actions, store.dispatch );
	const previewBehavior = createPreviewBehavior( mw.user, boundActions );

	registerChangeListeners(
		store, boundActions, userSettings, settingsDialog,
		previewBehavior, statsvTracker, eventLoggingTracker,
		pageviewTracker,
		getCurrentTimestamp
	);

	boundActions.boot(
		isEnabled,
		mw.user,
		userSettings,
		mw.config,
		window.location.href
	);

	/*
	 * Register external interface exposing popups internals so that other
	 * extensions can query it (T171287)
	 */
	mw.popups = createMediaWikiPopupsObject( store );

	const selectors = [];
	if ( mw.user.isAnon() || mw.user.options.get( 'popups' ) === '1' ) {
		selectors.push( `#mw-content-text a[href][title]:not(${excludedLinksSelector})` );
	}
	// TODO: Replace with mw.user.options.get( 'popupsreferencepreviews' ) === '1' when not in Beta
	// any more, and the temporary feature flag is not needed any more.
	if ( mw.config.get( 'wgPopupsReferencePreviews' ) &&
		// T243822: Temporarily disabled in the mobile skin
		mw.config.get( 'skin' ) !== 'minerva'
	) {
		selectors.push( '#mw-content-text .reference a[ href*="#" ]' );
	}
	if ( !selectors.length ) {
		mw.log.error( 'ext.popups should not even be loaded!' );
		return;
	}
	const validLinkSelector = selectors.join( ', ' );

	rendererInit();

	const eligibleElements = document.querySelectorAll( validLinkSelector );
	const excludedLinksSelector = EXCLUDED_LINK_SELECTORS.join( ', ' );

	const addPopupEventHandlers = target => {
		// Disable default browser tooltip
		let gateway
		let type
		const mwTitle = titleFromElement( target, mw.config );
		if ( !mwTitle )
			return;

		if ( !mwTitle ) {
			return;
		}

		target.removeAttribute('title');

		const showPopup = ({clientX, clientY, clientRects}) => {
			if (gateway === null) {
				return;
			}

			if (typeof gateway === 'undefined' ) {
				type = getPreviewType( target, mw.config, mwTitle );
				switch ( type ) {
					case previewTypes.TYPE_PAGE:
						gateway = pagePreviewGateway;
						break;
					case previewTypes.TYPE_REFERENCE:
						gateway = referenceGateway;
						break;
					default:
						gateway = null;
						return;
				}
			}

			const event = {clientX, clientY, clientRects, pageXOffset, pageYOffset, target};
			boundActions.linkDwell( mwTitle, target, event, gateway, generateToken, type );			
		};

		const hidePopup = () => {
			if ( mwTitle ) {
				boundActions.abandon();
			}
		};

		target.addEventListener('mouseover', event => {
			const {clientX, clientY} = event;
			const clientRects = target.getClientRects();
			showPopup({
				clientX, clientY, clientRects,
				pageXOffset, pageYOffset
			});
		});

		target.addEventListener( 'keyup', event => {
			const {target} = event;
			const clientRects = target.getClientRects();
			const [firstClientRect] = clientRects
			showPopup({
				clientX: firstClientRect.left + firstClientRect.width / 2,
				clientY: firstClientRect.top + firstClientRect.height / 2,
				clientRects: [firstClientRect],
				pageXOffset, pageYOffset
			});
		});

		target.addEventListener( 'blur', hidePopup );
		target.addEventListener( 'mouseout', hidePopup );
		target.addEventListener( 'click', event => {
			const mwTitle = titleFromElement( target, mw.config );
			if ( mwTitle ) {
				if ( previewTypes.TYPE_PAGE === getPreviewType( target, mw.config, mwTitle ) ) {
					boundActions.linkClick( target );
				}
			}
		} );
	}

	Array.from( eligibleElements )
		.filter( element => !element.matches(excludedLinksSelector) )
		.forEach( addPopupEventHandlers )
}() );

window.Redux = Redux;
window.ReduxThunk = ReduxThunk;
