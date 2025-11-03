import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

const leningen = [
  {
    title: "Persoonlijke Lening",
    href: "/persoonlijke-lening-voor-grote-uitgaven",
    description: "Eenmalige uitgaven met een vaste rente en looptijd.",
  },
  {
    title: "Doorlopend Krediet",
    href: "/flexibel-doorlopend-krediet",
    description: "Flexibel geld opnemen tot een afgesproken limiet.",
  },
  {
    title: "Minilening",
    href: "/minilening-zonder-bkr-aanvragen",
    description: "Snel een klein bedrag lenen voor onverwachte kosten.",
  },
];

const kredietverstrekkers = [
  {
    title: "Santander",
    href: "/santander",
    description: "Bekend om persoonlijke leningen en autofinanciering.",
  },
  {
    title: "Ferratum",
    href: "/ferratum",
    description: "Specialist in snelle minileningen.",
  },
  {
    title: "Saldodipje",
    href: "/saldodipje",
    description: "Voor als u snel een klein bedrag nodig heeft.",
  },
];

const info = [
    {
        title: "Blog",
        href: "/blog",
        description: "Artikelen en tips over geld lenen en financiële planning.",
    },
    {
        title: "Over Ons",
        href: "/over-ons",
        description: "Leer meer over onze missie en hoe wij u helpen vergelijken.",
    },
    {
        title: "Contact",
        href: "/contact",
        description: "Neem contact met ons op voor vragen of opmerkingen.",
    },
    {
        title: "Privacy",
        href: "/privacy",
        description: "Ons beleid omtrent uw gegevens en privacy.",
    },
]

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const allLinks = [
    { path: "/", label: "Home" },
    ...leningen.map(l => ({ path: l.href, label: l.title })),
    ...kredietverstrekkers.map(k => ({ path: k.href, label: k.title })),
    ...info.map(i => ({ path: i.href, label: i.title })),
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">Kredietlening</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Leningen</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {leningen.map((lening) => (
                      <ListItem
                        key={lening.title}
                        title={lening.title}
                        href={lening.href}
                      >
                        {lening.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Kredietverstrekkers</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {kredietverstrekkers.map((kredietverstrekker) => (
                      <ListItem
                        key={kredietverstrekker.title}
                        title={kredietverstrekker.title}
                        href={kredietverstrekker.href}
                      >
                        {kredietverstrekker.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Info</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {info.map((infoItem) => (
                      <ListItem
                        key={infoItem.title}
                        title={infoItem.title}
                        href={infoItem.href}
                      >
                        {infoItem.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-muted"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-slide-in">
            <div>
              <h4 className="text-lg font-semibold mb-2">Leningen</h4>
              <div className="flex flex-row flex-wrap gap-2">
                {leningen.map((link) => (
                  <Link
                    key={link.path}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`inline-block px-4 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(link.href)
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Kredietverstrekkers</h4>
              <div className="flex flex-row flex-wrap gap-2">
                {kredietverstrekkers.map((link) => (
                  <Link
                    key={link.path}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`inline-block px-4 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(link.href)
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Info</h4>
              <div className="flex flex-row flex-wrap gap-2">
                {info.map((link) => (
                  <Link
                    key={link.path}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`inline-block px-4 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(link.href)
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
