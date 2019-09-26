$(document).ready(function () {
    const nav = $('nav').first()

    const createDropdown = function (selector) { 
        $(selector).first().hover(function () {
            $(this).parent().css({
                'backgroundColor': 'rgb(214, 208, 208)',
            })
        }, function () {
            $(this).parent().css('backgroundColor', 'transparent')     
        }
    );
     } 

    $(document).scroll(function () {
        if (($(this).scrollTop() > 0)) {
            nav.addClass('fixed-top')
            nav.css('backgroundColor', 'white')
            $('nav .btn-outline-light').first().addClass('btn-outline-dark').removeClass('btn-outline-light')
            $('nav *').css('color', 'black')
        } else {
            nav.removeClass('fixed-top');
            nav.css('backgroundColor', 'transparent')
            $('nav .btn-outline-dark').first().addClass('btn-outline-light').removeClass('btn-outline-dark')
            $('nav *').css('color', 'white')
        }
    })


    createDropdown('div.agisDrop')

    createDropdown('div.actionsDrop')

    createDropdown('div.we')

    createDropdown('div.clickable')

    // $('li.clickable').click(function () { 
    //     alert($(this).css('backgroundColor'))
    //     if ($(this).css('backgroundColor') == 'rgb(0, 0, 0)')
    //         $(this).css('backgroundColor', 'rgb(214, 208, 208)');
    //     else
    //         $(this).css('backgroundColor', 'transparent');
    // });
})