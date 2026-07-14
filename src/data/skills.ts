export interface Skill {
  id: number;
  title: string;
  icon: string;
  category: string;
}

export const skills: Skill[] = [
  { id: 1, title: "Python", icon: "bi bi-filetype-py", category: "Backend" },
  {id:11, title: "Machine Learning", icon: "bi bi-robot", category: "AI/ML"},
  { id: 2, title: "Django", icon: "bi bi-window-stack", category: "Backend" },
  { id: 7, title: "Java", icon: "bi bi-cup-hot", category: "Programming" },
  { id: 10, title: "MySQL", icon: "bi bi-database", category: "Database" },
  { id: 5, title: "JavaScript", icon: "bi bi-filetype-js", category: "Frontend" },  
  { id: 9, title: "GitHub", icon: "bi bi-github", category: "Tools" },
  
];