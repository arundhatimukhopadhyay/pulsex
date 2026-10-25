// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('hidden') === false;
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});

// Close the mobile menu after choosing a link
mobileMenu.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
  })
);

// Dynamic copyright year
document.getElementById('year').textContent = new Date().getFullYear();
