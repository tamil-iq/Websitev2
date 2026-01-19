import { Link } from 'react-router-dom';
import { AnimatedButton } from '@/components/common/animated-button';
import { SEO } from '@/components/common/seo';

const RadLink = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <SEO
        title="RadLink | Somatiq"
        description="RadLink - Secure image sharing and collaboration platform. Connect radiologists and referring physicians with seamless, HIPAA-compliant image sharing."
        canonical="/portfolio/radlink"
      />
      <div className="text-center space-y-6 max-w-2xl">
        <span className="text-sm text-primary font-light tracking-widest uppercase">Coming Soon</span>
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
          RadLink
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Secure image sharing and collaboration platform for radiologists and referring physicians. Share studies instantly with HIPAA-compliant links.
        </p>
        <div className="pt-4">
          <Link to="/portfolio">
            <AnimatedButton trackingSource="radlink_page">
              VIEW ALL PRODUCTS
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RadLink;
