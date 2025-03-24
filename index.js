document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        const section = document.getElementById(this.getAttribute('data-section'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});
