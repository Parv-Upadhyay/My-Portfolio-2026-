"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

import { portfolioData } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-primary">Creations</span></h2>
            <p className="text-slate-400 max-w-xl">
              From computer vision models to full-stack applications, here are some of my favorite projects.
            </p>
          </div>
          <a href="https://github.com/Parv-Upadhyay" target="_blank" className="text-sm font-bold flex items-center gap-2 hover:text-primary transition-colors">
            View All Projects <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative block overflow-hidden rounded-3xl bg-slate-900 border border-white/5 transition-colors hover:border-primary/50"
            >
              {/* Project Image Placeholder / Gradient */}
              <div className="aspect-video w-full bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden relative">
                {/* Image overlay with glow */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-black text-white/5 tracking-tighter uppercase select-none group-hover:scale-110 transition-transform duration-500">
                  {project.title}
                </div>
                {/* Stretched link icon indicator */}
                <div className="absolute top-6 right-6 p-3 bg-slate-950/80 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                  <GithubIcon size={20} className="text-white" />
                </div>
              </div>

              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-primary">{project.subtitle}</p>
                    <span className="text-slate-500 text-xs">•</span>
                    <span className="text-slate-500 text-xs font-bold">{project.year}</span>
                  </div>
                </div>

                <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/5 grid grid-cols-3 gap-4">
                  {project.achievements.map((ach) => (
                    <div key={ach} className="text-center">
                      <p className="text-[10px] font-bold text-slate-500 uppercase">{ach.split(' ')[1] || 'Value'}</p>
                      <p className="text-xs font-bold text-white">{ach.split(' ')[0]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}

        </div>
      </div>
    </section>
  );
}
