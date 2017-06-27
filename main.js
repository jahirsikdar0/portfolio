$(function(){
	console.log('its working');

	$('#header').click(function(){
	$(this).slideUp(4000);
	$(this).slideDown(4000);


	})

	$("#developer").click(function(){
		$(this).fadeOut(3000);
		$(this).fadeIn(3000);
		// $('#aboutme').fadeOut(5000);
	})



	// $("#aboutme").click(function(){
	// 	$(this).animate({left:'400px'});
	// })



// $('html, body').animate({
//     scrollTop: $("#footer").offset().top
// }, 5000);
// $('html, body').animate({
//     scrollDown: $("#footer").offset().top
// }, 5000);


});