import { useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import ParallaxSection from "@/components/ParallaxSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import BlogCard from "@/components/BlogCard";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import type { BlogPost, PortfolioImage } from "@shared/schema";

export default function Landing() {
  const { data: blogPosts } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog/posts"],
  });

  const { data: portfolioImages } = useQuery<PortfolioImage[]>({
    queryKey: ["/api/portfolio/images"],
  });

  // Featured images - first 4 from portfolio
  const featuredImages = portfolioImages?.slice(0, 4) || [];
  
  // Latest blog posts - first 3
  const latestPosts = blogPosts?.slice(0, 3) || [];

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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/portfolio">
              <button className="px-8 py-3 bg-text-primary text-dark-primary font-semibold tracking-wider hover:bg-text-secondary transition-colors duration-300">
                VIEW PORTFOLIO
              </button>
            </Link>
            <a 
              href="/api/login"
              className="px-8 py-3 border border-text-primary text-text-primary font-semibold tracking-wider hover:bg-text-primary hover:text-dark-primary transition-all duration-300"
            >
              LOGIN
            </a>
          </div>
        </motion.div>
      </ParallaxSection>

      {/* Featured Work Preview */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4">FEATURED WORK</h2>
          <p className="text-text-secondary text-lg">
            A selection of recent projects and creative endeavors
          </p>
        </div>

        {featuredImages.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 fade-in">
            {featuredImages.map((image) => (
              <div key={image.id} className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={image.imageUrl}
                    alt={image.title || "Featured work"}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center fade-in">
            <p className="text-text-secondary">No featured work available.</p>
          </div>
        )}

        <div className="text-center mt-12">
          <Link href="/portfolio">
            <button className="btn-secondary">VIEW MORE</button>
          </Link>
        </div>
      </section>

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
    </div>
  );
}
