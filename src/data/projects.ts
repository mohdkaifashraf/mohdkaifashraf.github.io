export interface Project {
  id: number;
  title: string;
  image: string;
  technologies: string[];
  description: string;
  github: string;
  live: string;
}

import project1 from "../assets/images/projects1.png";

export const projects: Project[] = [
  {
    id: 1,
    title: "EasyIron",

    image: project1,

    technologies: [
      "Python",
      "Django",
      "JavaScript",
      "HTML",
      "CSS",
    ],

    description:
      "",

    github:
      "https://github.com/mohdkaifashraf/AI-Article-Writer",

    live: "#",
  },


   {
    id: 2,
    title: "AI-Article-Generator",

    image: project1,

    technologies: [
      "Python",
      "Django",
      "N8N",
      "JavaScript",
      "HTML",
      "CSS",
    ],

    description:
      "",

    github:
      "https://github.com/mohdkaifashraf/AI-Article-Writer",

    live: "https://ai-article-writer-5wm9.onrender.com/",
  },


  {
    id: 3,
    title: "AI-Document-Question-Answering",

    image: project1,

    technologies: [
      "Python",
      "Flask",
      "GroqAPI",
      "JavaScript",
      "HTML",
      "CSS",
    ],

    description:
      "",

    github:
      "https://github.com/mohdkaifashraf/AI-Article-Writer",

    live: "https://ai-article-writer-5wm9.onrender.com/",
  },


];
