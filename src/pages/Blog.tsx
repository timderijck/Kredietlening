import React, { useState, useEffect } from 'react';
import { Hero } from "@/components/Hero";
import { SeoHead } from "@/components/SeoHead";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import BlogCarousel from "@/components/BlogCarousel";

interface Blog { 
  id: number;
  title: string;
  content: string;
  meta: string;
  keywords: string;
  createdAt: string;
}

const Blog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/blogs");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        setError("Fout bij het laden van blogs.");
        console.error("Fout bij het ophalen van blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="text-center py-16">Blogs worden geladen...</div>;
  }

  if (error) {
    return <div className="text-center py-16 text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen">
      <SeoHead 
        title="Blog | Finlening.nl - Informatie en Tips over Lenen"
        description="Lees onze blog voor actuele informatie, handige tips en diepgaande artikelen over persoonlijke leningen, minileningen, doorlopend krediet en financiële planning."
      />
      <Navigation />
      <BreadcrumbNav pageTitle="Blog" />
            <Hero
                      title="Blog – Inspiratie & Tips"
                      subtitle="Welkom op het blog van Finlening! Hier delen we inzichten, inspiratie en praktische tips over financiën."              backgroundImage="/assets/blog.jpeg"
        backgroundClassName="bg-cover bg-top filter-none"
            />

            <section className="py-16 md:py-24">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-2xl font-semibold mb-4 text-center">Recente Artikelen</h2>
                  <BlogCarousel blogs={blogs} />
                </div>
              </div>
            </section>      <Footer />
    </div>
  );
};

export default Blog;
