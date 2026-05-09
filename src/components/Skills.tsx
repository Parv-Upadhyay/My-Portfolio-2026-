"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-primary">Arsenal</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of the tools and technologies I use to bring intelligent ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioData.skills.map((skillGroup, i) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-primary rounded-full" />
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <div
                    key={typeof skill === 'string' ? skill : skill.name}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium hover:bg-primary/10 hover:border-primary/30 transition-all flex items-center gap-2"
                  >
                    {typeof skill !== 'string' && typeof skill.icon === 'string' && (
                      <img src={skill.icon} alt="" className="w-4 h-4 opacity-70" />
                    )}
                    {typeof skill !== 'string' && typeof skill.icon !== 'string' && (
                      <skill.icon size={16} className="text-primary" />
                    )}
                    {typeof skill === 'string' ? skill : skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
