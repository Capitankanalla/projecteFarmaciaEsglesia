const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const yearNode = document.getElementById('currentYear');

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
  function updateStoreStatus() {
    const storeStatus = document.getElementById('storeStatus');

    if (!storeStatus) return;

    const currentHour = new Date().getHours();
    const isOpen = currentHour >= 8 && currentHour < 22;

    storeStatus.textContent = isOpen ? 'Abierto' : 'Cerrado';

    storeStatus.classList.toggle('badge--open', isOpen);
    storeStatus.classList.toggle('badge--closed', !isOpen);
  }

  updateStoreStatus();
}
