$(document).ready(function() {
	$('section ul ul').each(function() {
		$(this).parent().addClass('close-block');
		$(this).before("<a href='#' class='trigger'>&darr;</a>");
	});
	$('a.trigger').click(function(event) {
		event.preventDefault();
		$(this).parent().toggleClass('close-block');
	});
});