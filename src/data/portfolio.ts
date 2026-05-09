import { 
  Code2, 
  Cpu, 
  Globe, 
  Layers, 
  Smartphone, 
  Terminal,
  Database,
  Search,
  PenTool,
  Trophy,
  Mail
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";


export const portfolioData = {
  name: "Parv Upadhyay",
  role: "AI/ML Engineer | Software Developer | Problem Solver",
  tagline: "I build intelligent AI-powered applications that transform complex ideas into real-world solutions.",
  about: "Building intelligent systems that combine AI innovation with seamless user experiences.",



  
  socials: [
    { name: "GitHub", url: "https://github.com/Parv-Upadhyay", icon: GithubIcon },
    { name: "LinkedIn", url: "https://linkedin.com/in/parv-upadhyay-4b2b28289", icon: LinkedinIcon },
    { name: "Email", url: "mailto:parv.upadhyay@email.com", icon: Mail },
  ],


  skills: [
    {
      category: "AI / Machine Learning",
      items: [
        { name: "Machine Learning", icon: Cpu },
        { name: "Deep Learning (CNN, ANN, RNN)", icon: Layers },
        { name: "Model Training & Optimization", icon: Terminal },
        { name: "Gen AI", icon: PenTool },
        { name: "Natural Language Processing", icon: Search },
        { name: "Prompt Engineering", icon: Code2 }
      ]
    },
    {
      category: "Backend / Programming",
      items: [
        { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/white" },
        { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
        { name: "DBMS & SQL", icon: Database },
        { name: "API Handling", icon: Globe },
        { name: "Backend Logic", icon: Terminal }
      ]
    },
    {
      category: "Frameworks & Tools",
      items: [
        { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
        { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
        { name: "Scikit-learn", icon: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
        { name: "Hugging Face", icon: "https://cdn.simpleicons.org/huggingface/FFD21E" },
        { name: "Flask", icon: "https://cdn.simpleicons.org/flask/white" },
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B" }
      ]
    }
  ],


  projects: [
    {
      title: "RecycleEasy",
      subtitle: "AI-Powered Recycling Assistant",
      year: "2026",
      description: "A real-time waste classification system using YOLOv8 trained on 15,000+ images. Features OCR integration and a Flutter-based mobile interface with a Flask backend.",
      tech: ["Flutter", "YOLOv8", "Flask", "OCR"],
      image: "/projects/recycle-easy.jpg",
      github: "https://github.com/Parv-Upadhyay/T71-Al-Powered-Smart-Recycling-Assistant-Low-Cost-IoT-OCR-",
      demo: "#",
      achievements: ["95% Accuracy", "Real-time Detection", "15k+ Dataset"]
    },
    {
      title: "Speech Emotion Recognition",
      subtitle: "Hybrid Deep Learning System",
      year: "2025",
      description: "Hybrid CNN-ANN architecture for multiclass emotion classification from audio signals using MFCC feature extraction.",
      tech: ["Python", "CNN", "ANN", "MFCC"],
      image: "/projects/speech-emotion.jpg",
      github: "https://github.com/Parv-Upadhyay/T5-Speech-Emotion-Recognition-with-Fusion",
      demo: "#",
      achievements: ["Hybrid Architecture", "Low Latency", "Cloud Deployed"]
    },
    {
      title: "AI Education Assistant",
      subtitle: "Intelligent Tutoring Platform",
      year: "2025",
      description: "Feature-rich assistant with quiz generation, student risk prediction, and automated tutoring using ML classification.",
      tech: ["Machine Learning", "Gradio", "NLP"],
      image: "/projects/ai-edu.jpg",
      github: "https://github.com/Parv-Upadhyay/AI-Education-Assistant",
      demo: "#",
      achievements: ["Risk Prediction", "Auto Quiz Gen", "User Friendly"]
    },
    {
      title: "GenAI: Text-to-Image",
      subtitle: "Stable Diffusion Engine",
      year: "2024",
      description: "High-fidelity image synthesis application leveraging Stable Diffusion and Hugging Face pipelines.",
      tech: ["Stable Diffusion", "PyTorch", "Hugging Face"],
      image: "/projects/text-to-image.jpg",
      github: "https://github.com/Parv-Upadhyay/Text-to-Image-Generator",
      demo: "#",
      achievements: ["Optimized Inference", "High Fidelity", "Prompt Engineering"]
    }
  ],



  achievements: [
    {
      title: "Azure AI Fundamentals",
      issuer: "Microsoft (2025)",
      description: "Certified AI Associate (AI-900). Foundation in ML and Azure AI services."
    },
    {
      title: "Cyberattacks & AI",
      issuer: "Microsoft (2025)",
      description: "Explored the intersection of AI in cybersecurity and threat mitigation."
    },
    {
      title: "Artificial Intelligence",
      issuer: "HP (2025)",
      description: "Advanced certification covering core AI principles and industrial applications."
    },
    {
      title: "E-commerce Benchmark",
      issuer: "SkillCred (2024)",
      description: "Validated expertise in e-commerce workflows and performance optimization."
    },
    {
      title: "GenAI Powered Data Analytics",
      issuer: "Tata Group (2024)",
      description: "Completed job simulation focused on leveraging GenAI for advanced data insights."
    },
    {
      title: "100 Days of Code",
      issuer: "Self-Paced",
      description: "Solved 150+ DSA problems across LeetCode and GeeksforGeeks."
    }
  ],



  experience: [
    {
      year: "2023 - Present",
      title: "B.Tech in CSE (AI/ML & IoT)",
      company: "GLA University",
      description: "Focusing on AI, Machine Learning, and IoT integration. Maintaining a CPI of 6.97."
    },
    {
      year: "2026",
      title: "AI Developer (Project)",
      company: "RecycleEasy",
      description: "Led the development of a AI waste management system application."
    },
    {
      year: "2025",
      title: "Deep Learning Research",
      company: "Speech Recognition",
      description: "Explored hybrid architectures for tonal emotion classification."
    }

  ]
};
