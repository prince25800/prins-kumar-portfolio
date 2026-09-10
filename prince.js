// Mobile Menu

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");
}


// Typing Animation

const words = [
    "Web Developer",
    "Java Programmer",
    "Software Developer",
    "Tech Enthusiast"
];

let wordIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function typeEffect() {

    const typingElement = document.getElementById("typing");

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentWord.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentWord.length) {
            isDeleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {
            isDeleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();


// ================= CONTACT FORM =================

document
    .getElementById("contactForm")
    .addEventListener("submit", async function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const subject =
            document.getElementById("subject").value;

        const message =
            document.getElementById("message").value;

        const data = {
            name: name,
            email: email,
            subject: subject,
            message: message
        };

        try {

            const response = await fetch(
                "http://localhost:8080/contact",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(data)
                }
            );

            const result =
                await response.text();

            alert(result);

            this.reset();

        } catch (error) {

            console.error(error);

            alert(
                "Unable to connect to Java server."
            );

        }

    });


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        document
            .getElementById("navLinks")
            .classList.remove("active");

    });

});