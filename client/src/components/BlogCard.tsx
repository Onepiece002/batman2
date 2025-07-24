import { Link } from "wouter";
import { motion } from "framer-motion";
import type { BlogPost } from "@/data/staticData";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const formatDate = (dateString: string | Date | null) => {
    if (!dateString) return "Date not available";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-dark-card rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 h-full flex flex-col"
    >
      {post.featuredImage && (
        <div className="aspect-square overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-4 flex-1 flex flex-col">
        <div className="text-text-secondary text-xs mb-2">
          {formatDate(post.createdAt)} • 5 min read
        </div>
        <h3 className="text-lg font-semibold mb-3 text-white leading-tight">{post.title}</h3>
        <Link href={`/blog/${post.slug}`}>
          <button className="btn-secondary w-full">
            Read More
          </button>
        </Link>
      </div>
    </motion.article>
  );
}
