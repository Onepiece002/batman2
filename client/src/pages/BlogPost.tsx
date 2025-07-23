import { useParams } from "wouter";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts, type BlogPost } from "@/data/staticData";

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
              {formatDate(post.createdAt)} • 5 min read
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            {post.excerpt && (
              <p className="text-xl text-text-secondary mb-8">{post.excerpt}</p>
            )}
          </motion.div>

          {post.featuredImage && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-headings:font-bold prose-h1:text-4xl prose-h1:mb-6 prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8 prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6 prose-p:text-text-secondary prose-p:leading-relaxed prose-p:mb-4 prose-a:text-text-primary prose-strong:text-white prose-ul:text-text-secondary prose-ol:text-text-secondary"
          >
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-white">{paragraph.substring(3)}</h2>;
              }
              if (paragraph.startsWith('# ')) {
                return <h1 key={index} className="text-3xl font-bold mt-8 mb-4 text-white">{paragraph.substring(2)}</h1>;
              }
              if (paragraph.trim() === '') {
                return <br key={index} />;
              }
              return <p key={index} className="mb-4 text-text-secondary leading-relaxed">{paragraph}</p>;
            })}
          </motion.div>
        </article>
      </div>
      
      <Footer />
    </div>
  );
}
