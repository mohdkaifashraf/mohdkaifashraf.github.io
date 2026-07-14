export interface Skill {
  id: number;
  title: string;
  icon: string;
  category: string;
}

export const skills: Skill[] = [
  { id: 1, title: "Python", icon: "bi bi-filetype-py", category: "Backend" },
  { id: 2, title: "Django", icon: "bi bi-window-stack", category: "Backend" },
  { id: 3, title: "React", icon: "bi bi-bootstrap-reboot", category: "Frontend" },
  { id: 4, title: "Bootstrap", icon: "bi bi-bootstrap", category: "Frontend" },
  { id: 5, title: "JavaScript", icon: "bi bi-filetype-js", category: "Frontend" },
  { id: 6, title: "TypeScript", icon: "bi bi-filetype-tsx", category: "Frontend" },
  { id: 7, title: "Java", icon: "bi bi-cup-hot", category: "Programming" },
  { id: 8, title: "Git", icon: "bi bi-git", category: "Tools" },
  { id: 9, title: "GitHub", icon: "bi bi-github", category: "Tools" },
  { id: 10, title: "MySQL", icon: "bi bi-database", category: "Database" }
];