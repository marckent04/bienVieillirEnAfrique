$(document).ready(function () {
    const nav = $('nav').first();

    $(document).scroll(function () {
        if (($(this).scrollTop() > 0)) {
            nav.addClass('fixed-top');
            nav.css('backgroundColor', 'white')
            $('nav .btn-outline-light').first().addClass('btn-outline-dark').removeClass('btn-outline-light');
            $('nav *').css('color', 'black')
        } else {
            nav.removeClass('fixed-top');
            nav.css('backgroundColor', 'transparent')
            $('nav .btn-outline-dark').first().addClass('btn-outline-light').removeClass('btn-outline-dark');
            $('nav *').css('color', 'white')
        }
    });

    $('#menu').hover(function () {
        $(this).css('backgroundColor', 'rgb(214, 208, 208)');
        $('.dropdown-menu').mouseleave(function (e) {
            $('#menu').css('backgroundColor', 'transparent');
            $(this).fadeOut();
            e.stopPropagation();
        });
        $('.dropdown-menu').first().fadeIn();

        $('.jlink').hover(function () {
            $('#menu').css('backgroundColor', 'transparent');
            $('.dropdown-menu').first().fadeOut();
        });

    });
});