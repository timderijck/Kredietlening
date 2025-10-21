import { Star } from "lucide-react";

export const TrustAndReview = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4">Al meer dan 2.000.000 leningen verstrekt sinds 2005</h2>
          <div className="flex items-center justify-center text-yellow-500 mb-4">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="h-8 w-8 fill-current" />
            ))}
            <Star className="h-8 w-8 text-gray-300" />
            <span className="ml-4 text-2xl font-bold text-foreground">4/5</span>
          </div>
        </div>
      </div>
    </section>
  );
};
