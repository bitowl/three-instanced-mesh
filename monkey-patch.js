/**************************
 * Dusan Bosnjak @pailhead
 **************************/

module.exports = function ( THREE ){

	if( /InstancedMesh/.test( THREE.REVISION ) ) return THREE;

	require('./monkey-patch/index.js')( THREE );

	return THREE;

}
