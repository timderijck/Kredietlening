import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Blog {
  id: number;
  title: string;
  content: string;
  meta: string;
  keywords: string;
  createdAt: string;
}

interface BlogCarouselProps {
  blogs: Blog[];
}

const BlogCarousel: React.FC<BlogCarouselProps> = ({ blogs }) => {
  const [currentIndex, setCurrentIndex] = useState(1); // Index in the padded array, so it starts at the first blog
  const paddedBlogs = [null, ...blogs, null];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, paddedBlogs.length - 2));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 1));
  };

  const getBlogStyle = (index: number) => {
    const position = index - (currentIndex - 1); // position relative to the start of the 3-blog window
    let opacity = 1;
    let filter = 'none';
    let scale = 1;
    let pointerEvents = 'auto';

    if (position < 0 || position >= 3) {
      opacity = 0;
      scale = 0.8;
      pointerEvents = 'none';
    } else if (position === 1) { // The middle one
      opacity = 1;
      scale = 1;
      filter = 'none';
      pointerEvents = 'auto';
    } else {
      filter = 'blur(2px)';
      opacity = 0.7;
      scale = 0.9;
      pointerEvents = 'none';
    }

    return {
      opacity,
      filter,
      transform: `scale(${scale})`,
      transition: 'all 0.3s ease-in-out',
      pointerEvents,
    };
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      <div className="flex items-center justify-center space-x-4 overflow-hidden py-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handlePrev} 
          disabled={currentIndex === 1}
          className="absolute left-0 z-10 inset-y-1/2 -translate-y-1/2 mx-4"
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>

        <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${(currentIndex - 1) * (100 / 3)}%)` }}>
          {paddedBlogs.length > 2 ? (
            paddedBlogs.map((blog, index) => (
              <div 
                key={blog ? blog.id : `empty-${index}`} 
                className="flex-none w-1/3 p-1"
                style={getBlogStyle(index)}
              >
                {blog && (
                  <li className="p-6 border rounded-lg shadow-md bg-card transition-shadow hover:shadow-lg h-full flex flex-col text-center">
                    <p className="text-sm text-muted-foreground mb-2">{new Date(blog.createdAt).toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    {index === currentIndex ? (
                      <Link to={`/blog/${blog.id}`} className="text-primary hover:underline text-xl font-medium leading-tight flex-grow">
                        {blog.title}
                      </Link>
                    ) : (
                      <span className="text-primary text-xl font-medium leading-tight flex-grow">
                        {blog.title}
                      </span>
                    )}
                    <p className="text-muted-foreground text-base mt-2">{blog.meta || blog.content.substring(0, 150) + '...'}</p>
                  </li>
                )}
              </div>
            ))
          ) : (
            <div className="w-full text-center text-muted-foreground">Geen blogs gevonden.</div>
          )}
        </div>

        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handleNext} 
          disabled={currentIndex === paddedBlogs.length - 2}
          className="absolute right-0 z-10 inset-y-1/2 -translate-y-1/2 mx-4"
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </div>
    </div>
  );
};

export default BlogCarousel;