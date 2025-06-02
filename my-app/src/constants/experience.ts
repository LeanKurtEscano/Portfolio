import omdena from "../assets/omdena.png";

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
  certificate?: string;
}

export const experiences: Experience[] = [
    {
      id: 1,
      title: "Junior Machine Learning Engineer",
      company: "Omdena",
      location: "Remote",
      duration: "August 2024 - October 2024",
      description: [
        "Conducted comprehensive data collection from multiple sources to support analytical and machine learning tasks.",
        "Assisted in preparing datasets for training and evaluation phases of the machine learning pipeline.",
        "Collaborated with the team to align data workflows with project objectives under tight timelines."
      ],
      technologies: ["Python", "Pandas", "Numpy", "Scikit-learn", "Jupyter Notebook"],
      certificate: omdena
    },
   
  ];
