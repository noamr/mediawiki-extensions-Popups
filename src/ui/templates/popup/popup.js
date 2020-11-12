/**
 * @module popup
 */

import { escapeHTML } from '../templateUtil';

/**
 * @param {ext.popups.previewTypes} type
 * @param {Element} innerElement the inner element.
 * @return {JQuery}
 */

let template = null

function getPopupTemplate() {
	if (template) {
		return template;
	}

	template = document.createElement('template');
	template.innerHTML = `
	<div class='mwe-popups' aria-hidden>
		<div class='mwe-popups-container'></div>
	</div>`;

	return template;
}

export function renderPopup( type, innerElement ) {
	type = escapeHTML( type );
	const popup = getPopupTemplate().content.cloneNode(true).querySelector('.mwe-popups');
	popup.classList.add(`mwe-popups-type-${type}`);
	popup.querySelector('.mwe-popups-container').appendChild(innerElement);
	return $(popup);
}
