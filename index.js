$(document).ready(() => {
    AOS.init();
    //get view height
    const vh = (v) => {
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        return (v * h) / 100;
    };
    //get view width
    const vw = (v) => {
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        return (v * w) / 100;
    };

    const scrollSections = ['#about', '#portfolio', '#contact'];
    let scrollIndex = 0;

// TODO: Check the section the user is scrolled on and move to the next one down
    //scroll down arrow animations
    $('.down-arrow').click( () => {
        $('.down-arrow').css({'position': "fixed"});
        $('.down-arrow').animate({
            left: vw(85)
        }, {duration: 500});
        $('html, body').animate({
            scrollTop: $(scrollSections[scrollIndex]).offset().top
        }, {duration: 500, easing: 'linear'});
        scrollIndex ++;
    });

    // Animate landing
    setTimeout( () => {
        const landingImage = $('.landing-image');
        const landingLogo = $('.landing-logo');

        landingImage.animate({
            width: vw(19)
        }, {duration: 2000, queue: false, easing:'swing'});

        landingImage.css({'margin': '0'});

        landingLogo.animate({
            height: vh(17),
            width: 'auto'
        }, {
            duration: 2000, queue: false, easing: 'swing',done: () => {

                setTimeout( () => $('.landing-intro').animate({
                    opacity: 1.0
                }, {duration: 1000, queue: false}), 1000);

                setTimeout( () => $('.landing-quip').animate({
                    opacity: 1.0
                }, {duration: 1000}), 3000);

                setTimeout(() => $('.down-arrow').addClass('slideUp'), 4000);

                landingImage.css({"float": 'left'});
            }
        })
        }, 500);
    });

// portfolio images
$('.portfolio-entry').hover(function () {
    $(this).children('.portfolio-image-link').children('.portfolio-image-text').animate({
        opacity: 1.0
    });
    $(this).children('.portfolio-image-link').children('.portfolio-small').addClass('darken');
}, function () {
    $(this).children('.portfolio-image-link').children('.portfolio-image-text').animate({
        opacity: 0
    });
    $(this).children('.portfolio-image-link').children('.portfolio-small').removeClass('darken');
});
