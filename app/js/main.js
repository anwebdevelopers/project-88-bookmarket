'use strict';

document.addEventListener( 'DOMContentLoaded', function( event ) {


    /*******************************************************/
    //MENU
    /*******************************************************/

    ( function( $ ) {

        const $elemNav = $( '.header__menu' ),
            $buttonNav = $( '.header__button-menu' );

        $buttonNav.on( 'click', function( event ) {

            event.stopPropagation();

            if ( this.hasAttribute( 'active' ) ) {
                $buttonNav.removeAttr( 'active' );
                $elemNav.slideUp(300);
            } else {
                $buttonNav.attr( 'active', '' );
                $elemNav.slideDown(300);
            }
        } );

        window.addEventListener( 'resize', function() {
            if ( window.outerWidth >= 1024 ) {
                $buttonNav.removeAttr( 'active' );
                $elemNav.css('display', '');
            }
        } );


    }(jQuery));


    /*******************************************************/
    //BANNERS SLIDER
    /*******************************************************/
    ( function( $ ) {

        $( '.banners__box' ).each( function () {

            const $banners__box = $( this );
            $banners__box.find( '.banners__item' )
                .addClass( 'swiper-slide' )
                .wrapAll( '<div class="banners__container swiper-container"><div class="banners__wrapper swiper-wrapper"></div></div>' )
                .end()
                .find( '.banners__container' )
                .after( '<div class="banners__nav"><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div>' ).after( '<div class="banners__dots"></div>' );

            const bannersSwiper = new Swiper( $banners__box.find( '.banners__container' ), {

                speed: 800,
                spaceBetween: 0,
                autoHeight: true,
                loop: true,

                autoplay: {
                    delay: 5000,
                },

                // containerModifierClass: 'banners__box',
                // wrapperClass: 'banners__wrapper',
                // slideClass: 'banners__item',
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.banners__dots',
                    clickable: true,
                    type: 'bullets',
                },
                // on: {
                //     init: function () {
                //
                //         const thisSwiper = this;
                //
                //         $( thisSwiper.slides ).each( function ( i ) {
                //
                //             const itemIndex = + ( $( this ).attr( 'data-swiper-slide-index' ) ? $( this ).attr( 'data-swiper-slide-index' ) : i ) + 1;
                //
                //             $( this ).attr( 'data-count', itemIndex < 10 ? ( '0' + itemIndex ) : itemIndex );
                //         } );
                //     },
                //     paginationRender: function () {
                //
                //         const thisSwiper = this;
                //
                //         $( thisSwiper.pagination.bullets ).each( function ( i ) {
                //
                //             const itemIndex = i;
                //
                //             $( this ).text( $( thisSwiper.slides ).eq( itemIndex ).find( '.banners__item-title' ).text() ).attr( 'data-count', itemIndex < 10 ? ( '0' + ( itemIndex + 1 ) ) : itemIndex + 1 );
                //         } );
                //     }
                // },
            } );

            window.addEventListener( 'resize', function () {
                bannersSwiper.updateSize();
            } );

            // bannersSwiper.destroy(true, true);

        } );

    } ( jQuery ) );

    /*******************************************************/
    //GOODS SLIDER
    /*******************************************************/
    ( function( $ ) {

        $( '.goods-slider' ).each( function () {

            const $goodsSlider = $( this );
            $goodsSlider.find( '.goods__item' )
                .addClass( 'swiper-slide' )
                .wrapAll( '<div class="goods__container swiper-container"><div class="goods__wrapper swiper-wrapper"></div></div>' )
                .end()
                .find( '.goods__container' )
                .after( '<div class="goods__nav"><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div>' ).after( '<div class="goods__dots"></div>' );

            const isCatalog = $goodsSlider.closest('.page__main').length;

            const goodsSwiper = new Swiper( $goodsSlider.find( '.goods__container' ), {

                slidesPerView: isCatalog ? 3 : 4,
                speed: 800,
                spaceBetween: 20,
                loop: true,

                autoplay: {
                    delay: 5000,
                },

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                breakpoints: isCatalog ?
                {
                    1025: {
                        slidesPerView: 3,
                    },
                    // 769: {
                    //     slidesPerView: 3,
                    // },
                    481: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    }
                }
                :
                {
                    1025: {
                        slidesPerView: 4,
                    },
                    769: {
                        slidesPerView: 3,
                    },
                    481: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    }
                },
            } );

            window.addEventListener( 'resize', function () {
                goodsSwiper.updateSize();
            } );

        } );

    } ( jQuery ) );

    /*******************************************************/
    //ACCORDION
    /*******************************************************/

    ( function( $ ) {

        $('.accordion').each(function() {
            const $this = $(this);

            ($this.hasClass('current') || $this.find('.current').length) ? $this.addClass('active') : $this.children('.accordion__box').hide();
        }).on('click', '.accordion__title', function(event) {
            event.stopPropagation();

            if (! $(this).closest('.accordion').hasClass('active')) {
                event.preventDefault();
                $(this).closest('.accordion').addClass('active')
                    .children('.accordion__box').slideDown(200).end()
                    .siblings().removeClass('active')
                    .children('.accordion__box').slideUp(200);
            }
        });

    } ( jQuery ) );


    /*******************************************************/
    //CARD GALLERY
    /*******************************************************/

    ( function( $ ) {

        $('.card__gallery').each(function() {
            const $card__gallery = $( this );
            $card__gallery.find( '.card__gallery-item' )
                .addClass( 'swiper-slide' )
                .wrapAll( '<div class="card__gallery-container swiper-container"><div class="card__gallery-wrapper swiper-wrapper"></div></div>' )
                .end()
                .find( '.card__gallery-container' )
                .after( '<div class="card__gallery-thumbs"><div class="card__gallery-thumbs-container swiper-container"><div class="card__gallery-thumbs-wrapper swiper-wrapper"></div></div></div>' )
                .end()
                .find( '.card__gallery-item img' ).each(function () {
                    $( '<div class="card__gallery-thumbs-item swiper-slide"></div>' ).append($(this).clone()).appendTo($card__gallery.find( '.card__gallery-thumbs-wrapper' ));
                });

            const cardGalleryThumbsSwiper = new Swiper( $card__gallery.find( '.card__gallery-thumbs-container' ), {
                slidesPerView: 5,
                spaceBetween: 5,
                // loop: true,
                // freeMode: true,
                // watchSlidesVisibility: true,
                // watchSlidesProgress: true,
                autoplay: {
                    delay: 5000,
                },
            });


            const cardGallerySwiper = new Swiper( $card__gallery.find( '.card__gallery-container' ), {

                speed: 800,
                spaceBetween: 0,
                // autoHeight: true,
                loop: true,
                thumbs: {
                    swiper: cardGalleryThumbsSwiper
                }

                // autoplay: {
                //     delay: 5000,
                // },

                // containerModifierClass: 'card__gallery',
                // wrapperClass: 'card__gallery-wrapper',
                // slideClass: 'card__gallery-item',
                // navigation: {
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // },
                // pagination: {
                //     el: '.card__gallery-dots',
                //     clickable: true,
                //     type: 'bullets',
                // },
                // on: {
                //     init: function () {
                //
                //         const thisSwiper = this;
                //
                //         $( thisSwiper.slides ).each( function ( i ) {
                //
                //             const itemIndex = + ( $( this ).attr( 'data-swiper-slide-index' ) ? $( this ).attr( 'data-swiper-slide-index' ) : i ) + 1;
                //
                //             $( this ).attr( 'data-count', itemIndex < 10 ? ( '0' + itemIndex ) : itemIndex );
                //         } );
                //     },
                //     paginationRender: function () {
                //
                //         const thisSwiper = this;
                //
                //         $( thisSwiper.pagination.bullets ).each( function ( i ) {
                //
                //             const itemIndex = i;
                //
                //             $( this ).text( $( thisSwiper.slides ).eq( itemIndex ).find( '.card__gallery-item-title' ).text() ).attr( 'data-count', itemIndex < 10 ? ( '0' + ( itemIndex + 1 ) ) : itemIndex + 1 );
                //         } );
                //     }
                // },
            } );

            window.addEventListener( 'resize', function () {
                cardGalleryThumbsSwiper.updateSize();
                cardGallerySwiper.updateSize();
            } );
        });

    } ( jQuery ) );


    /*******************************************************/
    //QUANTITY
    /*******************************************************/

    ( function( $ ) {
        $('.quantity').on('click', '.quantity__button', function() {
            const $this = $(this),
                $input = $this.siblings('.quantity__input'),
                value = Number($input.val());
            if($this.hasClass('quantity__button_plus')) {
                $input.val(value + 1);
            } else {
                if (value > 1) {
                    $input.val(value - 1);
                }
            }
        });
    } ( jQuery ) );

    /*******************************************************/
    //TABS
    /*******************************************************/
    ( function( $ ) {
        $('[data-trigger]').each(function () {
            const $dataTrigger = $(this).attr('data-trigger');

            $('[data-listener=' + $dataTrigger + ']').each(function () {
                $(this).find('[data-listener-' + $dataTrigger + ']').not(':first').hide();
            });

            $(this).find('[data-trigger-' + $dataTrigger + ']').on('click', function () {
                $('[data-listener-' + $dataTrigger + '="' + $(this).attr('data-trigger-' + $dataTrigger ) + '"]').show().siblings('[data-listener-' + $dataTrigger + ']').hide();
            });
        });
    } ( jQuery ) );

    /*******************************************************/
    //ORDER STEPS
    /*******************************************************/

    ( function( $ ) {
        $('.steps__item').each(function () {
            if ($(this).index() > 0) $(this).find('> *:not(.steps__head)').hide();
        }).on('click', '.steps__prev, .steps__next', function (event) {
            event.preventDefault();

            if ( $(event.target).hasClass('steps__next') ) {


                $(event.target).closest('.steps__item').removeClass('current').addClass('passed').next('.steps__item').addClass('current').find('> *:not(.steps__head)').slideDown(600);

                $('html, body').animate({scrollTop: $(event.target).closest('.steps__item').next('.steps__item').offset().top }, 600, 'swing');

            } else if (( $(event.target).hasClass('steps__prev') )) {

                $(event.target).closest('.steps__item').removeClass('current').find('> *:not(.steps__head)').slideUp(600).end().prev('.steps__item').removeClass('passed').addClass('current').find('> *:not(.steps__head)').slideDown(600);

                $('html, body').animate({scrollTop: $(event.target).closest('.steps__item').prev('.steps__item').offset().top }, 600, 'swing')
            }
        });
    } ( jQuery ) );



    //*********************************************************//
    //YANDEX MAP
    //*********************************************************//
    (function ($) {

        const mapElem = document.querySelector('#map');

        if (mapElem) {


            const script = document.createElement('script');

            script.src = '//api-maps.yandex.ru/2.1/?lang=ru_RU';

            document.getElementsByTagName('head')[0].appendChild(script);

            script.onload = function () {

                ymaps.ready(function () {

                    const myMap = new ymaps.Map('map', {
                        center: [57.624535, 39.889250],
                        zoom: 16,
                        controls: [],
                        behaviors: ['drag', 'dblClickZoom', 'rightMouseButtonMagnifier', 'multiTouch']
                    }, {
                        searchControlProvider: 'yandex#search'
                    });

                    //Элементы управления
                    myMap.controls.add('zoomControl', {
                        size: 'small',
                        position: {
                            top: 'auto',
                            right: 10,
                            bottom: 50
                        }
                    });

                    myMap.geoObjects.add(new ymaps.Placemark(
                        [57.624535, 39.889250],
                        {
                            hintContent: 'г. Ярославль, ул. Депутатская, 7',
                            balloonContent: 'г. Ярославль, ул. Депутатская, 7',
                        },
                        {
                            iconLayout: 'default#image',
                            iconImageHref: 'img/icon-mark.svg',
                            iconImageSize: [44, 60],
                            iconImageOffset: [-22, -60],
                        }
                    ));


                    const dragHandler = function () {
                        window.innerWidth <= 1024 ? myMap.behaviors.disable('drag') : myMap.behaviors.enable('drag')
                    };
                    window.onload = dragHandler;
                    window.onresize = dragHandler;

                    typeof ResizeObserver === 'object' && new ResizeObserver(function (entries) {
                        myMap.container.fitToViewport()
                    }).observe(mapElem);

                    myMap.container.fitToViewport();

                });
            }

        }

    }(jQuery));


});