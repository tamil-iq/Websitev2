import { Link } from 'react-router-dom';
import { AnimatedButton } from '@/components/common/animated-button';
import { SEO } from '@/components/common/seo';

const Portfolio = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <SEO
        title="Portfolio | Somatiq"
        description="Explore Somatiq's portfolio of successful implementations. See how we've helped imaging centers and hospitals transform their radiology workflows."
        canonical="/portfolio"
      />
      <div className="text-center space-y-6 max-w-2xl">
        <span className="text-sm text-primary font-light tracking-widest uppercase">Coming Soon</span>
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
          Our Portfolio
        </h1>
        <p className="text-lg text-muted-foreground font-light leading-relaxed">
          Discover how we've helped imaging centers across India streamline their operations and improve patient care.
        </p>
        <div className="pt-4">
          <Link to="/">
            <AnimatedButton trackingSource="portfolio_page">
              EXPLORE HOMEPAGE
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
