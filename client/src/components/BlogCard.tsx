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
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop';
            }}
          />
        </div>
      )}
      <div className="p-3 flex-1 flex flex-col">
        <div className="text-text-secondary text-xs mb-1">
          {formatDate(post.createdAt)}
        </div>
        <h3 className="text-sm font-semibold mb-2 text-white leading-tight line-clamp-2">{post.title}</h3>
        <Link href={`/blog/${post.slug}`}>
          <button className="btn-secondary w-full text-xs py-2">
            Read More
          </button>
        </Link>
      </div>
    </motion.article>
  );
}
