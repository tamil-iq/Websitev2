import { Link } from 'react-router-dom';
import { AnimatedButton } from '@/components/common/animated-button';
import { SEO } from '@/components/common/seo';

const Billing = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <SEO
        title="Billing System | Somatiq"
        description="Healthcare billing management system. Automated invoicing, insurance claims processing, and revenue cycle management for diagnostic centers."
        canonical="/portfolio/billing"
      />
      <div className="text-center space-y-6 max-w-2xl">
        <span className="text-sm text-primary font-light tracking-widest uppercase">Coming Soon</span>
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
          Billing System
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Healthcare billing management with automated invoicing, insurance claims processing, and revenue cycle management.
        </p>
        <div className="pt-4">
          <Link to="/">
            <AnimatedButton trackingSource="billing_page">
              EXPLORE PLATFORM
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Billing;
