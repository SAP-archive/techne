
$(document).ready(function(){
    //function to open and close hidden navigations on mobile
    $('[data-js="menu-toggle"]').on('click', function(){
        var findToggleSubmenu = $(this).attr('aria-controls');
        var hiddenNavigationElement = $('#' + findToggleSubmenu);
        var ariaHiddenSubMenuToggleValue = hiddenNavigationElement.attr('aria-hidden');

        if (ariaHiddenSubMenuToggleValue === 'true'){
            hiddenNavigationElement.attr('aria-hidden', 'false');
        }else{
            hiddenNavigationElement.attr('aria-hidden', 'true');
        }
    });
});
