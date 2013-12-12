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

	$("nav a[href^=#]").click(function(e){
		e.preventDefault();
		history.pushState({}, "", this.href);
		window.location.href = $(this).attr("href")
		$("body").scrollTop(0);
		$("nav a.active").removeClass("active");
		$(this).addClass("active");
	});

	if (document.location.hash === "" || document.getElementById(document.location.hash.substr(1,document.location.hash.length-1)) == null) {
		document.location.hash = "#!/";
		$("#nav-home").addClass("active");
	} else if (document.location.hash !== "") {
		$("#nav-"+(document.location.hash.substr(3,document.location.hash.length-1) !== "" ? document.location.hash.substr(3,document.location.hash.length-1) : "home")).addClass("active");
	}

	gridize();
});