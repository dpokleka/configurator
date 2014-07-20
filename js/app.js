//$(function(){
//});

var configurator = {};

configurator.shirt = {};
configurator.shirt.path =
    'assets/shirts/' +
    config.shirts[0].name +
    '/base/' +
    'base_0.png';

var image = new Ractive({
    el: 'image',
    template: '#template',
    data: configurator
});

var option1 = new Ractive({
    el: 'option1',
    template: '#options',
    data: config.shirts[0].options.colar
});

var option2 = new Ractive({
    el: 'option2',
    template: '#options',
    data: config.shirts[0].options.cuff
});

option1.observe('selectedOption', function(newValue, oldValue) {
    var option = {};
    option.path = 'assets/shirts/' + config.shirts[0].name +
        '/options/colar/' + newValue + '/' + newValue + '_0.png';

    image.set('option1', option);
});
option2.observe('selectedOption', function(newValue, oldValue) {
    var option = {};
    option.path = 'assets/shirts/' + config.shirts[0].name +
        '/options/cuff/' + newValue + '/' + newValue + '_0.png';

    image.set('option2', option);
});
