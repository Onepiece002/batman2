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
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-700/30" style={{ backgroundColor: 'hsl(0, 0%, 3%)', borderTopColor: 'hsl(0, 0%, 20%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Content - Always Dark Theme */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Camera className="h-7 w-7 text-white" />
              <h3 className="text-2xl font-cursive text-white" style={{ fontFamily: 'Dancing Script, cursive' }}>
                Rajesh Nunna
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Visual storytelling through the art of photography. Capturing moments that matter.
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
                    className={`p-3 rounded-full bg-black/40 border border-gray-700 transition-all duration-300 hover:border-white hover:scale-110 hover:bg-black/60 ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              QUICK LINKS
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm py-1 hover:translate-x-1 transform"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              GET IN TOUCH
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-white flex-shrink-0" />
                <a 
                  href="mailto:hello@photographer.com" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  hello@photographer.com
                </a>
              </div>
              <p className="text-gray-300 text-sm flex items-center space-x-3">
                <span className="w-4 h-4 flex-shrink-0"></span>
                <span>San Francisco, CA</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Always Dark */}
        <div className="border-t border-gray-700/50 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Rajesh Nunna Photography. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-xs">
              <a 
                href="/privacy" 
                className="text-gray-400 hover:text-white transition-colors uppercase tracking-wide"
              >
                Privacy
              </a>
              <a 
                href="/terms" 
                className="text-gray-400 hover:text-white transition-colors uppercase tracking-wide"
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