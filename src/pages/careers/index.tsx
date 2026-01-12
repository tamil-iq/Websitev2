import HeroSection from './components/hero-section';
import FeatureSection from './components/feature-section';
import { SEO } from '@/components/common/seo';

export default function Careers() {
    return (
        <div>
            <SEO
                title="Careers | Somatiq"
                description="Join Somatiq and help build the future of medical imaging. We're hiring engineers, designers, and healthcare professionals passionate about transforming radiology."
                canonical="/careers"
            />
            <HeroSection />
            <FeatureSection />
        </div>
    )
}
