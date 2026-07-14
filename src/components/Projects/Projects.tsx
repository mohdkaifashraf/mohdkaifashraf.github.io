import "./Projects.css";
import { projects } from "../../data/projects";
function Projects() {
  return (
    <section id="projects" className="projects-section">

      <div className="container-custom">

        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <div className="row g-4">

          {projects.map((project) => (

            <div
              className="col-lg-4"
              key={project.id}
            >

              <div className="glass project-card">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="project-content">

                  <h3>{project.title}</h3>

                  <div className="project-tags">

                    {project.technologies.map((tech) => (
                      <span key={tech}>
                        {tech}
                      </span>
                    ))}

                  </div>

                  <p>
                    {project.description}
                  </p>

                  <div className="project-buttons">

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-main"
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary"
                    >
                      GitHub
                    </a>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;

