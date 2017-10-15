
function hide_mini_cart_content() {
   $(document).ready(function(){
	   $(".mini_cart_content").hide();
	});
 }

function hide_mobile_menu() {
   $(document).ready(function(){
	   $("ul.mobile-menu").hide();
	});
 }

function hide_form_search() {
   $(document).ready(function(){
	   $("form.search").hide();
	});
}

function show_mini_cart_content(){
   $(document).ready(function() {
   	 $(".widget_shopping_cart_content").hover(function(){
        $(".mini_cart_content").slideToggle("slow");
    });
   });
}

function show_mobile_menu(){
   $(document).ready(function() {
   	 $(".mobile-menu").hover(function(){
         $("ul.mobile-menu").slideToggle("slow");
    });
   });
}

function show_form_search(){
   $(document).ready(function() {
   	 $(".search-switcher").hover(function(){
        $("form.search").slideToggle("slow");
    });
   });
}

function create_menu_freeze(){
	$(function(){
        // Check the initial Poistion of the Sticky Header
        var stickyHeaderTop = $('.header-sticky').offset().top;//Lay ra toa do cua div 
        $(window).scroll(function(){
                if( $(window).scrollTop() > stickyHeaderTop ) {
                        $('.header-sticky').css({position: 'fixed', top: '0px',width:'100%'});
                } else {
                        $('.header-sticky').css({position: 'relative'});
                }
        });
  });
}

function show_sub_menu(){
	$(document).ready(function() {
		/*$("ul.main_mega_menu_ul>li").hover(function(){
        $("ul.sub_menu").animate({
        	top: '100px',height: "toggle"}, 900);
 		});*/
		$("ul.main_mega_menu_ul li > ul.sub_menu").hover(function(){
		    var elem = document.getElementsByClassName(".sub_menu"); 
		    var pos = 0;
		    var id = setInterval(frame, 5);
		    function frame() {
		        if (pos < 550) {
		            clearInterval(id);
		        } else {
		            pos++; 
		            elem.style.top = pos + 'px'; 
		        }
		    }
		});
	});
}


/*start_section_FEATURED PRODUCTS*/

function show_full_product(){
	$(document).ready(function() {

		alret(body.height)
	
	});
}

function slick(){
  $(document).ready(function(){
    $('.slick').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  });
}


/*end_section_FEATURED PRODUCTS*/


/*start_Footer*/
function back_to_top(){
  $(document).ready(function() {
    $('.back_top_bt').click(function(){
      $("body,html").animate({ scrollTop: 0 }, 900);
    });
  });
}
/*end_Footer*/