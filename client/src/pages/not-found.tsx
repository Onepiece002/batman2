import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { AlertCircle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-dark-primary text-text-primary min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <AlertCircle className="h-16 w-16 text-text-secondary" />
          </div>
          
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
          
          <p className="text-text-secondary text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <Link href="/">
            <button className="inline-flex items-center px-6 py-3 bg-text-primary text-dark-primary font-semibold tracking-wider hover:bg-text-secondary transition-colors duration-300">
              <Home className="h-4 w-4 mr-2" />
              RETURN HOME
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
