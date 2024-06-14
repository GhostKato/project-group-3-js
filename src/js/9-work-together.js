import axios from "axios";

const body = document.body;
const form = document.querySelector('.together-form');
const modal = document.getElementById('together-modal');
const closeButton = document.querySelector('.together-modal-close');
const error = document.querySelector('.together-error');
const ok = document.querySelector('.together-ok');

const togetherHtml = `
    <div id="together-modal" class="together-modal";">
        <div class="together-modal-content">
            <button class="together-modal-close">
                <svg class="together-modal-svg" width="24" height="24">
                    <use href="./img/icons.svg#icon-x"></use>
                </svg>
            </button>
            <h3 class="together-modal-title">Thank you for your interest in cooperation!</h3>
            <p class="together-modal-text">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>
        </div>
    </div>
`;
body.insertAdjacentHTML('beforeend', togetherHtml);


form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const formData = new FormData(form);

    try {
        const response = await axios.post('https://portfolio-js.b.goit.study/api/requests', formData);

        if (response.status === 200) {
            error.style.display = 'none';
            modal.style.display = 'flex';
            ok.style.display = 'block';
            form.reset();
        } else {
            error.style.display = 'block';            
        }
    } catch (err) {
        error.style.display = 'block'; 
        
    }
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

if (error) {
    error.style.display = 'none';
} else {
    console.error('Error element not found in the DOM');
}
