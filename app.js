
$("#link").on("click", function(e) {

	// jump to object
	// force.jump("#sixth");

	var options = {
		setHash: false,

		duration: 2500,
		easing: "swing",
	};
	force.jump("#sixth", options);

	return false;
});


// jump by selector
// force.jump(elem);