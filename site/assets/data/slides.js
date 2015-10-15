$(document).ready(function() {
    var source = $("#sliderTemplate").html();
    var template = Handlebars.compile(source);
    var data = {
        slides : [
            {
                "name": "Slide 1",
                "title": "Free ATM service. Wherever. Whenever.",
                "description": "Insignia Bank automatically reimburses all fees, in or out of network. So yes, it's really FREE.",
                "buttonText": "learn More",
                "buttonColor": "orange",
                "imageName": "bradenton-riverwalk",
                "imageAlt": "Insignia Bank gives you peace of mind."
            },
            {
                "name": "Slide 2",
                "title": "24/7 protection equals peace of mind.",
                "description": "FDIC coverage of up to $250,000 per account means you'll rest easy.",
                "buttonText": "learn More",
                "buttonColor": "blue",
                "imageName": "Couple Hammock",
                "imageAlt": "Insignia Bank gives you peace of mind."
            },
            {
                "name": "Slide 1",
                "title": "We take your online security seriously.",
                "description": "Insignia Bank follows rigorous programs designed to ensure maximum protection for our customers.",
                "buttonText": "learn More",
                "buttonColor": "green",
                "imageName": "sarasota-bay-aerial",
                "imageAlt": "Insignia Bank gives you peace of mind."
            }
        ]
    };
    $("#slider").html(template(data)).slick();
});