
import Swiper from 'swiper';
import { doFetch } from './api';
import 'swiper/css';

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
  // Optional parameters
  cssMode: true, 
  slidesPerView: slidesPerView,
  slidesPerGroup: 1,
  // Navigation arrows
  navigation: {
    disabledClass: "BtnOff",
    nextEl: '.ButtonNext',
    prevEl: '.ButtonPrev',
  },
  // mousewheel: true,
  keyboard: true,
  touch: true,
  });
}

function doMurkUp(review) {
  return`
        <div class="Review swiper-slide">
        <img class="UserIcon" src="${review.avatar_url}" alt="Avatar">
          <h4 class="Name">${review.author}</h4>
          <p class="ReviewText">${review.review}</p>
        </div>
      `
}

// запит з бекенду=========================================================

doFetch(createSwiper, doMurkUp)






// А це те що хотіла додати в окремий файл  api.js =================


import iziToast from 'izitoast';

export async function PostRequest(email, comment) {
  const BASE_URL = 'https://portfolio-js.b.goit.study/api';
  const END_POINT = '/requests';
  const url = BASE_URL + END_POINT;

  const options = {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      comment: comment,
    }),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  return await fetch(url, options).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.status);
    }
    return resp.json();
  });
}

export function doFetch(foo, murkUpFoo) {
  const REVIEWS_LIST = document.getElementById('reviewsList');
  fetch("https://portfolio-js.b.goit.study/api/reviews")
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((reviews) => {
      const markup = reviews.map((review) => {
        return murkUpFoo(review)
      }).join("");

      REVIEWS_LIST.innerHTML = markup; 
      foo();
    })
    .catch((error) => {
      console.error(error);
      iziToast.error({
        title: 'Помилка',
        message: 'Не вдалося завантажити список відгуків',
      });
      REVIEWS_LIST.innerHTML = "Not found"; 
    });
}

