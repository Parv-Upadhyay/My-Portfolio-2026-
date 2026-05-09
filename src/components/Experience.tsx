"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Trophy, Star, BookOpen, ArrowUpRight } from "lucide-react";



export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-950/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Journey & <span className="text-primary">Growth</span></h2>
          <p className="text-slate-400">Tracing my evolution from a student to an AI/ML developer.</p>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0">
          {portfolioData.experience.map((item, i) => (
            <motion.div
              key={item.title + i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="mb-12 ml-8 relative"
            >
              {/* Dot */}
              <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-slate-950 border-2 border-primary" />
              
              <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2 block">
                {item.year}
              </span>
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-slate-400 font-semibold mb-3">{item.company}</p>
              <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6 text-center md:text-left">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Key <span className="text-primary">Milestones</span></h2>
            <p className="text-slate-400">Professional certifications and academic achievements.</p>
          </div>
          <a 
            href="https://www.linkedin.com/in/parv-upadhyay-4b2b28289/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-white/10 transition-all hover:scale-105"
          >
            Verify Credentials <ArrowUpRight size={18} className="text-primary" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioData.achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {i % 3 === 0 ? <Trophy className="text-primary" size={32} /> : i % 3 === 1 ? <Star className="text-primary" size={32} /> : <BookOpen className="text-primary" size={32} />}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-primary text-sm font-bold mb-4">{item.issuer}</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
}
