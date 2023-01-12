function myFunction() {
  var x = document.getElementById("nv");
  if (x.className === "nav-bar") {
    x.className += " show-menu";
  } else {
    x.className = "nav-bar";
  }
}

(function(){
  var win = $(window);

  win.scroll(function(){
    if (win.scrollTop() == 0) $('nav').removeClass('hidden');
  });
})();

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