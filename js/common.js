
$(document).ready(function() {

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".toggle-mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top-mnu ul a").click(function() {
		$(".top-mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top-text").css("opacity", "1");
	}).append("<span>");

	$(".toggle-mnu").click(function() {
		if ($(".top-mnu").is(":visible")) {
			$(".top-text").css("opacity", "1");
			$(".top-mnu").fadeOut(600);
			$(".top-mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top-text").css("opacity", ".1");
			$(".top-mnu").fadeIn(600);
			$(".top-mnu li a").addClass("fadeInUp animated");
		};
	});

	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});

	$("input, select, textarea").jqBootstrapValidation();

	$(".top-mnu ul a").mPageScroll2id();

});
$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");

}); 

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slider__item");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" number-green", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " number-green";
}






