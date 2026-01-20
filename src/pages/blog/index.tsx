import { Link } from 'react-router-dom';
import { AnimatedButton } from '@/components/common/animated-button';
import { SEO } from '@/components/common/seo';

const Blog = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <SEO
        title="Blog | Somatiq"
        description="Stay updated with the latest insights on radiology, medical imaging technology, and healthcare innovation from the Somatiq team."
        canonical="/blog"
      />
      <div className="text-center space-y-6 max-w-2xl">
        <span className="text-sm text-primary font-light tracking-widest uppercase">Coming Soon</span>
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
          Our Blog
        </h1>
        <p className="text-lg text-muted-foreground font-light leading-relaxed">
          Insights, updates, and thought leadership on radiology, medical imaging, and healthcare technology.
        </p>
        <div className="pt-4">
          <Link to="/">
          <div className='flex items-center justify-center'>
            <AnimatedButton trackingSource="blog_page">
              EXPLORE HOMEPAGE
            </AnimatedButton>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
