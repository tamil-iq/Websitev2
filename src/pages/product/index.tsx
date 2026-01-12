import { Link } from 'react-router-dom';
import { AnimatedButton } from '@/components/common/animated-button';
import { SEO } from '@/components/common/seo';

const Product = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <SEO
        title="Product | Somatiq"
        description="Discover Somatiq's unified RIS-PACS platform. Streamline your radiology workflow with intelligent automation, real-time monitoring, and seamless integration."
        canonical="/product"
      />
      <div className="text-center space-y-6 max-w-2xl">
        <span className="text-sm text-primary font-light tracking-widest uppercase">Coming Soon</span>
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
          Our Product
        </h1>
        <p className="text-lg text-muted-foreground font-light leading-relaxed">
          We're building something incredible. Our unified RIS-PACS platform is designed to transform how radiologists work.
        </p>
        <div className="pt-4">
          <Link to="/">
            <AnimatedButton trackingSource="product_page">
              EXPLORE HOMEPAGE
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
