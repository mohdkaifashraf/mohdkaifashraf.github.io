import "./Hero.css";
import profile from "../../assets/images/profile.png";
import profileData from "../../data/profile";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="container-custom">

        <div className="row align-items-center">

          {/* Left */}

          <div className="col-lg-7">

            <span className="hero-tag">
              👋 Hello, I'm
            </span>

            <h1 className="hero-title">
              {profileData.name.split(" ")[0]} <span>{profileData.name.split(" ")[1]}</span>
            </h1>

            <h2 className="hero-subtitle">
              {profileData.roles[0]}
            </h2>

            <p className="hero-description">
              Passionate about building scalable web applications
              with Django, React and Machine Learning.
            </p>

            <div className="hero-buttons">

              <a href="#" className="btn-main">
                Download Resume
              </a>

              <a href="#projects" className="btn-secondary">
                View Projects
              </a>

            </div>

            <div className="hero-social">

              <a href="#">
                <i className="bi bi-github"></i>
              </a>

              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="#">
                <i className="bi bi-envelope"></i>
              </a>

            </div>

          </div>

          {/* Right */}

          <div className="col-lg-5">

            <div className="hero-image">

              <img
                src={profile}
                alt="Mohd Kaif Ashraf"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;