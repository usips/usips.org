import { initHubSpotForm } from './hubspot.js';

document.addEventListener('DOMContentLoaded', (): void => {
  const hubspotContainer = document.getElementById('hubspot-form');
  if (hubspotContainer) {
    initHubSpotForm('hubspot-form');
  }
});
