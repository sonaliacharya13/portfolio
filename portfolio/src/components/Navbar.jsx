import { useState } from "react";
import "../styles/Navbar.css";
import {
  FaCode,
  FaDownload,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="logo">
        <FaCode className="logo-icon" />

        <div>
          <h2>Sonali</h2>
          <p>Java Full Stack Developer</p>
        </div>
      </div>

      <nav className={menuOpen ? "nav active" : "nav"}>
        <ul className="nav-links">

          <li>
            <a href="#home" onClick={closeMenu}>Home</a>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>About</a>
          </li>

          <li>
            <a href="#skills" onClick={closeMenu}>Skills</a>
          </li>

          <li>
            <a href="#projects" onClick={closeMenu}>Projects</a>
          </li>

          <li>
            <a href="#education" onClick={closeMenu}>Education</a>
          </li>

          <li>
            <a href="#certifications" onClick={closeMenu}>Certifications</a>
          </li>

          <li>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>

          <li className="mobile-resume">
            <a
              href="/Sonali_Acharya_resume.pdf"
              download="Sonali_Acharya_Resume.pdf"
              onClick={closeMenu}
            >
              <FaDownload />
              Resume
            </a>
          </li>

        </ul>
      </nav>

      <a
        href="/Sonali_Acharya_resume.pdf"
        download="Sonali_Acharya_Resume.pdf"
        className="resume-btn"
      >
        <FaDownload />
        Resume
      </a>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

    </header>
  );
}

export default Navbar;