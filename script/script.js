$(document).ready(function(){
$(".menu_b").click(function(){
    $(".swipe").css({"left":"0px","transition":"0.5s"})   
})
$(".close").click(function(){
    $(".swipe").css({"left":"-285px","transition":"0.5s"})   
})
$(window).scroll(function(){
    if ($(this).scrollTop() > 130) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
        return false;
    }
});
$('.scrollup').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    $(this).css({"color":"white"})
    return false;
});

var index=1;
var x=index+2;

$(".right_icon").click(function () {  
if(index==1){
   $(".slide").css({ "background":"url(images/slide2.jpg)","transition": "all .5s ease-in","background-size": "cover",
"background-repeat": "no-repeat","background-position": "center center"});
$(".slide .matrix h1").html("<h1>antique marketplace</h1>");
$(".slide .text p").html("Antique is one of the best marketplace that allows you to buy the items you love and discover new favorites.");
$(".slide .text p").css({"animation-name":"thirdp","animation-duration":"1.3s"})
index++;
return false;}
 else if(index==2){
$(".slide").css({ "background":"url(images/slide3.jpg)","transition": "all .5s ease-in","background-size": "cover",
"background-repeat": "no-repeat","background-position": "center center"});
$(".slide .matrix h1").html("<h1>antique theme</h1>");
$(".slide .text p").html("The best theme for Antique, we always want to bring R&D IT closer to your business & understand what you need.");
$(".slide .text p").css({"animation-name":"lightSpeedIn","animation-duration":"1.3s"})
index++;
return false;}
else {
 $(".slide").css({ "background":"url(images/slide1.jpg)","transition": "all .5s ease-in","background-size": "cover",
"background-repeat": "no-repeat","background-position": "center center"});
$(".slide .matrix h1").html("<h1>antique collection</h1>");
$(".slide .text p").html("The world's largest curated marketplace for antiques. The easiest way to collect items of such beauty and authenticity.");
$(".slide .text p").css({"animation-name":"firstp","animation-duration":"1.3s"})
index-=2;
 return false;}
    });
  $(".left_icon").click(function () {  
if(index==1){
   $(".slide").css({ "background":"url(images/slide3.jpg)","transition": "all .5s ease-in","background-size": "cover",
    "background-repeat": "no-repeat","background-position": "center center"});
    $(".slide .matrix h1").html("<h1>antique theme</h1>");
    $(".slide .text p").html("The best theme for Antique, we always want to bring R&D IT closer to your business & understand what you need.");    
       index+=2;
          return false;}
            else if(index==2){
     $(".slide").css({ "background":"url(images/slide1.jpg)","transition": "all .5s ease-in","background-size": "cover",
    "background-repeat": "no-repeat","background-position": "center center"});
        $(".slide .matrix h1").html("<h1>antique collection</h1>");
        $(".slide .text p").html("The world's largest curated marketplace for antiques. The easiest way to collect items of such beauty and authenticity.");   
            index--;
            return false;}
            else {
        $(".slide").css({ "background":"url(images/slide2.jpg)","transition": "all .5s ease-in","background-size": "cover",
      "background-repeat": "no-repeat","background-position": "center center"});
       $(".slide .matrix h1").html("<h1>antique marketplace</h1>");
       $(".slide .text p").html("Antique is one of the best marketplace that allows you to buy the items you love and discover new favorites.");
       index--;
      return false;}
            });

// Accord

$(".registr_c").click(function(){
    
    $(".registr_page").fadeIn(400);

})
$(".login_c").click(function(){
    
    $(".login_page").fadeIn(400);

})
$(".question").click(function(){
    $(".login_page").fadeOut();
    $(".reset_page").fadeIn(400);
})
$(".close_r").click(function(){  
    $(".registr_page").fadeOut(400);
    $(".login_page").fadeOut(400);
    $(".reset_page").fadeOut(400);
    $(".search_page").fadeOut(400);
})
$(".log").click(function(){  
    $(".reset_page").fadeOut();
    $(".login_page").fadeIn(400);
})
$(".reg_p").click(function(){  
    $(".reset_page").fadeOut();
    $(".registr_page").fadeIn(400);
})
$(".f_login").click(function(){  
    $(".registr_page").fadeOut();
    $(".login_page").fadeIn(400);
})
$(".signin").click(function(){  
    $(".login_page").fadeIn(400);
})
$(".f_register").click(function(){  
    $(".login_page").fadeOut();
    $(".registr_page").fadeIn(400);
})
$(".pencile").click(function(){  
    $(".registr_page").fadeIn(400);
})
$(".sres_hide").click(function(){  
    $(".search_page").fadeIn(400);
})
$(".s_search").click(function(){  
    $(".search_page").fadeIn(400);
})

$(window).click(function(event) {
    if(event.target.className=="registr_page"||event.target.className=="login_page"||event.target.className=="reset_page"||event.target.className=="search_page"){
        $(".registr_page").fadeOut(500);
        $(".login_page").fadeOut(500);
        $(".reset_page").fadeOut(500);
        $(".search_page").fadeOut(500);
    }
});

function sliderInit() {
    newwidth=$(".slide img").width();    
    smallwidth=$(".slide_s img").width();
    length= $(".slide_in").children().length;  
    smallength=$(".slide_small").children().length;
    prev=0;
    margin=0;
    small=0;
}
sliderInit();

$(window).on('resize', function() {
    sliderInit();
})

$("#next").click(function(){
    prev++; 
    margin+=newwidth;
    small+=smallwidth; 
    if(prev>=length){   
        margin=newwidth*4;
        small=smallwidth*4;
      $(".big_box").css({"display":"block"});
      $("html").css({"overflow":"hidden"});
      bwidth=$(".slide_b img").width();
      blength=$(".main").children().length;
      swipe=0;
      prev_b=0;
     $("#next_b").click(function(){
         prev_b++;
         swipe+=bwidth;
         if(prev_b>=blength){
            swipe=0;
            prev_b=0
        }
         $(".slide_b").css({"margin-left":-swipe})
         return false;
         
     })
     
     $(".slide_b img").click(function(){
        next_click();
        return false;
     })
     $("#prev_b").click(function(){
         prev_b--;
         swipe-=bwidth;
         if(prev_b<=0){
         swipe =bwidth*(blength-1);
         prev_b=blength;
        }
         $(".slide_b").css({"margin-left":-swipe})
         return false;
     })
  
     $(window).click(function(event) {
        if(event.target.className=="big_box"){
            $(".big_box").css({"display":"none"});
            $("html").css({"overflow":"scroll"});
        }
    });
    }
    $(".slide img").css({"margin-left":-margin,"transition":"0.3s ease"})
    $(".slide_s img").css({"margin-left":-small,"transition":"0.3s ease"})
    $(".slide_s").prev().children().removeClass("active_img");

    return false;  
})    
$("#prev").click(function(){
    prev--;
     margin-=newwidth;
     small-=smallwidth;
     if (prev <= 0) {
        margin=0;
        small=0;
        $(".big_box").css({"display":"block"});
        $("html").css({"overflow":"hidden"});
        $(".slde_b:first-child img").html("<img src=images/drink1-b.jpg>")
        bwidth=$(".slide_b img").width();
        blength=$(".main").children().length;
        swipe=0;
        prev_b=0;
       $("#next_b").click(function(){
           prev_b++;
           swipe+=bwidth;
           if(prev_b>=blength){
              swipe=0;
              prev_b=0
          }
           $(".slide_b").css({"margin-left":-swipe})
           return false;
       })
       $("#prev_b").click(function(){
           prev_b--;
           swipe-=bwidth;
           if(prev_b<=0){
           swipe =bwidth*(blength-1);
           prev_b=blength;
          }
           $(".slide_b").css({"margin-left":-swipe})
           
           return false;
       })
      
 }
     $(".slide img").css({"marginLeft" :-margin,"transition" : "0.3s ease"})
     $(".slide_s img").css({"margin-left":-small,"transition":"0.3s ease"})
     
     return false;
  })
  function next_click(){
    prev_b++;
    swipe+=bwidth;
    if(prev_b>=blength){
       swipe=0;
       prev_b=0
   }
    $(".slide_b").css({"margin-left":-swipe})
    return false;
 }
 function slide_s(){
    prev++; 
    margin+=newwidth;
    small+=smallwidth;
    if(prev>=length){
        margin=newwidth*4;
        small=smallwidth*4; 
    }
    $(".slide img").css({"marginLeft" :-margin,"transition" : "0.3s ease"})
     $(".slide_s img").css({"margin-left":-small,"transition":"0.3s ease"})
     $(".slide_s").prev().children().removeClass("active_img");
 }

 $(window).click(function(event) {
    if(event.target.className=="big_box"){
        $(".big_box").css({"display":"none"});
        $("html").css({"overflow":"scroll"});
      }
});
 $(".slide_s").click(function() {
    
    slide_s();
});
$('.foldable .sec_li').click(function () {
    if ($('.sec_act').css({ 'display':'none' })) {
        $(this).css({ 'border-top': '1px solid #993816' })
        $(".foldable .active_li").css({"border-top":"none"})
        $('.active').slideUp();
        $('.sec_act').slideDown();
    }
    else {
        $(".foldable .active_li").css({"border-top":"1px solid #993816"})
        $('.active').slideDown();      
        $('.sec_act').slideUp();      
    }
})
$('.foldable .active_li').click(function () {
    if ($('.active').css({ 'display':'none' })) {
        $(this).css({ 'border-top': '1px solid #993816' })
        $(".foldable .sec_li").css({"border-top":"none"})
        $('.active').slideDown();
        $('.sec_act').slideUp();
    }
    else {
        $(".foldable .sec_li").css({"border-top":"1px solid #993816"})
        $('.sec_act').slideDown();      
        $('.active').slideUp();      
    }
})

$(".products_list li").click(function(){
  $("li").removeClass("active");
  $(this).addClass("active");
  return false;
})
});
var btn= document.getElementsByClassName("click_btn");

var a;
var up=document.getElementsByClassName("up");
var down_i=document.getElementsByClassName("down");
for (a = 0; a < btn.length; a++) {
    btn[a].addEventListener("click", function() {
        var down = this.nextElementSibling;
        if (down.style.display == "block") {
            down.style.display = "none";
            down_i.style.display="none"
            up.style.display="block"
            
        } else {
            down.style.display = "block";
            up.style.display="block"
            down_i.style.display="none"
        }
    });
}


var range_value = document.getElementById("f_range");
var range_value1 = document.getElementById("f_range1");
var result = document.getElementById("from");
var result1 = document.getElementById("to");
result.innerHTML = range_value.value;
result1.innerHTML = range_value1.value;

range_value.oninput = function() {
  result.innerHTML = this.value;
}
range_value1.oninput = function() {
  result1.innerHTML = this.value;
}



