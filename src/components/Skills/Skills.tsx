import { skills } from "../../data/skills";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">

      <div className="container-custom">

        <h2 className="section-title">
          My <span>Skills</span>
        </h2>

        <div className="skills-grid">

          {skills.map((skill) => (

            <div className="glass skill-card" key={skill.id}>

              <i className={skill.icon}></i>

              <h4>{skill.title}</h4>

              <p>{skill.category}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;