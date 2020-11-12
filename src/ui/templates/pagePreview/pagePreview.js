/**
 * @module pagePreview
 */

import { renderPopup } from '../popup/popup';
import { escapeHTML } from '../templateUtil';

const defaultExtractWidth = 215;

/**
 * @param {ext.popups.PagePreviewModel} model
 * @param {ext.popups.Thumbnail|null} thumbnail
 * @return {JQuery}
 */

export function renderPagePreview(
	model, thumbnail
) {
	const url = escapeHTML( model.url ),
		languageCode = escapeHTML( model.languageCode ),
		languageDirection = escapeHTML( model.languageDirection );

	const $el = renderPopup( model.type,
		`
			${thumbnail ? `<a href='${url}' class='mwe-popups-discreet'></a>` : ''}
			<a dir='${languageDirection}' lang='${languageCode}' class='mwe-popups-extract' href='${url}'></a>
			<footer>
				<a class='mwe-popups-settings-icon'>
					<span class="mw-ui-icon mw-ui-icon-element mw-ui-icon-small mw-ui-icon-settings"></span>
				</a>
			</footer>
		`
	);

	const [root] = $el

	if ( thumbnail ) {
		root.querySelector('.mwe-popups-discreet').appendChild(thumbnail.el[0]);
	}

	if ( model.extract ) {
		const extractWidth = getExtractWidth( thumbnail );
		root.style.setProperty('--extract-width', extractWidth)
		root.querySelector('.mwe-popups-extract').appendChild(model.extract[0])
	}

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
