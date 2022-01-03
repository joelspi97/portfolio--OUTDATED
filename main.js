// HAMBURGER MENU ANIMATION

const menuBtn = document.querySelector('.menu-btn');
const checkInput = document.getElementById('toggle');
const navLinks = Array.from(document.querySelectorAll('.nav-link'));
let menuOpen = false;

function toggleMenu() {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuBtn.setAttribute('aria-label', 'Close menu');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuBtn.setAttribute('aria-label', 'Open menu');
        menuOpen = false;
    }
}

function closeMenu() {
    if (menuOpen) {
        menuBtn.classList.remove('open');
        menuBtn.setAttribute('aria-label', 'Open menu');
        menuOpen = false;
        checkInput.checked = false;
    }
}

menuBtn.addEventListener('click', toggleMenu);
menuBtn.addEventListener('keyup', e => {
    if (e.code === 'Enter') { 
        toggleMenu();

        if (menuOpen) {
            checkInput.checked = true;
        } else {
            checkInput.checked = false;
        }
    };
});

navLinks.forEach(l => {
    l.addEventListener('click', closeMenu);
})