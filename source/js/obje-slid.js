$(document).ready(function() {
  $('.burger').click(function(event) {
    $('.modal').toggleClass('modal--visible');
  });

  $('.menu__close ').click(function(event) {
    $('.modal').toggleClass('modal--visible');
  });
});
