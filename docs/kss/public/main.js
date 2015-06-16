 var
    $menu = jQuery('.kss-menu'),
    $childMenu = $('.kss-menu-child'),
    $menuItem = $menu.find('.kss-menu-item'),
    ref = $menu.data('kss-ref');
 console.log('hi', ref);
 jQuery(document).ready(function() {
     $menuItem.eq(ref -1).addClass('kss-active');
     $('[data-toggle="offcanvas"]').click(function () {
         $('.row-offcanvas').toggleClass('active')
     });
 });

 $("#menu-toggle").click(function(e) {
     e.preventDefault();
     $("#kss-wrapper").toggleClass("toggled");
 });