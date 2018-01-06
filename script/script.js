$(document).ready(function(){
       $(".sec_play").click(function(){
           $(".iframes").css({"display":"block"});
           return false;
       });
       $(window).click(function(event) {
        if(event.target.className=="iframes"){
            $(".iframes").fadeOut(400);
        }
    }); 
     $(".icon ").click(function(){
         $(this).css({"text-decoration":"none","color":"white","color":"#13bfb1"}) 
    });
     $(".icons ").click(function(){
         $(this ).css({"text-decoration":"none","color":"white","color":"#13bfb1"}) 
    });
    $(".order_active").click(function(){
        $(this).css({"text-decoration":"none","color":"#ff5f83"})
    });    
    $(".first_menu a").click(function(){
        $(this).css({"text-decoration":"none","color":"black"})
    });
   
    $(".activea").click(function(){
        $(this).css({"text-decoration":"none","color":"#ff5f83"})
    });
   // Start Scroll_Up
       $(window).scroll(function(){
           if ($(this).scrollTop() > 100) {
               $('.scrollup').fadeIn();
           } else {
               $('.scrollup').fadeOut();
           }
       });
       $('.scrollup').click(function(){
           $('html, body').animate({scrollTop : 0},1500);
           $(this).css({"color":"white"})
           return false;
   });
   // End Scroll_Up
   // Start Firt_menu Scrolling
   $(window).scroll(function(){
           if ($(this).scrollTop() > 70) {
               $('.first_menu').fadeIn();
           } else {
               $('.first_menu').fadeOut();
           }
       });
       // End Firt_menu Scrolling
       // Start animation
           $(window).scroll(function(){
           if ($(this).scrollTop() >944.875) {
               $('.photo').fadeIn();
           }else{
               $('.photo').fadeOut();
           }
       });
           $(window).scroll(function(){
           if ($(this).scrollTop() >1550) {
               $('.image').fadeIn();
           } else {
               $('.image').fadeOut();
           }
       });  
       $(window).scroll(function(){
        if ($(this).scrollTop() >7100){ 
            $('.adresses').css({"margin-left":"20px"});
            $('.location').css({"margin-left":"40px"});
            $('.place').css({"margin-left":"40px"})
        } else {
            $('.adresses').css({"margin-left":"0px"});
            $('.location').css({"margin-left":"0px"});
            $('.place').css({"margin-left":"0px"})
        }
    });
           $(window).scroll(function(){
           if ($(this).scrollTop() >7300) {
               $('.s_name').css({"margin-left":"70px"});
               $('.end li').css({"padding-right":"30px","padding-left":"10px"});}
            else {
               $('.s_name').css({"margin-left":"0px"});
               $('.end li').css({"padding-right":"0px","padding-left":"0px"});
           }
       });
       setSection();
   });
   // End animation
   // Start click_Scroll
   function setSection(){
   $("nav  a").click(function(c){
       c.preventDefault();
       var changeID= c.currentTarget.id + "change"; 
       $("html,body").animate({
   
    scrollTop: $("#" + changeID).offset().top
       },1500)
   })
   // End click_Scroll
   $(".style1").click(function(){
   $(".toggle").css({"background":"#ff5f83"});
   $(".active").css({"color":"white"});
   $(".second").css({"color":"black","background":"transparent","border":"1px solid lightgray"});
   $(".switch").css({"color":"#ff5f83"});
   $(".second").css({"color":"black","border":"1px solid white","background":"#ff5f83"});
   })
   $(".style2").click(function(){
       $(".toggle").css({"background":"#13bfb1"});
       $(".active").css({"color":"white"});
       $(".second").css({"color":"black","background":"transparent","border":"1px solid lightgray"});
       $(".switch").css({"color":"#13bfb1"});
       $(".second").css({"color":"black","border":"1px solid white","background":"#13bfb1"});
   })
   $(".style3").click(function(){
       $(".toggle").css({"background":"#337ab7"});
       $(".active").css({"color":"white"});
       $(".second").stop().css;
       $(".switch").css({"color":"#337ab7"});
       $(".second").css({"color":"black","border":"1px solid white","background":"#337ab7"});
   })
   $(".style4").click(function(){
       $(".toggle").css({"background":"red"});
       $(".active").css({"color":"white"});
       $(".second").css({"color":"black","background":"transparent","border":"1px solid lightgray"});
       $(".switch").css({"color":"red"});
       $(".second").css({"color":"black","border":"1px solid white","background":"red"});
   })
   $(".style5").click(function(){
       $(".toggle").css({"background":"#27ae62"});
       $(".active").css({"color":"white"});
       $(".second").css({"color":"black","background":"transparent","border":"1px solid lightgray"});
       $(".switch").css({"color":"#27ae62"});
       $(".second").css({"color":"black","border":"1px solid white","background":"#27ae62"});
   })
   $(".style6").click(function(){
       $(".toggle").css({"background":"#e5c51a"});
       $(".active").css({"color":"white"});
       $(".second").css({"color":"black","background":"transparent","border":"1px solid lightgray"});
       $(".switch").css({"color":"#e5c51a"});
       $(".second").css({"color":"black","border":"1px solid white","background":"#e5c51a"});
   })
   $(".style7").click(function(){
       $(".toggle").css({"background":"#8f44ad"});
       $(".active").css({"color":"white"});
       $(".second").css({"color":"black","background":"transparent","border":"1px solid lightgray"});
       $(".switch").css({"color":"#8f44ad"});
       $(".second").css({"color":"black","border":"1px solid white","background":"#8f44ad"});  
   })
   $(".style8").click(function(){
       $(".toggle").css({"background":"#f39c11"});
       $(".active").css({"color":"white"});
       $(".second").css({"color":"black","background":"transparent","border":"1px solid lightgray"});
       $(".switch").css({"color":"#f39c11"});
       $(".second").css({"color":"black","border":"1px solid white","background":"#f39c11"});
   })
   $(".style9").click(function(){
       $(".toggle").css({"background":"#009688"});
       $(".active").css({"color":"white"});
       $(".second").css({"color":"black","background":"transparent","border":"1px solid lightgray"});
       $(".switch").css({"color":"#009688"});
       $(".second").css({"color":"black","border":"1px solid white","background":"#009688"});
   })
   $(".style10").click(function(){
       $(".toggle").css({"background":"#ed703a"});
       $(".active").css({"color":"white"});
       $(".second").css({"color":"black","background":"transparent","border":"1px solid lightgray"});
       $(".switch").css({"color":"#ed703a"});
       $(".second").css({"color":"black","border":"1px solid white","background":"#ed703a"});
   })
   $(".style11").click(function(){
       $(".toggle").css({"background":"#96cd02"});
       $(".active").css({"color":"white"});
       $(".second").css({"color":"black","background":"transparent","border":"1px solid lightgray"});
       $(".switch").css({"color":"#96cd02"});
       $(".second").css({"color":"black","border":"1px solid white","background":"#96cd02"});
   })
   $(".style12").click(function(){
       $(".toggle").css({"background":"#f50079"});
       $(".active").css({"color":"white"});
       $(".second").css({"color":"black","background":"transparent","border":"1px solid lightgray"});
       $(".switch").css({"color":"#f50079"});
       $(".second").css({"color":"black","border":"1px solid white","background":"#f50079"});
   })
   
   // start spin
   $(".spin").click(function(){
     $(this).css({"color":"white"}) 
   if($(this).hasClass("toggle")){
       
       $(".styles").stop().animate({"left":"-243px"},500)
   }	else{  
       $(".styles").stop().animate({"left":"0px"},500)	
   }
   $(this).toggleClass("toggle")
   return false;
   })
   
   // End spin
   var click=true
   $(".bars"). click(function(){
      if(click==true){
        $(".navul").slideDown();
        click=false;
      }else{
        $(".navul").slideUp();
        click=true;
      }
   })
   // first_menu
   var second=true
   $(".bars"). click(function(){
      if(second==true){
        $(".first_menu ul").slideDown();
        second=false;
      }else{
        $(".first_menu ul").slideUp();
        second=true;
      }
      return false;
   })
   //Start slider
   $(".dot").click(function(){	
    if($(this).hasClass("swipe")){  
        $(this).css({"opacity":"1"});
        $(".active_dot").css({"opacity":"0.5"});
        $(".slide_image").stop().animate({"margin-left":"-570px"},500)       
    }	else{  
        $(".slide_image").stop().animate({"margin-left":"0px"},500)
        
    }
    return false;
    })
    $(".active_dot").click(function(){	
        $(this).css({"opacity":"1"});
        $(".dot").css({"opacity":"0.5"});
    if($(this).hasClass("swipe")){  
        $(".slide_image").stop().animate({"margin-left":"0"},500)
            
    }	else{  
        $(".slide_image").stop().animate({"margin-left":"-1140px"},500)
    }
    return false;
    })
    
    $(document).ready(function(){
        setInterval(function(){
        $(".slide_image").animate({"margin-left":"-285px"},500,function(){
            
       $(this).find(".item:last").after($(this).find(".item:first"));{
        $(this).css({"margin-left":"0px"});
       }
       
        })
    },7000);
    });
    // 
    
    // 
    $(".sec_dot").click(function(){	
        $(this).css({"opacity":"1","background":"#13bfb1"});
        $(".act_dot").css({"background":"black"});
    if($(this).hasClass("turn")){  
        $(".company_slide").stop().animate({"margin-left":"-1250px"},300)		
    }	else{  
        $(".company_slide").stop().animate({"margin-left":"0px"},300)
    }

    })
    $(".act_dot").click(function(){	
        $(".sec_dot_hidden").css({"background":"black"});
        $(".sec_dot1_hidden").css({"background":"black"});
        $(".sec_dot2_hidden").css({"background":"black"});
        $(".sec_dot3_hidden").css({"background":"black"});
        $(".sec_dot4_hidden").css({"background":"black"});
        $(this).css({"opacity":"1","background":"#13bfb1"});
        $(".sec_dot").css({"background":"black"});
    if($(this).hasClass("turn")){  
        $(".company_slide").stop().animate({"margin-left":"0px"},500)	
    }	else{  
        $(".company_slide").stop().animate({"margin-left":"-1250px"},500)
    }
   
    })
    // Owl slider
    $(".second_dot_hidden").click(function(){	
        $(".active_dot").css({"opacity":"1","background":"black"});
        $(".second_dot1_hidden").css({"background":"black"});
        $(".second_dot4_hidden").css({"background":"black"});
        $(".second_dot5_hidden").css({"background":"black"});
        $(".second_dot6_hidden").css({"background":"black"});
        $(".second_dot2_hidden").css({"background":"black"});
        $(".second_dot3_hidden").css({"background":"black"});
        $(".second_dot7_hidden").css({"background":"black"});
        $(".second_dot8_hidden").css({"background":"black"});
        $(".second_dot_hidden").css({"background":"#13bfb1"});		
    if($(this).hasClass("again")){  
        $(".slide_owl").stop().animate({"margin-left":"0px"},500)}	
    else{  
        $(".slide_owl").stop().animate({"margin-left":"0px"},500)}
    })
    $(".second_dot1_hidden").click(function(){	
        $(".active_dot").css({"opacity":"1","background":"black"});
        $(".second_dot_hidden").css({"background":"black"});
        $(".second_dot4_hidden").css({"background":"black"});
        $(".second_dot5_hidden").css({"background":"black"});
        $(".second_dot6_hidden").css({"background":"black"});
        $(".second_dot2_hidden").css({"background":"black"});
        $(".second_dot3_hidden").css({"background":"black"});
        $(".second_dot7_hidden").css({"background":"black"});
        $(".second_dot8_hidden").css({"background":"black"});
        $(".second_dot1_hidden").css({"background":"#13bfb1"});	
    if($(this).hasClass("again")){  
        $(".slide_owl").stop().animate({"margin-left":"-285px"},500)}
        else{  
        $(".slide_owl").stop().animate({"margin-left":"0px"},500)}
    })
    $(".second_dot2_hidden").click(function(){	
        $(".active_dot").css({"opacity":"1","background":"black"});
        $(".second_dot_hidden").css({"background":"black"});
        $(".second_dot4_hidden").css({"background":"black"});
        $(".second_dot5_hidden").css({"background":"black"});
        $(".second_dot6_hidden").css({"background":"black"});
        $(".second_dot1_hidden").css({"background":"black"});
        $(".second_dot3_hidden").css({"background":"black"});
        $(".second_dot7_hidden").css({"background":"black"});
        $(".second_dot8_hidden").css({"background":"black"});
        $(".second_dot2_hidden").css({"background":"#13bfb1"});		
    if($(this).hasClass("again")){
        $(".slide_owl").stop().animate({"margin-left":"-570px"},500)}	else{  
        $(".slide_owl").stop().animate({"margin-left":"0px"},500)
    }
    })
    $(".second_dot3_hidden").click(function(){
        $(".active_dot").css({"opacity":"1","background":"black"});
        $(".second_dot_hidden").css({"background":"black"});
        $(".second_dot1_hidden").css({"background":"black"});
        $(".second_dot2_hidden").css({"background":"black"});
        $(".second_dot4_hidden").css({"background":"black"});
        $(".second_dot5_hidden").css({"background":"black"});
        $(".second_dot6_hidden").css({"background":"black"});
        $(".second_dot7_hidden").css({"background":"black"});
        $(".second_dot8_hidden").css({"background":"black"});
        $(".second_dot3_hidden").css({"background":"#13bfb1"});		
    if($(this).hasClass("again")){  
        $(".slide_owl").stop().animate({"margin-left":"-855px"},500)}	
    else{  
        $(".slide_owl").stop().animate({"margin-left":"0px"},500)}

    })
    $(".second_dot4_hidden").click(function(){	
        $(".active_dot").css({"opacity":"1","background":"black"});
        $(".second_dot_hidden").css({"background":"black"});
        $(".second_dot1_hidden").css({"background":"black"});
        $(".second_dot5_hidden").css({"background":"black"});
        $(".second_dot6_hidden").css({"background":"black"});
        $(".second_dot7_hidden").css({"background":"black"});
        $(".second_dot8_hidden").css({"background":"black"});
        $(".second_dot2_hidden").css({"background":"black"});
        $(".second_dot3_hidden").css({"background":"black"});
        $(".second_dot4_hidden").css({"background":"#13bfb1"});		
    if($(this).hasClass("again")){  
        $(".slide_owl").stop().animate({"margin-left":"-1140px"},500)}
        else{  
        $(".slide_owl").stop().animate({"margin-left":"0px"},500)
    }
    })
    $(".second_dot5_hidden").click(function(){	
        $(".active_dot").css({"opacity":"1","background":"black"});
        $(".second_dot_hidden").css({"background":"black"});
        $(".second_dot1_hidden").css({"background":"black"});
        $(".second_dot2_hidden").css({"background":"black"});
        $(".second_dot3_hidden").css({"background":"black"});
        $(".second_dot4_hidden").css({"background":"black"});		
        $(".second_dot6_hidden").css({"background":"black"});		
        $(".second_dot7_hidden").css({"background":"black"});		
        $(".second_dot8_hidden").css({"background":"black"});		
        $(".second_dot5_hidden").css({"background":"#13bfb1"});		
    if($(this).hasClass("again")){  
        $(".slide_owl").stop().animate({"margin-left":"-1425px"},500)
    }	else{  
        $(".slide_owl").stop().animate({"margin-left":"0px"},500)			
    } 
    })
    $(".second_dot6_hidden").click(function(){	
        $(".active_dot").css({"opacity":"1","background":"black"});
        $(".second_dot_hidden").css({"background":"black"});
        $(".second_dot5_hidden").css({"background":"black"});
        $(".second_dot7_hidden").css({"background":"black"});
        $(".second_dot8_hidden").css({"background":"black"});
        $(".second_dot1_hidden").css({"background":"black"});
        $(".second_dot2_hidden").css({"background":"black"});
        $(".second_dot3_hidden").css({"background":"black"});
        $(".second_dot4_hidden").css({"background":"black"});
        $(".second_dot6_hidden").css({"background":"#13bfb1"});		
    if($(this).hasClass("again")){  
        $(".slide_owl").stop().animate({"margin-left":"-1710px"},500)
    }	else{  
        $(".slide_owl").stop().animate({"margin-left":"0px"},500)
    }
    })
    $(".second_dot7_hidden").click(function(){	
        $(".active_dot").css({"opacity":"1","background":"black"});
        $(".second_dot5_hidden").css({"background":"black"});
        $(".second_dot6_hidden").css({"background":"black"});
        $(".second_dot8_hidden").css({"background":"black"});
        $(".second_dot_hidden").css({"background":"black"});
        $(".second_dot1_hidden").css({"background":"black"});
        $(".second_dot2_hidden").css({"background":"black"});
        $(".second_dot3_hidden").css({"background":"black"});
        $(".second_dot4_hidden").css({"background":"black"});
        $(".second_dot7_hidden").css({"background":"#13bfb1"});		
    if($(this).hasClass("again")){  
        $(".slide_owl").stop().animate({"margin-left":"-1995px"},500)
    }	else{  
        $(".slide_owl").stop().animate({"margin-left":"0px"},500)
    }
    })
    // Owl slider  
    $(".dot1").click(function(){	
        $(".sec_dot1_hidden").css({"background":"black"});
        $(".sec_dot2_hidden").css({"background":"black"});
        $(".sec_dot3_hidden").css({"background":"black"});
        $(".sec_dot4_hidden").css({"background":"black"});
        $(".act_dot").css({"opacity":"1","background":"black"});
        $(".dot").css({"background":"#13bfb1"});		
    if($(this).hasClass("other")){  
        $(".company_slide").stop().animate({"margin-left":"-640px"},500)
    }	else{  
        $(".company_slide").stop().animate({"margin-left":"0px"},500)
    }
    })
    $(".sec_dot_hidden").click(function(){	
        $(".sec_dot1_hidden").css({"background":"black"});
        $(".sec_dot2_hidden").css({"background":"black"});
        $(".sec_dot3_hidden").css({"background":"black"});
        $(".sec_dot4_hidden").css({"background":"black"});
        $(".act_dot").css({"opacity":"1","background":"black"});
        $(".sec_dot_hidden").css({"background":"#13bfb1"});		
    if($(this).hasClass("return")){  
        $(".company_slide").stop().animate({"margin-left":"-320px"},500)
    }	else{  
        $(".company_slide").stop().animate({"margin-left":"0px"},500)
    }
    })
    $(".sec_dot1_hidden").click(function(){	
        $(".act_dot").css({"opacity":"1","background":"black"});
        $(".sec_dot_hidden").css({"background":"black"});
        $(".sec_dot2_hidden").css({"background":"black"});
        $(".sec_dot3_hidden").css({"background":"black"});
        $(".sec_dot4_hidden").css({"background":"black"});
        $(".sec_dot1_hidden").css({"background":"#13bfb1"});		
    if($(this).hasClass("return")){  
        $(".company_slide").stop().animate({"margin-left":"-640px"},500)
    }	else{  
        $(".company_slide").stop().animate({"margin-left":"0px"},500)
    }
    })
    $(".sec_dot2_hidden").click(function(){	
        $(".act_dot").css({"opacity":"1","background":"black"});
        $(".sec_dot1_hidden").css({"background":"black"});
        $(".sec_dot_hidden").css({"background":"black"});
        $(".sec_dot3_hidden").css({"background":"black"});
        $(".sec_dot4_hidden").css({"background":"black"});
        $(".sec_dot2_hidden").css({"background":"#13bfb1"});		
    if($(this).hasClass("return")){  
        $(".company_slide").stop().animate({"margin-left":"-948px"},500)}
        else{  
        $(".company_slide").stop().animate({"margin-left":"0px"},500)}
    })
    $(".sec_dot3_hidden").click(function(){	
        $(".act_dot").css({"opacity":"1","background":"black"});
        $(".sec_dot_hidden").css({"background":"black"});
        $(".sec_dot1_hidden").css({"background":"black"});
        $(".sec_dot2_hidden").css({"background":"black"});
        $(".sec_dot4_hidden").css({"background":"black"});
        $(".sec_dot3_hidden").css({"background":"#13bfb1"});		
    if($(this).hasClass("return")){  
        $(".company_slide").stop().animate({"margin-left":"-1256px"},500)}
        else{  
        $(".company_slide").stop().animate({"margin-left":"0px"},500)}
    })
    $(".sec_dot4_hidden").click(function(){	
        $(".act_dot").css({"opacity":"1","background":"black"});
        $(".sec_dot_hidden").css({"background":"black"});
        $(".sec_dot1_hidden").css({"background":"black"});
        $(".sec_dot2_hidden").css({"background":"black"});
        $(".sec_dot3_hidden").css({"background":"black"});
        $(".sec_dot4_hidden").css({"background":"#13bfb1"});		
    if($(this).hasClass("return")){  
        $(".company_slide").stop().animate({"margin-left":"-1564px"},500)}
        else{  
        $(".company_slide").stop().animate({"margin-left":"0px"},500)
        $(".sec_dot4_hidden").css({"background":"black"});}
    })
    // End slider
   }	
  