import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000"
                alt="About Me"
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl font-bold mb-6">ABOUT ME</h1>
              <p className="text-text-secondary text-lg mb-6">
                I'm a passionate visual storyteller with over a decade of experience in portrait and lifestyle photography. My work focuses on capturing authentic human moments and emotions that tell compelling stories.
              </p>
              <p className="text-text-secondary text-lg mb-6">
                Based in Toronto, I specialize in creating striking portraits for individuals, artists, and brands who want to make a lasting visual impact. My approach combines technical precision with creative vision to produce images that resonate.
              </p>
              <p className="text-text-secondary text-lg mb-8">
                When I'm not behind the camera, you'll find me exploring new locations, experimenting with lighting techniques, or sharing knowledge through workshops and online tutorials.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">SPECIALTIES</h3>
                  <p className="text-text-secondary">
                    Portrait Photography • Lifestyle Shoots • Brand Photography • Creative Direction
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
    </div>
  );
}
