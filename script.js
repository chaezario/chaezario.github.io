// Toggle Mobile Menu
const hamburgerIcon = document.getElementById('hamburger-icon');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
    
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-link'); // Select all nav links
    const mobileNavLinks = document.querySelectorAll('#mobile-menu a'); // Select all mobile dropdown links

    // Function to add active class to the navbar links based on scroll position
    function highlightNav() {
        let scrollPosition = window.scrollY + 200; // Add an offset for better detection

        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute("href"));
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Add the underline effect when the section is in view
                link.classList.add('border-b-2', 'border-indigo-600');
                link.classList.remove('text-gray-700'); // Remove the default text color if necessary
            } else {
                // Remove the underline effect when the section is out of view
                link.classList.remove('border-b-2', 'border-indigo-600');
                link.classList.add('text-gray-700'); // Reset the text color
            }
        });

        // Apply active class to the mobile menu items
        mobileNavLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute("href"));
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Add the underline effect when the section is in view
                link.classList.add('border-b-2', 'border-indigo-600');
                link.classList.remove('text-gray-700'); // Remove the default text color if necessary
            } else {
                // Remove the underline effect when the section is out of view
                link.classList.remove('border-b-2', 'border-indigo-600');
                link.classList.add('text-gray-700'); // Reset the text color
            }
        });
    }

    // Listen for scroll events and update the navbar links
    window.addEventListener('scroll', highlightNav);

    // Initial call to highlight the correct link on page load
    highlightNav();
});