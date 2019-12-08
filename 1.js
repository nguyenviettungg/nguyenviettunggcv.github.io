 $(function(){
 	new WOW().init();
 	var vitriinfome = $('.infome').offset().top;
 	console.log(vitriinfome);
 	$('.down,.ex').click(function(event) {
 		$('html,body').animate({scrollTop:vitriinfome}, 1000);
 		return false;
 	});
 	// $('.pr').click(function(event) {
 	// 	$('html,body').animate({scrollTop:}, 1000);
 	// 	return false;
 	// });
})  
 