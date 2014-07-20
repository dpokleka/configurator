var paths = [],
    prefix = "assets/shirts/blueish/",
    suffix = ".png",
    imagesPerObject = 35,
    objects = [
        "base/base",
        "options/colar/colar01/colar01",
        "options/colar/colar02/colar02",
        "options/colar/colar03/colar03",
        "options/cuff/cuff01/cuff01",
        "options/cuff/cuff02/cuff02",
        "options/cuff/cuff03/cuff03",
        "options/cuff/cuff04/cuff04"
    ];

var progressBar = (function ($) {
    var module = {},
        $element,
        currentCount = 0,
        SETTINGS = {
            element: ".progress-bar",
            numberOfItems: 0
        };

    module.update = function() {
        currentCount++;
        var percentage = currentCount / SETTINGS.numberOfItems * 100;
        $element.css("width", percentage + "%");
    };

    module.init = function(customSettings) {
        console.log(SETTINGS);
        $.extend(SETTINGS, customSettings);
        $element = $(SETTINGS.element);
    };

    return module;
}(jQuery));

$.each(objects, function(index, object){
    for(var i = 0; i < imagesPerObject; i++) {
        paths.push(prefix + object + "_" + i + suffix);
    }
});

progressBar.init({
    numberOfItems: paths.length
});

var promises = [];

for (var i = 0; i < paths.length; i++) {
    (function(progressBar, url, promise) {
        var img = new Image();
        img.onload = function() {
            progressBar.update();
            promise.resolve();
        };
        img.src = url;
    })(progressBar, paths[i], promises[i] = $.Deferred());
}
$.when.apply($, promises).done(function() {
    $(".progress-overlay").fadeOut();
});