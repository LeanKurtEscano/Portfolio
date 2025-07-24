
import django from "../assets/django.png";
import docker from "../assets/docker.svg";
import FastAPi from "../assets/FastAPi.png";
import git from "../assets/git.png";
import github from "../assets/github.svg";
import huggingface from "../assets/huggingface.png";
import java from "../assets/java.svg";
import javascript from "../assets/javascript.png";
import langchain from "../assets/langchain.png";
import mysql from "../assets/mysql.png";
import neon from "../assets/neon.png";
import netlify from "../assets/netlify.png";
import next from "../assets/next.png";
import ollama from "../assets/ollama.webp";
import postgres from "../assets/postgres.webp";
import postman from "../assets/postman.png";
import puge from "../assets/puge.jpg";
import python from "../assets/python.svg";
import react from "../assets/react.png";
import render from "../assets/render.webp";
import sql from "../assets/sql.svg";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";
import pinecone from "../assets/pinecone.png";


export const programmingLanguages = [
    { name: 'JavaScript', image: javascript },
    { name: 'Python', image: python },
    { name: 'TypeScript', image: typescript },
    { name: 'Java', image: java},
    { name: 'SQL', image: sql }
  ];

export  const frameworksLibraries = [
    { name: 'React', image: react },
   
    { name: 'Tailwind CSS', image: tailwind },
    { name: 'Django', image: django },
     { name: 'flask', image: django },
    { name: 'FastAPI', image: FastAPi },
    
  ];

export const aitools = [
  { name: 'LangChain', image: langchain },
    { name: 'Hugging Face', image: huggingface }, 
    { name: 'Ollama', image: ollama },
  { name: 'pinecone', image: pinecone }
]

export const toolsPlatforms = [
    { name: 'Docker', image: docker},
    { name: 'Git', image: git },
    { name: 'MySQL', image: mysql },
    { name: 'PostgresSQL', image: postgres },
    { name: 'Github', image: github },
    { name: 'Neon', image: neon },
    { name: 'Netlify', image: netlify },
    { name: 'Render', image: render },
    { name: 'Postman', image: postman },
  ];