document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.custom-navbar');
  const navItems = document.querySelectorAll('.nav-item:not(.navbar-brand)');

  let lastScrollY = 0;
  const scrollThreshold = 50;

  window.addEventListener('scroll', function() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > scrollThreshold) {
      navbar.classList.add('navbar-scrolled');

      // Nascondo tutte le voci della navbar
      navItems.forEach(item => {
        item.style.display = 'none';
      });
    } else {
      navbar.classList.remove('navbar-scrolled');

      // Mostro tutte le voci della navbar
      navItems.forEach(item => {
        item.style.display = '';
      });
    }

    lastScrollY = currentScrollY;
  });
});
