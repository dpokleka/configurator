var configurator = {};

configurator = {};
configurator.lastImageIndex = 34;
configurator.initialStep = 17;
configurator.selectedImage = configurator.initialStep;

var option1Data = config.shirts[0].options.colar;
var option2Data = config.shirts[0].options.cuff;

option1Data.selectedOption = option1Data.values[0];
option2Data.selectedOption = option2Data.values[0];

var optionPath = function(optionName, optionValue, step) {
    return 'assets/shirts/' + config.shirts[0].name +
        '/options/' + optionName + '/' + optionValue + '/' + optionValue + '_' + calculateStep(step) + '.png';
};
var basePath = function(step) {
    return 'assets/shirts/' + config.shirts[0].name +
        '/base/' + 'base_' + calculateStep(step) + '.jpg';
};
var calculateStep = function(step) {
    var totalImages = configurator.lastImageIndex + 1;
    var trueStep = (step - configurator.initialStep) * -1;
    if (trueStep < 0) {
        trueStep = totalImages + trueStep;
    }
    return trueStep
};

configurator.images = [];
configurator.colarImages = [];
configurator.cuffImages = [];

for (var i = 0; i <= configurator.lastImageIndex; i++) {
    configurator.images.push(basePath(i));

    option1Data.values.forEach(function(value) {
        configurator.colarImages.push({
            id: value + '-' + i,
            src: optionPath('colar', value, i)
        });
    });

    option2Data.values.forEach(function(value) {
        configurator.cuffImages.push({
            id: value + '-' + i,
            src: optionPath('cuff', value, i)
        });
    });
}

var image = new Ractive({
    el: 'image',
    template: '#template',
    data: configurator
});

var option1 = new Ractive({
    el: 'option1',
    template: '#options',
    data: option1Data
});

var option2 = new Ractive({
    el: 'option2',
    template: '#options',
    data: option2Data
});

option1.observe('selectedOption', function(selectedOption) {
    $('.image').css({opacity: 0});
    document.getElementById('image-' + configurator.selectedImage).setAttribute('style', 'opacity: 1;');
    document.getElementById(selectedOption + '-' + configurator.selectedImage).setAttribute('style', 'opacity: 1;');
    document.getElementById(option2Data.selectedOption + '-' + configurator.selectedImage).setAttribute('style', 'opacity: 1;');
});

option2.observe('selectedOption', function(selectedOption) {
    $('.image').css({opacity: 0});
    document.getElementById('image-' + configurator.selectedImage).setAttribute('style', 'opacity: 1;');
    document.getElementById(option1Data.selectedOption + '-' + configurator.selectedImage).setAttribute('style', 'opacity: 1;');
    document.getElementById(selectedOption + '-' + configurator.selectedImage).setAttribute('style', 'opacity: 1;');
});

image.observe('selectedImage', function(step) {
    $('.image').css({opacity: 0});
    document.getElementById('image-' + step).setAttribute('style', 'opacity: 1;');
    document.getElementById(option1Data.selectedOption + '-' + step).setAttribute('style', 'opacity: 1;');
    document.getElementById(option2Data.selectedOption + '-' + step).setAttribute('style', 'opacity: 1;');
});
