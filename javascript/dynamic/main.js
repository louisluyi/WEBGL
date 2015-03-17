/**
 * Created by louis on 2015/3/15.
 */

//主流程，应该保证这个模块不会输出module
define(function(require){
    var EventHandler = require('dynamic/eventHandler');
    if(EventHandler){
        EventHandler.init();
    }
});