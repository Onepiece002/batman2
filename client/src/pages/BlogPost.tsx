import { useParams } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  
  const post = blogPosts.find(p => p.slug === slug && p.published);

  const formatDate = (dateString: string | Date | null) => {
    if (!dateString) return "Date not available";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (!post) {
    return (
      <div className="bg-dark-primary text-text-primary min-h-screen">
        <Navigation />
        <div className="pt-24 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-text-secondary">The blog post you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-dark-primary text-text-primary">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <article className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="text-text-secondary text-sm mb-4">
              {formatDate(post.publishedAt)} • By {post.author} • 5 min read
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            {post.excerpt && (
              <p className="text-xl text-text-secondary mb-8">{post.excerpt}</p>
            )}
            
            {post.featuredImage && (
              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src={post.featuredImage} 
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <div 
              className="blog-content text-text-secondary leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mt-8 mb-6 text-white">$1</h1>')
                  .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold mt-6 mb-4 text-white">$1</h2>')
                  .replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold mt-4 mb-3 text-white">$3</h3>')
                  .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="w-full h-64 md:h-80 object-cover rounded-lg my-6" />')
                  .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                  .replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>')
                  .replace(/^- (.+)$/gm, '<li class="mb-1">$1</li>')
                  .replace(/\n\n/g, '</p><p class="mb-4 leading-relaxed">')
                  .replace(/^(?!<[h|l|i]).+/gm, '<p class="mb-4 leading-relaxed">$&</p>')
              }}
            />
          </motion.div>
        </article>
      </div>
      
      <Footer />
    </div>
  );
}
