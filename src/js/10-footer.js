document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('#footer');
  
    function checkingScroll() {
      const footerPosition = footer.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;
  
      if (footerPosition < screenPosition) {
          footer.classList.add('visible');
          updatePreview();
      }
    }
  
    window.addEventListener('scroll', checkingScroll);
    checkingScroll();
  });