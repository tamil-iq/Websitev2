import { Link } from 'react-router-dom';
import { AnimatedButton } from '@/components/common/animated-button';
import { SEO } from '@/components/common/seo';

const RadLinQ = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <SEO
        title="RadLinQ | Somatiq"
        description="RadLinQ - Complete software solution for teleradiology. Manage workflows, connect with imaging centers, and deliver reports seamlessly."
        canonical="/portfolio/radlinq"
      />
      <div className="text-center space-y-6 max-w-2xl">
        <span className="text-sm text-primary font-light tracking-widest uppercase">Coming Soon</span>
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
          RadLinQ
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Complete software solution for teleradiology. Manage workflows, connect with imaging centers, and deliver reports seamlessly.
        </p>
        <div className="pt-4">
          <Link to="/portfolio">
          <div className='flex items-center justify-center'>
            <AnimatedButton trackingSource="radlinq_page">
              VIEW ALL PRODUCTS
            </AnimatedButton>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RadLinQ;
