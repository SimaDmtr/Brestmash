$(document).ready(function () {

    $(document).ready(function () {
        $("#bannerLeftCarousel").owlCarousel({
            items: 1,
            dots: false,
            nav: false,
            animateOut: 'fadeOut',
            mouseDrag: false,
            touchDrag: false,
            autoplay: true,
            autoplayTimeout: 5000,
            loop: true
        });
    });
    $(document).ready(function () {
        $("#bannerRightCarousel").owlCarousel({
            items: 1,
            dots: false,
            nav: false,
            animateOut: 'fadeOut',
            loop: true,
        });
    });
    $(".next").click(function () {
        $("#bannerRightCarousel").trigger("next.owl.carousel");
    });
    $(".prev").click(function () {
        $("#bannerRightCarousel").trigger("prev.owl.carousel");
    });

});

