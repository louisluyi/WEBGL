/**
 * Created by louis on 2015/3/15.
 */

define(function(require,module){
    function drawGrid(webglSample) {
        var geometry = new THREE.Geometry();
        var material = new THREE.LineBasicMaterial({
            color : 0x000000,
            opacity : 0.2,
            linewidth : 20
        });
        var line;
        /*var pro = Object.getOwnPropertyDescriptor(material,'opacity');
        console.log(material);
        console.log(pro);*/
        geometry.vertices.push( new THREE.Vector3( - 500, 0, 0 ) );
        geometry.vertices.push( new THREE.Vector3( 500, 0, 0 ) );

        for ( var i = 0; i <= 20; i ++ ) {
            material.setValues({
                opacity : 0.5,
                linewidth : 10
            });
            line = new THREE.Line( geometry, material);
            line.position.z = ( i * 50 ) - 500;
            webglSample.scene.add( line );

            line = new THREE.Line( geometry, material);
            line.position.x = ( i * 50 ) - 500;
            line.rotation.y = 90 * Math.PI / 180;
            webglSample.scene.add( line );

        }
    }
    module.drawGrid = drawGrid;
});