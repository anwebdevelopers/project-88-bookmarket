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

        $( window ).on( 'resize', function( event ) {
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
                autoPlay: true,
                speed: 800,
                spaceBetween: 0,
                autoHeight: true,
                loop: true,
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
});