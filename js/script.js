var home = null
var mobile = null; 
var navclearfix = "<span class='nav-clearfix'>&nbsp;</span>"


var gridize = function() {
	$(".gridize").each(function(){
		a = $(this).find("ul li a");
		b = []
		while (a.length > 0) {
			b.push(a.splice(0,3))
		}
		$(this).find("ul").remove();
		html = ""
		for (i in b) {
			o = b[i]
			h = "<div class='row clearfix'>"
			for (j in o) {
				d = o[j]
				if (d != o[o.length-1] && d != o[0]) {
					h += "<div class='four columns logo'><a href='"+d.href+"' target='_blank'><div class='img' style='background-image:url("+d.getAttribute("data-img")+")' /><h6>"+d.text+"</h6></a>"+(d.getAttribute("data-about")?"<p class='info'>"+d.getAttribute("data-about")+"</p>":"")+"</div>"
				} else if (d === o[o.length-1]) {
					h += "<div class='four columns omega logo'><a href='"+d.href+"' target='_blank'><div class='img' style='background-image:url("+d.getAttribute("data-img")+")' /><h6>"+d.text+"</h6></a><p class='info'>"+(d.getAttribute("data-about")?"<p class='info'>"+d.getAttribute("data-about")+"</p>":"")+"</div>"
				} else if (d === o[0]) {
					h += "<div class='four columns alpha logo'><a href='"+d.href+"' target='_blank'><div class='img' style='background-image:url("+d.getAttribute("data-img")+")' /><h6>"+d.text+"</h6></a><p class='info'>"+(d.getAttribute("data-about")?"<p class='info'>"+d.getAttribute("data-about")+"</p>":"")+"</div>"
				}
			}
			h += "</div>"
			html += h
		}
		if (html != "") {
			$(this).html(html)
		}
	});
}

$(document).ready(function(){
	$("body").scrollTop(0);
	mobile = $(window).width() <= 767 ? true : false
	if (mobile) {
		$(".nav-clearfix").remove()
	}
	$("a[data-nav-trigger]").click(function(){
		$(".nav_"+$(this).attr("data-nav-trigger")).click()
		return false
	});
	$(".mobile-nav-trigger").click(function(){
		$("nav ul").toggle("blind", {direction: "vertical"}, 300)
	});
	$("nav ul li a").click(function(){
		if (mobile) {
			$(".mobile-nav-trigger").click();
		}
	})

	$("nav a[href^=#]").click(function(e){
		e.preventDefault();
		history.pushState({}, document.title, this.href);
		window.location.href = $(this).attr("href")
		$("body").scrollTop(0);
		$("nav a.active").removeClass("active");
		$(this).addClass("active");

		// Google Analytics
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-45765973-1', 'joahg.com');
		ga('send', 'pageview');
		// END Google Analytics
	});

	$("a[data-nav-trigger]").click(function(e){
		e.preventDefault();
		$("#nav-"+$(this).attr("data-nav-trigger")).click();
	});

	if (document.location.hash === "" || document.getElementById(document.location.hash.substr(1,document.location.hash.length-1)) == null) {
		document.location.hash = "#!/";
		$("#nav-home").addClass("active");
	} else if (document.location.hash !== "") {
		$("#nav-"+(document.location.hash.substr(3,document.location.hash.length-1) !== "" ? document.location.hash.substr(3,document.location.hash.length-1) : "home")).addClass("active");
	}

	gridize();
});

$(window).resize(function(){
	if ($(window).width() >= 767) {
		$("nav ul").show()
		mobile = false
		if ($(".nav-clearfix").length === 0) {
			$(".sidebar").append(navclearfix)
		}
	}
	if ($(window).width() <= 767) {
		$("nav ul").hide()
		mobile = true
		$(".nav-clearfix").remove()
	}
})