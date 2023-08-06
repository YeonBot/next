window.addEventListener('DOMContentLoaded', function () {


	gsap.registerPlugin(ScrollTrigger);

	const stage = document.querySelector('#container');
	const container = Scrollbar.init(stage, {
		damping: 0.1,
		delegateTo: stage,
		continuousScrolling: true,
		alwaysShowTracks: false,
	});
	container.setPosition(0, 0);
	container.track.xAxis.element.remove();
	// Scrollbar.detachStyle();



	ScrollTrigger.scrollerProxy("body", {

		scrollTop(value) {

			if (arguments.length) {
				container.scrollTop = value;
			}

			return container.scrollTop;

		}
	});









	container.addListener((e) => {

		let scrollTop = container.scrollTop;
		console.log(scrollTop);

		// $('.box1').css('transform', `translateY(${scrollTop * 0.7}px)`)


		if (scrollTop >= 200) {
			$('.con1').addClass('on');
		}

		if (scrollTop >= 800) {
			$('.con2').addClass('on');
		}

		if (scrollTop >= 1600) {
			$('.con3').addClass('on');
		}

		if (scrollTop >= 3500) {
			$('.con4').addClass('on');
		}

		if (scrollTop >= 4700) {
			$('.con5').addClass('on');
		}

		if (scrollTop >= 8400) {
			$('.con9').addClass('on');
		}

		if (scrollTop >= 9400) {
			$('.con10').addClass('on');
		}

		if (scrollTop >= 10540) {
			$('.con11').addClass('on');
		}

		if (scrollTop >= 11738) {
			$('.con12').addClass('on');
		}

		if (scrollTop >= 12938) {
			$('.con13').addClass('on');
		}

		if (scrollTop >= 13838) {
			$('.con14').addClass('on');
		}

		if (scrollTop >= 18778) {
			$('.con17').addClass('on');
		}

		if (scrollTop >= 20038) {
			$('.con18').addClass('on');
		}

		if (scrollTop >= 20938) {
			$('.con19').addClass('on');
		}

		if (scrollTop >= 22152) {
			$('.con20').addClass('on');
		}

		if (scrollTop >= 23568) {
			$('.con21').addClass('on');
		}

		if (scrollTop >= 24768) {
			$('.con22').addClass('on');
		}

		if (scrollTop >= 27000) {
			$('.con23').addClass('on');
		}

		if (scrollTop >= 28200) {
			$('.con24').addClass('on');
		}

		if (scrollTop >= 30752) {
			$('.con26').addClass('on');
		}

		if (scrollTop >= 31652) {
			$('.con27').addClass('on');
		}

		if (scrollTop >= 34444) {
			$('.con30').addClass('on');
		}

		if (scrollTop >= 36844) {
			$('.con32').addClass('on');
		}


	});


	$('.startPoint').click(function () {

		container.scrollTo(0, 0, 600, {
			callback: () => console.log('done!'),
			easing: easing.easeInOutCirc,
		});


	});





	(function () {


		setTimeout(() => {
			$('.main').addClass('on');
		}, 1000)



	})();

	$(function link() {
		$(".right").on("click", function () {
			setTimeout(function () {
				location.href = "https://www.google.com";
			}, 1600);
		}); //click

	});

})
