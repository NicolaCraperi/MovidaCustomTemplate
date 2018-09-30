$(window).on('load',() => {

  $('.col-nav-bar').removeClass('active');

  if($('.home-page').length > 0){
    $('.col-nav-bar.home-bar-section').addClass('active');
  }
  else if ($('.corsi-page').length > 0){
    $('.col-nav-bar.corsi-bar-section').addClass('active');
  }
})
