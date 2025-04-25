"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, ArrowUp } from "lucide-react";
import { SiTelegram, SiTencentqq } from "react-icons/si";

import { scrollToElement } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-primary">与精灵决斗吧！</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              与全球数百万玩家一起体验终极宝可梦对战冒险。收集、训练你最喜欢的宝可梦，并与它们对战。
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="mailto:3455507277@qq.com"
                whileHover={{ y: -3, color: "#D44638" }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={20} />
              </motion.a>

              <motion.a
                href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=_HQiiQCORx5cdErbYCskvaEArohoxTxS&authKey=6y1Kv7E%2F6BzHVkBlRCsO7QounPEDn5NP2CmykHEwVbOaSsfGBcughWs%2FrVsjGnum&noverify=0&group_code=881631044"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: "#12B7F5" }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <SiTencentqq size={20} />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/noah_97_xy_?igsh=azNwYzN4cDAzYTRj"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: "#E4405F" }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram size={20} />
              </motion.a>

              <motion.a
                href="https://t.me/divine1203"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: "#0088cc" }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <SiTelegram size={20} />
              </motion.a>
            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  家
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToElement("highlights")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  游戏亮点
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToElement("features")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  特征
                </button>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-border mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} 与精灵决斗吧！ All rights reserved.
          </p>
          <div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="rounded-full"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;