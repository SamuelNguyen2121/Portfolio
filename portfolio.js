function openModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.style.display = "block";
    setTimeout(() => {
        modal.style.opacity = 1;
    }, 10);
    document.body.classList.add("no-scroll");

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal(modalId);
        }
    }
}


function closeModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.style.opacity = 0;
    setTimeout(() => {
        modal.style.display = "none";
    }, 500);
    document.body.classList.remove("no-scroll");
}


function plusSlides(n, slideId) {
    showSlides(slideIndex[slideId] += n, slideId);
}

function currentSlide(n, slideId) {
    showSlides(slideIndex[slideId] = n, slideId);
}

let slideIndex = {};

function showSlides(n, slideId) {
    let i;
    let slides = document.getElementById(slideId).getElementsByClassName("mySlides");
    if (!slideIndex[slideId]) slideIndex[slideId] = 1;
    if (n > slides.length) { slideIndex[slideId] = 1; }
    if (n < 1) { slideIndex[slideId] = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }
    setTimeout(() => {
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex[slideId] - 1].style.display = "block";
        setTimeout(() => {
            slides[slideIndex[slideId] - 1].style.opacity = 1;
        }, 10);
    }, 500);
}



var acc = document.getElementsByClassName("accordion-button");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}

// Object containing translations
const translations = {
    en: {
        "about_title": "About me",
        "about_txt": "I am a third year computer science student at Champlain College in Saint-Lambert. I also currently work at Costco Wholesale in Brossard since 2021 as an assistant cashier. My main interests in life are traveling, sports, cars and music, but I am still open to other things.",
        "table_title": "What I Bring to the Table",
        "table_txt": "I am a perseverant person who always seeks to do a better job by improving myself with feedback from my surroundings. For example, I have the ability to adapt myself to different work envrionments. The transition from high school to Cegep made me to develop the adaptive skill because courses became more challenging. Also, I believe that my perseverance side of my personality will play an important role in developing my personal skills. During my summer job for the past few years at Costco, customer service being the main job helped me develop and improve my communication skills and learning to be patient. On top of that, when I was assigned individual tasks, I learned to work autonomously but at the same time in team when other people needed help. Also, switching departments during my years at Costco helped me to evolve my adaptive skill.",
        "home_nav": "Home",
        "projects_nav": "Projects",
        "work_nav": "Work Experience",
        "resume_nav": "Resume",
        "ecp_title": "Car Parts Web Application",
        "ecp_description": "The ECP (External Client Project) was the computer science program's final project at Champlain college where my teammates and I created a web application for a client who wanted people to be able to buy car parts online. The website also allowed the admin to manage the products and registered users information. The project was divided into sprints of around two weeks, where each team member had at least one feature assigned to him to implement. We applied collaborative programming with Git, system design with multiple types of diagrams, development planning with Jira, and finally system design with Figma.", 
        "pet_title": "Pet Clinic Web Application",
        "pet_description": "The project involved adding features to an existing web application. The class was divided into groups for each part of the app, where I was assigned to the authentication team. During the development of the program, my teammates and I were tasked to each implement at least one feature during each of our two sprints. We put into practice development planning with Jira and were introduced to collaborative programming with Git.",
        "languages": "Languages and Frameworks",
        "softwares": "Softwares",
        "diagrams": "Diagrams",
        "work_title": "Cashier Assistant at Costco",
        "work_description": "As a cashier assistant, I work at different departments around the store. The first one is the front-end where I help the cashier to bag items for customers. I also often work in the parking lot to bring shopping carts back inside store for customers and keep the environment clean. The other one is the back-end where I stock items on shelves after the closure for the next day.",
        "skills": "Skills Acquired",
        "customer_service": "Customer service",
        "teamwork": "Teamwork",
        "present": "06/2021 - Present (Costco Wholesale Brossard)",
        "connect": "Connect with me:",
        "education": "Educaion",
        "dec": "College/CEGEP: DEC in Computer Science and Technology (In Progress)",
        "cegep": "College Champlain, Saint-Lambert (2020 - Present)",
        "des": "High School: DES (Acquired)",
        "hs": "College Jean de la Mennais, La Prairie (2015 - 2020)",
    },
    fr: {
        "about_title": "À propos de moi",
        "about_txt": "Je suis étudiant de troisième année en informatique au Collège Champlain à Saint-Lambert. De plus, je travaille actuellement chez Costco Wholesale à Brossard depuis 2021 en tant qu'aide caissier. Mes principaux intérêts dans la vie sont voyager, le sport, les voitures et la musique, mais je suis toujours ouvert à d'autres choses.",
        "table_title": "Ce que j'apporte",
        "table_txt": "Je suis une personne persévérante qui cherche toujours à faire un meilleur travail en s'améliorier avec les commentaires de mon entourages. Par example, j'ai l'habileté de m'adapter à différents environments de travail. La transition du secondaire au cégep m'a amené à développer la capacité d'adaptation puisque les cours devenaient plus exigeants. De plus, je crois que ma persévérence jouera un rôle important dans le développement de mes compétences personnelles. Au cours de mon emploi d'été des dernières années chez Costco, le service à la clientèle étant mon travail principal m'a aidé à développer et à améliorer mes compétences en communication et à apprendre à être patient. De plus, lorsque l'on me confiait des tâches individuelles, j'ai appris à travailler de manière autonome mais en même temps en équipe lorsque d'autres personnes avaient besoin d'aide. Finalement, changer de département au cours de mes années chez Costco m'a aidé à développer mes compétences d'adaptation.",
        "home_nav": "Accueil",
        "projects_nav": "Projets",
        "work_nav": "Expérience de Travail",
        "resume_nav": "CV",
        "ecp_title": "Application web de boutique de pièces automobiles",
        "ecp_description": "Le ECP (External Client Project) était le projet final du programme d'informatique au collège Champlain. Mes coéquipiers et moi avons créé une application Web pour un client qui souhaitait que les gens puissent acheter des pièces automobiles en ligne. Le site Web permettait également à l'administrateur de gérer les produits et les informations des utilisateurs enregistrés. Le projet a été divisé en 'sprints' d'environ deux semaines, où chaque membre de l'équipe avait au moins une fonctionnalité à réaliser. Nous avons appliqué la programmation collaborative avec Git, la conception de systèmes avec plusieurs types de diagrammes, la planification du développement avec Jira et enfin le design de systèmes avec Figma.", 
        "pet_title": "Application web d’une clinique vétérinaire",
        "pet_description": "Le projet impliquait l'ajout de fonctionnalités à une application Web existante. La classe était divisée en groupes pour chaque partie de l'application, où j'étais affecté à l'équipe d'authentification. Lors du développement du programme, mes coéquipiers et moi avons été chargés d'implémenter chacun au moins une fonctionnalité lors de chacun de nos deux sprints. Nous avons mis en pratique la planification du développement avec Jira et avons été initiés à la programmation collaborative avec Git.",
        "languages": "Langages et Frameworks",
        "softwares": "Logiciels",
        "diagrams": "Diagrammes",
        "work_title": "Aide caissier à Costco",
        "work_description": "En tant qu'aide caissier, je travaille dans différents départements du magasin. Le premier est le service où j'aide le caissier à emballer les articles pour les clients. Je travaille aussi souvent dans le stationnement pour ramener les paniers à l'intérieur du magasin pour les clients et garder l'environnement propre. L'autre département est le marchandisage où je place les articles sur les étagères après la fermeture pour le lendemain.",
        "skills": "Compétences acquises",
        "customer_service": "Service à la clientèle",
        "teamwork": "Travail d'équipe",
        "present": "06/2021 - Présent (Costco Wholesale Brossard)",
        "connect": "Connecte avec moi:",
        "education": "Éducation",
        "dec": "Collège/CEGEP: DEC en Informatique (En Progrès)",
        "cegep": "Collège Champlain, Saint-Lambert (2020 - Présent)",
        "des": "High School: DES (Acquis)",
        "hs": "Collège Jean de la Mennais, La Prairie (2015 - 2020)",
    }
};

function switchLanguage(language) {
    // Update text translations
    document.querySelectorAll('[data-translate]').forEach(elem => {
        let key = elem.getAttribute('data-translate');
        elem.textContent = translations[language][key];
    });

    // Switch PDF language if on the resume page
    if(document.getElementById('resumePdf')) {
        switchPdfLanguage(language);
    }

    // Save the selected language to localStorage
    if (typeof(Storage) !== 'undefined') {
        localStorage.setItem('selectedLanguage', language);
    }
}

function switchPdfLanguage(language) {
    var resumePdf = document.getElementById('resumePdf');
    if (!language && typeof(Storage) !== 'undefined') {
        language = localStorage.getItem('selectedLanguage') || 'en';
    }
    resumePdf.src = language === 'fr' ? 'cv-samuel-nguyen-fr.pdf' : 'cv-samuel-nguyen-en.pdf';
}

// Apply saved language on page load
if (typeof(Storage) !== 'undefined') {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        switchLanguage(savedLanguage);
        document.getElementById('languageSwitcher').value = savedLanguage;
    } else {
        switchLanguage('en');
    }
} else {
    switchLanguage('en');
}
