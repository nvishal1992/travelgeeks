function tryOpening() {
	var answer = prompt("Enter the password! Clue: fossil watch");
	if (answer && answer.toLowerCase() == "StayWildGirl".toLowerCase()) {
		$('#main').css({ display: 'block' });
	} else {
		$('#lol').css({ display: 'block' });
	}
}


$(document).ready(function() {
	tryOpening();
	$("#retry").on('click', function() {
		$('#lol').css({ display: 'none' });
		tryOpening()
	});
	$(window).on("load", function () {
		$("#nav-sticky-wrapper").sticky({ topSpacing: 0 });
	});

	$('#nav_list').onePageNav({
		currentClass: 'active',
	});


	var navMain = $(".navbar-collapse");
	navMain.on("click", "a:not([data-toggle])", null, function () {
		navMain.collapse('hide');
	});

	react_to_window();
        
	//only acstivate stellar for window widths above or equal to 1024
    var stellarActivated = false;
    
    $(window).on("resize", function() {
        react_to_window();
    });
    
    function react_to_window() {
        if ($(window).width() <= 1024) {
            if (stellarActivated === true) {
                $(window).data('plugin_stellar').destroy();
                stellarActivated = false;
            }
        } else {
            if (stellarActivated === false) {

                $.stellar({
                	horizontalScrolling: false,
					responsive: true,
               });
                
                $(window).data('plugin_stellar').init();
                stellarActivated = true;
            }
        }
    }

	$(".countdown").TimeCircles({
		fg_width: 0.02,
		bg_width: 0.3,
		circle_bg_color: '#7b7571',
		time: {
			Days: { color: '#f9667e' },
			Hours: { color: '#f9667e' },
			Minutes: { color: '#f9667e' },
			Seconds: { color: '#f9667e' }
		},
		count_past_zero: false
	});
	$(window).on("resize", function(){
	    $(".countdown").TimeCircles().rebuild();
	});
});