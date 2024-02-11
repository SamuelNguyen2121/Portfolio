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
        "about_txt": "I am a third-year computer science student at Champlain College, Saint-Lambert, and have been working as an assistant cashier at Costco Wholesale in Brossard since 2021. My main interests include traveling, sports, cars, and music, though I'm open to exploring other areas.",
        "table_title": "What I Bring to the Table",
        "table_txt": "I am a perseverant individual who continuously strives for improvement based on feedback from my environment. My adaptability was honed during the transition from high school to CEGEP, facing more challenging courses. This trait, along with my perseverance, is key to developing my personal skills. Working in customer service at Costco for several summers, I enhanced my communication skills and learned patience. I also gained experience in working autonomously and collaboratively and adapting to different roles across various departments at Costco.",
        "home_nav": "Home",
        "projects_nav": "Projects",
        "work_nav": "Work Experience",
        "resume_nav": "Resume",
        "ecp_title": "Car Parts Web Application",
        "ecp_description": "In the final project for Champlain College's computer science program (ECP, External Client Project), my team and I developed a web application for a client to sell car parts online. This platform included features for admin management of products and user information. We worked in bi-weekly sprints, with each member responsible for specific features. Our approach incorporated collaborative programming using Git, system design through various diagrams, development planning via Jira, and design creation with Figma.", 
        "pet_title": "Pet Clinic Web Application",
        "pet_description": "The project focused on enhancing an existing web application, with the class being segmented into teams for different app components. I was part of the authentication team. Throughout the program's development, each team member, including myself, was responsible for adding at least one feature in each of the two sprints. We utilized Jira for development planning and learned collaborative programming using Git.",
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
        "education": "Education",
        "dec": "College/CEGEP: DEC in Computer Science and Technology (In Progress)",
        "cegep": "College Champlain, Saint-Lambert (2020 - Present)",
        "des": "High School: DES (Acquired)",
        "hs": "College Jean de la Mennais, La Prairie (2015 - 2020)",
    },
    fr: {
        "about_title": "À propos de moi",
        "about_txt": "Je suis étudiant de troisième année en informatique au Collège Champlain à Saint-Lambert. De plus, je travaille actuellement chez Costco Wholesale à Brossard depuis 2021 en tant qu'aide caissier. Mes principaux intérêts dans la vie sont le voyage, le sport, les voitures et la musique, mais je suis toujours ouvert à d'autres choses.",
        "table_title": "Ce que j'apporte",
        "table_txt": "Je suis une personne persévérante qui s'efforce constamment de s'améliorer en se basant sur les retours de mon environnement. Mon adaptabilité a été affinée lors de la transition du lycée au CEGEP, face à des cours plus exigeants. Cette caractéristique, ainsi que ma persévérance, sont essentielles dans le développement de mes compétences personnelles. Travaillant dans le service clientèle chez Costco pendant plusieurs étés, j'ai amélioré mes compétences en communication et appris la patience. J'ai également acquis de l'expérience en travaillant de manière autonome et en collaboration, et en m'adaptant à différents rôles dans divers départements chez Costco.",
        "home_nav": "Accueil",
        "projects_nav": "Projets",
        "work_nav": "Expérience de Travail",
        "resume_nav": "CV",
        "ecp_title": "Application web de boutique de pièces automobiles",
        "ecp_description": "Dans le cadre du projet final du programme d'informatique du Champlain College (ECP, External Client Project), mon équipe et moi avons développé une application web pour un client vendant des pièces de voiture en ligne. Cette plateforme comprenait des fonctionnalités pour la gestion des produits et des informations des utilisateurs par l'administrateur. Nous avons travaillé en sprints de deux semaines, chaque membre étant responsable de fonctionnalités spécifiques. Notre approche a intégré la programmation collaborative avec Git, la conception de systèmes via divers diagrammes, la planification du développement avec Jira, et la création de design avec Figma.", 
        "pet_title": "Application web d’une clinique vétérinaire",
        "pet_description": "Le projet consistait à enrichir une application web existante, la classe étant divisée en équipes pour différents composants de l'application. Je faisais partie de l'équipe d'authentification. Tout au long du développement du programme, chaque membre de l'équipe, y compris moi-même, devait ajouter au moins une fonctionnalité lors de chacun des deux sprints. Nous avons utilisé Jira pour la planification du développement et avons appris la programmation collaborative avec Git.",
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
