import { Link } from 'react-router-dom';
import { AnimatedButton } from '@/components/common/animated-button';
import { SEO } from '@/components/common/seo';

const InvoiceIQ = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <SEO
        title="InvoiceIQ | Somatiq"
        description="InvoiceIQ - Smart healthcare billing and revenue cycle management. Automate invoicing, track payments, and optimize your financial operations."
        canonical="/portfolio/invoiceiq"
      />
      <div className="text-center space-y-6 max-w-2xl">
        <span className="text-sm text-primary font-light tracking-widest uppercase">Coming Soon</span>
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
          InvoiceIQ
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Smart healthcare billing and revenue cycle management. Automate invoicing, track payments, and optimize your financial operations.
        </p>
        <div className="pt-4">
          <Link to="/portfolio">
            <AnimatedButton trackingSource="invoiceiq_page">
              VIEW ALL PRODUCTS
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InvoiceIQ;
