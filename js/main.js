$(document).ready(function(){

var $j = $("#j"),
	$o = $("#o"),
	$h = $("#h"),
	$ho = $("#ho"),
	$all = $("#j,#o,#h,#ho"),
	$joho = $("#joho"),
	$planet = $("#planet"),
	$carousel = $("#carousel1"),
	$carouselText = $("#carouselText"),
	$ufo = $("#ufo"),
	$ufoImg = $("#ufoImg")
	$tagline = $("#tagline"),
	$descript = $("#descript"),
	$windowWidth = $(window).width(),
	$middle = $(window).width() / 2,
	$winHeight = $(window).height(),
	$move = $winHeight - ($winHeight * 0.3);

// ========= Initialize ==================================

$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});	
$(".various").fancybox({
	maxWidth	: 800,
	maxHeight	: 600,
	fitToView	: false,
	width		: '70%',
	height		: '70%',
	autoSize	: false,
	closeClick	: false,
	openEffect	: 'none',
closeEffect	: 'none'
});

checkSize();

function checkSize(){
	if($windowWidth<481){
// ======= Mobile ========================
		
		$carousel.hide();
		$carouselText.hide();
		$descript.bind('touchstart click', function(){
			$(this).hide();
			$carousel.show();
		});
// ============ Interative =========================================================================================									 			

		$(document).queue(function(){
			$(this).bind('touchmove mousemove', function(e){
				var $width = $ufo.width(),
					$height = $ufo.height();
			
			    $ufo.css({
			       left:  e.pageX - ($width*0.70),
			       top:   e.pageY - ($height*0.75),
			       'z-index':'-1'
			    });
			});
				 				
			$("#joho a[title]").tooltips();

			$o.draggable({
					revert:true,
					revertDuration: 3000,
					drag: function(event, ui){
						$planet.attr('src', 'img/space.gif');
						$planet.droppable({
							over: function( event, ui) {
						$(this).attr("src", "img/space.png");
					},
				    drop: function( event, ui ) {
				    	$o.trigger('click');
			      	}
					})
				}
			});

			$h.draggable({
					revert:true,
					revertDuration: 3000,
					drag: function(event, ui){
						$planet.attr('src', 'img/space.gif');
						$planet.droppable({
							over: function( event, ui) {
						$(this).attr("src", "img/space.png");
					},
				    drop: function( event, ui ) {
				    	$h.trigger('click');
			      	}
					})
				}
			});
		});	// end of interactions with mouse		



	}else{
// ======= Non-Mobile Pre-launch Animation ========== 

		$carousel.hide();
		$carouselText.hide();
		$joho.hide();
		$descript.hide();
		$tagline.hide();
		$ufo.hide();
		$joho.fadeIn();
		$all.delay(500).fadeIn();

		$carousel.CloudCarousel(		
							{			
								xPos: $middle,
								yPos: 100,
								buttonLeft: $("#left-but"),
								buttonRight: $("#right-but"),
								altBox: $("#alt-text"),
								titleBox: $("#title-text"),
								reflHeight: 100,
								reflOpacity: 0.5,
								autoRotate: 'left',
								speed: 0.1,
								autoRotateDelay: 15000
							}
						);

		$j.animate({'top':'+=' + $move}, '3000', 'easeOutBounce', function(){
			$o.animate({'top':'+=' + $move}, '3000', 'easeOutBounce', function(){
				$h.animate({'top':'+=' + $move}, '3000', 'easeOutBounce', function(){
					$ho.animate({'top':'+=' + $move}, '3000', 'easeOutBounce', function(){
						$ufo.delay(1000).fadeIn(2000, function(){
					 		$joho.css({	'transform': 'scale(0.6)',
		 								'-ms-transform': 'scale(0.6)', /* IE 9 */
										'-webkit-transform': 'scale(0.6)',  /*Safari and Chrome */
										'-o-transform': 'scale(0.6)', /* Opera */
										'-moz-transform': 'scale(0.6)' /* Firefox */
										}, 3000);
					 		$all.animate({'top': '-=' + $move}, 3000, function(){
								$tagline.show();
								$joho.css({	'transform': 'scale(0.6)',
			 								'-ms-transform': 'scale(1)', /* IE 9 */
											'-webkit-transform': 'scale(1)',  /*Safari and Chrome */
											'-o-transform': 'scale(1)', /* Opera */
											'-moz-transform': 'scale(1)' /* Firefox */
											}, 3000);		
					 			$joho.css({	'height': "15%", 
						 					'text-align': 'right',
						 					'right': '5%'}
						 					//{queue: false}
						 					);
					 			$ufo.css({	'width': '20%',
					 						'height': '30%',
					 						'position': 'absolute',
					 						'transform':'rotate(-30deg)',
											'-ms-transform':'rotate(-30deg)', /* IE 9 */
											'-moz-transform':'rotate(-30deg)', /* Firefox */
											'-webkit-transform':'rotate(-30deg)', /* Safari and Chrome */
											'-o-transform':'rotate(-30deg)' /* Opera */});
			    				$planet.queue(function(){
			    					$(this).attr("src", "img/space.png").css({	
												'height': '20%',
												'position': 'absolute',
												'bottom': '0',
												'right': '5%'
					 				}).hover(
						 				function(){
						 					$(this).attr("src", "img/space.gif");
						 				},
						 				function(){
						 					$(this).attr("src", "img/space.png");
						 				});
								}); // end of planet animation	
								$descript.delay(5000).show().bind('touchstart click',function(){
									$(this).hide();
									$carousel.queue(function(){
									$(this).show();
								});
									$carouselText.queue(function(){
										$(this).show();
									});
									$planet.css({'top':'0', 'left': '0'});
								});
								// ============ Interative =========================================================================================									 			

								$(document).queue(function(){
									$(this).bind('touchmove mousemove', function(e){
										var $width = $ufo.width(),
											$height = $ufo.height();
									
									    $ufo.css({
									       left:  e.pageX - ($width*0.70),
									       top:   e.pageY - ($height*0.75),
									       'z-index':'-1'
									    });
									});
										 				
									$("#joho a[title]").tooltips();

									$j.draggable({
											revert:true,
											revertDuration: 3000,
											drag: function(event, ui){
												$planet.attr('src', 'img/space.gif');
												$planet.droppable({
													over: function( event, ui) {
												$(this).attr("src", "img/space.png");
											},
										    drop: function( event, ui ) {
										    	$j.trigger('click');
									      	}
											})
										}
									});

									$o.draggable({
											revert:true,
											revertDuration: 3000,
											drag: function(event, ui){
												$planet.attr('src', 'img/space.gif');
												$planet.droppable({
													over: function( event, ui) {
												$(this).attr("src", "img/space.png");
											},
										    drop: function( event, ui ) {
										    	$o.trigger('click');
									      	}
											})
										}
									});

									$h.draggable({
											revert:true,
											revertDuration: 3000,
											drag: function(event, ui){
												$planet.attr('src', 'img/space.gif');
												$planet.droppable({
													over: function( event, ui) {
												$(this).attr("src", "img/space.png");
											},
										    drop: function( event, ui ) {
										    	$h.trigger('click');
									      	}
											})
										}
									});

									$ho.draggable({
											revert:true,
											revertDuration: 3000,
											drag: function(event, ui){
												$planet.attr('src', 'img/space.gif');
												$planet.droppable({
													over: function( event, ui) {
												$(this).attr("src", "img/space.png");
											},
										    drop: function( event, ui ) {
										    	$ho.trigger('click');
									      	}
											})
										}
									});
								});	// end of interactions 
						 	}) //end of $all 
						 }) //ufo 
					}) //end of #ho 
				}) // end of #h 
			}) //end of #o 
		}); //end of #j	
	} // end of non-mobile
} //end of checkSize										


 








}) //end of document ready

