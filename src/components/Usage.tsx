import { Card, CardContent } from "@/components/ui/card";

const usage = [
  {
    title: "Vakantie",
    image: "/assets/vakantie.jpg",
  },
  {
    title: "Etentje",
    image: "/assets/eten.jpeg",
  },
  {
    title: "Nieuwe fiets",
    image: "/assets/fiets.jpg",
  },
  {
    title: "Macbook",
    image: "/assets/macbook.jpeg",
  },
];

export const Usage = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Jij bepaalt het doel</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {usage.map((item) => (
            <Card key={item.title} className="relative overflow-hidden rounded-lg">
              <CardContent className="relative flex flex-col pb-0 pt-4">
                <img src={item.image} alt={item.title} loading="lazy" className="w-full h-64 object-cover rounded-t-lg rounded-b-lg" />
                <div className="bg-white p-4 pb-4 rounded-b-lg">
                  <h3 className="text-lg font-semibold text-center">{item.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
