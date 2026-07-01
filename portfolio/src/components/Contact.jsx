import "../styles/Contact.css";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaBriefcase,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">

        <h2 className="contact-title">Let's Connect</h2>

        <p className="contact-subtitle">
          Open to internships, Java Full Stack Developer opportunities, and meaningful collaborations.
        </p>

        <div className="contact-grid">

          {/* Email */}

          <a
            href="mailto:acharyasonali2006@gmail.com"
            className="contact-card"
          >
            <FaEnvelope />

            <h3>Email</h3>

            <p>acharyasonali2006@gmail.com</p>

          </a>

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/sonaliacharya2006"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaLinkedin />

            <h3>LinkedIn</h3>

            <p>linkedin.com/in/sonaliacharya2006</p>

          </a>

          {/* GitHub */}

          <a
            href="https://github.com/sonaliacharya13"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaGithub />

            <h3>GitHub</h3>

            <p>github.com/sonaliacharya13</p>

          </a>

          {/* Resume */}

          <a
            href="/resume.pdf"
            download
            className="contact-card"
          >
            <FaFileDownload />

            <h3>Resume</h3>

            <p>Download Resume</p>

          </a>

          {/* Status */}

          <div className="contact-card status-card">

            <FaBriefcase />

            <h3>Current Status</h3>

            <p>Open to Internship Opportunities</p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;