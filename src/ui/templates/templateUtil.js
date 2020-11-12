/**
 * @module templateUtil
 */

/**
 * @param {string} str
 * @return {string} The string with any HTML entities escaped.
 */
export function escapeHTML( str ) {
	return mw.html.escape( str );
}

/**
 * @param {string} html the html of the template
 * @return {DocumentFragment} A cloned fragment.
 */
export function createTemplate( html ) {
	let template = null

	const getTemplate = () => {
		if (!template) {
			template = document.createElement('template');
			template.innerHTML = html;
		}

		return template;
	}

	return () => getTemplate().content.cloneNode(true);
}