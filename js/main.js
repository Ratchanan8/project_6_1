const swiper = new Swiper('.swiper', {
    // Optional parameters
   // direction: 'vertical',  // ลบทิ้ง
    loop: true,
    parallax:true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swipe__arrow--next', 
      prevEl: '.swiper__arrow--prev',
    },
  
});