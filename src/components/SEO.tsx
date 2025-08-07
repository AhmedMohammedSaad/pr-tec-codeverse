import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noIndex?: boolean;
}

const SEO = ({
  title,
  description,
  keywords,
  image = '/placeholder.svg',
  url = window.location.href,
  type = 'website',
  noIndex = false
}: SEOProps) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const isRTL = currentLang === 'ar';
  
  // Default SEO values from translations
  const defaultTitle = t('seo.title');
  const defaultDescription = t('seo.description');
  const defaultKeywords = t('seo.keywords');
  
  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  
  // Structured data for organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "PR TEC Academy",
    "alternateName": currentLang === 'ar' ? "أكاديمية بي آر تك" : "PR TEC Academy",
    "url": "https://prtecacademy.com",
    "logo": "https://prtecacademy.com/logo.png",
    "description": finalDescription,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IQ",
      "addressLocality": "Baghdad"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+964-XXX-XXX-XXXX",
      "contactType": "customer service",
      "availableLanguage": ["Arabic", "English"]
    },
    "sameAs": [
      "https://facebook.com/prtecacademy",
      "https://instagram.com/prtecacademy",
      "https://linkedin.com/company/prtecacademy"
    ],
    "offers": {
      "@type": "Offer",
      "category": "Programming Courses",
      "description": currentLang === 'ar' ? "دورات البرمجة للجميع" : "Programming courses for everyone"
    }
  };
  
  // Course schema for educational content
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": currentLang === 'ar' ? "دورات البرمجة" : "Programming Courses",
    "description": finalDescription,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "PR TEC Academy"
    },
    "courseMode": ["online", "onsite"],
    "educationalLevel": "Beginner to Advanced",
    "teaches": currentLang === 'ar' ? 
      ["تطوير تطبيقات Flutter", "تطوير المواقع", "البرمجة للأطفال", "أساسيات البرمجة"] :
      ["Flutter Development", "Web Development", "Kids Programming", "Programming Basics"]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={currentLang} dir={isRTL ? 'rtl' : 'ltr'} />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content="PR TEC Academy" />
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      
      {/* Language and Region */}
      <meta name="language" content={currentLang} />
      <link rel="canonical" href={url} />
      
      {/* Alternate language versions */}
      <link rel="alternate" hrefLang="en" href={url.replace(/\/(ar|en)\/?/, '/en/')} />
      <link rel="alternate" hrefLang="ar" href={url.replace(/\/(ar|en)\/?/, '/ar/')} />
      <link rel="alternate" hrefLang="x-default" href={url.replace(/\/(ar|en)\/?/, '/')} />
      
      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={currentLang === 'ar' ? 'ar_IQ' : 'en_US'} />
      <meta property="og:site_name" content="PR TEC Academy" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@prtecacademy" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />
      
      {/* Mobile and App */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="theme-color" content="#1a1a1a" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(courseSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;