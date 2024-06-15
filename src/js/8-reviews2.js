

/** 

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


export async function PostRequest(email, comment) {
  const BASE_URL = 'https://portfolio-js.b.goit.study/api';
  const END_POINT = '/reviews';
  const url = BASE_URL + END_POINT;

  const options = {
    method: 'POST',
    body: JSON.stringify({ email, comment }),
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
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(reviews => {
      const markup = reviews.map(review => murkUpFoo(review)).join("");
      REVIEWS_LIST.innerHTML = markup;
      foo();
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        title: 'Помилка',
        message: 'Не вдалося завантажити список відгуків',
      });
      REVIEWS_LIST.innerHTML = "Not found";
    });
}
    *///