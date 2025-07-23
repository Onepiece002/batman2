import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navigation() {
  const [location] = useLocation();
  const { user, isAuthenticated } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location === path;

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/portfolio", label: "PORTFOLIO" },
    { path: "/blog", label: "BLOG" },
    { path: "/about", label: "ABOUT" },
    { path: "/contact", label: "CONTACT" },
  ];

  const handleLogout = () => {
    window.location.href = "/api/logout";
  };

  const handleLogin = () => {
    window.location.href = "/api/login";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-primary/90 backdrop-blur-sm border-b border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold tracking-wider text-white hover:text-gray-300 transition-colors">
              PORTFOLIO
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
                      ? "text-white active"
                      : "text-text-secondary hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Auth Section */}
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-white hover:text-gray-300">
                      <User className="h-4 w-4 mr-2" />
                      {user?.firstName || "User"}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-dark-card border-border-dark">
                    <DropdownMenuItem asChild>
                      <Link href="/profile" className="text-white hover:text-gray-300">
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    {user?.isAdmin && (
                      <DropdownMenuItem asChild>
                        <Link href="/admin" className="text-white hover:text-gray-300">
                          Admin Dashboard
                        </Link>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem onClick={handleLogout} className="text-white hover:text-gray-300">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button onClick={handleLogin} className="btn-primary">
                  SIGN IN
                </Button>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-gray-300"
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
      <div className={`mobile-menu fixed top-16 left-0 w-full h-screen bg-dark-primary md:hidden ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="px-4 py-6 space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-lg font-medium transition-colors ${
                isActive(item.path) ? "text-white" : "text-text-secondary hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Auth Section */}
          <div className="pt-4 border-t border-border-dark">
            {isAuthenticated ? (
              <div className="space-y-4">
                <Link
                  href="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-lg font-medium text-text-secondary hover:text-white transition-colors"
                >
                  Profile
                </Link>
                {user?.isAdmin && (
                  <Link
                    href="/admin"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-medium text-text-secondary hover:text-white transition-colors"
                  >
                    Admin Dashboard
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="block text-lg font-medium text-text-secondary hover:text-white transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={handleLogin}
                className="block text-lg font-medium text-white hover:text-gray-300 transition-colors"
              >
                SIGN IN
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
