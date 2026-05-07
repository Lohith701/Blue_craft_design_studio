import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_NAME  = 'Blue Craft Design Studio';
const SITE_URL   = 'https://bluecraftdesignstudio.com';
const OG_IMAGE   = `${SITE_URL}/images/FINAL_LOGO.webp`;
const OG_DEFAULT_DESC = 'Premium bespoke interior design and property services in Bangalore.';

const PageContainer = ({ title, description, children }) => {
  const fullTitle  = title === 'Home'
    ? `${SITE_NAME} | Modern Property & Interior Design`
    : `${title} | ${SITE_NAME}`;
  const metaDesc   = description || OG_DEFAULT_DESC;

  return (
    <>
      <Helmet>
        {/* ── Primary SEO ── */}
        <title>{fullTitle}</title>
        <meta name="description" content={metaDesc} />

        {/* ── Open Graph (Facebook / WhatsApp / LinkedIn) ── */}
        <meta property="og:type"        content="website" />
        <meta property="og:site_name"   content={SITE_NAME} />
        <meta property="og:title"       content={fullTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:image"       content={OG_IMAGE} />
        <meta property="og:url"         content={SITE_URL} />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={fullTitle} />
        <meta name="twitter:description" content={metaDesc} />
        <meta name="twitter:image"       content={OG_IMAGE} />
      </Helmet>
      <div className="page-wrapper">
        {children}
      </div>
    </>
  );
};

export default PageContainer;
