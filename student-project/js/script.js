/*global console, $, */
/********************** Home **************************/
/******** Nav ********/

// 'use strict';
// console.log('hi there');



$(function () {
    'use strict';
    /****************** S components ***************/

    /*********** S Nav **************/

     /*********** e Nav **************/
    
    /********S Header ********/
    $('.header-right-icon').on('click', function () {
        if ($('.header .imgs div:last-child').hasClass('active')) {
            $('.header .imgs div:last-child').removeClass('active');
            $('.header .imgs div:first-child').addClass('active');
        } else {
            $('.header .imgs .active').removeClass('active').next().addClass('active');
        }
    });
    
    $('.header-left-icon').on('click', function () {
        if ($('.header .imgs div:first-child').hasClass('active')) {
            $('.header .imgs div:first-child').removeClass('active');
            $('.header .imgs div:last-child').addClass('active');
        } else {
            $('.header .imgs .active').removeClass('active').prev().addClass('active');
        }
    });
    /********E Header ********/
    
    
    /******** S products ********/
    $('.default-shape').on('click', function () {
        $('.category-products').css({
            flexDirection: 'row'
        });
        $('.category-products a, .category-products .product-img, .category-products h3').removeClass('listing');

    });
    
    $('.list-shape').on('click', function () {
        $('.category-products').css({
            flexDirection: 'column'
        });
        $('.category-products a, .category-products .product-img, .category-products h3').addClass('listing');

    });
    /******** E products ********/
    
    
    /****************** E components ***************/
    
    
    /******** S product-info ********/
    $('.sizes span').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    /******** E product-info ********/
    
    
    
    
    
});



