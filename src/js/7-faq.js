import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion-container', {
  duration: 10000,
  showMultiple: false,
  openOnInit: [0],
});

document.addEventListener('DOMContentLoaded', function () {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function () {
      const allItems = document.querySelectorAll('.accordion-item');
      const allContents = document.querySelectorAll('.accordion-content');

      allItems.forEach(item => {
        item.classList.remove('active');
      });

      allContents.forEach(content => {
        if (content !== this.nextElementSibling) {
          content.style.display = 'none';
        }
      });

      const item = this.parentElement;
      const content = this.nextElementSibling;

      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
        item.classList.add('active');
      }
    });
  });
});
