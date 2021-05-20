$(document).ready(function () {

   // Скрипт для блока Team - клик по фото

   $('.team_photos_link').on('click', function (event) {
      event.preventDefault();
      let index = $(this).index('.team_photos_link');

      $('.team_photos_link').removeClass('active_team_photos_link');
      $(this).addClass('active_team_photos_link');

      $('.team_member_photo').removeClass('active_team_member_photo');
      $('.team_member_photo').eq(index).addClass('active_team_member_photo');

      $('.team_member_desc').removeClass('active_team_member_desc');
      $('.team_member_desc').eq(index).addClass('active_team_member_desc');
   });


   // Скрипт для блока Products - фильтр по категориям

   $('.filter_link').on('click', function (event) {
      event.preventDefault();

      let dataType = $(this).data('type');

      if (dataType === 'all') {
         $('.products_item').show();
         return;
      };

      $('.products_item').each(function () {

         let dataProducts = $(this).data('product');

         if (dataType === dataProducts) {
            $(this).show();
         } else {
            $(this).hide();
         };

      });

   });


   // Фуннция для слайдеров (slick slider)

   $('.team_photo_list_wrap_tablet').slick({
      slidesToShow: 2,
      responsive: [
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 1,
            }
         }
      ]
   });


   // Аккордеон главного меня для мобильной версии


   $('.toggle-menu').on('click', function (event) {
      event.preventDefault();

      $('.nav').slideToggle();

      if ($('.toggle-menu').hasClass('toggle-menu-open')) {
         $('.toggle-menu').removeClass('toggle-menu-open');
         return;
      }

      $(this).addClass('toggle-menu-open');

   });

   // Запуск видео по кнопке в блоке PROMO

   $('.promo_video_button').on('click', function () {

      $('.promo_preview').hide();
      $(this).hide();                                    // Скрываем текущую кнопку, на которую нажали
      $('.promo_video_video').trigger('play');
      
      // Альтернативный вариант запуска видео 
      // $('.promo_video_video')[0].play();  

      // Альтернативный вариант скрытия картинки и запуска видео через "родителя"
      // $(this).parent().find('img')[0].play();
      // $(this).parent().find('video')[0].play();
   });

});
