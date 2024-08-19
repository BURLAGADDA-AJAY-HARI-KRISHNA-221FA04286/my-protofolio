document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for Navigation Links
    const links = document.querySelectorAll('nav a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust offset if needed
                behavior: 'smooth'
            });
        });
    });

    // Form Validation and Submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        // Simulate form submission success
        alert('Thank you for your message! I will get back to you soon.');
        form.reset(); // Clear the form
    });

    // Scroll to Top Button
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.textContent = '↑';
    scrollToTopButton.className = 'scroll-to-top';
    scrollToTopButton.style.display = 'none'; // Initially hidden
    document.body.appendChild(scrollToTopButton);

    window.addEventListener('scroll', () => {
        scrollToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Skill Bar Animation
    const skills = document.querySelectorAll('.skill-bar');
    skills.forEach(skill => {
        const skillLevel = skill.querySelector('.skill-level');
        const width = skillLevel.dataset.width || '0%'; // Use data attribute to set width if needed
        skillLevel.style.width = width;
    });
});
