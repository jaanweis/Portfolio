$(".nav li").on("click", function(){
  $(".nav li").removeClass("active");
  $(this).addClass("active");
});

$(".navbar-btn-vote").on("click", function(){
  $(".navbar-btn-vote").addClass("disabled");
  $(this).addClass("btn-primary");
});

// $(function(){
//   $('[data-toggle="tooltrip"]').tooltrip();
// });

$(function(){
  $('.carousel').carousel({
    interval: 3000,
    pause: false,
    wrap: true,
    keyboard:true
  });
});

$("#pop-up-close").on("click", function(){
  $(".pop-up").removeClass("pop-up");
  //$(".go-away").addClass("pop-up-away");
  $(".go-away").remove();
});