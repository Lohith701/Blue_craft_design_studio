import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageContainer = ({ title, description, children }) => {
  const siteName = "Blue Craft Design Studio";
  const fullTitle = title === "Home" ? `${siteName} | Modern Property & Interior Design` : `${title} | ${siteName}`;

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description || "Premium bespoke interior design and property services."} />
      </Helmet>
      <div className="page-wrapper animate-fade-up">
        {children}
      </div>
    </>
  );
};

export default PageContainer;
