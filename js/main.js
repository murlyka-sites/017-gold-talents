$(document).ready(function() {

	$(".main__slider").slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 8000
	});

	$(".fancy").fancybox({
		padding: 0
	});

	$(".input--phone").mask("+7 (999) 999-99-99");

	$("form").ajaxForm({
		url: "mail.php",

		success: function(responseText, statusText, xhr, $form) {
			$.fancybox.close();
			$form.trigger("reset");
			$.fancybox("#success", {padding: 0});
		}
	});

	$(".contest__items").slick({
		slidesToShow: 4,
		responsive: [
		{
			breakpoint: 1202,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 560,
			settings: {
				slidesToShow: 1
			}
		}]
	});

	$(".concert__prs").slick({
		slidesToShow: 1,
		arrows: false,
		dots: true
	});


	$(".nav__icon").click(function() {
		$(this).toggleClass('nav__icon_open');
		$(".nav__list").toggleClass('nav__list_open');
	});
});