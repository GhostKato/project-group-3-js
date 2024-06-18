import axios from "axios";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.together-form');
const modal = document.getElementById('together-modal');
const closeButton = document.querySelector('.together-modal-close');
const errorText = document.querySelector('.together-text-error');
const okIcon = document.querySelector('.together-icon-ok');
const emailInput = document.querySelector('.together-email');
const textInput = document.querySelector('.together-text');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = emailInput.value;
    const comment = textInput.value;

    if (!email.match(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        okIcon.style.display = 'none';
        errorText.style.display = 'block';
        iziToast.info({
            title: 'Hey!',
            message: 'Please enter a valid email address!',
            position: 'topCenter',
        });
        return;
    }

    sendPost(email, comment);
});

function sendPost(email, comment) {
    const data = {
        email: email,
        comment: comment,
    };

    axios.post('https://portfolio-js.b.goit.study/api/requests', data, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (response.data) {
            openModal();
            form.reset();
        }
    })
    .catch(error => {
        iziToast.error({
            title: 'Error',
            message: 'Failed to submit your request. Please try again later.',
            position: 'topCenter',
        });
    });
}

emailInput.addEventListener('input', function(event) {
    const inputValue = event.target.value.trim();

    if (inputValue === '') {
        okIcon.style.display = 'none';
        errorText.style.display = 'none';
    } else if (!inputValue.match(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        okIcon.style.display = 'none';
        errorText.style.display = 'block';
    } else {
        okIcon.style.display = 'block';
        errorText.style.display = 'none';
    }
});

closeButton.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

function openModal() {
    modal.style.display = 'flex';
    document.addEventListener('keydown', handleEscape);
}

function closeModal() {
    modal.style.display = 'none';
    document.removeEventListener('keydown', handleEscape);
}

function handleEscape(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}