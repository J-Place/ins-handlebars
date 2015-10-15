(function getSlider(path) {
  var source;
  var template;

  $.ajax({
    url: "site/assets/model/slider.handlebars",
      cache: true,
      success: function(data) {
        source    = data;
        template  = Handlebars.compile(source);
        $('.slider').html(template);
    }
  });

})();