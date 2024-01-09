// Parallax effect on the background
window.addEventListener("scroll", function() {
    const parallax = document.querySelector(".parallax");
    const scrolled = window.scrollY;
    parallax.style.backgroundPositionY = -scrolled * 0.3 + "px";
});

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');

    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = targetElement.getBoundingClientRect().top + window.scrollY;
            window.scroll({
                top: offset,
                behavior: 'smooth'
            });
        }
    }
});

// Toggle "Read More" for department sections
document.addEventListener("DOMContentLoaded", function() {
    const readMoreButtons = document.querySelectorAll(".read-more-button");

    readMoreButtons.forEach((button) => {
        button.addEventListener("click", function() {
            const departmentList = this.nextElementElementSibling;

            if (departmentList.style.display === "none" || departmentList.style.display === "") {
                departmentList.style.display = "block";
                this.textContent = "Read Less";
            } else {
                departmentList.style.display = "none";
                this.textContent = "Read More";
            }
        });
    });
});