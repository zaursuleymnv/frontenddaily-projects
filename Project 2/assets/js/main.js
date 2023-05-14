$(document).ready(function() {

    $(window).scroll(function(e) {
        if($(this).scrollTop() > 56) {
            $('header').addClass('header-fixed')
        }
        else {
            $('header').removeClass('header-fixed')
        }
    })
})