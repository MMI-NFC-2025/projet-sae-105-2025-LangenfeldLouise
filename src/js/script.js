//menu
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const menuClose = document.getElementById('menuClose');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!menuToggle || !mobileMenu) return;

    // Overlay
    let overlay = document.querySelector('.menu-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        document.body.appendChild(overlay);
    }

    function openMenu() {
        mobileMenu.classList.add('active');
        overlay.classList.add('active');
        mobileMenu.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        menuToggle.classList.add('active');
    }

    function closeMenu() {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        menuToggle.classList.remove('active');
    }

    menuToggle.addEventListener('click', openMenu);

    if (menuClose) {
        menuClose.addEventListener('click', closeMenu);
    }

    overlay.addEventListener('click', closeMenu);

    // Close menu on link click
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Ensure overflow is reset if menu is not active
    if (!mobileMenu.classList.contains('active')) {
        document.body.style.overflow = '';
    }
});

//liste qui déroule
const accordions = document.querySelectorAll(".accordion");

accordions.forEach(accordion => {
    const btn = accordion.querySelector(".accordion-btn");
    const content = accordion.querySelector(".accordion-content");

    if (btn && content) {
        btn.addEventListener("click", () => {
            const isOpen = content.classList.toggle("open");
            btn.setAttribute("aria-expanded", isOpen);
        });
    }
});