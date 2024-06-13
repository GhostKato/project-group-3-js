document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {title: "Wallet webservice", image: "img/5-my-projects/image1.jpg", technologies: "React, JavaScript, Node JS, Git", link: "#"},
        {title: "Green harvest webservice", image: "img/5-my-projects/image2.jpg", technologies: "React, JavaScript, Node JS, Git", link: "#"},
        {title: "English Exellence website", image: "img/5-my-projects/image3.jpg", technologies: "React, JavaScript, Node JS, Git", link: "#"},
        {title: "mimino website", image: "img/5-my-projects/image4.jpg", technologies: "React, JavaScript, Node JS, Git", link: "#"},
        {title: "power pulse webservice ", image: "img/5-my-projects/image5.jpg", technologies: "React, JavaScript, Node JS, Git", link: "#"},
        {title: "chego jewelry website", image: "img/5-my-projects/image6.jpg", technologies: "React, JavaScript, Node JS, Git", link: "#"},
        {title: "energy flow webservice", image: "img/5-my-projects/image7.jpg", technologies: "React, JavaScript, Node JS, Git", link: "#"},
        {title: "fruitbox online store", image: "img/5-my-projects/image8.jpg", technologies: "React, JavaScript, Node JS, Git", link: "#"},
        {title: "vyshyvanka vibes Landing Page", image: "img/5-my-projects/image9.jpg", technologies: "React, JavaScript, Node JS, Git", link: "#"},
        {title: "starlight studio landing page", image: "img/5-my-projects/image10.jpg", technologies: "React, JavaScript, Node JS, Git", link: "#"}
        
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
                <img class="project-image" src="${project.image}" alt="${project.title}">
                <div class="project-info">
                <p class="project-technologies">${project.technologies}</p>
                    <p class="project-title">${project.title}</p>
                    <button class="project-link" onclick="window.open('${project.link}', '_blank')">VISIT</button>
                </div>
            `;
            projectList.appendChild(listItem);
            currentIndex++;
        }
    }

    loadMoreButton.addEventListener('click', loadProjects);

    loadProjects();
});