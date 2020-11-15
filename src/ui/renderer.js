/**
 * @module renderer
 */

import wait from '../wait';
import { SIZES, createThumbnail } from './thumbnail';
import { previewTypes } from '../preview/model';
import { renderPreview } from './templates/preview/preview';
import { renderReferencePreview } from './templates/referencePreview/referencePreview';
import { renderPagePreview } from './templates/pagePreview/pagePreview';

const $window = $( window );


/**
 * Initializes the renderer.
 *
 * @return {void}
 */
export function init() {
}

/**
 * The information passed from a key/mouse event to the renderer.
 *
 * @typedef {Object} ext.popups.PopupTriggerEvent
 * @property {'key'|'mouse'} eventType
 * @property {Element} target
 * @property {DOMRect} clientRect
 * @property {number} clientX
 * @property {number} clientY
 * @property {number} pageXOffset
 * @property {number} pageYOffset
 * @property {number} innerWidth
 * @property {number} innerHeight
 */


/**
 * The model of how a view is rendered, which is constructed from a response
 * from the gateway.
 *
 * TODO: Rename `isTall` to `isPortrait`.
 *
 * @typedef {Object} ext.popups.Preview
 * @property {JQuery} el
 * @property {boolean} hasThumbnail
 * @property {Object} thumbnail
 * @property {boolean} isTall Sugar around
 *  `preview.hasThumbnail && thumbnail.isTall`
 */

/**
 * Renders a preview given data from the {@link gateway Gateway}.
 * The preview is rendered and added to the DOM but will remain hidden until
 * the `show` method is called.
 *
 * Previews are rendered at:
 *
 * # The position of the mouse when the user dwells on the link with their
 *   mouse.
 * # The centermost point of the link when the user dwells on the link with
 *   their keyboard or other assistive device.
 *
 * Since the content of the preview doesn't change but its position might, we
 * distinguish between "rendering" - generating HTML from a MediaWiki API
 * response - and "showing/hiding" - positioning the layout and changing its
 * orientation, if necessary.
 *
 * @param {ext.popups.PreviewModel} model
 * @return {ext.popups.Preview}
 */
export function render( model ) {
	const preview = createPreviewWithType( model );

	return {
		/**
		 * Shows the preview given an event representing the user's interaction
		 * with the active link, e.g. an instance of
		 * [MouseEvent](https://developer.mozilla.org/en/docs/Web/API/MouseEvent).
		 *
		 * See `show` for more detail.
		 *
		 * @param {ext.popups.PopupTriggerEvent} event
		 * @param {Object} boundActions The
		 *  [bound action creators](http://redux.js.org/docs/api/bindActionCreators.html)
		 *  that were (likely) created in [boot.js](./boot.js).
		 * @param {string} token The unique token representing the link interaction
		 *  that resulted in showing the preview
		 * @return {JQuery.Promise<void>}
		 */
		show( event, boundActions, token ) {
			return show(
				preview, event, $( event.target ), boundActions, token,
				document.body, document.documentElement.getAttribute( 'dir' )
			);
		},

		/**
		 * Hides the preview.
		 *
		 * See `hide` for more detail.
		 *
		 * @return {JQuery.Promise<void>}
		 */
		hide() {
			return hide( preview );
		}
	};
}
/**
 * Creates an instance of a Preview based on
 * the type property of the PreviewModel
 *
 * @param {ext.popups.PreviewModel} model
 * @return {ext.popups.Preview}
 */
export function createPreviewWithType( model ) {
	switch ( model.type ) {
		case previewTypes.TYPE_PAGE:
			return createPagePreview( model );
		case previewTypes.TYPE_DISAMBIGUATION:
			return createDisambiguationPreview( model );
		case previewTypes.TYPE_REFERENCE:
			return createReferencePreview( model );
		default:
			return createEmptyPreview( model );
	}
}

/**
 * Creates an instance of the DTO backing a preview.
 *
 * @param {ext.popups.PagePreviewModel} model
 * @return {ext.popups.Preview}
 */
function createPagePreview( model ) {
	const thumbnail = createThumbnail( model.thumbnail ),
		hasThumbnail = thumbnail !== null;

	return {
		el: renderPagePreview( model, thumbnail ),
		hasThumbnail,
		thumbnail,
		isTall: hasThumbnail && thumbnail.isTall
	};
}

/**
 * Creates an instance of the DTO backing a preview. In this case the DTO
 * represents a generic preview, which covers the following scenarios:
 *
 * * The page doesn't exist, i.e. the user hovered over a redlink or a
 *   redirect to a page that doesn't exist.
 * * The page doesn't have a viable extract.
 *
 * @param {ext.popups.PagePreviewModel} model
 * @return {ext.popups.Preview}
 */
function createEmptyPreview( model ) {
	const showTitle = false,
		extractMsg = mw.msg( 'popups-preview-no-preview' ),
		linkMsg = mw.msg( 'popups-preview-footer-read' );

	return {
		el: renderPreview( model, showTitle, extractMsg, linkMsg ),
		hasThumbnail: false,
		isTall: false
	};
}

/**
 * Creates an instance of the disambiguation preview.
 *
 * @param {ext.popups.PagePreviewModel} model
 * @return {ext.popups.Preview}
 */
function createDisambiguationPreview( model ) {
	const showTitle = true,
		extractMsg = mw.msg( 'popups-preview-disambiguation' ),
		linkMsg = mw.msg( 'popups-preview-disambiguation-link' );

	return {
		el: renderPreview( model, showTitle, extractMsg, linkMsg ),
		hasThumbnail: false,
		isTall: false
	};
}

/**
 * @param {ext.popups.ReferencePreviewModel} model
 * @return {ext.popups.Preview}
 */
function createReferencePreview( model ) {
	return {
		el: renderReferencePreview( model ),
		hasThumbnail: false,
		isTall: false
	};
}

/**
 * Shows the preview.
 *
 * Extracted from `mw.popups.render.openPopup`.
 *
 * TODO: From the perspective of the client, there's no need to distinguish
 * between rendering and showing a preview. Merge #render and Preview#show.
 *
 * @param {ext.popups.Preview} preview
 * @param {ext.popups.PopupTriggerEvent} event
 * @param {JQuery} $link event target
 * @param {ext.popups.PreviewBehavior} behavior
 * @param {string} token
 * @param {Object} container DOM object to which pointer masks are appended
 * @param {string} dir 'ltr' if left-to-right, 'rtl' if right-to-left.
 * @return {JQuery.Promise<void>} A promise that resolves when the promise has
 *                                faded in.
 */
export function show(
	preview, event, $link, behavior, token, container, dir
) {
	const flippedX = event.clientX > event.innerWidth / 2;
	const flippedY = event.clientY > event.innerHeight / 2;
	const offsetCorrection = event.eventType === 'mouse' ? 18 : 0;

	const layout = {
		top: event.clientRect.top + event.pageYOffset,
		bottom: event.clientRect.bottom + event.pageYOffset,
		pageX: event.clientX + event.pageXOffset + (flippedX ? offsetCorrection : -offsetCorrection),
		flippedX: dir === 'rtl' ? !flippedX : flippedX,
		dir
	};

	const previewElement = preview.el[0]
	const {isTall, hasThumbnail, thumbnail} = preview;
	const {style, dataset} = previewElement;
	style.setProperty('--link-top', `${Math.round(layout.top)}px`);
	style.setProperty('--link-bottom', `${Math.round(layout.bottom)}px`);
	style.setProperty('--offset-x', `${layout.pageX}px`);
	dataset.orientation = preview.isTall ? 'landscape' : 'portrait';
	dataset.placement = flippedY ? 'above' : 'below';
	dataset.alignment = layout.flippedX ? 'left' : 'right';

	container.appendChild(previewElement);

	// Trigger fading effect for reference previews after the popup has been rendered
	if ( previewElement.classList.contains( 'mwe-popups-type-reference' ) ) {
		$(previewElement.querySelector('.mwe-popups-scroll')).trigger( 'scroll' );
	}
	
	previewElement.addEventListener('transitionend', () => {
		bindBehavior(previewElement, behavior);
	}, {once: true});

	setTimeout(() => {
		previewElement.removeAttribute('aria-hidden');
	});
}

/**
 * Binds the behavior to the interactive elements of the preview.
 *
 * @param {HTMLElement} element
 * @param {ext.popups.PreviewBehavior} behavior
 * @return {void}
 */
export function bindBehavior( element, behavior ) {
	element.addEventListener('mouseenter', behavior.previewDwell);
	element.addEventListener('mouseleave', behavior.previewAbandon);
	element.addEventListener('click', behavior.click);
	const settingsIcon = element.querySelector('.mwe-popups-settings-icon');
	settingsIcon.setAttribute('href', behavior.settingsUrl);
	settingsIcon.addEventListener('click', event => {
		event.stopPropagation();
		behavior.showSettings( event );
	});
}

/**
 * Extracted from `mw.popups.render.closePopup`.
 *
 * @param {ext.popups.Preview} preview
 * @return {JQuery.Promise<void>} A promise that resolves when the preview has
 *                                faded out.
 */
export function hide( {el} ) {
	const [element] = el;
	return new Promise(resolve => {
		element.setAttribute('aria-hidden', 'aria-hidden');
		element.addEventListener('transitionend', () => {
//			element.remove();
			resolve();
		}, {once: true});
	});
}
