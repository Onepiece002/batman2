import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="bg-dark-primary text-text-primary">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/007.jpg"
                alt="About Me"
                className="w-3/4 mx-auto rounded-lg shadow-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl font-bold mb-6">ABOUT ME</h1>
              <p className="text-text-secondary text-lg mb-6">
                This is me, you a stranger? I donno how you got here there's nothing to see here. If you got the code from someone, then thanks for visiting!
              </p>
              <p className="text-text-secondary text-lg mb-6">
                Website building is in progress.
              <p className="text-text-secondary text-lg mb-8">
               Will update about me page soon.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2"> Note </h3>
                  <p className="text-text-secondary">
                    Contact the below socials if you need have any tips.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">EQUIPMENT</h3>
                  <p className="text-text-secondary">
                    Canon R5 • Sony A7R IV • Professional Lighting • Premium Lenses
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
