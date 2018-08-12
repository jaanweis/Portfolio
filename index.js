$(".nav li").on("click", function(){
  $(".nav li").removeClass("active");
  $(this).addClass("active");
});


$(function(){
  $('.carousel').carousel({
    interval: 4500,
    pause: false,
    wrap: true,
    keyboard:true
  });
});
