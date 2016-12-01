( function ( mw ) {

	QUnit.module( 'ext.popups/counts' );

	QUnit.test( '#getEditCountBucket', function ( assert ) {
		var i, bucket, count,
			cases = [
				[ 0, '0 edits' ],
				[ 1, '1-4 edits' ],
				[ 2, '1-4 edits' ],
				[ 4, '1-4 edits' ],
				[ 5, '5-99 edits' ],
				[ 25, '5-99 edits' ],
				[ 50, '5-99 edits' ],
				[ 99, '5-99 edits' ],
				[ 100, '100-999 edits' ],
				[ 101, '100-999 edits' ],
				[ 500, '100-999 edits' ],
				[ 999, '100-999 edits' ],
				[ 1000, '1000+ edits' ],
				[ 1500, '1000+ edits' ]
			];

		assert.expect( cases.length );

		for ( i = 0; i < cases.length; i++ ) {
			count = cases[ i ][ 0 ];
			bucket = mw.popups.counts.getEditCountBucket( count );
			assert.equal(
				bucket,
				cases[ i ][ 1 ],
				'Edit count bucket is "' + bucket + '" when edit count is ' + count + '.'
			);
		}
	} );

}( mediaWiki ) );
