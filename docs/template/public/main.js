jQuery(document).ready(function() {
    var
    $menu = jQuery('.kss-menu'),
    $childMenu = $('.kss-menu-child'),
    $menuItem = $menu.find('.kss-menu-item'),
    ref = $menu.data('kss-ref');

    $menuItem.eq(ref).addClass('active');
    // $('[data-toggle="offcanvas"]').click(function () {
    //     $('.row-offcanvas').toggleClass('active')
    // });

     if ($(".js_navtrigger.active").size() > 0) {
        $menuItem.removeClass('active');
        $($menuItem[1]).toggleClass('active');
        $menuItem.click(function (event) {
            $menuItem.removeClass('active');
            $(this).toggleClass('active');
        });
     };
 });

 $(".js-menu-toggle").click(function(e) {
     e.preventDefault();
     $("body").toggleClass("toggled");
 });
