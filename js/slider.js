$(document).ready(function(){
	indices = $(".slider ul li").length;
	index_shown = 0;
	left = parseFloat($(".slider ul").css('left'));

	$(".slider ul li").each(function(i,v) { $(v).css('left', i*900); });

	function check_activity() {
		if (index_shown <= 0) { $(".left-arrow").addClass('inactive').attr('src', 'img/chevron-left-inactive.png'); }
		if (index_shown >= indices-1) { $(".right-arrow").addClass('inactive').attr('src', 'img/chevron-right-inactive.png'); }
		if (index_shown > 0) { $(".left-arrow").removeClass('inactive').attr('src', 'img/chevron-left.png'); }
		if (index_shown < indices-1) { $(".right-arrow").removeClass('inactive').attr('src', 'img/chevron-right.png'); }
	}

	function goto_slide(n) {
		$(".slider ul").css('left', (left + (n * (-900))).toString()+'px');
		index_shown = n;
		$('.slider ul li').removeClass('current');
		$('.slider ul li:nth-child('+(index_shown+1)+')').addClass('current');
		check_activity();
	}

	$(document).on('click', ".slider .right-arrow:not(.inactive)", function() { goto_slide(index_shown+1) });
	$(document).on('click', ".slider .left-arrow:not(.inactive)", function() { goto_slide(index_shown-1) });

	$('.slider ul').on('click', "li:not(.current)", function(e){ e.preventDefault(); goto_slide($(this).index()); });

	$(".slider").touchwipe({ 
		wipeLeft: function() {
			if (!($(".right-arrow").hasClass('inactive'))) {
				goto_slide(index_shown+1);
			}
		}, wipeRight: function() {
			if (!($(".left-arrow").hasClass('inactive'))) {
				goto_slide(index_shown-1)
			}
		} 
	});
});