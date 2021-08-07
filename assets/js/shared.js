$(document).ready(function(){
    $('.shoppings').click(function(e){
        e.stopPropagation()
        $('.shopping-div').toggleClass('shown')
        $('.likes-div').removeClass('shown')
        $('.search-container').removeClass('shown')    

    })
    $('body').click(function(){
        $('.likes-div').removeClass('shown')
        $('.shopping-div').removeClass('shown')  
        $('.search-container').removeClass('shown')    
    })
    $('.shopping-div , .likes-div,.search-container').click(function(e){
        e.stopPropagation()
    })
    $('.likes').click(function(e){
        e.stopPropagation()
        $('.likes-div').toggleClass('shown')
        $('.shopping-div').removeClass('shown')
        $('.search-container').removeClass('shown')    
    })
    $('.search-btn').click(function(e){
        e.stopPropagation()
        $('.search-container').toggleClass('shown')
        $('.shopping-div').removeClass('shown')
        $('.likes-div').removeClass('shown')
    })
    $('.nav-btn .big').click(function(){
        $('.header-div .sections-container').toggleClass('shown')
    })


    $('.quick-shop').click(function(){
        $('.alerts-container .added-to-basket').addClass('show')
        setTimeout(() => {
            $('.alerts-container .added-to-basket').removeClass('show')
        }, 2000);
    })
    $('.like').click(function(){
        $('.alerts-container .added-to-wishlist').addClass('show')
        setTimeout(() => {
            $('.alerts-container .added-to-wishlist').removeClass('show')
        }, 2000);
    })
    $('.close-btn').click(function(){
        $('.intro-div').fadeOut()
    })
    $('.quick-view').click(function(){
        $('.intro-div').fadeIn()
    })
})