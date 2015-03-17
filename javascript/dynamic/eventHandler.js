/**
 * Created by louis on 2015/3/15.
 */

define(function(require,module){
    //依赖模块
    var webglTest = require('dynamic/webglTest');//主模块
    var gridPaint = require('dynamic/gridPaint');//根据需求加载

    var webglSample = null;//渲染类
    var $webglCanvas = $('#webgl_canvas');//要渲染的canvas
    var $cameraPostionX = $('#camera-position-x');
    var $cameraPostionY = $('#camera-position-y');
    var $cameraPostionZ = $('#camera-position-z');
    //var $cameraPostion = $('input[name=camera-position]');

    var EventHandler = {
        init : function(){
            //要保证其他必需的模块先加载才可以进行
            if(webglTest && gridPaint){
                webglSample = new webglTest.webglProgram($webglCanvas[0],$webglCanvas.width(),$webglCanvas.height());
                if(webglSample){
                    gridPaint.drawGrid(webglSample);
                    webglSample.beginRendering();
                    EventHandler.cameraPositionChangeEvent();
                }
            }
        },
        cameraPositionChangeEvent : function(){
            var position_x = parseFloat($cameraPostionX.val());
            var position_y = parseFloat($cameraPostionY.val());
            var position_z = parseFloat($cameraPostionZ.val());
            var temp;
            $cameraPostionX.bind('change',function(){
                temp = parseFloat($cameraPostionX.val());
                if(!isNaN(temp)){
                    if(temp !== position_x){
                        position_x = temp;
                        EventHandler.dealWithCameraPostion(position_x,position_y,position_z);
                    }
                }
                else{
                    $cameraPostionX.val(position_x);
                    alert('please input a number');
                }
            }).bind('blur',function(){
                $(this).trigger('change');
            });

            $cameraPostionY.bind('change',function(){
                temp = parseFloat($cameraPostionY.val());
                if(!isNaN(temp)){
                    if(temp !== position_y){
                        position_y = temp;
                        EventHandler.dealWithCameraPostion(position_x,position_y,position_z);
                    }
                }
                else{
                    $cameraPostionY.val(position_y);
                    alert('please input a number');
                }
            }).bind('blur',function(){
                $(this).trigger('change');
            });
            $cameraPostionZ.bind('change',function(){
                temp = parseFloat($cameraPostionZ.val());
                if(!isNaN(temp)){
                    if(temp !== position_z){
                        position_z = temp;
                        EventHandler.dealWithCameraPostion(position_x,position_y,position_z);
                    }
                }
                else{
                    $cameraPostionZ.val(position_z);
                    alert('please input a number');
                }
            }).bind('blur',function(){
                $(this).trigger('change');
            });
        },
        dealWithCameraPostion : function(x,y,z){
            webglSample.camera.position.x = x;
            webglSample.camera.position.y = y;
            webglSample.camera.position.z = z;
            webglSample.beginRendering();
        }
    }

    module.init = EventHandler.init;
})