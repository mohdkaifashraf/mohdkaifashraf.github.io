import { useEffect, useState } from "react";
import "./Navbar.css";
import { navLinks } from "../../../data/navLinks";
function Navbar() {
  const [activeLink, setActiveLink] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = document.querySelectorAll<HTMLElement>("section[id]");

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActiveLink(`#${section.id}`);
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>

      <div className="container-custom navbar-container">

        <a href="#home" className="logo">
          MKA<span>.</span>
        </a>

        <nav>

          <ul className="nav-menu">

            {navLinks.map((item) => (

              <li key={item.id}>

                <a
                  href={item.href}
                  className={activeLink === item.href ? "active" : ""}
                >
                  {item.title}
                </a>

              </li>

            ))}

          </ul>

        </nav>

       <a
          href="/resume/Mohd_Kaif_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          Resume
        </a>

      </div>

    </header>
  );
}

export default Navbar;