// Mobile Menu

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function() {

    navMenu.classList.toggle("active");

});


// Close Menu When Clicking a Link

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");

    });

});


// Automatic Copyright Year

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// Contact Form

const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;


    // Check Form

    if (name === "" || email === "" || message === "") {

        formNote.textContent = "Please fill in all fields.";

        return;

    }


    // Your Gmail Address

    const recipient = "lazaruseyy@gmail.com";


    // Email Subject

    const subject = encodeURIComponent(
        "Portfolio Message from " + name
    );


    // Email Message

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage: " + message
    );


    // Open Email App

    const mailLink = "mailto:" + recipient +
        "?subject=" + subject +
        "&body=" + body;


    formNote.textContent = "Opening your email app...";

    window.location.href = mailLink;

});