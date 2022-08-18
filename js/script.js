$(document).ready(function($) {
   
 $('#js-accordion').find('.acc-toggle-js-css').click(function(){

        //Expand or collapse
        $(this).next().slideToggle(300);
        
        //changes icon of hide and show
        if( $(this).find('.drop-js').hasClass('js-hide'))
        {
            $(this).find('.drop-js').removeClass('js-hide').addClass('js-show');
        } 

        else 
        { 
            $('#js-accordion').find('.drop-js').removeClass('js-show').addClass('js-hide');  
        }
      
    });
 
 $('#sub-accordion').find('.accordion-toggle1').click(function(){
        
        //Expand or collapse
        $(this).next().slideToggle(300);

        //make the currently clicked tab blue
        $(this).addClass('blue-toggle-css-js');
      
        
        //Hide other panels
        /*$(".accordion-content1").not($(this).next()).slideUp(400);*/

        //remove blue color for other tabs
        $(".accordion-toggle1").not($(this)).removeClass('blue-toggle-css-js');
      
    });
 });

 $(document).ready(function() {
        //on clicking any of the tabs
        $(".tabs-menu-js a").click(function() {
       
        //add blue background for current tab
        $(this).parent().addClass("current");

        //remove blue background for other tabs
        $(this).parent().siblings().removeClass("current");

        //to hide other content
        var tab = $(this).attr("href");
        $(".tab-content-js").not(tab).css("display", "none");

        //to display the content of current tab
        $(tab).fadeIn(500);
    });
});
