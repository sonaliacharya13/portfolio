import "../styles/Navbar.css";
import { FaCode, FaDownload } from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <FaCode className="logo-icon" />

        <div>
          <h2>Sonali</h2>
          <p>Java Full Stack Developer</p>
        </div>
      </div>

      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <a
        href="/resume.pdf"
        download="Sonali_Acharya_Resume.pdf"
        className="resume-btn"
      >
        <FaDownload />
        Resume
      </a>
    </header>
  );
}

export default Navbar;