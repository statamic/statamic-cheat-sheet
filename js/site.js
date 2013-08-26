$(document).ready(function() {
	$('section ul ul').each(function() {
		$(this).hide();
		$(this).parent().wrapInner("<a href='#' class='open-block' />");
	});
	$('a.open-block').click(function(event) {
		event.preventDefault();
		$(this).children().toggle();
	});
});