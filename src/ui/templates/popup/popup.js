/**
 * @module popup
 */

import { createTemplate } from '../templateUtil';
import templateHTML from '!raw-loader!./popup.html'

const cloneFragment = createTemplate(templateHTML);

/**
 * @param {ext.popups.previewTypes} type
 * @param {Element} innerElement the inner element.
 * @return {JQuery}
 */

let popup = null
export function renderPopup( type, innerElement ) {
	popup = popup || cloneFragment().querySelector('.mwe-popups');
	popup.classList.add(`mwe-popups-type-${type}`);
	const container = popup.querySelector('.mwe-popups-container');
	if (innerElement !== container.firstChild) {
		while (container.firstChild)
			container.firstChild.remove();
		container.appendChild(innerElement);
	}
	return $(popup);
}
