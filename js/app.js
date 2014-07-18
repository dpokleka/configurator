//$(function(){
//});

//var configurator = {
//    shirt: {
//        path: 'assets/shirts/blueish/base/base_0.png'
//    },
//    option1: {
//        path: 'assets/shirts/blueish/options/colar/colar01/colar01_0.png'
//    },
//    option2: {
//        path: 'assets/shirts/blueish/options/cuff/cuff01/cuff01_0.png'
//    }
//};


var configurator = {};

configurator.shirt = {};
configurator.shirt.path =
    'assets/shirts/' +
    config.shirts[0].name +
    '/base/' +
    'base_0.png';


var ractive = new Ractive({
    el: 'configurator',
    template: '#template',
    data: configurator
});
