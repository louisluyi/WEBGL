/**
 * Created by louis on 2015/3/15.
 */

define(function(require,module){
    function drawGrid(webglSample) {
        var geometry = new THREE.Geometry();
        var line;
        geometry.vertices.push( new THREE.Vector3( - 500, 0, 0 ) );
        geometry.vertices.push( new THREE.Vector3( 500, 0, 0 ) );

        for ( var i = 0; i <= 20; i ++ ) {

            line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2 } ) );
            line.position.z = ( i * 50 ) - 500;
            webglSample.scene.add( line );

            line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2 } ) );
            line.position.x = ( i * 50 ) - 500;
            line.rotation.y = 90 * Math.PI / 180;
            webglSample.scene.add( line );

        }
    }
    module.drawGrid = drawGrid;
});