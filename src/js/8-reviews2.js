import axios from 'axios';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

document.addEventListener('DOMContentLoaded', () => { 
  AOS.init({ 
      offset: 15, 
    }); 
});

const review = document.querySelector('.reviews-list');

async function fetchReviews() {
  const url = 'https://portfolio-js.b.goit.study/api/reviews';
  try {
    const response = await axios(url);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch reviews');
  }
}

function supportsWebP() {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img.width === 1);
    img.onerror = () => resolve(false);
    img.src = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TAYAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
  });
}


async function renderReviews() {
  try {
    const data = await fetchReviews();
    const reviewElements = data
      .map(reviews => {
        return `
        <li class='reviews-item swiper-slide' data-aos='fade-right' id='${reviews._id}'>
        
          <p class='author-review'>${reviews.review}</p>
    <div class='author-info'>
      <img class='reviews-photo' src="${reviews.avatar_url}" alt="author_photo">
      <h3 class='author-name'>${reviews.author}</h3>
  
        </div>
  
</li>`;
      })
      .join('');

    review.insertAdjacentHTML('beforeend', reviewElements);

    const swiper = new Swiper('.review-swiper', {
      watchOverflow: true,
      keyboard: true,
      navigation: {
        nextEl: '.right-btn',
        prevEl: '.left-btn',
      },

      direction: 'horizontal',
      slidesPerView: 1,
      breakpoints: {

        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },

        360: {
          slidesPerView: 1,
          spaceBetween: 16,
        },

        768: {
          slidesPerView: 1,
          spaceBetween: 16,
        },

        1280: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
      },
    });

    const isWebPSupported = await supportsWebP();
    if (isWebPSupported) {
      document.querySelectorAll('.reviews-photo').forEach(img => {
        const webpSrc = img.src.replace(/\.(jpe?g|png)$/i, '.webp');
        img.src = webpSrc;
      });
    }
    
  } catch (error) {
    review.textContent = 'NOT FOUND';
    iziToast.warning({
      title: 'Caution',
      message: 'NOT FOUND ANY REVIEWS',
    });
  }
}

renderReviews();
