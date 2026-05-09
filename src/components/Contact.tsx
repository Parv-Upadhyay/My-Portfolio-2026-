"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

import { portfolioData } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 blur-[100px]" />

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
                Let's Build Something <span className="text-gradient">Legendary</span>.
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-md">
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="flex flex-col gap-6">
                {portfolioData.socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-500 uppercase">{social.name}</p>
                        <p className="font-semibold">{social.name === "Email" ? "parv.upadhyay@email.com" : social.url.split('/').pop()}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary/50 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary/50 transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Message</label>
                <textarea rows={5} placeholder="Tell me about your project..." className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary/50 transition-colors resize-none" />
              </div>
              <button className="w-full py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-primary/90 transition-all active:scale-95">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Parv Upadhyay. Built with <span className="text-primary">Next.js</span> & <span className="text-secondary">Tailwind</span>.
        </p>
      </div>
    </footer>
  );
}
