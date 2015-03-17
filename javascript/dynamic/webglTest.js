/**
 * Created by louis on 2015/3/9.
 */


define(function (require, module, exports) {

    /**
     * this constructor must be provided with canvas and its height and width
     * @param canvas    the canvas that will be rendered
     * @param width     the width of the canvas
     * @param height    the height of the canvas
     */
    var webglProgram = function (canvas, width, height) {
        this.initRenderer(canvas, width, height);
        this.initCamera(width, height);
        this.initScene();
        this.initLight();
    }
    webglProgram.prototype.initRenderer = function (canvas, width, height) {
        this.renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true
        });
        this.renderer.setSize(width, height);
        this.renderer.setClearColor(0xffffff, 1);
    }
    webglProgram.prototype.initCamera = function (width, height) {
        this.camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
        this.camera.position.x = 0;
        this.camera.position.y = 1000;
        this.camera.position.z = 0;
        this.camera.up.x = 0;
        this.camera.up.y = 0;
        this.camera.up.z = 1;
        this.camera.lookAt({
            x: 0,
            y: 0,
            z: 0
        });
    }
    webglProgram.prototype.initScene = function () {
        this.scene = new THREE.Scene();
    }
    webglProgram.prototype.addObject = function (obj) {
        this.scene.add(obj);
    }
    webglProgram.prototype.beginRendering = function () {
        this.renderer.clear();
        this.renderer.render(this.scene, this.camera);
    }
    webglProgram.prototype.initLight = function () {
        var light;
        light = new THREE.DirectionalLight(0xffff00, 1.0);
        light.position.set(200, 200, 200);
        this.scene.add(light);
    }

    module.webglProgram = webglProgram;
});