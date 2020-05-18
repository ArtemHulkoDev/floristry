$(function(){

  $(".catalog-anchor").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1000 мс
    $('body,html').animate({scrollTop: top}, 1000);
  });

  $('.menu__btn').on('click', function(){
    $('.burger-nav').addClass('active');
  });

  $('.close-btn').on('click', function(){
    $('.burger-nav').removeClass('active');
  });

});
  