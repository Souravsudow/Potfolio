import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonicalUrl?: string;
}

const SITE_NAME = 'Sourav Kumar';
const BASE_URL = 'https://sourav.website';
const DEFAULT_OG_IMAGE = 'https://raw.githubusercontent.com/phillip-che/phillipche-site/refs/heads/main/src/assets/icon/preview.jpeg';

export const SEO = ({
  title,
  description,
  keywords = 'Sourav Kumar, portfolio, software engineer, AI developer, full stack developer, React developer',
  ogImage = DEFAULT_OG_IMAGE,
  ogUrl,
  canonicalUrl,
}: SEOProps) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Software Engineer & AI Developer`;
  const url = ogUrl || BASE_URL;
  const canonical = canonicalUrl || url;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Sourav Kumar" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Additional Meta */}
      <meta name="theme-color" content="#000000" />
      <meta name="application-name" content={SITE_NAME} />
    </Helmet>
  );
};
