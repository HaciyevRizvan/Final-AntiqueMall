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
setInterval(function(){ 
var nextSlide = $(".slider_in.active").hide().removeClass("active").next(".slider_in")  
if (nextSlide.length === 0) {
   nextSlide = $(".slider_in").first();
}
  nextSlide.fadeIn().addClass("active")
    $('#slider .text p').css({"animation":"lightSpeedIn","animation-duration":"1.5s ease-in","animation-delay":"2s"});
   
} ,7000);

$(".right_icon").click(function(){
    $('#slider .text p').css({"animation":"lightSpeedIn","animation-duration":"1s"});

var nextSlide =  $(".slider_in.active").hide().removeClass("active").next(".slider_in").addClass("active")

 if (nextSlide.length === 0){
   nextSlide = $(".slider_in").first().fadeIn();
}
nextSlide.fadeIn().addClass("active");
$('#slider .text p').css({"animation":"lightSpeedIn","animation-duration":"1.5s ease-in","animation-delay":"2s"});

});
var index=0;
$(".left_icon").click(function(){
    $('#slider .text p').css({"animation":"lightSpeedIn","animation-duration":"1s"});
 
    var nextSlide =  $(".slider_in.active").hide().removeClass("active").next(".slider_in").addClass("active")
     if (nextSlide.length === 0) {
       nextSlide = $(".slider_in").first().fadeIn();
       index=0;
    }
    nextSlide.fadeIn().addClass("active");
    $('#slider .text p').css({"animation":"lightSpeedIn","animation-duration":"1.5s ease-in","animation-delay":"2s"});
  
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
//---------------------------------------- resize function--------------------------------
function sliderInit() {
    slideC=$(".slide_c img").width($(".slider").width());  
    newwidth=$(".slide_c").width();  
    slideC=newwidth; 
    smallwidth=$(".slide_s").width(); 
    length= $(".slide_in").children().length;  
    smallength=$(".slide_small").children().length;
    prev=0;margin=0;
    small=0;swipe=0;prev_b=0;
    slideB=$(".slide_b img").width($(".hide_b").width()); 
    bwidth=$(".slide_b").width();
    slideB=bwidth;
    blength=$(".res_b").children().length;
   
}
sliderInit();
$(window).on('resize', function() {
    
    sliderInit();
})
//---------------------------------------- resize function--------------------------------
//--------------------------------next click function----------------------------------
$("#next").click(function(){
    prev++; 
    margin+=newwidth;
    small+=smallwidth; 
    if(prev>=length){   
        margin=newwidth*(length-1);
        small=smallwidth*(smallength-1);
      $(".big_box").css({"visibility":"visible"});
      $("html").css({"overflow":"hidden"}); }
    $(".slide_c img").css({"margin-left":-margin,"transition":"0.3s ease"})
    $(".slide_small").css({"margin-left":-small,"transition":"0.3s ease"})
    $(".slide_s.actives").removeClass("actives").next(".slide_s").addClass("actives");
    return false;  
}) 
 //----------------------------next click function----------------------------------
 $(window).click(function(event) {
    if(event.target.className=="big_box"){
        $(".big_box").css({"visibility":"hidden"});
        $("html").css({"overflow":"scroll"});}
});
//------------------next_click function-------------------------
function nextb_click(){
    prev_b++;
    swipe+=bwidth;
    if(prev_b>=blength){
       swipe=0;
       prev_b=0
   }
    $(".slide_b img").css({"margin-left":-swipe})
    return false;
 }
 function prevb_click(){
    prev_b--;
    swipe-=bwidth;
     if(prev_b<=0){
        swipe=bwidth*(blength-1);   
        prev_b=blength;   
    }
     $(".slide_b img").css({"margin-left":-swipe})
     return false;
 }
//-------------------------- b slide--------------------------
$("#next_b").click(function(){
    nextb_click();
    return false;      
 })    
 $(".slide_b img").click(function(){
    nextb_click();
    return false;
 })
 $("#prev_b").click(function(){
    prevb_click()
    return false;
 })
//------------------------ b slide--------------------------------

//---------------------------- prev click-----------------------------
$("#prev").click(function(){
     prev--;
     margin-=newwidth;
     small-=smallwidth;
     if (prev <= 0) {
        margin=0;
        small=0;
        prev=margin;
        $(".big_box").css({"visibility":"visible"});
        $("html").css({"overflow":"hidden"}); 
       
 }
     $(".slide_c img").css({"marginLeft" :-margin,"transition" : "0.3s ease"})
     $(".slide_small").css({"margin-left":-small,"transition":"0.3s ease"})
     $(".slide_s.actives").removeClass("actives").prev(".slide_s").addClass("actives");
     
     return false;
  })
//---------------------------- prev click-----------------------------
//window click function
 $(window).click(function(event) {
    if(event.target.className=="big_box"){
        $(".big_box").css({"visibility":"hidden"});
        $("html").css({"overflow":"scroll"});   
      }
});
eq=$(".slide_s").eq();
//slide_s click function
 $(".slide_s").click(function() {
    prev++; 
    margin+=newwidth;
    small+=smallwidth;
    if(prev>=length){
     margin=newwidth*4;
     small=smallwidth*4;    
    }
     $(".slide_c img").css({"marginLeft" :-margin,"transition" : "0.3s ease"});
     $(".slide_small").css({"margin-left":-small,"transition":"0.3s ease"});
     $(".slide_s.actives").removeClass("actives").next(this).addClass("actives");
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
  $(this).addClass("active").siblings().removeClass("active");
  return false;
})

$("#plus").click( function () {
    var value = $("#number").val();
    value++;
    $("#number").val(value);
});

$("#minus").click( function () {
    var value = $("#number").val();
    value--;
    $("#number").val(value);
    if($("#number").val()<=1){

       $("#number").val(1);
       
    }
});




});
var btn=document.getElementsByClassName("click_btn");
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
// var range_value = document.getElementById("f_range");
// var range_value1 = document.getElementById("f_range1");
// var result = document.getElementById("from");
// var result1 = document.getElementById("to");
// result.innerHTML = range_value.value;
// result1.innerHTML = range_value1.value;

// range_value.oninput = function() {
//   result.innerHTML = this.value;
// }
// range_value1.oninput = function() {
//   result1.innerHTML = this.value;
// }



