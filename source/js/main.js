// var acc = document.getElementsByClassName("accordion");
//   var i;

//   for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function () {
//       this.classList.toggle("accordion__active");
//       var panel = this.nextElementSibling;
//       if (panel.style.maxHeight) {
//         panel.style.maxHeight = null;
//       } else {
//         panel.style.maxHeight = panel.scrollHeight + "px";
//       }
//     });

//   }
var acc = document.getElementsByClassName("accordion"),
    i;
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        for (j = 0; j < acc.length; j++) {
            if (acc[j] !== this) {
                acc[j].classList.remove("accordion__active");
                acc[j].nextElementSibling.classList.remove("show");

            } else {
                this.classList.toggle("accordion__active");
                this.nextElementSibling.classList.toggle("show");
            }

        }

    }
}



$(document).ready(function() {
  $('.burger').click(function(event) {
    $('.menu').toggleClass('menu--visible');
  });

  $('.menu__close ').click(function(event) {
    $('.menu').toggleClass('menu--visible');
  });
});


$('.info__imgs-2').slick({
  centerMode: true,
  centerPadding: '120px',
  slidesToShow: 4,
  arrows: false,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        variableWidth: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '4px',
        variableWidth: true,
        slidesToShow: 3
      }
    }
  ]
});

$('.tab').on('click', function(e){
  e.preventDefault();
  $('.tab-section').removeClass('tabs-content--active');
  $('.tab').removeClass('tab_active');

  $($(this).attr('href')).addClass('tabs-content--active');
  $(this).addClass('tab_active');
});
