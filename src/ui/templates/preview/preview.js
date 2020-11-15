/**
 * @module preview
 */

import { renderPopup } from '../popup/popup';
import { escapeHTML, createTemplate } from '../templateUtil';
import templateHTML from '!raw-loader!./preview.html'

const cloneFragment = createTemplate(templateHTML);

/**
 * @param {ext.popups.PagePreviewModel} model
 * @param {boolean} showTitle
 * @param {string} extractMsg
 * @param {string} linkMsg
 * @return {JQuery}
 */


export function renderPreview(
	model, showTitle, extractMsg, linkMsg
) {
	const title = escapeHTML( model.title );
	extractMsg = escapeHTML( extractMsg );
	linkMsg = escapeHTML( linkMsg );
	const preview = cloneFragment();
	const titleElement = preview.querySelector('.mwe-popups-title');
	const linkElement = preview.querySelector('.mwe-popups-read-link')
	preview.querySelector('.mw-ui-icon').classList.add(`mw-ui-icon-preview-${model.type}`);
	titleElement.innerHTML = showTitle ? title : '';
	preview.querySelector('.mwe-popups-extract').setAttribute('href', model.url);
	preview.querySelector('.mwe-popups-message').innerHTML = extractMsg;	
	linkElement.innerHTML = linkMsg;
	linkElement.setAttribute('href', model.url);
	return renderPopup(model.type, preview);
}
