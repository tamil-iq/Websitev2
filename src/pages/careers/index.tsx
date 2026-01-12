import { useEffect } from 'react';
import HeroSection from './components/hero-section';
import FeatureSection from './components/feature-section';

export default function Careers() {
    useEffect(() => {
        document.title = 'Careers | Somatiq - Join Us in Transforming Healthcare';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Join Somatiq and help build the future of medical imaging. We are hiring engineers, designers, and healthcare professionals passionate about transforming radiology.');
        }
    }, []);

    return (
        <div>
            <HeroSection />
            <FeatureSection />
        </div>
    )
}