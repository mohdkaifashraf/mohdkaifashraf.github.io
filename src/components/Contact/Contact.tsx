import "./Contact.css";
import { ToastContainer, toast } from "react-toastify";

function Contact() {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast.success("Message sent successfully!");
  };

  return (

    <section id="contact" className="contact-section">

      <div className="container-custom">

        <h2 className="section-title">
          Let's <span>Connect</span>
        </h2>

        <div className="row justify-content-between align-items-start">

          <div className="col-lg-5">

            <h3>Let's Work Together</h3>

            <p>
              I'm always open to discussing new opportunities,
              freelance work, or collaborations.
            </p>

            <div className="contact-info">

              <p>
                <i className="bi bi-envelope"></i>
                kaifali200407@email.com
              </p>

              <p>
                <i className="bi bi-geo-alt"></i>
                New Delhi, India
              </p>

              <p>
                <i className="bi bi-telephone"></i>
                +91 8887619986
              </p>

            </div>

          </div>

          <div className="col-lg-5">

            <form
              onSubmit={handleSubmit}
              className="glass contact-form"
            >

              <input
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                required
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                required
              ></textarea>

              <button
                className="btn-main"
                type="submit"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

      <ToastContainer position="bottom-right" />

    </section>
  );
}

export default Contact;