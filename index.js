$(".nav li").on("click", function(){
  $(".nav li").removeClass("active");
  $(this).addClass("active");
});


$(function(){
  $('.carousel').carousel({
    interval: 3000,
    pause: false,
    wrap: true,
    keyboard:true
  });
});
