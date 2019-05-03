const Portfolio = function() {
	function makeWords() {
		let choice = [
			{
				text: "rapping",
				weight: 12.3
			}, {
				text: "css3",
				weight: 8
			}, {
				text: "javascript",
				weight: 14
			}, {
				text: "jquery",
				weight: 3
			}, {
				text: "programming",
				weight: 7
			}, {
				text: "python",
				weight: 10
			}, {
				text: "java",
				weight: 9
			}, {
				text: "html",
				weight: 15
			}, {
				text: "newText",
				weight: 7
			}
		];
		return choice;
	}

	function makeWordCloud(words) {
		$('.learning-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		let count = 1;
		$(window).on('scroll', function() {
			let y_scroll_pos = window.pageYOffset;
			let scroll_pos_test = 2700; // set to whatever you want it to be
			let words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a MERN-Stack Developer.", "love everything about code.", "am also a cell technician","solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "blue"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
