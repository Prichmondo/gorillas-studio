
$().ready(function(){

	function scrollToAnchor(e){
		e.preventDefault();
		var id = $(e.target).attr('href');
		var aTag = $(id);
		$('html,body').animate({scrollTop: aTag.offset().top},'slow');
	}
	
	$('a[href^="#"]').click(scrollToAnchor);
});


  
