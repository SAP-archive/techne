
$(document).ready(function(){
    var primaryNavigationDropdown = $('.yaas-signature-nav__list');
    $('.primary-nav--toggle').on('click', function(){
        $(this).toggleClass('active');
        $(primaryNavigationDropdown).toggleClass('open');
    });

    $('#menu-toggle').on('click', function(){
        $(this).toggleClass('open');
        $('.mobile-left-side-navigation').toggleClass('open');
    })
});
