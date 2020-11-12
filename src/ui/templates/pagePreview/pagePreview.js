/**
 * @module pagePreview
 */

import { renderPopup } from '../popup/popup';
import { createTemplate } from '../templateUtil';
import templateHTML from '!raw-loader!./pagePreview.html'
const cloneFragment = createTemplate(templateHTML);
const defaultExtractWidth = 215;

let pagePreviewTemplate = null
/**
 * @param {ext.popups.PagePreviewModel} model
 * @param {ext.popups.Thumbnail|null} thumbnail
 * @return {JQuery}
 */

export function renderPagePreview(
	model, thumbnail
) {
	const preview = cloneFragment();
	const discreet = preview.querySelector('.mwe-popups-discreet');
	const extract = preview.querySelector('.mwe-popups-extract');

	if (thumbnail) {
		discreet.appendChild(thumbnail.el[0]);
		discreet.setAttribute('href', model.url);
	} else {
		discreet.remove();
	}

	extract.setAttribute('href', model.url);
	extract.setAttribute('lang', model.languageCode);
	extract.setAttribute('dir', model.languageDirection);

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
