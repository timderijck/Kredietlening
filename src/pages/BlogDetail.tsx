import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Hero } from "@/components/Hero";
import { SeoHead } from "@/components/SeoHead";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Blog { 
  id: number;
  title: string;
  content: string;
  meta: string;
  keywords: string;
  createdAt: string;
}

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/blogs");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const foundBlog = data.find((b: Blog) => b.id === parseInt(id || ''));
        if (foundBlog) {
          setBlog(foundBlog);
        } else {
          setError("Blog niet gevonden.");
        }
      } catch (error) {
        setError("Fout bij het laden van de blog.");
        console.error("Fout bij het ophalen van blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <div className="text-center py-16">Blog wordt geladen...</div>;
  }

  if (error) {
    return <div className="text-center py-16 text-red-500">{error}</div>;
  }

  if (!blog) {
    return <div className="text-center py-16">Blog niet gevonden.</div>;
  }

  return (
    <div className="min-h-screen">
      <SeoHead 
        title={`${blog.title} | Kredietlening.nl`}
        description={blog.meta || blog.content.substring(0, 150)}
      />
      <Navigation />
      <BreadcrumbNav pageTitle={blog.title} />
      <Hero
        title={blog.title}
        subtitle={blog.meta}
        backgroundImage="/assets/blog.jpeg" // Placeholder image
        backgroundClassName="bg-cover bg-top filter-none"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground mb-4">Gepubliceerd op: {new Date(blog.createdAt).toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <article className="prose prose-lg max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
                }}
              >{blog.content}</ReactMarkdown>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogDetail;

