$(window).on('load',() => {

  $('.col-nav-bar').removeClass('active');

  if($('.home-page').length > 0){
    $('.col-nav-bar.home-bar-section').addClass('active');
  }
  else if ($('.corsi-page').length > 0){
    $('.col-nav-bar.corsi-bar-section').addClass('active');
  }
  else if ($('.noi-page').length > 0){
    $('.col-nav-bar.noi-bar-section').addClass('active');
  }
  else if ($('.sa-page').length > 0){
    $('.col-nav-bar.sa-bar-section').addClass('active');
  }
})
