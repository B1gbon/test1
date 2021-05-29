$('[data-modal=get_start]').on('click', function(){
  $('.overlay, #get__start').fadeIn('slow');
});
$('.info__close, .overlay').on('click', function(){
  $('.overlay, #get__start').fadeOut('slow');
});
