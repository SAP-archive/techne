
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
 
    hljs.initHighlightingOnLoad();
    
    // Clipboard JS
    new Clipboard('.docs-code__copy-code');

    var copyLink = $('.docs-code__copy-code'),
        expandLink = $('.docs-code__lines--expand');
    
    copyLink.on('click', function(){
        $(this).siblings('.docs-code__notice').fadeIn('fast').delay(1000).fadeOut('fast');
    });

    expandLink.on('click', function(){ 
        $(this).closest('.docs-code').find('.docs-code__markup').toggleClass('docs-code__auto-height');
        console.log( $(this).closest('.docs-code').find('.docs-code__markup') );

        $(this).html(function(i, v){
            return v === 'Show Less <span class="docs-code__lines--chevron-up"></span>' ? 'Show All <span class="docs-code__lines--chevron-down"></span>' : 'Show Less <span class="docs-code__lines--chevron-up"></span>'
        });

        $('.docs-code__lines--label').toggle();
    });

    $('.docs-code').each(function(){
        var _this = $(this);
        var codeCount = _this.find('code').html().split(/\n/).length - 3;
        _this.find('.docs-code__lines--count').text(codeCount);

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

