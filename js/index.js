/// <reference types="../@types/jquery" />
const menuListWidth = $('.menuList').outerWidth();

$('.menuIcon').on('click',function(){
    if($('.menu').css('left') == '0px'){
        $('.menu').animate({left: -menuListWidth + 'px'},1000)
    }
    else{
        $('.menu').animate({left: '0px'},1000)
    }
})

$('.fa-close').on('click', function(){
    $('.menu').animate({left: -menuListWidth + 'px'},1000)
})

$(document).on('click', function(){
    if($('.menu').css('left') == '0px'){
        $('.menu').animate({left: -menuListWidth + 'px'},1000)
    }
})

$('.duration header').on('click', function(){
    $('.duration p').not($(this).next()).slideUp(1000);
    $(this).next().slideToggle(1000);
})

let countDownDate = new Date("Aug 3, 2024 20:00:00").getTime();
let countDown = setInterval(function() {
    const now = new Date().getTime();
    const timeleft = countDownDate - now;
    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    $('.days').html(days + "d");
    $('.hours').html(hours + "h");
    $('.minutes').html(minutes + "m");
    $('.seconds').html(seconds + "s");
    }, 1000)

$('textarea').on('input', function(){
    const textAreaLength = $('textarea').val().length;
    const remainingCalc = 100 - textAreaLength;
    $('.char').html(remainingCalc);
    console.log(remainingCalc);
})

$(window).on('load', function(){
    $('.loadingScreen').fadeOut(1000);
    $('body').css('overflow', 'visible');
})
