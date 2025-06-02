
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
    shortDescription: "QualitySense is a data quality checker assistant designed to help users identify missing values, outliers, categorical errors, and potential misspellings in their datasets. Powered by AI, the app not only detects these issues but also generates a Data Quality Summary Report that includes actionable suggestions. ",
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
    shortDescription: "A full-stack web application built in collaboration with a real estate company to automate and streamline commission tracking for agents. The system dynamically calculates and distributes commissions based on agent hierarchies and custom rules, enhancing transparency and operational efficiency.",
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
    shortDescription: "Tu-Loan is a full-stack Loan Management System built to simplify and automate loan application, approval, and payment processes for both users and administrators. It offers real-time interaction, secure authentication, and a user-friendly interface. Developed as our final project during the second year of our BSIT-SD program, the system features automated interest and penalty calculations, real-time notifications using WebSockets, and a complete admin dashboard for managing users, loans, and disbursements.",
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
    shortDescription: "A full-stack web application that allows users to upload PDF documents and engage in natural language conversations with their content. It processes the uploaded file, chunks the text, generates embeddings, stores them in a vector database, and uses a Retrieval-Augmented Generation (RAG) pipeline to fetch and generate accurate answers. ",
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
