"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Download, FileText, X } from "lucide-react";

interface ResumeDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const resumes = [
  {
    name: "Full Professional Format",
    description: "Detailed version with all projects and extensive experience.",
    url: "/resumes/full-resume.pdf",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    name: "College/Academic Format",
    description: "Optimized for internships and university-related applications.",
    url: "/resumes/college-resume.pdf",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    name: "Personal/Creative Format",
    description: "Concise one-page format for quick review and networking.",
    url: "/resumes/personal-resume.pdf",
    color: "from-orange-500/20 to-red-500/20"
  }
];

export function ResumeDialog({ isOpen, onClose }: ResumeDialogProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-slate-900 border border-white/10 rounded-3xl p-8 overflow-hidden shadow-2xl"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[80px] -mr-16 -mt-16" />
            
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Select <span className="text-primary">Format</span></h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-full transition-colors"
              >
                <X size={20} className="text-slate-400" />
              </button>
            </div>

            <div className="space-y-4">
              {resumes.map((resume) => (
                <a
                  key={resume.url}
                  href={resume.url}
                  download
                  onClick={onClose}
                  className={`group block p-4 rounded-2xl bg-gradient-to-br ${resume.color} border border-white/5 hover:border-white/20 transition-all hover:scale-[1.02] active:scale-[0.98]`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-xl">
                      <FileText className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white group-hover:text-primary transition-colors">{resume.name}</h3>
                      <p className="text-xs text-slate-400">{resume.description}</p>
                    </div>
                    <Download size={20} className="text-slate-500 group-hover:text-white transition-colors" />
                  </div>
                </a>
              ))}
            </div>

            <p className="mt-8 text-center text-xs text-slate-500 italic">
              All formats are ATS-optimized and available in high-quality PDF.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
