import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  backgroundImage: string;
  height?: string;
  className?: string;
}

export default function ParallaxSection({
  children,
  backgroundImage,
  height = "h-screen",
  className = "",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={ref} className={`relative ${height} flex items-center justify-center overflow-hidden ${className}`}>
      <motion.div
        style={{
          y,
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute inset-0 w-full h-full"
      />
      <div className="relative z-10 text-center">{children}</div>
    </div>
  );
}
