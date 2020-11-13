import { SIZES } from '../../src/ui/thumbnail';
import { createPreviewWithType, layoutPreview, getClasses } from '../../src/ui/renderer.js';
import scaleDownThumbnail from './scaleDownThumbnail';

const POINTER_SIZE = 8;

/**
 * Creates a static/stateless Popup and returns its HTML.
 *
 * @param {ext.popups.PreviewModel} model
 * @param {object} layout
 *
 * @return {string} HTML
 */
function createPopup( model, layout ) {
	if ( model.thumbnail ) {
		model.thumbnail = scaleDownThumbnail( model.thumbnail );
	}

	const preview = createPreviewWithType( model );
	layoutPreview(
		preview,
		{...layout, dir: model.languageDirection },
		getClasses( preview, {
			flippedX: layout.flippedX,
			flippedY: layout.flippedY
		} )
	);
	return preview.el[ 0 ].outerHTML;
}

export default createPopup;
