// HubSpot form configuration
interface HubSpotFormConfig {
  portalId: string;
  formId: string;
  region: string;
  target?: string;
}

interface HubSpotForms {
  create(config: HubSpotFormConfig): void;
}

interface HubSpot {
  forms: HubSpotForms;
}

declare global {
  interface Window {
    hbspt?: HubSpot;
  }
}

export function initHubSpotForm(containerId: string): void {
  const checkHubSpot = (): void => {
    if (window.hbspt?.forms) {
      window.hbspt.forms.create({
        portalId: "241956451",
        formId: "17726b48-6edb-417c-bafd-ae1991dda95a",
        region: "na2",
        target: `#${containerId}`
      });
    } else {
      setTimeout(checkHubSpot, 100);
    }
  };

  checkHubSpot();
}
