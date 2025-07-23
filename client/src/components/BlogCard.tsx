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
        <div className="aspect-[1/1.5] overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        <div className="text-text-secondary text-sm mb-3">
          {formatDate(post.createdAt)} • 5 min read
        </div>
        <h3 className="text-xl font-semibold mb-3 text-white leading-tight">{post.title}</h3>
        <p className="text-text-secondary mb-6 flex-1 line-clamp-3">
          {post.excerpt || `${post.content.substring(0, 120)}...`}
        </p>
        <Link href={`/blog/${post.slug}`}>
          <button className="btn-secondary w-full">
            Read More
          </button>
        </Link>
      </div>
    </motion.article>
  );
}
