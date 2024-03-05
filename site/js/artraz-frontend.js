;(function($) {
    'use strict';
    $(window).on( 'elementor/frontend/init', function() {


        var GlobalJSLoad = function() {

            if ($('[data-bg-src]').length > 0) {
                $('[data-bg-src]').each(function () {
                  var src = $(this).attr('data-bg-src');
                  $(this).css('background-image', 'url(' + src + ')');
                  $(this).removeAttr('data-bg-src').addClass('background-image');
                });
            }; 

            $.fn.shapeMockup = function () {
                var $shape = $(this);
                $shape.each(function () {
                    var $currentShape = $(this),
                        shapeTop = $currentShape.data("top"),
                        shapeRight = $currentShape.data("right"),
                        shapeBottom = $currentShape.data("bottom"),
                        shapeLeft = $currentShape.data("left");
                    $currentShape
                        .css({
                            top: shapeTop,
                            right: shapeRight,
                            bottom: shapeBottom,
                            left: shapeLeft,
                        })
                        .removeAttr("data-top")
                        .removeAttr("data-right")
                        .removeAttr("data-bottom")
                        .removeAttr("data-left")
                        .parent()
                        .addClass("shape-mockup-wrap");
                });
            };
        
            if ($(".shape-mockup")) {
                $(".shape-mockup").shapeMockup();
            }
			
        };

        elementorFrontend.hooks.addAction('frontend/element_ready/global', GlobalJSLoad);
        
        var GlobalSlider = function() {

            /*----------- Global Slider ----------*/
            $(".th-carousel").each(function () {
                var asSlide = $(this);
    
                // Collect Data
                function d(data) {
                    return asSlide.data(data);
                }
    
                // Custom Arrow Button
                var prevButton = '<button type="button" class="slick-prev"><i class="' + d("prev-arrow") + '"></i></button>',
                    nextButton = '<button type="button" class="slick-next"><i class="' + d("next-arrow") + '"></i></button>';

                // Function For Custom Arrow Btn
                $("[data-slick-next]").each(function () {
                    $(this).on("click", function (e) {
                        e.preventDefault();
                        $($(this).data("slick-next")).slick("slickNext");
                    });
                });

                $("[data-slick-prev]").each(function () {
                    $(this).on("click", function (e) {
                        e.preventDefault();
                        $($(this).data("slick-prev")).slick("slickPrev");
                    });
                });
            
                // Check for arrow wrapper
                if (d("arrows") == true) {
                    if (!asSlide.closest(".arrow-wrap").length) {
                        asSlide.closest(".container").parent().addClass("arrow-wrap");
                    }
                }
                asSlide.not('.slick-initialized').slick({
                    dots: d("dots") ? true : false,
                    fade: d("fade") ? true : false,
                    arrows: d("arrows") ? true : false,
                    speed: d("speed") ? d("speed") : 1000,
                    asNavFor: d("asnavfor") ? d("asnavfor") : false,
                    autoplay: d("autoplay") == false ? false : true,
                    infinite: d("infinite") == false ? false : true,
                    slidesToShow: d("slide-show") ? d("slide-show") : 1,
                    adaptiveHeight: d("adaptive-height") ? true : false,
                    centerMode: d("center-mode") ? true : false,
                    autoplaySpeed: d("autoplay-speed") ? d("autoplay-speed") : 8000,
                    centerPadding: d("center-padding") ? d("center-padding") : "0",
                    focusOnSelect: d("focuson-select") == false ? false : true,
                    pauseOnFocus: d("pauseon-focus") ? true : false,
                    pauseOnHover: d("pauseon-hover") ? true : false,
                    variableWidth: d("variable-width") ? true : false,
                    vertical: d("vertical") ? true : false,
                    verticalSwiping: d("vertical") ? true : false,
                    swipeToSlide: true,
                    prevArrow: d("prev-arrow") ? prevButton : '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
                    nextArrow: d("next-arrow") ? nextButton : '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
                    rtl: $("html").attr("dir") == "rtl" ? true : false,
                    responsive: [
                        {
                            breakpoint: 1600,
                            settings: {
                                arrows: d("xl-arrows") ? true : false,
                                dots: d("xl-dots") ? true : false,
                                slidesToShow: d("xl-slide-show") ? d("xl-slide-show") : d("slide-show"),
                                centerMode: d("xl-center-mode") ? true : false,
                                centerPadding: "0",
                            },
                        },
                        {
                            breakpoint: 1400,
                            settings: {
                                arrows: d("ml-arrows") ? true : false,
                                dots: d("ml-dots") ? true : false,
                                slidesToShow: d("ml-slide-show") ? d("ml-slide-show") : d("slide-show"),
                                centerMode: d("ml-center-mode") ? true : false,
                                centerPadding: 0,
                            },
                        },
                        {
                            breakpoint: 1200,
                            settings: {
                                arrows: d("lg-arrows") ? true : false,
                                dots: d("lg-dots") ? true : false,
                                slidesToShow: d("lg-slide-show") ? d("lg-slide-show") : d("slide-show"),
                                centerMode: d("lg-center-mode") ? d("lg-center-mode") : false,
                                centerPadding: 0,
                            },
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                arrows: d("md-arrows") ? true : false,
                                dots: d("md-dots") ? true : false,
                                slidesToShow: d("md-slide-show") ? d("md-slide-show") : 1,
                                centerMode: d("md-center-mode") ? d("md-center-mode") : false,
                                centerPadding: 0,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                arrows: d("sm-arrows") ? true : false,
                                dots: d("sm-dots") ? true : false,
                                slidesToShow: d("sm-slide-show") ? d("sm-slide-show") : 1,
                                centerMode: d("sm-center-mode") ? d("sm-center-mode") : false,
                                centerPadding: 0,
                            },
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                arrows: d("xs-arrows") ? true : false,
                                dots: d("xs-dots") ? true : false,
                                slidesToShow: d("xs-slide-show") ? d("xs-slide-show") : 1,
                                centerMode: d("xs-center-mode") ? d("xs-center-mode") : false,
                                centerPadding: 0,
                            },
                        },
                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object
                    ],
                });
            });

            /*----------- Custom Animaiton For Slider ----------*/
            $('[data-ani-duration]').each(function () {
                var durationTime = $(this).data('ani-duration');
                $(this).css('animation-duration', durationTime);
            });
            
            $('[data-ani-delay]').each(function () {
                var delayTime = $(this).data('ani-delay');
                $(this).css('animation-delay', delayTime);
            });
            
            $('[data-ani]').each(function () {
                var animaionName = $(this).data('ani');
                $(this).addClass(animaionName);
                $('.slick-current [data-ani]').addClass('th-animated');
            });
            
            $('.th-carousel').on('afterChange', function (event, slick, currentSlide, nextSlide) {
                $(slick.$slides).find('[data-ani]').removeClass('th-animated');
                $(slick.$slides[currentSlide]).find('[data-ani]').addClass('th-animated');
            });

            $(".hover-item").hover(function() {
                $(this).addClass("item-active");
                $(this).siblings().removeClass("item-active");
            });



        };

        elementorFrontend.hooks.addAction('frontend/element_ready/global', GlobalSlider);

        
        // Banner Widget --
        elementorFrontend.hooks.addAction('frontend/element_ready/artrazbanner.default',function($scope) { 
            $("#heroSlide2").each(function () {
                $(this).slick({
                    slidesToShow: 1,
                    speed: 1000,
                    autoplaySpeed: 6000,
                    arrows: false,
                    fade: true,
                    dots: true,
                    appendDots: $(this)
                        .siblings(".slider-nav-wrap")
                        .find(".custom-dots"),
                });
            });

            $('.slick-marquee').slick({
                speed: 6000,
                autoplay: true,
                autoplaySpeed: 0,
                cssEase: 'linear',
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                infinite: true,
                arrows: false,
                buttons: false,
                // pauseOnHover: true,
                swipeToSlide:true,
            });
            
        });

        // Banner Widget --
        elementorFrontend.hooks.addAction('frontend/element_ready/artraztestimonialslider.default',function($scope) { 
            $("#testiSlide4").each(function () {
                $(this).slick({
                    slidesToShow: 1,
                    speed: 1000,
                    autoplaySpeed: 6000,
                    arrows: false,
                    fade: true,
                    dots: true,
                    appendDots: $(this)
                        .siblings(".slider-nav-wrap")
                        .find(".custom-dots"),
                });
            });
            
        });

        elementorFrontend.hooks.addAction('frontend/element_ready/artrazprojects.default',function($scope) { 
            $("#projectSlide3").each(function () {
                $(this).slick({
                    slidesToShow: 2,
                    speed: 1000,
                    autoplaySpeed: 6000,
                    arrows: false,
                    dots: true,
                    appendDots: $(this)
                        .siblings(".slider-nav-wrap")
                        .find(".custom-dots"),
                    responsive: [
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 1,
                            },
                        }
                    ]
                });
            }); 

            $("#projectSlide1").each(function () {
                $(this).slick({
                    slidesToShow: 2,
                    speed: 1000,
                    autoplaySpeed: 6000,
                    variableWidth: true,
                    arrows: false,
                    dots: true,
                    appendDots: $(this)
                        .siblings(".slider-nav-wrap")
                        .find(".custom-dots"),
                });
            });

        });      
    

    });
}(jQuery));
