$(document).ready(function(){
        $('body').on('click','.hard-options .colors label',function(){
            $('.hard-options .colors label').removeClass('selected')
            $(this).addClass('selected') 
        })
        $('body').on('click','.buttons label',function(){
            $(this).closest('.buttons').find(' label').removeClass('selected')
            $(this).addClass('selected')
            $(this).find('input').prop('checked',true)
        })
        $('body').on('click','.buttons .pdf-btn',function(){
            $(this).closest('.details').find('.hard-options').css('display','none')        
        })
        $('body').on('click','.buttons .Hard-btn',function(){
            $(this).closest('.details').find('.hard-options').css('display','block')        
        })
        $('body').on('click','.cancel',function(){
            $(this).closest('.basket-item').remove()
        })
})