$("#leftside-navigation .sub-menu > a").click(function(e) {
	$("#leftside-navigation ul ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(), e.stopPropagation()
})
$('#mobile-menu').on('click', function(e){
$("#challenge-sub").hide();
$("#blog-sub").hide();
$("#works-sub").hide();
$("#about-sub").hide();
$("#story-sub-1").hide();
$("#story-sub-2").hide();
});