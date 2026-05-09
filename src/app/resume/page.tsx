"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, FileText, ArrowLeft, Eye, ChevronRight } from "lucide-react";
import Link from "next/link";

const resumes = [
  {
    id: "full",
    name: "Full Professional Format",
    description: "Detailed version with all projects and extensive experience.",
    url: "/resumes/full-resume.pdf",
    color: "from-blue-500/20 to-purple-500/20",
    border: "border-blue-500/30"
  },
  {
    id: "college",
    name: "College/Academic Format",
    description: "Optimized for internships and university-related applications.",
    url: "/resumes/college-resume.pdf",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30"
  },
  {
    id: "personal",
    name: "Personal/Creative Format",
    description: "Concise one-page format for quick review and networking.",
    url: "/resumes/personal-resume.pdf",
    color: "from-orange-500/20 to-red-500/20",
    border: "border-orange-500/30"
  }
];

export default function ResumePage() {
  const [selectedResume, setSelectedResume] = useState(resumes[0]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold uppercase tracking-widest text-xs">Back to Portfolio</span>
          </Link>
          <div className="hidden md:flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-wider">
              Resume Viewer
            </span>
          </div>
        </div>
      </nav>

      <div className="pt-24 min-h-screen flex flex-col lg:flex-row">
        {/* Left Sidebar: Selection */}
        <div className="w-full lg:w-1/3 p-6 lg:p-12 border-r border-white/5 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-black mb-4">Choose Your <span className="text-primary">Format</span></h1>
            <p className="text-slate-400">Select a resume style that best fits your requirements. You can preview it live before downloading.</p>
          </motion.div>

          <div className="space-y-4">
            {resumes.map((resume, i) => (
              <motion.button
                key={resume.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedResume(resume)}
                className={`w-full text-left p-6 rounded-3xl transition-all relative overflow-hidden group ${
                  selectedResume.id === resume.id 
                    ? `bg-gradient-to-br ${resume.color} border-2 ${resume.border} scale-[1.02]` 
                    : "bg-white/5 border border-white/10 hover:bg-white/10"
                }`}
              >
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${selectedResume.id === resume.id ? "bg-white/20" : "bg-white/5"}`}>
                      <FileText size={24} className={selectedResume.id === resume.id ? "text-white" : "text-slate-500"} />
                    </div>
                    <div>
                      <h3 className={`font-bold ${selectedResume.id === resume.id ? "text-white" : "text-slate-300"}`}>
                        {resume.name}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-1">{resume.description}</p>
                    </div>
                  </div>
                  {selectedResume.id === resume.id ? (
                    <ChevronRight size={20} className="text-white" />
                  ) : (
                    <Eye size={20} className="text-slate-600 group-hover:text-slate-400" />
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-3xl bg-primary/5 border border-primary/10 relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="font-bold mb-2">Ready to save?</h4>
              <p className="text-sm text-slate-400 mb-6">Download the selected version in high-quality PDF format.</p>
              <a
                href={selectedResume.url}
                download
                className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
              >
                <Download size={20} />
                Download PDF
              </a>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 blur-3xl rounded-full" />
          </div>
        </div>

        {/* Right Content: Preview */}
        <div className="flex-1 bg-slate-950 p-6 lg:p-12 flex items-center justify-center min-h-[600px] lg:min-h-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedResume.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="w-full h-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl relative group"
            >
              {/* Overlay for aesthetic */}
              <div className="absolute inset-0 border-[12px] border-slate-900 pointer-events-none z-10 rounded-2xl opacity-50" />
              
              <iframe
                src={`${selectedResume.url}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-full min-h-[80vh] border-none"
                title={selectedResume.name}
              />
              
              {/* Mobile Only Download Button Overlay */}
              <div className="lg:hidden absolute bottom-6 right-6 z-20">
                <a
                  href={selectedResume.url}
                  download
                  className="p-4 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center"
                >
                  <Download size={24} />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
