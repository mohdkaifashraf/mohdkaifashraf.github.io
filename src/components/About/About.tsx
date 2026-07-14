import "./About.css";
import profile from "../../assets/images/profile.png";

function About() {
  return (
    <section id="about" className="about-section">

      <div className="container-custom">

        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="row align-items-center">

          {/* Left */}

          <div className="col-lg-5">

            <div className="about-image">

              <img
                src={profile}
                alt="Mohd Kaif Ashraf"
              />

            </div>

          </div>

          {/* Right */}

          <div className="col-lg-7">

            <h3>
              Python Developer &
              Machine Learning Enthusiast
            </h3>

            <p>
              I am a B.Tech Computer Science graduate passionate
              about building scalable web applications and solving
              real-world problems using Python, Django,
              React and Machine Learning.
            </p>

            <div className="about-cards">

              <div className="glass about-card">

                <h4>Experience</h4>

                <p>Fresher</p>

              </div>

              <div className="glass about-card">

                <h4>Projects</h4>

                <p>10+</p>

              </div>

              <div className="glass about-card">

                <h4>Technologies</h4>

                <p>Python • Django • React</p>

              </div>

              <div className="glass about-card">

                <h4>Education</h4>

                <p>B.Tech CSE</p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;