(function(){
    var box = $(document),
        nav = $('.nav-bar'),
        posEnd = 0;

    box.on('scroll', function(){
        var posStart = $(this).scrollTop();

        if (posStart > posEnd) nav.addClass('hidden');
        else nav.removeClass('hidden');

        posEnd = posStart;
    });
})();