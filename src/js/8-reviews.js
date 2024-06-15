/*


import Swiper from 'swiper';
import 'swiper/css';
import { doFetch } from './8-reviews2';

const SCREEN_WIDTH = window.innerWidth;
let slidesPerView;

if (SCREEN_WIDTH >= 1280) {
  slidesPerView = 4;
} else if (SCREEN_WIDTH >= 768 && SCREEN_WIDTH < 1280) {
  slidesPerView = 2;
} else if (SCREEN_WIDTH < 768) {
  slidesPerView = 1;
}

function createSwiper() {
  const SWIPER = new Swiper('.reviews-swiper', {
    cssMode: true,
    slidesPerView: slidesPerView,
    slidesPerGroup: 1,
    navigation: {
      disabledClass: "BtnOff",
      nextEl: '.ButtonNext',
      prevEl: '.ButtonPrev',
    },
    keyboard: true,
    touch: true,
  });
}

function doMurkUp(review) {
    return `
  <li class="reviews-list-item swiper-slide">
  <p class="ReviewText">${review.review}</p>
    <div class="Review swiper-slide">
        <img class="UserIcon" src="${review.avatar_url}" alt="Avatar"  
        width="32"
        height="32"  >
          <h3 class="Name">${review.author}</h3>
          
        </div>
        </li>`;
}

doFetch(createSwiper, doMurkUp);
*///
