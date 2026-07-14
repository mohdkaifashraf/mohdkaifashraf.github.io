import { useEffect, useState } from "react";
import "./Navbar.css";
import { navLinks } from "../../../data/navLinks";

function Navbar() {
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="custom-navbar">
      <div className="container-custom navbar-container">
        <a href="#home" className="logo">
          MKA
        </a>

        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={activeLink === link.href ? "active" : ""}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <a href="#" className="btn-main">
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;