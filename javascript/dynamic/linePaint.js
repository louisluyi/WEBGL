/**
 * Created by louis on 2015/3/18.
 */

define(function(require,module){
    function linePaint(webglSample){
        var geometry = new THREE.Geometry();
        var material = new THREE.LineBasicMaterial({
            vertexColors: THREE.VertexColors,
            Opacity : 0.5,
            linewidth : 10,
            Color : 0xffffff
        });
        var color1 = new THREE.Color( 0x00ff00 ), color2 = new THREE.Color( 0xFF0000 );

        // 线的材质可以由2点的颜色决定
        var p1 = new THREE.Vector3( -100, 0, 100 );
        var p2 = new THREE.Vector3(  100, 0, -100 );
        geometry.vertices.push(p1);
        geometry.vertices.push(p2);
        geometry.colors.push( color1, color2 );

        var line = new THREE.Line( geometry, material, THREE.LinePieces );
        webglSample.scene.add(line);
    }
    module.linePaint = linePaint;
})