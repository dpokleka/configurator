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
configurator.selectedOption = 'colar-colar01';

configurator.shirt = {};
configurator.shirt.path =
    'assets/shirts/' +
    config.shirts[0].name +
    '/base/' +
    'base_0.png';

configurator.options = config.shirts[0].options;

configurator.options.forEach(function(option) {
    option.values = [];

    for (var i = 1; i <= option.length; i++) {
        option.values.push({
            value: option.optionName + ('0' + i).slice(-2),
            name: option.optionName + ('0' + i).slice(-2)
        });
    }
});

var ractive = new Ractive({
    el: 'configurator',
    template: '#template',
    data: configurator
});

ractive.observe('selectedOption', function(newValue, oldValue) {
    var optionPair = newValue.split('-');
    var selectedOption = optionPair[0];
    var selectedValue = optionPair[1];

    var option = {};
    option.path = 'assets/shirts/' + config.shirts[0].name +
        '/options/' + selectedOption + '/' + selectedValue + '/' + selectedValue + '_0.png';

    ractive.set('option1', option);
});