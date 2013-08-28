/*  https://github.com/cmpolis/scrollIt.js for active class on the navigation. */

(function(c){var b="ScrollIt",a="1.0.1";var d={upKey:38,downKey:40,easing:"linear",scrollTime:600,activeClass:"active",onPageChange:null,topOffset:0};c.scrollIt=function(m){var h=c.extend(d,m),g=0,k=c("[data-scroll-index]:last").attr("data-scroll-index");var i=function(n){if(n<0||n>k){return}var o=c("[data-scroll-index="+n+"]").offset().top+h.topOffset;c("html,body").animate({scrollTop:o,easing:h.easing},h.scrollTime)};var j=function(o){var n=c(o.target).attr("data-scroll-nav")||c(o.target).attr("data-scroll-goto");i(parseInt(n))};var f=function(o){var n=o.which;if(n==h.upKey&&g>0){i(parseInt(g)-1);return false}else{if(n==h.downKey&&g<k){i(parseInt(g)+1);return false}}return true};var l=function(n){if(h.onPageChange&&n&&(g!=n)){h.onPageChange(n)}g=n;c("[data-scroll-nav]").removeClass(h.activeClass);c("[data-scroll-nav="+n+"]").addClass(h.activeClass)};var e=function(){var n=c(window).scrollTop();var p=c("[data-scroll-index]").filter(function(q,r){return n>=c(r).offset().top+h.topOffset&&n<c(r).offset().top+(h.topOffset)+c(r).outerHeight()});var o=p.first().attr("data-scroll-index");l(o)};c(window).on("scroll",e).on("scroll");c(window).on("keydown",f);c("body").on("click","[data-scroll-nav], [data-scroll-goto]",j)}}(jQuery));

/* Add class to the header when user scrolls down the page */

$(function() {
	//caches a jQuery object containing the header element
	var header = $(".expanded-header");
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 100) {
			header.removeClass('expanded-header').addClass('slim-header');
		} else {
			header.removeClass('slim-header').addClass('expanded-header');
		}
	});
});

/* Add dropdown triggers for ul ul lists */

$(document).ready(function() {
	$('section ul ul').each(function() {
		$(this).parent().addClass('close-block');
		$(this).before("<a href='#' class='trigger'>&darr;</a>");
	});
	$('a.trigger').click(function(event) {
		event.preventDefault();
		$(this).parent().toggleClass('close-block');
	});
	$(function(){
		$.scrollIt({
		topOffset: -40 // offste (in px) for fixed top navigation
		});
	});
});