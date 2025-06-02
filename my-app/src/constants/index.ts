
import django from "../assets/django.png";
import FastAPi from "../assets/FastAPi.png";
import huggingface from "../assets/huggingface.png";
import langchain from "../assets/langchain.png";
import next from "../assets/next.png";
import ollama from "../assets/ollama.webp";
import postgres from "../assets/postgres.webp";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";
import pinecone from "../assets/pinecone.png";
import pandas from "../assets/pandas.png";
import accounting from "../assets/accounting.png"
import docubot from "../assets/docubot.png"
import tuloan from "../assets/tuloan.png";
import quality from "../assets/quality.png";	
import { img } from "framer-motion/client";


export const projectsData = [
  {
    id: 1,
    name: "QualitySense",
    shortDescription: "A real-time chat application with intelligent message suggestions and sentiment analysis powered by machine learning algorithms.",
    category: "Full Stack",
    completionDate: "2024",
    img: quality,
    featured: true,
    technologies: [
      { name: "React", icon: react },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "Typescript", icon: typescript },
      { name: "Django", icon: django },
      { name: "Postgres", icon: postgres },
      { name: "Pandas", icon: pandas },
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 2,
    name: "Commision Accounting System",
    shortDescription: "An analytics dashboard for e-commerce businesses with predictive insights, inventory management, and automated reporting features.",
    category: "Full Stack",
    img: accounting,
    completionDate: "2024",
    featured: false,
    technologies: [
      { name: "React.Js", icon: react },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "Django", icon: django },
      { name: "Postgres", icon: postgres }
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 3,
    name: "Tuloan - Loan Management System",
    shortDescription: "A secure and transparent voting platform built on blockchain technology with smart contracts and real-time result verification.",
    category: "Full Stack",
    img: tuloan,
    completionDate: "2023",
    featured: true,
    technologies: [
     { name: "React.Js", icon: react },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "Django", icon: django },
      { name: "Postgres", icon: postgres }
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 4,
    name: "Docubot",
    shortDescription: "An interactive tool for visualizing and understanding neural network architectures with real-time training progress and layer analysis.",
    category: "Full Stack + AI Integration",
    img: docubot,
    completionDate: "2023",
    featured: false,
    technologies: [
      { name: "Next.js", icon: next},
      { name: "Tailwind CSS", icon: tailwind },
      { name: "FastAPI", icon: FastAPi },
      { name: "Langchain", icon: langchain },
      { name: "Pinecone", icon: pinecone },
     { name: "Ollama", icon: ollama },
      { name: "HuggingFace", icon: huggingface },
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];
