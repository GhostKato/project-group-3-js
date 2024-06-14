document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {title: "Wallet webservice", image: "./img/5-my-projects/image1.jpg", image2x: "./img/5-my-projects/image1_2x.jpg", technologies: "React, JavaScript, Node JS, Git", link: "https://ghostkato.github.io/project-group-3-js/"},
        {title: "Green harvest webservice", image: "./img/5-my-projects/image2.jpg", image2x: "./img/5-my-projects/image2_2x.jpg", technologies: "React, JavaScript, Node JS, Git", link: "https://ghostkato.github.io/project-group-4-html-css/"},
        {title: "English Exellence website", image: "./img/5-my-projects/image3.jpg", image2x: "./img/5-my-projects/image3_2x.jpg", technologies: "React, JavaScript, Node JS, Git", link: "https://ghostkato.github.io/project-group-3-js/"},
        {title: "mimino website", image: "./img/5-my-projects/image4.jpg", image2x: "./img/5-my-projects/image4_2x.jpg", technologies: "React, JavaScript, Node JS, Git", link: "https://ghostkato.github.io/project-group-3-js/"},
        {title: "power pulse webservice ", image: "./img/5-my-projects/image5.jpg", image2x: "./img/5-my-projects/image5_2x.jpg", technologies: "React, JavaScript, Node JS, Git", link: "https://ghostkato.github.io/project-group-3-js/"},
        {title: "chego jewelry website", image: "./img/5-my-projects/image6.jpg", image2x: "./img/5-my-projects/image6_2x.jpg", technologies: "React, JavaScript, Node JS, Git", link: "https://ghostkato.github.io/project-group-3-js/"},
        {title: "energy flow webservice", image: "./img/5-my-projects/image7.jpg", image2x: "./img/5-my-projects/image7_2x.jpg", technologies: "React, JavaScript, Node JS, Git", link: "https://ghostkato.github.io/project-group-3-js/"},
        {title: "fruitbox online store", image: "./img/5-my-projects/image8.jpg", image2x: "./img/5-my-projects/image8_2x.jpg", technologies: "React, JavaScript, Node JS, Git", link: "https://ghostkato.github.io/project-group-3-js/"},
        {title: "vyshyvanka vibes Landing Page", image: "./img/5-my-projects/image9.jpg", image2x: "./img/5-my-projects/image9_2x.jpg", technologies: "React, JavaScript, Node JS, Git", link: "https://ghostkato.github.io/project-group-3-js/"},
        {title: "starlight studio landing page", image: "./img/5-my-projects/image10.jpg", image2x: "./img/5-my-projects/image10_2x.jpg", technologies: "React, JavaScript, Node JS, Git", link: "https://ghostkato.github.io/project-group-3-js/"}
        
    ];

    let currentIndex = 0;
    const projectsPerLoad = 3;

    const projectList = document.getElementById('project-list');
    const loadMoreButton = document.getElementById('load-more');

    function loadProjects() {
        for (let i = 0; i < projectsPerLoad; i++) {
            if (currentIndex >= projects.length) {
                loadMoreButton.style.display = 'none';
                break;
            }
            const project = projects[currentIndex];
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <picture>
                    <source srcset="${project.image2x} 2x, ${project.image} 1x">
                    <img class="project-image" src="${project.image}" alt="${project.title}">
                </picture>
                <div class="project-info">
                <p class="project-technologies">${project.technologies}</p>
                    <div class="project-title-btn"><p class="project-title">${project.title}</p>
                    <button class="project-btn" onclick="window.open('${project.link}', '_blank')">VISIT
                    <svg class="arrow-up-right" width="14.5" height="14.5">
                    <use href="./img/icons.svg#icon-visit"></use>
                    </svg></button></div>
                </div>
            `;
            projectList.appendChild(listItem);
            currentIndex++;
        }
    }

    loadMoreButton.addEventListener('click', loadProjects);

    loadProjects();
});