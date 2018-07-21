$(window).scroll(function(){
    var aTop = $('.movida-nav-bar').height();
    if($(this).scrollTop()>=aTop){
        $('.movida-nav-bar').addClass('hidden')
    } else {
      $('.movida-nav-bar').removeClass('hidden')
    }
  });
