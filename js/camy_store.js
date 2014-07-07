$(document).ready(function() {

  $(".menu_layer1").hover(
    function(){
    $(this).children(".submenu").fadeIn(300);
    },
    function(){
    $(this).children(".submenu").fadeOut(200);      
    }
  );

  $(".slides").jCarouselLite({
    btnNext: ".next_btn",
    btnPrev: ".pre_btn",
    visible: 4    
  });

  $(".sponsor_list").jCarouselLite({
    btnNext: ".next_sponsor",
    btnPrev: ".pre_sponsor",
    visible: 5
  });

  $(".sponsor_wrapper").mouseenter(function(){
    $(".next_sponsor").fadeIn(100).animate({right:"+=12px"}, 100);
  });
  $(".sponsor_wrapper").mouseleave(function(){
    $(".next_sponsor").animate({right:"-25px"}, 100).fadeOut("fast");
  });  

  $(".sponsor_wrapper").mouseenter(function(){
    $(".pre_sponsor").fadeIn(100).animate({left:"+=12px"}, 100);
  });
  $(".sponsor_wrapper").mouseleave(function(){
    $(".pre_sponsor").animate({left:"-25px"}, 100).fadeOut("fast");
  });    
});
