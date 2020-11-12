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

export function renderPopup( type, innerElement ) {
	const popup = cloneFragment().querySelector('.mwe-popups');
	popup.classList.add(`mwe-popups-type-${type}`);
	popup.querySelector('.mwe-popups-container').appendChild(innerElement);
	return $(popup);
}
