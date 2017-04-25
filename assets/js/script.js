$(document).ready(function() {

  // var loaded = localStorage.getItem("loaded");
  // localStorage.setItem("loaded", loaded);

  // if (loaded>0) {
  //   $("#splashscreen").hide();
  //   console.log(loaded);
  // };


  $("#welcome-overlay,#welcome-logo,#welcome-text").click(function(){
    $("#welcome-overlay").fadeOut(300, function(){
      $(this).remove(); });;
    $("#welcome-bg").fadeOut(300, function(){
      $(this).remove(); });;
    $("#welcome-logo").slideUp(400, function(){
      $(this).remove(); });;
    $("#welcome-text").fadeOut(300, function(){
      $(this).remove(); });;
    $("#welcome-circle").slideUp(300, function(){
      $(this).remove(); });;
    // loaded=1;
  });

  $("#modal-container").hide();

  $("#link").click(function() {
    $("#modal-container").fadeIn(400);
    $('body').addClass('no-scroll');
  });

  $("#modal-overlay, #close").click(function(){
    $("#modal-container").fadeOut(400);
    $('body').removeClass('no-scroll');
    // $(".picture").removeClass("pic-click");
  });

  $("#clickhere").click(function(){
    $("#inserthere").html("*Some stories may be completely falsified. Read at your own risk of believing lies about me.");
  });


  $('.page-wrapper').click(function() {
    if ($('.sidebar-container').hasClass('sidebar-active')) {
      $('body').removeClass('no-scroll');
      $('#sidebar-button').removeClass('button-active');
      $('.sidebar-container').removeClass('sidebar-active');
      $('.page-wrapper').removeClass('wrapper-active');
    };
  });


  $("#cake1").click(function() {
    $('html, body').animate({
        scrollTop: $("#one").offset().top
    }, 500);
  });

  $("#cake2").click(function() {
    $('html, body').animate({
        scrollTop: $("#two").offset().top
    }, 500);
  });

  $("#cake3").click(function() {
    $('html, body').animate({
        scrollTop: $("#three").offset().top
    }, 500);
  });

  $("#cake4").click(function() {
    $('html, body').animate({
        scrollTop: $("#four").offset().top
    }, 500);
  });

  $("#cake5").click(function() {
    $('html, body').animate({
        scrollTop: $("#five").offset().top
    }, 500);
  });

  $("#cake6").click(function() {
    $('html, body').animate({
        scrollTop: $("#six").offset().top
    }, 500);
  });

  $(".scrollup").click(function() {
    $('html,body').animate({scrollTop: 0});
  });


  // $(".order-button").click(function(){
  //   $("inserthere2").html("Your order has been received, thank you!");
  // });
  

});