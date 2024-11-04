document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
            if (e.target.id === 'linksNavLink') {
                document.querySelector('#linksSectionContainer').scrollIntoView({behavior: 'smooth'});
            } else if (e.target.id === 'portfolioLink') {
                window.scrollTo({top: 0, behavior: 'smooth'});
            }
        });
    });
});