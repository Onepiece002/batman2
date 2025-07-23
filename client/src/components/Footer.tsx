import { Link } from "wouter";
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Camera,
  Heart
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

  const services = [
    "Portrait Photography",
    "Wedding Photography", 
    "Street Photography",
    "Landscape Photography",
    "Commercial Photography",
    "Event Photography"
  ];

  return (
    <footer className="bg-dark-secondary border-t border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Camera className="h-8 w-8 text-text-primary" />
              <h3 className="text-2xl font-bold text-white tracking-wider">
                PORTFOLIO
              </h3>
            </div>
            <p className="text-text-secondary leading-relaxed">
              Capturing life's most precious moments through the art of visual storytelling. 
              Every frame tells a story, every shot captures an emotion.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full bg-dark-card border border-border-dark transition-all duration-300 hover:border-text-primary hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white tracking-wide">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-text-secondary hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-text-primary transition-all duration-300 mr-0 group-hover:mr-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white tracking-wide">
              SERVICES
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-text-secondary flex items-center">
                  <div className="w-1.5 h-1.5 bg-text-primary rounded-full mr-3 flex-shrink-0"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white tracking-wide">
              GET IN TOUCH
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-text-secondary">Email</p>
                  <a 
                    href="mailto:hello@photographer.com" 
                    className="text-white hover:text-text-primary transition-colors"
                  >
                    hello@photographer.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-text-secondary">Phone</p>
                  <a 
                    href="tel:+1234567890" 
                    className="text-white hover:text-text-primary transition-colors"
                  >
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-text-secondary">Location</p>
                  <p className="text-white">
                    San Francisco, CA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border-dark mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-text-secondary">
              <span>&copy; {currentYear} Portfolio Photography.</span>
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for visual storytelling.</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a 
                href="/privacy" 
                className="text-text-secondary hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-text-secondary hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}