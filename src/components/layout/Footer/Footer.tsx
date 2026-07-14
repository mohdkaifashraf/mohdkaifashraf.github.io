import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container-custom">

        <div className="row gy-5">

          {/* Left */}

          <div className="col-lg-5">

            <h2 className="footer-logo">
              MKA<span>.</span>
            </h2>

            <p className="footer-text">
              Building modern web applications using
              Python, Django, React and Machine Learning.
            </p>

          </div>

          {/* Center */}

          <div className="col-lg-3">

            <h5>Quick Links</h5>

            <ul className="footer-links">

              <li><a href="#home">Home</a></li>

              <li><a href="#about">About</a></li>

              <li><a href="#skills">Skills</a></li>

              <li><a href="#projects">Projects</a></li>

              <li><a href="#contact">Contact</a></li>

            </ul>

          </div>

          {/* Right */}

          <div className="col-lg-4">

            <h5>Connect</h5>

            <div className="footer-social">

              <a
                href="https://github.com/MohdKaif-d"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href="mailto:your@email.com"
              >
                <i className="bi bi-envelope-fill"></i>
              </a>

            </div>

          </div>

        </div>

        <hr />

        <div className="footer-bottom">

          © {new Date().getFullYear()} Mohd Kaif Ashraf

          <span>
            Built with React + TypeScript
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;