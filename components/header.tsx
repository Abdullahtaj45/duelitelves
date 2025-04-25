"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { scrollToElement } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <motion.div
            className="text-xl md:text-2xl font-bold flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-primary">与精灵决斗吧！</span>
          </motion.div>
        </Link>

        <nav className="hidden md:flex space-x-4 items-center">
          <motion.div
            custom={0}
            variants={menuItemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.1 }}
          >
            <button
              onClick={() => scrollToElement("features")}
              className="hover:text-primary transition-colors duration-200"
            >
              特征
            </button>
          </motion.div>
          
          <motion.div
            custom={1}
            variants={menuItemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.1 }}
          >
            <button
              onClick={() => scrollToElement("highlights")}
              className="hover:text-primary transition-colors duration-200"
            >
             亮点
            </button>
          </motion.div>
          
          <motion.div
            custom={2}
            variants={menuItemVariants}
            initial="hidden"
            animate="visible"
          >
            <Button 
              variant="secondary"
              onClick={() => window.open('https://game.jdbjl.top/login', '_blank')}
            >
              用户管理
            </Button>
          </motion.div>
        </nav>

        <button
          className="md:hidden text-foreground p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <motion.div
        className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-md"
        variants={mobileMenuVariants}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <button
            onClick={() => {
              scrollToElement("features");
              setIsMenuOpen(false);
            }}
            className="py-2 hover:text-primary transition-colors duration-200"
          >
            Features
          </button>
          <button
            onClick={() => {
              scrollToElement("highlights");
              setIsMenuOpen(false);
            }}
            className="py-2 hover:text-primary transition-colors duration-200"
          >
            Highlights
          </button>
          <Button 
            variant="secondary" 
            className="w-full"
            onClick={() => window.open('https://pokemon.com', '_blank')}
          >
            User Management
          </Button>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;