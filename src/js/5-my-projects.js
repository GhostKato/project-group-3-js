import image1 from '/img/5-my-projects/image1.jpg';
import image1_2x from '/img/5-my-projects/image1_2x.jpg';
import image2 from '/img/5-my-projects/image2.jpg';
import image2_2x from '/img/5-my-projects/image2_2x.jpg';
import image3 from '/img/5-my-projects/image3.jpg';
import image3_2x from '/img/5-my-projects/image3_2x.jpg';
import image4 from '/img/5-my-projects/image4.jpg';
import image4_2x from '/img/5-my-projects/image4_2x.jpg';
import image5 from '/img/5-my-projects/image5.jpg';
import image5_2x from '/img/5-my-projects/image5_2x.jpg';
import image6 from '/img/5-my-projects/image6.jpg';
import image6_2x from '/img/5-my-projects/image6_2x.jpg';
import image7 from '/img/5-my-projects/image7.jpg';
import image7_2x from '/img/5-my-projects/image7_2x.jpg';
import image8 from '/img/5-my-projects/image8.jpg';
import image8_2x from '/img/5-my-projects/image8_2x.jpg';
import image9 from '/img/5-my-projects/image9.jpg';
import image9_2x from '/img/5-my-projects/image9_2x.jpg';
import image10 from '/img/5-my-projects/image10.jpg';
import image10_2x from '/img/5-my-projects/image10_2x.jpg';
import iconsSvgUrl from '/img/icons.svg';

import AOS from 'aos';
import 'aos/dist/aos.css';


document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {title: "Wallet webservice", image: image1, image2x: image1_2x, technologies: "React, JavaScript, Node JS, Git", link: "https://ghostkato.github.io/project-group-3-js/"},
        {title: "Green harvest webservice", image: image2, image2x: image2_2x, technologies: "React, JavaScript, Node JS, Git", link: "https://ghostkato.github.io/project-group-4-html-css/"},
        {title: "English Exellence website", image: image3, image2x: image3_2x, technologies: "React, JavaScript, Node JS, Git", link: "https://ghostkato.github.io/project-group-3-js/"},
        {title: "mimino website", image: image4, image2x: image4_2x, technologies: "React, JavaScript, Node JS, Git", link: "https://ghostkato.github.io/project-group-3-js/"},
        {title: "power pulse webservice", image: image5, image2x: image5_2x, technologies: "React, JavaScript, Node JS, Git", link: "https://ghostkato.github.io/project-group-3-js/"},
        {title: "chego jewelry website", image: image6, image2x: image6_2x, technologies: "React, JavaScript, Node JS, Git", link: "https://ghostkato.github.io/project-group-3-js/"},
        {title: "energy flow webservice", image: image7, image2x: image7_2x, technologies: "React, JavaScript, Node JS, Git", link: "https://ghostkato.github.io/project-group-3-js/"},
        {title: "fruitbox online store", image: image8, image2x: image8_2x, technologies: "React, JavaScript, Node JS, Git", link: "https://ghostkato.github.io/project-group-3-js/"},
        {title: "vyshyvanka vibes Landing Page", image: image9, image2x: image9_2x, technologies: "React, JavaScript, Node JS, Git", link: "https://ghostkato.github.io/project-group-3-js/"},
        {title: "starlight studio landing page", image: image10, image2x: image10_2x, technologies: "React, JavaScript, Node JS, Git", link: "https://ghostkato.github.io/project-group-3-js/"}
        
    ];

    let currentIndex = 0;
    const projectsPerLoad = 3;

    const projectList = document.getElementById('project-list');
    const loadMoreButton = document.getElementById('load-more');

    function loadProjects() {
        loadMoreButton.classList.add('loading');

        setTimeout(() => {
            for (let i = 0; i < projectsPerLoad; i++) {
                if (currentIndex >= projects.length) {
                    loadMoreButton.style.display = 'none';
                    break;
                }
                const project = projects[currentIndex];
                const listItem = document.createElement('li');
                listItem.classList.add("project-list");
                listItem.innerHTML = `
                    <picture data-aos="zoom-in">
                        <source srcset="${project.image2x} 2x, ${project.image} 1x">
                        <img class="project-image" src="${project.image}" alt="${project.title}">
                    </picture>
                    <div class="project-info">
                        <p class="project-technologies">${project.technologies}</p>
                        <div class="project-title-btn">
                            <p class="project-title">${project.title}</p>
                            <button class="project-btn" onclick="window.open('${project.link}', '_blank')">
    VISIT
    <svg class="arrow-up-right" width="14.5" height="14.5">
        <use xlink:href="${iconsSvgUrl}#icon-visit"></use>
    </svg>
</button>
                        </div>
                    </div>
                `;
                projectList.appendChild(listItem);
                currentIndex++;
            }
            loadMoreButton.classList.remove('loading');
            AOS.refresh();
        }, 700);
    }

    loadMoreButton.addEventListener('click', loadProjects);

    loadProjects();
});