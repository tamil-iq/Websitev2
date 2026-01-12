import { useEffect } from "react";
import HeroSection from "./components/hero-section";
import FeatureSection from "./components/feature-section";

export default function Teleradiology() {
  useEffect(() => {
    document.title = 'Teleradiology Services | Somatiq - 24/7 Expert Reporting';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Access 24/7 teleradiology services with sub-specialist radiologists. Fast turnaround, accurate reports, and seamless integration with your existing systems.');
    }
  }, []);

  return (
    <div>
      <HeroSection />
      <FeatureSection />
    </div>
  );
}