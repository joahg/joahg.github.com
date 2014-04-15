$(document).ready(function(){
	w = 0;
	indices = 0;
	index_shown = 0;
	left = 64.5;
	function check_activity() {
		if (index_shown <= 0) {
			$(".left-arrow").addClass('inactive').attr('src', 'img/chevron-left-inactive.png');
		}
		if (index_shown >= indices-1) {
			$(".right-arrow").addClass('inactive').attr('src', 'img/chevron-right-inactive.png');
		}
		if (index_shown > 0) {
			$(".left-arrow").removeClass('inactive').attr('src', 'img/chevron-left.png');
		}
		if (index_shown < indices-1) {
			$(".right-arrow").removeClass('inactive').attr('src', 'img/chevron-right.png');
		}
	}
	$(".slider ul li img").each(function(i,v) {
		indices += 1;
		w += $(v).width() + 100;
		$(v).parent().parent().width($(v).width())
	});
	$(".slider ul").width(w);
	$(".slider ul li").each(function(i,v) {
		$(v).css('left', i*900);
	});
	$(document).on('click', ".slider .right-arrow:not(.inactive)", function() {
		$(".slider ul").css('left', (left-900).toString()+'px');
		index_shown += 1;
		check_activity();
		left -= 900;
	});

	$(document).on('click', ".slider .left-arrow:not(.inactive)", function() {
		$(".slider ul").css('left', (left+900).toString()+'px');
		index_shown -= 1;
		check_activity();
		left += 900;
	});
})