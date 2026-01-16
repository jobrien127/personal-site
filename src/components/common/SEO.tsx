import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  isArticle?: boolean;
  publishedDate?: string;
  modifiedDate?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  ogImage = '/assets/photos/headshot.png',
  isArticle = false,
  publishedDate,
  modifiedDate,
}) => {
  const siteTitle = `${title} | Joseph O'Brien - Software Engineer`;
  const siteUrl = 'https://josephobrien.dev'; // Update with your actual domain
  const fullImageUrl = ogImage.startsWith('http')
    ? ogImage
    : `${siteUrl}${ogImage}`;

  // Person Schema for personal branding
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: "Joseph O'Brien",
    url: siteUrl,
    image: `${siteUrl}/assets/photos/headshot.png`,
    sameAs: [
      'https://www.linkedin.com/in/j-m-obrien',
      'https://github.com/jobrien127',
    ],
    jobTitle: 'Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Software Engineer',
    },
    description:
      'Experienced software engineer specializing in full-stack development',
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React',
      'Node.js',
      'Python',
      'Software Development',
    ],
  };

  // WebSite Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: "Joseph O'Brien - Software Engineer",
    url: siteUrl,
    description:
      "Personal website and portfolio of Joseph O'Brien, a software engineer",
    author: {
      '@type': 'Person',
      name: "Joseph O'Brien",
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  // Article Schema (for blog posts)
  const articleSchema = isArticle
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        image: fullImageUrl,
        author: {
          '@type': 'Person',
          name: "Joseph O'Brien",
          url: siteUrl,
        },
        publisher: {
          '@type': 'Person',
          name: "Joseph O'Brien",
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/assets/photos/headshot.png`,
          },
        },
        datePublished: publishedDate,
        dateModified: modifiedDate || publishedDate,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': siteUrl,
        },
      }
    : null;

  return (
    <Helmet>
      {/* Performance Optimization - Resource Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />

      {/* Basic meta tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}

      {/* OpenGraph meta tags */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={isArticle ? 'article' : 'website'} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={siteUrl} />
      <meta
        property="og:site_name"
        content="Joseph O'Brien - Software Engineer"
      />
      <meta property="og:locale" content="en_US" />

      {/* Twitter meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:creator" content="@jobrien127" />
      <meta name="twitter:site" content="@jobrien127" />

      {/* Mobile Optimization */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      />
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Joseph O'Brien" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Accessibility and Theme */}
      <meta name="theme-color" content="#0f172a" />
      <meta name="color-scheme" content="dark light" />

      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />

      {/* Additional meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Joseph O'Brien" />
      <meta name="generator" content="React" />

      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
