import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import BlogCard from "@/components/BlogCard";
import { useQuery } from "@tanstack/react-query";
import type { BlogPost } from "@shared/schema";

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog/posts"],
  });

  const totalPosts = posts?.length || 0;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts?.slice(startIndex, startIndex + postsPerPage) || [];

  if (isLoading) {
    return (
      <div className="bg-dark-primary text-text-primary min-h-screen">
        <Navigation />
        <div className="pt-24 flex justify-center items-center">
          <div className="text-text-secondary">Loading blog posts...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-dark-primary text-text-primary">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">BLOG</h1>
            <p className="text-text-secondary text-lg">
              Insights, tutorials, and thoughts on photography and creative process
            </p>
          </motion.div>

          {currentPosts.length > 0 ? (
            <div className="space-y-12">
              {currentPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-text-secondary text-lg">No blog posts available.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-16">
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 font-semibold transition-colors ${
                      page === currentPage
                        ? "bg-white text-black"
                        : "border border-border-dark text-text-secondary hover:bg-white hover:text-black"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
