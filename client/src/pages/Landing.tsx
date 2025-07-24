import { useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import ParallaxSection from "@/components/ParallaxSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import FeaturedWork from "@/components/FeaturedWork";
import { Link } from "wouter";
import { blogPosts, portfolioImages } from "@/data/staticData";

export default function Landing() {
  // Featured images - first 6 from portfolio
  const featuredImages = portfolioImages.slice(0, 4);
  
  // Latest blog posts - first 3 published posts
  const latestPosts = blogPosts.filter(post => post.published).slice(0, 3);

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
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const elementsToObserve = document.querySelectorAll(".fade-in");
    elementsToObserve.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-dark-primary text-text-primary">
      <Navigation />

      {/* Hero Section with Parallax */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
        height="h-screen"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            VISUAL STORYTELLER
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Creating compelling narratives through the lens of creativity and innovation
          </p>
          <div className="flex justify-center items-center">
            <Link href="/portfolio">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-text-primary to-text-secondary text-dark-primary font-semibold tracking-wider overflow-hidden rounded-lg border-2 border-transparent hover:border-white hover:bg-white hover:text-black hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="relative z-10">VIEW PORTFOLIO</span>
                <div className="absolute inset-0 bg-gradient-to-r from-text-secondary to-text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
          </div>
        </motion.div>
      </ParallaxSection>

      {/* Featured Work Preview */}
      <FeaturedWork />

      {/* Beyond Boundaries Parallax Section */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1200"
        height="h-screen"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">BEYOND BOUNDARIES</h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto">
            Exploring new horizons in visual storytelling and pushing creative limits
          </p>
        </motion.div>
      </ParallaxSection>

      {/* Latest Blog Posts */}
      <section className="py-20 px-4 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-4">LATEST INSIGHTS</h2>
            <p className="text-text-secondary text-lg">
              Thoughts on photography, creativity, and visual storytelling
            </p>
          </div>

          {latestPosts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8 fade-in">
              {latestPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center fade-in">
              <p className="text-text-secondary">No blog posts available.</p>
            </div>
          )}
        </div>
      </section>

      {/* Second Parallax Section */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600"
        height="h-96"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">CAPTURING MOMENTS</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Every frame tells a story, every click preserves a memory
          </p>
        </motion.div>
      </ParallaxSection>


      
      <Footer />
    </div>
  );
}
