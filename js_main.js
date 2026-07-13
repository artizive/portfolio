const toggleBtn = document.querySelector('.header__toggle');
const nav = document.querySelector('.header__nav');
const navLinks = document.querySelectorAll('.header__nav a');

function closeMenu() {
  if (!nav || !toggleBtn) return;
  nav.classList.remove('header__nav--active');
  toggleBtn.setAttribute('aria-expanded', 'false');
  toggleBtn.setAttribute('aria-label', 'Open navigation menu');
  document.body.style.overflow = '';
}

function openMenu() {
  if (!nav || !toggleBtn) return;
  nav.classList.add('header__nav--active');
  toggleBtn.setAttribute('aria-expanded', 'true');
  toggleBtn.setAttribute('aria-label', 'Close navigation menu');
  document.body.style.overflow = 'hidden';
}

if (toggleBtn && nav) {
  toggleBtn.addEventListener('click', () => {
    if (nav.classList.contains('header__nav--active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('header__nav--active')) {
      closeMenu();
      toggleBtn.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      closeMenu();
    }
  });
}
