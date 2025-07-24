import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";

export default function LiftedHeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Create lifted effect - image moves up faster than scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      {/* Background Image with Lifted Effect */}
      <motion.div
        style={{
          y,
          opacity,
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&h=1440)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute inset-0 w-full h-[150vh] -top-20"
      />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-center px-4"
        >
          <h1 className="md:text-6xl lg:text-7xl mb-8 tracking-tight text-[48px] font-normal text-white">
            Rajesh Nunna
          </h1>
          <p className="text-xl md:text-3xl lg:text-4xl mb-12 max-w-4xl mx-auto leading-relaxed text-white">
            Creating compelling narratives through the lens of creativity and innovation
          </p>
          <div className="flex justify-center items-center">
            <Link href="/portfolio">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-text-primary to-text-secondary text-dark-primary font-semibold tracking-wider overflow-hidden rounded-lg border-2 border-transparent hover:border-white hover:bg-white hover:text-black hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-3xl text-base">
                <span className="relative z-10">VIEW PORTFOLIO</span>
                <div className="absolute inset-0 bg-gradient-to-r from-text-secondary to-text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}