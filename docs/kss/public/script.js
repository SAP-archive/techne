
// initiate left nav. Page level initialization is also needed.
var activateNav = function(navLink){

	// $('.sub-nav').hide();
	// $('.nav-header').removeClass('active-header');

	$('#' + navLink + '-link').addClass('active-header');
    $('#' + navLink + '-nav .sub-nav').show();
    // $('body').scrollspy({ target: '#'+ navLink + '-nav' });


};
//Modal full screen image 
$('.js_fullscreen').on('click', function () {
    var src = $(this).data('id'); 
    $('.showFullscreen').attr('src', src);
});

$( document ).ready(function(){

    // smooth scrolling to target when clicked on left nav sub menu
    $('.sidebar-offcanvas a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
    });

    // Mobile menu
    $("#nav-toggle").on( "click", function(e) {
        e.preventDefault();

        var state = parseInt($('#content').css('left'),10) > 200;

        $('#left-nav').animate({'left':(state ? -220: 0)}, 'fast');
        $('#content').animate({'left': (state ? 0 : 220)}, 'fast');
        $('.top-nav').animate({'margin-left': (state ? 0 : 220)}, 'fast');

    });

    // off canvas menu
    $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active');
    });

    // Initialize bootstrap tooltip and popover
    $("[rel='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();

    // Enabling Popover
    $(".ui-tooling-btn").popover({
        html : true,
        content: function() {
          return $('.ui-tooling-btnHiddenContent').html();
        },
        title: function() {
          return $('.ui-tooling-btnHiddenTitle').html();
        }
    });

    // layouts person interaction
    $(".layout-personas").find(".circle").click(function(){

        var circle = $(".layout-personas").find(".circle");
        circle.removeClass("active");
        $(this).addClass("active");
        console.log('test');

    });

    // Super nav
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.navbar-super').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('.navbar-super').css('top', '-60px');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('.navbar-super').css('top', '0px');
            }
        }

        lastScrollTop = st;
    }

    //---------------------
    //new Home Page
    var aHPCarouselIDs = ['#hyConsumerCarouselID', '#hyHightCarouselID', '#hyLowtCarouselID', '#hyDevCarouselID'];
    //Automatically generate carousel indicators
    for(var i = 0; i < aHPCarouselIDs.length; i++){
        var iCarLength = $(aHPCarouselIDs[i] + ' .item').length;
        for(var j = 0; j < iCarLength; j++){
            var insertText = '<li data-target="' + aHPCarouselIDs[i] + '" data-slide-to="' + j +'"';
            if(j === 0){
                insertText += ' class="active"';
            }
            insertText += '></li>';
            $(aHPCarouselIDs[i] + " ol").append(insertText);
        }
    }

    //home page tabs initialize
    $('.hyPersonaTab .nav-tabs a:first').tab('show');

    var aActivePersonasID = ['#hyConsumUpImg', '#hyConsumOverImg'];
    var aInactivePersonasID = ['#hyConsumUpImg','#hyHighTUpImg','#hyLowTUpImg','#hyDevUpImg'];
    var fUpdatePersonaImgs = function() {
        if($(".kss-body").width() <= 991) {
            for (var i = 0; i <= aInactivePersonasID.length; i++){
                if(!$(aInactivePersonasID[i]).parent().hasClass('hyPersonaText')) {
                    $(aInactivePersonasID[i]).addClass('hidden').parents('.personaWrapper').addClass('hidden');
                }
                $(aInactivePersonasID[i]).next().addClass('hidden');
            }
        } else {
            for (var j = 0; j <= aInactivePersonasID.length; j++){
                    $(aInactivePersonasID[j]).removeClass('hidden').next().removeClass('hidden');
                    $(aInactivePersonasID[j]).parents('.personaWrapper').removeClass('hidden');
                // if(aInactivePersonasID[j] != aActivePersonasID[0]){
                // } else{
                //     $(aInactivePersonasID[j]).next().removeClass('hidden');
                // }
            }
        }
    };

    fUpdatePersonaImgs();

    $('#hyPersonasCarouselID').on('slide.bs.carousel', function(oEvent){

        if($(".kss-body").width() <= 991){
            //inactivate the previous image
            $(aActivePersonasID[0]).addClass('hidden').parents('.personaWrapper').addClass('hidden');

            //cache the current image
            aActivePersonasID[0] = $(oEvent.relatedTarget).data('imgUp');
            // aActivePersonasID[1] = $(oEvent.relatedTarget).data('imgOver');

            //make it active
            $(aActivePersonasID[0]).removeClass('hidden').parents('.personaWrapper').removeClass('hidden');

        } else {

            //inactivate the previous image
			$(aActivePersonasID[0]).parent().removeClass("hyPersonaText");
            $(aActivePersonasID[0]).removeClass('hidden');

            // $(aActivePersonasID[1]).addClass('hidden');

            //cache the current image
            aActivePersonasID[0] = $(oEvent.relatedTarget).data('imgUp');
            aActivePersonasID[1] = $(oEvent.relatedTarget).data('imgOver');

            //make it active
            $(aActivePersonasID[1]).removeClass('hidden');
            // $(aActivePersonasID[0]).addClass('hidden');
			$(aActivePersonasID[0]).parent().addClass("hyPersonaText");
        }
    });

    //add tabs in the nav bar for Guidelines page


    $(window).on('resize', fUpdatePersonaImgs);
    //---------------------
    //new Home Page

    // initiate jshilight
    hljs.initHighlightingOnLoad();

    // initialize select
    $("select#customSelect1").select2({ minimumResultsForSearch: Infinity });

});



