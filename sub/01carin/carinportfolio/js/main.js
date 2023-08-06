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


		if (scrollTop >= 150) {
			$('.con1').addClass('on');
		}

		if (scrollTop >= 150) {
			$('.con2').addClass('on');
		}

		if (scrollTop >= 400) {
			$('.con3').addClass('on');
		}

		if (scrollTop >= 500) {
			$('.con4').addClass('on');
		}

		if (scrollTop >= 1400) {
			$('.con5').addClass('on');
		}

		if (scrollTop >= 2500) {
			$('.con6').addClass('on');
		}

		if (scrollTop >= 2700) {
			$('.con7').addClass('on');
		}

		if (scrollTop >= 3300) {
			$('.con8').addClass('on');
		}

		if (scrollTop >= 4000) {
			$('.con9').addClass('on');
		}
		if (scrollTop >= 4800) {
			$('.con10').addClass('on');
		}

		if (scrollTop >= 5200) {
			$('.con11').addClass('on');
		}

		if (scrollTop >= 6200) {
			$('.con12').addClass('on');
		}

		if (scrollTop >= 6500) {
			$('.con13').addClass('on');
		}

		if (scrollTop >= 7000) {
			$('.con14').addClass('on');
		}

		if (scrollTop >= 7200) {
			$('.con15').addClass('on');
		}



		//section8

		if (scrollTop >= 8400) {
			$('.con16').addClass('on');
		}

		if (scrollTop >= 8800) {
			$('.con17').addClass('on');
		}
		if (scrollTop >= 9000) {
			$('.con18').addClass('on');
		}

		if (scrollTop >= 9600) {
			$('.con19').addClass('on');
		}

		if (scrollTop >= 9600) {
			$('.con20').addClass('on');
		}

		if (scrollTop >= 11500) {
			$('.con21').addClass('on');
		}

		if (scrollTop >= 12300) {
			$('.con22').addClass('on');
		}

		if (scrollTop >= 12800) {
			$('.con23').addClass('on');
		}
		if (scrollTop >= 13800) {
			$('.con24').addClass('on');
		}

		if (scrollTop >= 16000) {
			$('.con26').addClass('on');
		}
		if (scrollTop >= 16200) {
			$('.con27').addClass('on');
		}
		if (scrollTop >= 14600) {
			$('.con28').addClass('on');
		}
		if (scrollTop >= 18000) {
			$('.con29').addClass('on');
		}
		if (scrollTop >= 18400) {
			$('.con30').addClass('on');
		}
		if (scrollTop >= 19500) {
			$('.con31').addClass('on');
		}
		if (scrollTop >= 20700) {
			$('.con32').addClass('on');
		}
		if (scrollTop >= 20100) {
			$('.con33').addClass('on');
		}
		if (scrollTop >= 21500) {
			$('.con34').addClass('on');
		}
		if (scrollTop >= 22000) {
			$('.con35').addClass('on');
		}
		if (scrollTop >= 22800) {
			$('.con36').addClass('on');
		}
		if (scrollTop >= 23000) {
			$('.con37').addClass('on');
		}
		if (scrollTop >= 23500) {
			$('.con38').addClass('on');
		}
		if (scrollTop >= 23900) {
			$('.con39').addClass('on');
		}

		if (scrollTop >= 23900) {
			$('.con40').addClass('on');
		}
		if (scrollTop >= 24400) {
			$('.con41').addClass('on');
		}


		//secion10
		if (scrollTop >= 27200) {
			$('.con42').addClass('on');
		}
		if (scrollTop >= 28500) {
			$('.con43').addClass('on');
		}
		if (scrollTop >= 29400) {
			$('.con44').addClass('on');
		}

		//secion11
		if (scrollTop >= 30000) {
			$('.con45').addClass('on');
		}
		if (scrollTop >= 30445) {
			$('.con46').addClass('on');
		}
		if (scrollTop >= 31000) {
			$('.con47').addClass('on');
		}

		if (scrollTop >= 31800) {
			$('.con48').addClass('on');
		}

		if (scrollTop >= 33600) {
			$('.con49').addClass('on');
		}

		if (scrollTop >= 34600) {
			$('.con50').addClass('on');
		}

		if (scrollTop >= 35000) {
			$('.con52').addClass('on');
		}
		if (scrollTop >= 35000) {
			$('.con53').addClass('on');
		}
		if (scrollTop >= 37000) {
			$('.con54').addClass('on');
		}

		if (scrollTop >= 37800) {
			$('.con55').addClass('on');
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



});
