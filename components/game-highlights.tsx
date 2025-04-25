"use client";

import { motion } from "framer-motion";
import GameHighlight from "./game-highlight";

const highlightsData = [
  {
    title: "史诗般的战斗",
    description: "在实时对战中挑战来自全球的训练家。运用策略与技巧巧妙制敌，不断攀升排名，朝着宝可梦大师的巅峰之路奋勇前行！",
    imageUrl: "/Images/first.jpeg",
  },
  {
    title: "收集和训练",
    description: "探索并收集超过800种独特的宝可梦，每一只都拥有专属的能力与特长。精心培养你的队伍，通过进化与特殊招式激发它们的真正潜力，打造无敌阵容，征服宝可梦世界！",
    imageUrl: "/Images/fourth.jpg",
  },
  {
    title: "探索世界",
    description: "踏上横跨多个地区的冒险旅程，从郁郁葱葱的森林、荒凉的沙漠，到神秘的洞穴与巍峨的高山，每一处都充满惊喜。在野外探寻隐藏的宝藏，邂逅稀有的宝可梦，开启属于你的奇幻之旅！",
    imageUrl: "/Images/fifth.jpg",
  },
  {
    title: "与朋友组队",
    description: "与好友并肩作战，挑战强大的传说级宝可梦团体战。协调战术，集结力量，齐心协力击败这些强敌，赢取珍稀专属奖励，展现真正的团队默契与实力！",
    imageUrl: "/Images/second.jpeg",
  },
  {
    title: "发现神秘的宝可梦",
    description: "在旅途中邂逅神秘莫测的宝可梦，它们隐藏在世界的角落，等待真正的训练家揭开它们的秘密。每一次发现，都是一次未知的惊喜与冒险。",
    imageUrl: "/Images/third.jpeg",
  },
];

const GameHighlights = () => {
  return (
    <section id="highlights" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">游戏亮点</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
          探索是什么让《与精灵决斗吧！》成为最身临其境的口袋妖怪游戏体验。
          </p>
        </motion.div>

        <div className="space-y-20 md:space-y-32">
          {highlightsData.map((highlight, index) => (
            <GameHighlight
              key={index}
              title={highlight.title}
              description={highlight.description}
              imageUrl={highlight.imageUrl}
              isReversed={index % 2 !== 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameHighlights;