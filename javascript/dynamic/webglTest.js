/**
 * Created by louis on 2015/3/9.
 */


/**
 * this constructor must be provided with canvas and its height and width
 * @param canvas    the canvas that will be rendered
 * @param width     the width of the canvas
 * @param height    the height of the canvas
 */
var webglProgram=function(canvas,width,height){
    this.initRenderer(canvas,width,height);
    this.initCamera(width,height);
    this.initScene();
}
webglProgram.prototype.initRenderer=function(canvas,width,height){
    this.renderer = new THREE.WebGLRenderer({
        canvas:canvas,
        antialias:true
    });
    this.renderer.setSize(width,height);
    this.renderer.setClearColor(0x000000,1);
}
webglProgram.prototype.initCamera=function(width,height){
    this.camera = new THREE.PerspectiveCamera(45, width/height, 1, 10000);
    this.camera.position.x = 0;
    this.camera.position.y = 1000;
    this.camera.position.z = 0;
    this.camera.up.x = 0;
    this.camera.up.y = 0;
    this.camera.up.z = 1;
    this.camera.lookAt({
        x : 0,
        y : 0,
        z : 0
    });
}
webglProgram.prototype.initScene = function(){
    this.scene = new THREE.Scene();
}
webglProgram.prototype.addObject = function(obj){
    this.scene.add(obj);
}
webglProgram.prototype.beginRendering = function(){
    this.renderer.clear();
    this.renderer.render(this.scene, this.camera);
}


function createLight() {
    var light;
    light = new THREE.DirectionalLight(0xFF0000, 1.0);
    console.log(light);
    light.position.set(200, 100, 200);
    return light;
}
function createObject() {
    var geometry = new THREE.Geometry();
    var material = new THREE.LineBasicMaterial( { vertexColors: THREE.VertexColors } );
    var color1 = new THREE.Color( 0x444444 ), color2 = new THREE.Color( 0xFF0000 );

    // 线的材质可以由2点的颜色决定
    var p1 = new THREE.Vector3( -100, 0, 100 );
    var p2 = new THREE.Vector3(  100, 0, -100 );
    geometry.vertices.push(p1);
    geometry.vertices.push(p2);
    geometry.colors.push( color1, color2 );

    var line = new THREE.Line( geometry, material, THREE.LinePieces );
    return line;
}

function threeStart() {
    var $webglCanvas = $('#webgl_canvas');
    var webglSample = new webglProgram($webglCanvas[0],$webglCanvas.width(),$webglCanvas.height());
    webglSample.addObject(createLight());
    webglSample.addObject(createObject());
    webglSample.beginRendering();
}

$(function(){
    threeStart();
});