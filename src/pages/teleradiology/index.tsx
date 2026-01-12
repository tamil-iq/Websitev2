import HeroSection from "./components/hero-section";
import FeatureSection from "./components/feature-section";
import { SEO } from "@/components/common/seo";

export default function Teleradiology() {
  return (
    <div>
      <SEO
        title="Teleradiology Services | Somatiq"
        description="Access 24/7 teleradiology services with sub-specialist radiologists. Fast turnaround, accurate reports, and seamless integration with your existing systems."
        canonical="/teleradiology"
      />
      <HeroSection />
      <FeatureSection />
    </div>
  );
}
