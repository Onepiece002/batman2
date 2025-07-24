import { Link } from "wouter";
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube, 
  Mail, 
  Camera
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/photographer",
      icon: Instagram,
      color: "hover:text-pink-400"
    },
    {
      name: "Twitter", 
      href: "https://twitter.com/photographer",
      icon: Twitter,
      color: "hover:text-blue-400"
    },
    {
      name: "Facebook",
      href: "https://facebook.com/photographer", 
      icon: Facebook,
      color: "hover:text-blue-600"
    },
    {
      name: "YouTube",
      href: "https://youtube.com/photographer",
      icon: Youtube,
      color: "hover:text-red-500"
    }
  ];

  const quickLinks = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <footer className="bg-dark-secondary dark:bg-dark-secondary border-t border-border-dark dark:border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Main Footer Content - Compact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          
          {/* Brand Section */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Camera className="h-6 w-6 text-text-primary dark:text-text-primary" />
              <h3 className="text-lg font-bold text-text-primary dark:text-white tracking-wide">
                PORTFOLIO
              </h3>
            </div>
            <p className="text-text-secondary dark:text-text-secondary text-sm">
              Visual storytelling through the art of photography.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full bg-dark-card dark:bg-dark-card border border-border-dark dark:border-border-dark transition-all duration-300 hover:border-text-primary dark:hover:border-text-primary hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-text-primary dark:text-white tracking-wide">
              QUICK LINKS
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="text-text-secondary dark:text-text-secondary hover:text-text-primary dark:hover:text-white transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-text-primary dark:text-white tracking-wide">
              CONTACT
            </h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-text-primary dark:text-text-primary flex-shrink-0" />
                <a 
                  href="mailto:hello@photographer.com" 
                  className="text-text-secondary dark:text-text-secondary hover:text-text-primary dark:hover:text-white transition-colors text-sm"
                >
                  hello@photographer.com
                </a>
              </div>
              <p className="text-text-secondary dark:text-text-secondary text-sm">
                San Francisco, CA
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Compact */}
        <div className="border-t border-border-dark dark:border-border-dark pt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-text-secondary dark:text-text-secondary text-sm">
              &copy; {currentYear} Portfolio Photography. All rights reserved.
            </p>
            
            <div className="flex space-x-4 text-xs">
              <a 
                href="/privacy" 
                className="text-text-secondary dark:text-text-secondary hover:text-text-primary dark:hover:text-white transition-colors"
              >
                Privacy
              </a>
              <a 
                href="/terms" 
                className="text-text-secondary dark:text-text-secondary hover:text-text-primary dark:hover:text-white transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}