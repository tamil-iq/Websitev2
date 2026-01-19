import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '@/lib/analytics';

// Map paths to page names for analytics
const pageNames: Record<string, string> = {
  '/': 'home',
  '/product': 'product',
  '/portfolio': 'portfolio',
  '/portfolio/radone': 'radone_reporting',
  '/portfolio/billing': 'billing_system',
  '/teleradiology': 'teleradiology',
  '/about': 'about_us',
  '/careers': 'careers',
  '/blog': 'blog',
  '/contact': 'contact',
};

// Analytics tracker for SPA navigation (scroll-to-top removed)
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Track page view for SPA navigation
    const pageName = pageNames[pathname] || 'unknown';
    trackPageView(pageName);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
