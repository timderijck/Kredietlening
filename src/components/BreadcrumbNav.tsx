import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

interface BreadcrumbNavProps {
  pageTitle?: string; // Make pageTitle optional
}

export const BreadcrumbNav = ({ pageTitle }: BreadcrumbNavProps) => {
  return (
    <section className="sticky top-16 z-40 bg-background/95 border-b">
      <div className="container mx-auto px-4 py-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              {pageTitle ? (
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>Home</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {pageTitle && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{pageTitle}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </section>
  );
};
