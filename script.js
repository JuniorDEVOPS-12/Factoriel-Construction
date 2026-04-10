// script.js - Factoriel Construction et Ingénierie

// Menu mobile
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });
}

// Fermer le menu en cliquant sur un lien
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.querySelector('i').classList.add('fa-bars');
        menuToggle.querySelector('i').classList.remove('fa-times');
        
        // Mettre à jour la classe active
        navLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});

// Mettre à jour l'année dans le footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Gestion du formulaire de contact
const devisForm = document.getElementById('devisForm');
if (devisForm) {
    devisForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupération des valeurs
        const nom = document.getElementById('nom').value;
        const service = document.getElementById('service').value;
        
        // Simulation d'envoi
        const message = `Merci ${nom} pour votre demande de devis pour un service de ${service}. Nous vous contacterons dans les plus brefs délais.`;
        
        alert(message);
        
        // Réinitialisation du formulaire
        devisForm.reset();
        
        // Scroll vers le haut
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth scroll pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animation au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observer les éléments à animer
document.querySelectorAll('.valeur-card, .service-card, .realisation-card').forEach(el => {
    observer.observe(el);
});