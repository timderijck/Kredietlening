import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="container px-4 text-center">
        <div className="max-w-2xl mx-auto animate-fade-in">
          <h1 className="mb-4 text-primary">404</h1>
          <h2 className="mb-4 text-foreground">Pagina niet gevonden</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Sorry, de pagina die je zoekt bestaat niet of is verplaatst.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Terug naar home
              </Link>
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-5 w-5" />
              Ga terug
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
