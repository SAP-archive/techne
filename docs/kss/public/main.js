jQuery(document).ready(function() {
    var
    $menu = jQuery('.kss-menu'),
    $childMenu = $('.kss-menu-child'),
    $menuItem = $menu.find('.kss-menu-item'),
    ref = $menu.data('kss-ref');

    $menuItem.eq(ref).addClass('kss-active');
     $('[data-toggle="offcanvas"]').click(function () {
            $('.row-offcanvas').toggleClass('active')
        });

     if ($(".js_navtrigger.active").size() > 0) {
        $menuItem.removeClass('kss-active');
        $($menuItem[0]).toggleClass('kss-active');
        $menuItem.click(function (event) {
            $menuItem.removeClass('kss-active');
            $(this).toggleClass('kss-active');
        });
     };
 });

 $(".js-menu-toggle").click(function(e) {
     e.preventDefault();
     $("body").toggleClass("toggled");
 });
