"use client";

import { motion } from "framer-motion";
import { Zap, Globe, Users, Trophy, Repeat, Gamepad } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "实时战斗",
    description: "体验节奏紧凑、充满动态的战斗场面，结合深度策略玩法与震撼的视觉特效，带来前所未有的战斗快感。每一场对决都考验你的智慧与反应，真正让你沉浸在宝可梦世界的精彩纷争中。"
  },
  {
    icon: <Globe className="h-8 w-8 text-secondary" />,
    title: "开放世界探索",
    description: "探索一个无缝衔接的广阔世界，拥有丰富多样的生态环境与等待揭开的神秘秘密。每一片区域都蕴藏着未知的冒险与惊喜，等你亲自发现。"
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: "多人冒险",
    description: "与好友携手合作，或在对战中挑战劲敌，多种合作与竞技模式任你选择。无论是并肩作战还是一决高下，都能体验到激烈又充满乐趣的游戏体验。"
  },
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: "排名赛",
    description: "在赛季锦标赛中不断攀登排名，展现你的实力，赢取专属奖励。每一场胜利都是迈向巅峰的关键，让你成为真正的宝可梦大师！"
  },
  {
    icon: <Repeat className="h-8 w-8 text-secondary" />,
    title: "进化系统",
    description: "通过独特的进化路径和专属条件，培养并进化你的宝可梦。每只宝可梦都有属于自己的成长之路，等待你悉心挖掘与引导。"
  },
  {
    icon: <Gamepad className="h-8 w-8 text-accent" />,
    title: "跨平台游戏",
    description: "借助云存档功能，可在多设备间无缝游玩，随时随地继续你的冒险旅程。无论身处何地，精彩永不间断。"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
          您所需要的一切 <span className="text-primary">冒险</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
          我们的游戏配备了您终极享受体验所需的所有功能。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;