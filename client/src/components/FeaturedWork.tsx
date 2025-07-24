import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { portfolioImages } from "@/data/staticData";

export default function FeaturedWork() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Get first 8 images for featured work
  const featuredImages = portfolioImages.slice(0, 8);
  const itemWidth = 340; // Increased width for larger items
  const maxScroll = Math.max(0, (featuredImages.length - 3) * itemWidth);

  // Handle scroll-based sliding effect
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress as the section enters and exits the viewport
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      // Start sliding when section is 80% visible from bottom
      const startPoint = windowHeight * 0.8;
      // Continue until section is 20% visible from top
      const endPoint = -sectionHeight * 0.2;
      
      if (sectionTop <= startPoint && sectionTop >= endPoint) {
        // Calculate progress (0 to 1)
        const progress = (startPoint - sectionTop) / (startPoint - endPoint);
        const clampedProgress = Math.max(0, Math.min(1, progress));
        
        // Apply easing for smoother animation
        const easedProgress = clampedProgress * clampedProgress * (3 - 2 * clampedProgress);
        
        // Set scroll position based on progress
        setScrollPosition(easedProgress * maxScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [maxScroll]);

  const scrollTo = (direction: 'left' | 'right') => {
    const scrollAmount = itemWidth * 2; // Scroll 2 items at a time
    const newPosition = direction === 'left' 
      ? Math.max(0, scrollPosition - scrollAmount)
      : Math.min(maxScroll, scrollPosition + scrollAmount);
    
    setScrollPosition(newPosition);
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="py-20 px-4 bg-dark-primary dark:bg-dark-primary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.01 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-text-primary dark:text-white">FEATURED WORK</h2>
          <p className="text-text-secondary dark:text-text-secondary text-lg">
            A curated selection of recent projects and creative endeavors
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scrollTo('left')}
            disabled={scrollPosition === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 disabled:opacity-30 disabled:cursor-not-allowed text-white p-3 rounded-full transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scrollTo('right')}
            disabled={scrollPosition >= maxScroll}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 disabled:opacity-30 disabled:cursor-not-allowed text-white p-3 rounded-full transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Container */}
          <div 
            ref={containerRef}
            className="overflow-hidden px-12 relative"
          >
            <div 
              className="flex gap-6 transition-transform duration-300 ease-out"
              style={{ 
                transform: `translateX(-${scrollPosition}px)`,
                width: `${featuredImages.length * itemWidth}px`
              }}
            >
              {featuredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className="flex-shrink-0 w-80 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.01 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                >
                  <div className="relative overflow-hidden rounded-lg bg-dark-card dark:bg-dark-card shadow-xl">
                    <div className="aspect-[4/5] overflow-hidden bg-gray-800">
                      <img
                        src={image.imageUrl}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading={index < 3 ? "eager" : "lazy"}
                        onError={(e) => {
                          // If image fails to load, try to find next available image
                          const currentTarget = e.currentTarget as HTMLImageElement;
                          const fallbackImages = [
                            'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop',
                            'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop',
                            'https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?w=800&h=600&fit=crop',
                            'https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?w=800&h=600&fit=crop'
                          ];
                          
                          const currentIndex = fallbackImages.findIndex(url => url === currentTarget.src);
                          const nextIndex = currentIndex + 1;
                          
                          if (nextIndex < fallbackImages.length) {
                            currentTarget.src = fallbackImages[nextIndex];
                          } else {
                            // Last resort fallback
                            currentTarget.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop';
                          }
                        }}
                      />
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white font-semibold text-lg mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          {image.title}
                        </h3>
                        <p className="text-gray-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                          {image.description}
                        </p>
                        <div className="mt-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                            {image.category.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link href="/portfolio">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-text-primary to-text-secondary text-dark-primary font-semibold tracking-wider overflow-hidden rounded-lg border-2 border-transparent hover:border-text-primary hover:bg-transparent hover:text-text-primary transform transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="relative z-10">VIEW ALL WORK</span>
                <div className="absolute inset-0 bg-gradient-to-r from-text-secondary to-text-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}