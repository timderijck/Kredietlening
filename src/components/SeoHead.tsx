import { useEffect } from 'react';

interface SeoHeadProps {
  title: string;
  description: string;
  schema?: Record<string, any>; // New prop for schema markup
}

export const SeoHead = ({ title, description, schema }: SeoHeadProps) => {
  useEffect(() => {
    document.title = title;
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }

    // Handle schema markup
    let schemaScript = document.querySelector('script[type="application/ld+json"]');
    if (schema) {
      if (schemaScript) {
        schemaScript.textContent = JSON.stringify(schema);
      } else {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        schemaScript.textContent = JSON.stringify(schema);
        document.head.appendChild(schemaScript);
      }
    } else {
      if (schemaScript) {
        schemaScript.remove();
      }
    }
  }, [title, description, schema]);

  return null; // This component doesn't render anything
};
