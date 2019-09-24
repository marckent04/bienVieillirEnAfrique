$(document).ready(function () {
    $('.mega-content').hide();
    const nav = $('nav').first();
    console.log(nav.scrollTop());
    $(document).scroll(function (e) { 
        if ($(this).scrollTop() > 0) {
            console.log('ok');
            nav.css({
                'backgroundColor': 'rgba(0,0,0,0.5)',
                'marginLeft': '0px',
                'width': '100%',
                'padding-right': '30px'

            });
        } else {
            nav.css({
                'backgroundColor': 'transparent',
                'marginLeft': '10%',
                'width': '80%',
                'padding-right': '0'
            });
        }
    });


    $('#menu').hover(function (e) {
        $(this).css('backgroundColor', 'gray');
        $('.dropdown-menu').mouseleave(function (e) { 
            $('#menu').css('backgroundColor', 'transparent');
            $(this).fadeOut();   
            e.stopPropagation();
        }); 
        $('.dropdown-menu').first().fadeIn();   
         
        $('.jlink').hover(function () { 
            $('#menu').css('backgroundColor', 'transparent');
            $('.dropdown-menu').first().fadeOut();   
         });// over
         
        }

    );

 


    // $('.mega-link > .nav-link').hover(function (e) {
            
    //         console.log(e);
    //     }, function () {
    //         // out
    //     }
    // );
});