import { initHubSpotForm } from './hubspot.js';

function initMobileMenu(): void {
  const toggle = document.getElementById('mobile-menu-toggle');
  const nav = document.getElementById('main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      nav.classList.toggle('mobile-open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('mobile-open').toString());
    });

    document.addEventListener('click', (e: Event) => {
      const target = e.target as Node;
      if (!nav.contains(target) && !toggle.contains(target)) {
        toggle.classList.remove('active');
        nav.classList.remove('mobile-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', (): void => {
  initMobileMenu();

  const hubspotContainer = document.getElementById('hubspot-form');
  if (hubspotContainer) {
    initHubSpotForm('hubspot-form');
  }
});
