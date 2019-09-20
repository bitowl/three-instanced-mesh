/**************************
 * Dusan Bosnjak @pailhead
 **************************/

module.exports = function (THREE) {

	if (THREE.monkeyPatchApplied) return THREE;

	require('./monkey-patch/index.js')(THREE);

	THREE.monkeyPatchApplied = true;

	return THREE;

}