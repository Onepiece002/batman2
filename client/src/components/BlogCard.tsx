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
      className="group bg-dark-card dark:bg-dark-card rounded-xl overflow-hidden hover:transform hover:scale-[1.03] transition-all duration-500 h-full flex flex-col shadow-xl hover:shadow-2xl border border-gray-800 dark:border-gray-700"
    >
      {post.featuredImage && (
        <div className="aspect-[4/3] overflow-hidden relative">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        <div className="text-text-secondary dark:text-text-secondary text-sm mb-3 font-medium">
          {formatDate(post.createdAt)}
        </div>
        <h3 className="text-lg font-bold mb-4 text-white dark:text-white leading-tight line-clamp-2 group-hover:text-text-primary transition-colors duration-300">
          {post.title}
        </h3>
        <div className="mt-auto">
          <Link href={`/blog/${post.slug}`}>
            <button className="group/btn relative w-full px-6 py-3 bg-gradient-to-r from-text-primary to-text-secondary text-dark-primary font-semibold tracking-wider overflow-hidden rounded-lg border-2 border-transparent hover:border-text-primary hover:bg-transparent hover:text-text-primary transform transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="relative z-10">READ MORE</span>
              <div className="absolute inset-0 bg-gradient-to-r from-text-secondary to-text-primary opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></div>
            </button>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
