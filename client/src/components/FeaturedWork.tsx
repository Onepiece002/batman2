import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { portfolioImages } from "@/data/staticData";

export default function FeaturedWork() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Get first 8 images for featured work
  const featuredImages = portfolioImages.slice(0, 8);
  const itemWidth = 280; // Width of each item including gap
  const maxScroll = Math.max(0, (featuredImages.length - 3) * itemWidth);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    
    // Horizontal scrolling: positive deltaY = scroll right, negative = scroll left
    const scrollSpeed = 2;
    const newPosition = Math.max(0, Math.min(maxScroll, scrollPosition + (e.deltaY * scrollSpeed)));
    
    setScrollPosition(newPosition);
  };

  const scrollTo = (direction: 'left' | 'right') => {
    const scrollAmount = itemWidth * 2; // Scroll 2 items at a time
    const newPosition = direction === 'left' 
      ? Math.max(0, scrollPosition - scrollAmount)
      : Math.min(maxScroll, scrollPosition + scrollAmount);
    
    setScrollPosition(newPosition);
  };

  return (
    <section className="py-20 px-4 bg-dark-primary dark:bg-dark-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-text-primary dark:text-white">FEATURED WORK</h2>
          <p className="text-text-secondary dark:text-text-secondary text-lg">
            A curated selection of recent projects and creative endeavors
          </p>
        </div>

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
            className="overflow-hidden px-12 relative cursor-grab active:cursor-grabbing"
            onWheel={handleWheel}
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
                  className="flex-shrink-0 w-64 group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative overflow-hidden rounded-lg bg-dark-card dark:bg-dark-card shadow-xl">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={image.imageUrl}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading={index < 3 ? "eager" : "lazy"}
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
    </section>
  );
}