/**
 * @module thumbnail
 */

import constants from '../constants';

export const SIZES = {
	portraitImage: {
		h: 250, // Exact height
		w: 203 // Max width
	},
	landscapeImage: {
		h: 200, // Max height
		w: 320 // Exact Width
	}
};

/**
 * @typedef {Object} ext.popups.Thumbnail
 * @property {JQuery} el
 * @property {boolean} isTall Whether or not the thumbnail is portrait
 * @property {number} width
 * @property {number} height
 * @property {boolean} isNarrow whether the thumbnail is portrait and also
 *  thinner than the default portrait thumbnail width
 *  (as defined in SIZES.portraitImage.w)
 * @property {number} offset in pixels between the thumbnail width and the
 *  standard portrait thumbnail width (as defined in SIZES.portraitImage.w)
 */

/**
 * Creates a thumbnail from the representation of a thumbnail returned by the
 * PageImages MediaWiki API query module.
 *
 * If there's no thumbnail, the thumbnail is too small, or the thumbnail's URL
 * contains characters that could be used to perform an
 * [XSS attack via CSS](https://www.owasp.org/index.php/Testing_for_CSS_Injection_(OTG-CLIENT-005)),
 * then `null` is returned.
 *
 * Extracted from `mw.popups.renderer.article.createThumbnail`.
 *
 * @param {Object} rawThumbnail
 * @return {ext.popups.Thumbnail|null}
 */
export function createThumbnail( rawThumbnail ) {
	const devicePixelRatio = constants.BRACKETED_DEVICE_PIXEL_RATIO;

	if ( !rawThumbnail ) {
		return null;
	}

	const tall = rawThumbnail.width < rawThumbnail.height;
	const thumbWidth = rawThumbnail.width / devicePixelRatio;
	const thumbHeight = rawThumbnail.height / devicePixelRatio;

	if (
		// Image too small for landscape display
		( !tall && thumbWidth < SIZES.landscapeImage.w ) ||
		// Image too small for portrait display
		( tall && thumbHeight < SIZES.portraitImage.h ) ||
		// These characters in URL that could inject CSS and thus JS
		(
			rawThumbnail.source.indexOf( '\\' ) > -1 ||
			rawThumbnail.source.indexOf( '\'' ) > -1 ||
			rawThumbnail.source.indexOf( '"' ) > -1
		)
	) {
		return null;
	}

	let x, y, width, height;
	if ( tall ) {
		x = ( thumbWidth > SIZES.portraitImage.w ) ?
			( ( thumbWidth - SIZES.portraitImage.w ) / -2 ) :
			( SIZES.portraitImage.w - thumbWidth );
		y = ( thumbHeight > SIZES.portraitImage.h ) ?
			( ( thumbHeight - SIZES.portraitImage.h ) / -2 ) : 0;
		width = SIZES.portraitImage.w;
		height = SIZES.portraitImage.h;

		// Special handling for thin tall images
		// https://phabricator.wikimedia.org/T192928#4312088
		if ( thumbWidth < width ) {
			x = 0;
			width = thumbWidth;
		}
	} else {
		x = 0;
		y = ( thumbHeight > SIZES.landscapeImage.h ) ?
			( ( thumbHeight - SIZES.landscapeImage.h ) / -2 ) : 0;
		width = SIZES.landscapeImage.w;
		height = ( thumbHeight > SIZES.landscapeImage.h ) ?
			SIZES.landscapeImage.h : thumbHeight;
	}

	const isNarrow = tall && thumbWidth < SIZES.portraitImage.w;
	const el = document.createElement('img');
	el.className = 'mwe-popups-thumbnail';
	el.src = rawThumbnail.source;
	return {el: $(el), isTall: tall, isNarrow, width: thumbWidth, height: thumbHeight};
}
