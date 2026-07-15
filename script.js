// ===============================
// Typed.js Animation
// ===============================

var typed = new Typed(".typing", {
    strings: [
        "Software Developer",
        "Python Developer",
        "Full Stack Developer",
        "Machine Learning Enthusiast",
        "Data Analyst"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

// ===============================
// Active Navbar Link on Scroll
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===============================
// Navbar Background on Scroll
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(2,6,23,0.95)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";

    } else {

        navbar.style.background = "rgba(2,6,23,0.85)";
        navbar.style.boxShadow = "none";

    }

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ===============================
// Scroll Reveal Effect
// ===============================

const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, .timeline-item, .certificate-card, .education-card, .contact-box"
);

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

};

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all 0.7s ease";

});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===============================
// Console Welcome Message
// ===============================

console.log("%cWelcome to Ravipalli Tirumala Kumar Portfolio",
"color:#38bdf8;font-size:18px;font-weight:bold;");