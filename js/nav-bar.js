(function(){
  var box = $(document),
  nav = $('nav'),
  posEnd = 0;

  box.on('scroll', function(){
      var posStart = $(this).scrollTop();

      if (posStart > posEnd) nav.addClass('hidden');
      else nav.removeClass('hidden');

      posEnd = posStart;
  });
})();

(function(){
  var win = $(window);

  win.scroll(function(){
      if (win.scrollTop() == 0) alert('scrolled to top');
      else if (win.height() + win.scrollTop() == $(document).height()) alert('scrolled to bottom');
  });
})();

function myFunction() {
  var x = document.getElementById("nv");
  if (x.className === "nav-bar") {
    x.className += " show-menu";
  } else {
    x.className = "nav-bar";
  }
}