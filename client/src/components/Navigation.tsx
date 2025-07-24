import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location === path;

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/portfolio", label: "PORTFOLIO" },
    { path: "/blog", label: "BLOG" },
    { path: "/about", label: "ABOUT" },
    { path: "/contact", label: "CONTACT" },
  ];



  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-primary/90 dark:bg-dark-primary/90 backdrop-blur-sm border-b border-border-dark dark:border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="relative text-2xl font-cursive tracking-wider text-text-primary dark:text-white hover:text-text-secondary dark:hover:text-gray-300 transition-colors group" style={{ fontFamily: 'Dancing Script, cursive' }}>
              <span className="relative">
                Rajesh Nunna
                <span className="absolute inset-0 border-t border-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left top-1/2"></span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`nav-item text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-text-primary dark:text-white font-semibold"
                      : "text-text-secondary dark:text-text-secondary hover:text-text-primary dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-text-primary dark:text-white hover:text-text-secondary dark:hover:text-gray-300"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu fixed top-16 left-0 w-full h-screen bg-dark-primary dark:bg-dark-primary md:hidden ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="px-4 py-6 space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-lg font-medium transition-colors ${
                isActive(item.path) ? "text-text-primary dark:text-white font-semibold" : "text-text-secondary dark:text-text-secondary hover:text-text-primary dark:hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
