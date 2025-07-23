import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { portfolioImages } from "@/data/staticData";

export default function FeaturedWork() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Get first 6 images for featured work
  const featuredImages = portfolioImages.slice(0, 6);
  const itemWidth = 280; // Width of each item including gap

  const scroll = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentIndex(Math.max(0, currentIndex - 1));
    } else {
      setCurrentIndex(Math.min(featuredImages.length - 4, currentIndex + 1));
    }
  };

  // Handle mouse wheel scrolling with throttling
  const [isScrolling, setIsScrolling] = useState(false);
  
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    
    if (isScrolling) return; // Prevent rapid scrolling
    
    setIsScrolling(true);
    
    if (Math.abs(e.deltaY) > 50) { // Only scroll on significant wheel movement
      if (e.deltaY > 0) {
        scroll('right');
      } else {
        scroll('left');
      }
    }
    
    // Reset scrolling flag after delay
    setTimeout(() => setIsScrolling(false), 300);
  };

  return (
    <section className="py-20 px-4 bg-dark-primary relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">FEATURED WORK</h2>
          <p className="text-text-secondary text-lg">
            A curated selection of recent projects and creative endeavors
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 disabled:opacity-30 disabled:cursor-not-allowed text-white p-3 rounded-full transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll('right')}
            disabled={currentIndex >= featuredImages.length - 4}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 disabled:opacity-30 disabled:cursor-not-allowed text-white p-3 rounded-full transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Container */}
          <div 
            ref={containerRef}
            className="overflow-hidden px-12"
            onWheel={handleWheel}
          >
            <motion.div
              className="flex gap-6"
              animate={{
                x: -currentIndex * itemWidth
              }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 100
              }}
            >
              {featuredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className="min-w-[264px] group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-lg bg-dark-card aspect-[4/5]">
                    <img
                      src={image.imageUrl}
                      alt={image.title || "Featured work"}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {image.title}
                      </h3>
                      <p className="text-gray-300 text-sm uppercase tracking-wide">
                        {image.category}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.max(1, featuredImages.length - 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-white"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Link href="/portfolio">
            <button className="btn-secondary px-8 py-3 text-lg">
              VIEW MORE WORK
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}