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

            const goodsSwiper = new Swiper( $goodsSlider.find( '.goods__container' ), {

                slidesPerView: 4,
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

                breakpoints: {
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
});