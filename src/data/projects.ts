export interface Project {
  id: number;
  title: string;
  image: string;
  technologies: string[];
  description: string;
  github: string;
  live: string;
}

import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";

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
      "https://github.com/mohdkaifashraf/EasyIron",

    live: "#",
  },


   {
    id: 2,
    title: "AI-Article-Generator",

    image: project2,

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

    image: project3,

    technologies: [
      "Python",
      "Flask",
      "N8N",
      "RAG",
      "GroqAPI",
      "postgrresql",
      "JavaScript",
      "HTML",
      "CSS",
    ],

    description:
      "",

    github:
      "https://github.com/mohdkaifashraf/RAG-Bolt",

    live: "",
  },

   {
    id: 4,
    title: "Movie Recommendation-System",

    image: project4,

    technologies: [
      "Python",
      "ML",
      "Django",
      "HTML",
      "CSS",
    ],

    description:
      "",

    github:
      "https://github.com/mohdkaifashraf/Movie-Recommender-System",

    live: "",
  },


   {
    id: 5,
    title: "Warehouse Box Recommender",

    image: project5,

    technologies: [
      "Python",
      "Django",
      "HTML",
      "CSS",
    ],

    description:
      "",

    github:
      "https://github.com/mohdkaifashraf/warehouse_box-recommender",

    live: "https://mohdkaifashraf.pythonanywhere.com/",
  },


];
