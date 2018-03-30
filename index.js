$(".nav li").on("click", function(){
  $(".nav li").removeClass("active");
  $(this).addClass("active");
});

$(".navbar-btn-vote").on("click", function(){
  $(".navbar-btn-vote").addClass("disabled");
  $(this).addClass("btn-primary");
});