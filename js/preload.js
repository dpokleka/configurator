var paths = [],
    prefix = "assets/shirts/blueish/",
    imagesPerObject = 35,
    objects = [
        { "path": "base/base", "suffix": ".jpg" },
        { "path": "options/colar/colar01/colar01", "suffix": ".png" },
        { "path": "options/colar/colar02/colar02", "suffix": ".png" },
        { "path": "options/colar/colar03/colar03", "suffix": ".png" },
        { "path": "options/cuff/cuff01/cuff01", "suffix": ".png" },
        { "path": "options/cuff/cuff02/cuff02", "suffix": ".png" },
        { "path": "options/cuff/cuff03/cuff03", "suffix": ".png" },
        { "path": "options/cuff/cuff04/cuff04", "suffix": ".png" }
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
        paths.push(prefix + object.path + "_" + i + object.suffix);
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