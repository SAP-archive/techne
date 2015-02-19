 var
    $menu = jQuery('.kss-menu'),
    $childMenu = $('.kss-menu-child'),
    $menuItem = $menu.find('.kss-menu-item'),
    $childMenuItem = $childMenu.find('.kss-menu-item'),
    ref = $menu.data('kss-ref');
    console.log(ref);
 jQuery(document).ready(function() {
     console.log('foo');
     $menuItem.eq(ref).addClass('kss-active');
 });