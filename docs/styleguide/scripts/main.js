
$(document).ready(function(){
    //function to open and close hidden navigations on mobile
    $('[data-js="menu-toggle"]').on('click', function(){
        var findToggleSubmenu = $(this).attr('aria-controls');
        var hiddenNavigationElement = $('#' + findToggleSubmenu);
        var ariaHiddenSubMenuToggleValue = hiddenNavigationElement.attr('aria-hidden');

        if (ariaHiddenSubMenuToggleValue === 'true'){
            hiddenNavigationElement.attr('aria-hidden', 'false');
            $(this).attr('aria-expanded', 'true');
        }else{
            hiddenNavigationElement.attr('aria-hidden', 'true');
            $(this).attr('aria-expanded', 'false');
        }
    });

});

var previousScroll = 0,
    topNavSelector = $('.yaas-signature-nav');
    topNavOffset = topNavSelector.innerHeight();
$(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    if (currentScroll > topNavOffset) {
        if (currentScroll > previousScroll) {
            // Say the menu height is 60px
            topNavSelector.addClass('yaas-signature-nav-slideout');
        } else {
            topNavSelector.removeClass('yaas-signature-nav-slideout');
        }
    }
    previousScroll = currentScroll;
});
