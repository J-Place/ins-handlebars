$(document).ready(function() {

var source = $("#sliderTemplate").html();
var template = Handlebars.compile(source);

    var data = {
        features : [
            {
                "iconName": "residential-lending",
                "title": "Dreaming of a New Home?",
                "description": "Insignia Bank automatically reimburses all fees, in or out of network. So yes, it's really FREE.",
                "buttonLink": "lending.html"
            },
            {
                "iconName": "residential-lending",
                "title": "Dreaming of a New Home?",
                "description": "Insignia Bank offers a wide variety of mortgage products that can be tailored to suit your unique needs.",
                "buttonLink": "lending.html"
            },
            {
                "iconName": "residential-lending",
                "title": "Video Tutorials",
                "description": "Learn more about our products and services, online security and more.",
                "buttonLink": "lending.html"
            }
        ]
    };

    $("#features").html(template(data));

});