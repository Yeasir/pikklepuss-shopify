(function ($, window, document) {
    "use strict";
    const $win = $(window);
    const $doc = $(document);
    const $body = $('body');


    window.onload = function(){ 
    
    
    }

    
    $doc.ready(function(){





   
        var $body = $(document.body);

        if($body.hasClass('stiky_header_enable')){
          var _SCROLL_FIXED_CUTOFF = _SCROLL_FIXED_CUTOFF || ($(window).height() >= 825 ? 200 : 10),
          _HEADER_HEIGHT = _HEADER_HEIGHT || 825;
        
        $(window).scroll(function(e) {
       
          if (this.pageYOffset >= _SCROLL_FIXED_CUTOFF && !$body.hasClass('scrolled')) {
          $body.addClass('scrolled');
          } else if (this.pageYOffset < _SCROLL_FIXED_CUTOFF && $body.hasClass('scrolled')) {
          $body.removeClass('scrolled');
          }
        
        });

        }


        var S = $(".load-more-item"), k = $(".load-more"), y = S.length;
       S.hide(), y > 3 && k.show(), k.length && k.on("click", function () {
           var t = S.filter(":visible").length;
           $(this).hide();
           S.slice(t - 0, t + 1).fadeIn(), S.filter(":visible").length >= y && k.hide();
       });


       $('.modal-toggle').on('click', function(e) {
        e.preventDefault();
        $('.contact-modal').toggleClass('is-visible');
      });



      $('.form__input').focus(function() {
        $(this).parent().addClass('active');
        $('.form__input').focusout(function() {
          if($(this).val() == '') {
             $(this).parent().removeClass('active');
          } else {
             $(this).parent().addClass('active');
          }
        })
      });





      // $('.acc-head').click(function(){
      //   $(this).next().slideToggle(500);
      //   $(this).toggleClass('active');
      //   $(this).parents('.accordion-wrapper').toggleClass('active');
      // })


      $('.accordion-wrapper').click(function(){
        $(this).find('.acc-head').next().slideToggle(500);
        $(this).toggleClass('active');
        $(this).find('.acc-head').toggleClass('active');
      })


      $('.qtyplus').on('click',function(){
      
        var $qty=$(this).closest('.cart__qty').find('.cart__qty-input');
   
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal)) {
            $qty.val(currentVal + 1);
                                                                                                        
        }
    });

    $('.qtyminus').on('click',function(){

        var $qty=$(this).closest('.cart__qty').find('.cart__qty-input');
        var currentID  = $(this).attr("data-id");
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal) && currentVal > 0) {
            $qty.val(currentVal - 1);
  
        }

     });
          




    
     
//   $(window).load(function() { 

  

         
//             $('#insta-feed > div').slick({
//                 dots: false,
//                 infinite: false,
//                 speed: 300,
//                 slidesToShow: 4,
//                 slidesToScroll: 1,
//                 responsive: [
//                   {
//                     breakpoint: 1024,
//                     settings: {
//                       slidesToShow: 2,
//                       slidesToScroll:1,
              
//                     }
//                   },
//                   {
//                     breakpoint: 749,
//                     settings: {
//                       slidesToShow: 1,
//                       slidesToScroll:1
//                     }
//                   },
//                   {
//                     breakpoint: 480,
//                     settings: {
//                       slidesToShow: 1,
//                       slidesToScroll: 1
//                     }
//                   }
//                   // You can unslick at a given breakpoint now by adding:
//                   // settings: "unslick"
//                   // instead of a settings object
//                 ]
             
//             });
    


//  });

 


   

        $('.blog-slider').each( function() {
         
            $(this).slick({
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll:1,
              
                    }
                  },
                  {
                    breakpoint: 749,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll:1
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
                  // You can unslick at a given breakpoint now by adding:
                  // settings: "unslick"
                  // instead of a settings object
                ]
             
            });
        });






    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 600, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                        ;
                    });
                }
            }
        });



    });


})(jQuery, window, document);