$(function(){

    var $confDiv = $(".configurator");


    var $image = $('<img />');
    var $image2 = $('<img />');
    var $image3 = $('<img />');

    $image.attr('src', 'assets/shirts/blueish/base/base_0.png');
    $image2.attr('src', 'assets/shirts/blueish/options/colar/colar01/colar01_0.png');
    $image3.attr('src', 'assets/shirts/blueish/options/cuff/cuff01/cuff01_0.png');

    $confDiv.append($image);
    $confDiv.append($image2);
    $confDiv.append($image3);
});