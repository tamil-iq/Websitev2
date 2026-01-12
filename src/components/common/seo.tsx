import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

const BASE_URL = 'https://somatiq.ai';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

export function SEO({ title, description, canonical, ogImage = DEFAULT_OG_IMAGE }: SEOProps) {
  const fullTitle = title.includes('Somatiq') ? title : `${title} | Somatiq`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
}
