$(document).ready(function(){
	$("#joho a[title]").tooltips();

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


//=========================AJAX=================================
	var 
	$main = $(".main"),
	$basestar = $("#planet");
	
	$basestar.click(function(e){
		$(".hide").hide();
		$("#wrapper").css({'background-color': 'transparent'});
		$(this).attr('src', 'img/space.png').css({'transform': 'scale(0.5)'});
		$main.load("content.html", function(){
					var $middle = $(window).width() / 2;
					$('#carousel1').CloudCarousel(		
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
						)});
					
		
	});
	

// ========= Initialize ==================================





 








}) //end of document ready

