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

        if(scrollTop >= 600){
            $('.con3').addClass('on');
        }

        if(scrollTop >= 1200){
            $('.con4').addClass('on');
        }
		
		if(scrollTop >= 2000){
            $('.con5').addClass('on');
        }
		
		if(scrollTop >= 2500){
            $('.con6').addClass('on');
        }

        if(scrollTop >= 3400){
            $('.con7').addClass('on');
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

    })();
})
