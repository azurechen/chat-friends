import React, { useEffect, useState } from 'react';
import Head from 'next/head';

type Props = {
  title: string;
  description: string;
  imageUrl?: string;
  canonicalUrl?: string;
};

export default React.memo<Props>(props => {
  const { title, description, imageUrl, canonicalUrl } = props;

  const [currentUrl, setCurrentUrl] = useState(canonicalUrl);

  useEffect(() => {
    const url = new URL(window.location.href);
    setCurrentUrl(`${url.origin}${url.pathname}`);
  }, []);

  const sharedUrl = canonicalUrl || currentUrl;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {sharedUrl && <meta property="og:url" content={sharedUrl} />}

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
      {sharedUrl && <meta property="twitter:url" content={sharedUrl} />}
    </Head>
  );
});
