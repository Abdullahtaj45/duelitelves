"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface GameHighlightProps {
  title: string;
  description: string;
  imageUrl: string;
  isReversed?: boolean;
  index: number;
}

const GameHighlight = ({
  title,
  description,
  imageUrl,
  isReversed = false,
  index,
}: GameHighlightProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: isReversed ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.1 + 0.3,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: isReversed ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.1 + 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={cn(
        "flex flex-col md:flex-row items-center mb-20 last:mb-0 gap-8 md:gap-12",
        isReversed && "md:flex-row-reverse"
      )}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Image */}
      <motion.div
        className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-xl"
        variants={imageVariants}
      >
        <div className="relative w-full aspect-video md:aspect-square overflow-hidden rounded-xl">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover hover:scale-105 transition-transform duration-700"
            priority
          />
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="w-full md:w-1/2"
        variants={textVariants}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
          {title}
        </h3>
        <p className="text-foreground/80 text-lg leading-relaxed">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default GameHighlight;