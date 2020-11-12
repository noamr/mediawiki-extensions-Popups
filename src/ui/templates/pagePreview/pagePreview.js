/**
 * @module pagePreview
 */

import { renderPopup } from '../popup/popup';
import { escapeHTML } from '../templateUtil';

const defaultExtractWidth = 215;

let pagePreviewTemplate = null
/**
 * @param {ext.popups.PagePreviewModel} model
 * @param {ext.popups.Thumbnail|null} thumbnail
 * @return {JQuery}
 */

function getPagePreviewTemplate() {
	if (pagePreviewTemplate) {
		return pagePreviewTemplate;	
	}

	pagePreviewTemplate = document.createElement('template');
	pagePreviewTemplate.innerHTML = `
		<a class="mwe-popups-discreet">
		</a>
		<a class="mwe-popups-extract">
		</a>
		<footer>
			<a class='mwe-popups-settings-icon'>
				<span class="mw-ui-icon mw-ui-icon-element mw-ui-icon-popups-settings"></span>
			</a>
		</footer>
	`

	return pagePreviewTemplate
}

export function renderPagePreview(
	model, thumbnail
) {
	const url = escapeHTML( model.url ),
		languageCode = escapeHTML( model.languageCode ),
		languageDirection = escapeHTML( model.languageDirection );

	const preview = getPagePreviewTemplate().content.cloneNode( true );
	const discreet = preview.querySelector('.mwe-popups-discreet');
	const extract = preview.querySelector('.mwe-popups-extract');

	if (thumbnail) {
		discreet.appendChild(thumbnail.el[0]);
		discreet.setAttribute('href', url);
	} else {
		discreet.remove();
	}

	extract.setAttribute('href', url);
	extract.setAttribute('lang', languageCode);
	extract.setAttribute('dir', languageDirection);

	if ( model.extract ) {
		const extractWidth = getExtractWidth( thumbnail );
		preview.querySelector('footer').style.setProperty('--extract-width', extractWidth);
		model.extract.forEach(e => extract.appendChild(e));
	}

	const $el = renderPopup( model.type, preview);
	return $el;
}

export { defaultExtractWidth }; // for testing

/**
 * Calculates width of extract based on the associated thumbnail
 *
 * @param {ext.popups.Thumbnail|null} thumbnail model
 * @return {string} representing the css width attribute to be
 *   used for the extract
 */
export function getExtractWidth( thumbnail ) {
	return thumbnail && thumbnail.isNarrow ? `${defaultExtractWidth + thumbnail.offset}px` : '';
}
