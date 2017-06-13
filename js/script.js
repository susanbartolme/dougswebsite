$(document).ready(function() {
	$(".sound_link").click(function() {
		$(".tab_music").hide();
		$(".tab_sound").show();
		$(".sound_link").addClass("active");
		$(".music_link").removeClass("active");
	});
	$(".music_link").click(function(){
		$(".tab_music").show();
		$(".tab_sound").hide();
		$(".sound_link").removeClass("active");
		$(".music_link").addClass("active");
	});


	$("#col-1").click(function() {
		$("#contact_page").slideDown("slow", function() {
			$("#maincontent_wrapper").hide();
		});
	});


	$(".close_button").click(function() {
		$("#maincontent_wrapper").show(function() {
			$("#contact_page").slideUp("slow");
		});
	});



});

