document.addEventListener('DOMContentLoaded', function() {
            // Відкриття/закриття модального вікна
            const refs = {
                openModalBtn: document.querySelector("[data-menu-open]"),
                closeModalBtn: document.querySelector("[data-menu-close]"),
                modal: document.querySelector("[data-menu]"),
            };

            if (refs.openModalBtn && refs.closeModalBtn && refs.modal) {
                refs.openModalBtn.addEventListener("click", toggleModal);
                refs.closeModalBtn.addEventListener("click", toggleModal);

                function toggleModal() {
                    refs.modal.classList.toggle("is-open");
                }
            }

            // Scroll to section
            function smoothScroll(targetEl, duration) {
                let target = document.querySelector(targetEl);
                if (!target) {
                    console.log('Елемент куди скролити не знайдено:', targetEl);
                    return;
                }
                let targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                let startPosition = window.pageYOffset;
                let startTime = null;

                const ease = function(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t + b;
                    t--;
                    return -c / 2 * (t * (t - 2) - 1) + b;
                };

                const animation = function(currentTime) {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const run = ease(timeElapsed, startPosition, targetPosition - startPosition, duration);
                    window.scrollTo(0, run);
                    if (timeElapsed < duration) requestAnimationFrame(animation);
                };
                requestAnimationFrame(animation);
            }

            const links = document.querySelectorAll('a.scroll-to');
            if (links) {
                links.forEach(link => {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        const currentTarget = this.getAttribute('href');
                        if (refs.modal && refs.modal.classList.contains('is-open')) {
                            refs.modal.classList.remove('is-open');
                        }
                        smoothScroll(currentTarget, 1000);
                    });
                });
            }

            // Scroll to top button
            const scrollToTopBtn = document.querySelector('.scroll-to-top');
            if (scrollToTopBtn) {
                window.addEventListener('scroll', () => {
                    if (window.scrollY > 300) {
                        scrollToTopBtn.style.display = 'block';
                    } else {
                        scrollToTopBtn.style.display = 'none';
                    }
                });
                scrollToTopBtn.addEventListener('click', () => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });
            }
        });