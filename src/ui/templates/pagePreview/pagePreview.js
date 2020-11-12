/**
 * @module pagePreview
 */

import { renderPopup } from '../popup/popup';
import { createTemplate } from '../templateUtil';
import templateHTML from '!raw-loader!./pagePreview.html'
const cloneFragment = createTemplate(templateHTML);

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
		if (thumbnail.isNarrow) {
			preview.classList.add('mwe-popups-narrow-thumbnail');
		}
	} else {
		discreet.remove();
	}

	extract.setAttribute('href', model.url);
	extract.setAttribute('lang', model.languageCode);
	extract.setAttribute('dir', model.languageDirection);

	const footer = preview.querySelector('footer');

	if ( model.extract ) {
		if (thumbnail && thumbnail.narrow) {
			footer.classList.add('mwe-popups-narrow-thumbnail');
			footer.style.setProperty('--thumbnail-offset', thumbnail.offset);
		}
		model.extract.forEach(e => extract.appendChild(e));
	}

	const $el = renderPopup( model.type, preview);
	return $el;
}
