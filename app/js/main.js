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

});