"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full z-0"
        style={{
          backgroundImage: "url(/Images/2.jpeg)",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Floating Pokemon Elements (decorative) */}
      <motion.div
        className="absolute top-1/4 left-1/6 w-16 h-16 md:w-24 md:h-24 z-10 opacity-70"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{ repeat: Infinity, duration: 6 }}
      >
        <div className="w-full h-full rounded-full bg-primary/30 backdrop-blur-sm"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/5 w-12 h-12 md:w-20 md:h-20 z-10 opacity-70"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0, 5, 0],
        }}
        transition={{ repeat: Infinity, duration: 7, delay: 0.5 }}
      >
        <div className="w-full h-full rounded-full bg-secondary/30 backdrop-blur-sm"></div>
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-1/4 w-10 h-10 md:w-16 md:h-16 z-10 opacity-70"
        animate={{
          y: [0, 10, 0],
          rotate: [0, 10, 0, -10, 0],
        }}
        transition={{ repeat: Infinity, duration: 5, delay: 1 }}
      >
        <div className="w-full h-full rounded-full bg-accent/30 backdrop-blur-sm"></div>
      </motion.div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-white text-shadow-lg"
          >
            与精灵决斗吧！
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-white/90 text-shadow"
          >
            踏上穿越宝可梦世界的史诗之旅。
            在这款沉浸式冒险游戏中，收集、训练并与您喜爱的宝可梦展开战斗。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="https://www.123865.com/s/YbRijv-h6sfh" download target="_blank" rel="noopener noreferrer">
              <Button size="xl" className="font-bold rounded-full">
                <Download className="mr-2 h-5 w-5" />
                立即安装
              </Button>
            </a>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;