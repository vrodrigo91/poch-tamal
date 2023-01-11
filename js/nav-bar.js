(function(){
  var box = $(document),
  nav = $('nav'),
  posEnd = 0;

  box.on('scroll', function(){
    if ($(window).width() > 599) {
      var posStart = $(this).scrollTop();

      if (posStart > posEnd) nav.addClass('hidden');
      else nav.removeClass('hidden');

      posEnd = posStart;
    }
  });
})();