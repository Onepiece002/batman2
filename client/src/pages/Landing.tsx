import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import ParallaxSection from "@/components/ParallaxSection";
import LiftedHeroSection from "@/components/LiftedHeroSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import FeaturedWork from "@/components/FeaturedWork";
import { Link } from "wouter";
import { portfolioImages } from "@/data/staticData";
import { blogPosts } from "@/data/blogPosts";

export default function Landing() {
  // Featured images - first 6 from portfolio
  const featuredImages = portfolioImages.slice(0, 4);

  // Latest blog posts - first 6 published posts
  const latestPosts = blogPosts.filter(post => post.published).slice(0, 6);

  // Blog slider state
  const [blogScrollPosition, setBlogScrollPosition] = useState(0);
  const blogContainerRef = useRef<HTMLDivElement>(null);
  const blogSectionRef = useRef<HTMLDivElement>(null);
  const blogItemWidth = 320; // Increased width for larger cards
  const maxBlogScroll = Math.max(0, (latestPosts.length - 3) * blogItemWidth);

  // Handle scroll-based sliding effect for blog section
  useEffect(() => {
    const handleScroll = () => {
      if (!blogSectionRef.current) return;

      const rect = blogSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      // Start sliding when the "LATEST INSIGHTS" heading comes into view
      const startPoint = windowHeight * 0.9;
      const endPoint = -sectionHeight;
      
      if (sectionTop <= startPoint && sectionTop >= endPoint) {
        const totalDistance = startPoint - endPoint;
        const currentDistance = startPoint - sectionTop;
        const progress = currentDistance / totalDistance;
        const clampedProgress = Math.max(0, Math.min(1, progress));
        
        // Apply smooth easing
        const easedProgress = clampedProgress * clampedProgress * clampedProgress * (clampedProgress * (clampedProgress * 6 - 15) + 10);
        
        // Set scroll position with reduced speed
        setBlogScrollPosition(easedProgress * maxBlogScroll * 0.5);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [maxBlogScroll]);

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px 100px 0px",
      }
    );

    const elementsToObserve = document.querySelectorAll(".fade-in");
    elementsToObserve.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollBlogTo = (direction: 'left' | 'right') => {
    const scrollAmount = blogItemWidth * 2; // Scroll 2 items at a time
    const newPosition = direction === 'left' 
      ? Math.max(0, blogScrollPosition - scrollAmount)
      : Math.min(maxBlogScroll, blogScrollPosition + scrollAmount);
    
    setBlogScrollPosition(newPosition);
  };

  return (
    <div className="bg-dark-primary text-text-primary">
      <Navigation />
      {/* Hero Section with Lifted Scroll Effect */}
      <LiftedHeroSection />
      {/* Featured Work Preview */}
      <FeaturedWork />
      {/* Beyond Boundaries Parallax Section */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&h=1440"
        height="h-screen"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center z-10 px-4"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">BEYOND BOUNDARIES</h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-white">
            Exploring new horizons in visual storytelling and pushing creative limits
          </p>
        </motion.div>
      </ParallaxSection>
      {/* Latest Blog Posts */}
      <section ref={blogSectionRef} className="py-20 px-4 bg-dark-primary dark:bg-dark-primary">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-text-primary dark:text-white">LATEST INSIGHTS</h2>
            <p className="text-text-secondary dark:text-text-secondary text-lg">
              Thoughts on photography, creativity, and visual storytelling
            </p>
          </motion.div>

          {latestPosts.length > 0 ? (
            <div className="relative">
              {/* Navigation Buttons */}
              <button
                onClick={() => scrollBlogTo('left')}
                disabled={blogScrollPosition === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 disabled:opacity-30 disabled:cursor-not-allowed text-white p-3 rounded-full transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() => scrollBlogTo('right')}
                disabled={blogScrollPosition >= maxBlogScroll}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 disabled:opacity-30 disabled:cursor-not-allowed text-white p-3 rounded-full transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Scrollable Container */}
              <div 
                ref={blogContainerRef}
                className="overflow-hidden px-12 relative"
              >
                <div 
                  className="flex gap-8 transition-transform duration-300 ease-out"
                  style={{ 
                    transform: `translateX(-${blogScrollPosition}px)`,
                    width: `${latestPosts.length * blogItemWidth}px`
                  }}
                >
                  {latestPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      className="flex-shrink-0 w-72"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.01 }}
                      transition={{ duration: 0.6, delay: index * 0.08 }}
                    >
                      <BlogCard post={post} index={index} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-text-secondary">No blog posts available.</p>
            </div>
          )}
        </div>
      </section>
      {/* Capturing Moments Parallax Section - Larger */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&h=1440"
        height="h-screen"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10 px-4"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">CAPTURING MOMENTS</h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-white">
            Every frame tells a story, every click preserves a memory
          </p>
        </motion.div>
      </ParallaxSection>
      
      {/* Spacer section to separate Capturing Moments from Footer */}
      <div className="bg-dark-primary py-20"></div>
      
      <Footer />
    </div>
  );
}