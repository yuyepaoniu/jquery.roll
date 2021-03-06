/*!
 * Smooth Vertical or Horizontal Page Scrolling with jQuery
 * author: miyukizhang
 * date:2012-1-28
 * @modified robyi
 * @version 0.1
 **/
(function($){
  $.fn.roll = function(options){
		var settings = {
			'animSpeed': 200,
			'effect': 'linear',
			'direction': 'top'
		};
		return this.each(function(){
			$(this).on("click", function(e){

				var destination = $(this).attr("href");
				var destinationScroll = 0;
				if(destination){

					var $destination = $(destination);

					if(settings.direction === 'left'){
						destinationScroll = $destination.offset().left;
					}else if(settings.direction === 'top'){
						destinationScroll = $destination.offset().top;
					}
					
				}

				$.extend(settings, options);

				if(settings.direction === 'left'){
					$('html, body').animate({scrollLeft: destinationScroll}, parseInt(settings.animSpeed), settings.effect);
				}else if(settings.direction === 'top'){
					$('html, body').animate({scrollTop: destinationScroll}, parseInt(settings.animSpeed), settings.effect);
				}

				e.preventDefault();
			});
		})
	}
})(jQuery);
