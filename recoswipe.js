// =================================================================
// RECOSWIPE.JS
// =================================================================

const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
 
   effect: "flip",

   autoplay: {
    delay: 10,
    disableOnInteraction: true,
  },

   // If we need pagination
   pagination: {
   /*  el: '.swiper-pagination', */
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
  
   },
 
   // And if we need scrollbar
   scrollbar: {
 /*    el: '.swiper-scrollbar',  */
   },
 });

 function InitializePage() {

 }
