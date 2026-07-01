import "../styles/Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <h2>Sonali Acharya</h2>

        <p>Java Full Stack Developer</p>

        <div className="footer-icons">

          <a
            href="https://github.com/sonaliacharya13"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sonaliacharya2006"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:acharyasonali2006@gmail.com">
            <FaEnvelope />
          </a>

        </div>

        <a href="#home" className="top-btn">
          <FaArrowUp />
          Go to Home Page
        </a>

        <hr />

        <p className="copyright">
          © 2026 Sonali Acharya.
        </p>

      </div>

    </footer>
  );
}

export default Footer;