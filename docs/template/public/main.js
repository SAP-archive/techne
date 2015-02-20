 var
    $menu = jQuery('.kss-menu'),
    $childMenu = $('.kss-menu-child'),
    $menuItem = $menu.find('.kss-menu-item'),
    ref = $menu.data('kss-ref');
 jQuery(document).ready(function() {
     $menuItem.eq(ref).addClass('kss-active');
 });