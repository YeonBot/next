window.addEventListener('DOMContentLoaded', function () {


	var moveForce = 10; // max popup movement in pixels
	var rotateForce = 0.2; // max popup rotation in deg

	$(document).mousemove(function (e) {
		var docX = $(document).width();
		var docY = $(document).height();

		var moveX = (e.pageX - docX / 2) / (docX / 2) * -moveForce;
		var moveY = (e.pageY - docY / 2) / (docY / 2) * -moveForce;

		var rotateY = (e.pageX / docX * rotateForce * 2) - rotateForce;
		var rotateX = -((e.pageY / docY * rotateForce * 2) - rotateForce);


		$('.popup1')
			.css('left', moveX + 'px')
			.css('top', moveY + 'px')
			.css('transform', 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');

		$('.popup2')
			.css('left', moveX + '-200px')
			.css('top', moveY + '-200px')
			.css('transform', 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');



		$("body").animate({
			scrollTop: 300
		}, 500);

	});


	$('.arrow').on('click touch', function (e) {

		/*e.preventDefault();*/

		let arrow = $(this);

		if (!arrow.hasClass('animate')) {
			arrow.addClass('animate');
			setTimeout(() => {
				arrow.removeClass('animate');
			}, 1600);
		}

	});

	$(function link() {
		$(".right").on("click", function () {
			setTimeout(function () {
				location.href = "https://www.google.com";
			}, 1600);
		}); //click

	});

})
