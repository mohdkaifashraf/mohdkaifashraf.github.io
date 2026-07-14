export interface NavLink {
  id: number;
  title: string;
  href: string;
}

export const navLinks: NavLink[] = [
  {
    id: 1,
    title: "Home",
    href: "#home",
  },
  {
    id: 2,
    title: "About",
    href: "#about",
  },
  {
    id: 3,
    title: "Skills",
    href: "#skills",
  },
  {
    id: 4,
    title: "Projects",
    href: "#projects",
  },
  {
    id: 5,
    title: "Contact",
    href: "#contact",
  },
];