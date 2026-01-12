// Google Analytics 4 event tracking utilities

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

// Track custom events
export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

// Pre-defined conversion events
export const trackDemoRequest = (source: string) => {
  trackEvent('generate_lead', {
    event_category: 'conversion',
    event_label: 'demo_request',
    source: source,
  });
};

export const trackContactClick = (method: string) => {
  trackEvent('contact', {
    event_category: 'engagement',
    method: method,
  });
};

export const trackOutboundLink = (url: string) => {
  trackEvent('click', {
    event_category: 'outbound',
    link_url: url,
  });
};
