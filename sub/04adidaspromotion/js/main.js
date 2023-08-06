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


        if(scrollTop >= 150){
            $('.con1').addClass('on');
        }

        if(scrollTop >= 800){
            $('.con2').addClass('on');
        }

        if(scrollTop >= 400){
            $('.con3').addClass('on');
        }

        if(scrollTop >= 5000){
            $('.con4').addClass('on');
        }
		
		if(scrollTop >= 6500){
            $('.con5').addClass('on');
        }
		
		if(scrollTop >= 7200){
            $('.con6').addClass('on');
        }

    
    });


    $('.startPoint').click(function () {

        container.scrollTo(0, 0, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });


    });





    (function () {


        setTimeout(()=>{
            $('.main').addClass('on');
        },1000)

/*

        gsap.to(".box2", {
            x: 400,
            scrollTrigger: {
                trigger: ".box2",
                start: "top center",
                end: "top 100px",
                scrub: 1,
                markers: false,
                id: "scrub"
            }
        });

        gsap.to(".box3", {
            x: 400,
            rotation: 360,
            scrollTrigger: {
                trigger: ".box3",
                start: "top center",
                end: "top 100px",
                scrub: 1,
                markers: true,
                id: "scrub"
            }
        });*/

    })();



})
