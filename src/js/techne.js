$(document).ready(function(){
	$('.y-buttonClose').click(function() {
		var layer = $(this).parents(".y-on-click-show") 
		layer.slideUp(150, function() {	
			layer.parents(".y-mouseout-view").mouseleave(function() {		
				layer.css("display", "block");
			});
		});
	});
	
	$(".y-thumbnailContainer").click(function() {
		var menuLayer = $(this).siblings(".y-on-click-show")
		menuLayer.fadeIn(150);
	});	

	$('[data-toggle="tooltip"]').tooltip();

});
