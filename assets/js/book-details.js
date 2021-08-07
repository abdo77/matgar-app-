$(document).ready(function(){
    $('.close-btn').click(function(){
        $('.intro-div').fadeOut()
    })
    $('.display-intro').click(function(){
        $('.intro-div').fadeIn()
    })
    $('.quick-shop').click(function(){
        $('.alerts-container .added-to-basket').addClass('show')
        setTimeout(() => {
            $('.alerts-container .added-to-basket').removeClass('show')
        }, 2000);
    })
    $('.wishlist').click(function(){
        $('.alerts-container .added-to-wishlist').addClass('show')
        setTimeout(() => {
            $('.alerts-container .added-to-wishlist').removeClass('show')
        }, 2000);
    })
    $('.wishlist').click(function(){
        $('.alerts-container .added-to-wishlist').addClass('show')
        setTimeout(() => {
            $('.alerts-container .added-to-wishlist').removeClass('show')
        }, 2000);
    })
    $('.buy-hard').click(function(){
        $('.alerts-container .added-to-basket').addClass('show')
        setTimeout(() => {
            $('.alerts-container .added-to-basket').removeClass('show')
        }, 2000);
    })
    $('.buy-pdf').click(function(){
        $('.alerts-container .added-to-basket').addClass('show')
        setTimeout(() => {
            $('.alerts-container .added-to-basket').removeClass('show')
        }, 2000);
    })
})