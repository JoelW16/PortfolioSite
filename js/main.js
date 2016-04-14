$(document).ready(function() {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
    
    $('#menuNav a').hover(function () {
        $('#menuNav a').css({"color": "#aaa"});
        $(this).css({"color": "#fff"});
    }, function (){
        $('a').click(function () {
            $('#menuNav a').css({"color": "#aaa"});
            $(this).css({"color": "#fff"});
        });
    });




});
