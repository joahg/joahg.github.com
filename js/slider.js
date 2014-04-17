$(document).ready(function(){
	w = 0;
	indices = 0;
	index_shown = 0;
	left = 64.5;

	$(".slider ul li img").each(function(i,v) {
		indices += 1;
		w += $(v).width() + 100;
	});
	$(".slider ul").width(w);
	$(".slider ul li").each(function(i,v) {
		$(v).css('left', i*900);
	});

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
	function change_current() {
		$('.slider ul li').removeClass('current');
		$('.slider ul li:nth-child('+(index_shown+1)+')').addClass('current');
	}
	function goto_slide(n) {
		$(".slider ul").css('left', (left + (n * (-900))).toString()+'px');
		index_shown = n;
		change_current();
		check_activity();
	}

	$(document).on('click', ".slider .right-arrow:not(.inactive)", function() {
		goto_slide(index_shown+1)
	});
	$(document).on('click', ".slider .left-arrow:not(.inactive)", function() {
		goto_slide(index_shown-1)
	});
	$('.slider ul').on('click', "li:not(.current)", function(e){
		if ($(this).index() !== index_shown) {
			e.preventDefault();
			goto_slide($(this).index());
		}
	})
	$(".slider").touchwipe({
	     wipeLeft: function() {right_click();},
    	 wipeRight: function() {left_click();},
    });
})