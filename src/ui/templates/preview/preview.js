/**
 * @module preview
 */

import { renderPopup } from '../popup/popup';
import { escapeHTML } from '../templateUtil';

/**
 * @param {ext.popups.PagePreviewModel} model
 * @param {boolean} showTitle
 * @param {string} extractMsg
 * @param {string} linkMsg
 * @return {JQuery}
 */

let template = null

function getTemplate() {
	if (template) {
		return template;
	}

	template = document.createElement('template');

	template.innerHTML = `
		<div class='mw-ui-icon mw-ui-icon-element'></div>
		<strong class='mwe-popups-title'></strong>
		<a class='mwe-popups-extract'>
			<span class='mwe-popups-message'></span>
		</a>
		<footer>
			<a class='mwe-popups-read-link'></a>
		</footer>
	`

	return template;

}
export function renderPreview(
	model, showTitle, extractMsg, linkMsg
) {
	const title = escapeHTML( model.title ),
		type = escapeHTML( model.type );
	extractMsg = escapeHTML( extractMsg );
	linkMsg = escapeHTML( linkMsg );

	const preview = getTemplate().content.cloneNode( true );
	const titleElement = preview.querySelector('.mwe-popups-title');
	const linkElement = preview.querySelector('.mw-popups-read-link')
	preview.querySelector('.mw-ui-icon').classList.add(`mw-ui-icon-preview-${type}`);
	if (showTitle) {
		title.innerHTML = title;
	} else {
		titleElement.remove();
	}

	preview.querySelector('.mw-popups-extract').setAttribute('href', model.url);
	preview.querySelector('.mw-popups-message').innerHTML = extractMsg;	
	linkElement.innerHTML = linkMsg;
	linkElement.setAttribute('href', url);
	return renderPopup(model.type, preview);
}
