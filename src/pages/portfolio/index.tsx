import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '@/components/common/seo';
import { ArrowRight } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Platform',
    description: 'Our unified radiology platform combining RIS, PACS, and Reporting into one seamless experience.',
    link: '/',
    status: 'Live',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    )
  },
  {
    title: 'RadLinQ',
    description: 'Complete software solution for teleradiology. Manage workflows, connect with imaging centers, and deliver reports seamlessly.',
    link: '/portfolio/radlinq',
    status: 'Coming Soon',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    )
  },
  {
    title: 'RadOne',
    description: 'Independent reporting module with AI-powered templates, voice dictation, and structured reporting for any radiology setup.',
    link: '/portfolio/radone',
    status: 'Coming Soon',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    )
  },
  {
    title: 'InvoiceIQ',
    description: 'Smart healthcare billing and revenue cycle management. Automate invoicing, track payments, and optimize your financial operations.',
    link: '/portfolio/invoiceiq',
    status: 'Coming Soon',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen py-24 px-4">
      <SEO
        title="Portfolio | Somatiq"
        description="Explore Somatiq's portfolio of radiology solutions. Platform, RadLink, and RadOne - transforming imaging workflows."
        canonical="/portfolio"
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary font-light tracking-widest uppercase">
            Our Products
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mt-4">
            Portfolio
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4 max-w-2xl mx-auto">
            Comprehensive solutions designed to transform radiology workflows and improve patient care.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={item.link}
                className="group block h-full p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-300"
              >
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-primary/80">
                    {item.icon}
                  </div>
                  <span className={`text-xs font-medium tracking-wide px-3 py-1 rounded-full ${
                    item.status === 'Live'
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                      : 'bg-primary/10 text-primary border border-primary/20'
                  }`}>
                    {item.status}
                  </span>
                </div>

                {/* Content */}
                <h2 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Link */}
                <div className="flex items-center gap-2 text-primary/70 group-hover:text-primary transition-colors">
                  <span className="text-sm font-medium">
                    {item.status === 'Live' ? 'Explore' : 'Learn more'}
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
