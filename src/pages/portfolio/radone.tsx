import { Link } from 'react-router-dom';
import { AnimatedButton } from '@/components/common/animated-button';
import { SEO } from '@/components/common/seo';

const Radone = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <SEO
        title="Radone Reporting | Somatiq"
        description="Radone - Advanced radiology reporting solution. Streamline your reporting workflow with AI-powered templates, voice dictation, and seamless PACS integration."
        canonical="/portfolio/radone"
      />
      <div className="text-center space-y-6 max-w-2xl">
        <span className="text-sm text-primary font-light tracking-widest uppercase">Coming Soon</span>
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
          Radone Reporting
        </h1>
        <p className="text-lg text-muted-foreground font-light leading-relaxed">
          Advanced radiology reporting solution with AI-powered templates, voice dictation, and seamless PACS integration.
        </p>
        <div className="pt-4">
          <Link to="/">
            <AnimatedButton trackingSource="radone_page">
              EXPLORE PLATFORM
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Radone;
