import "../styles/Hero.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">

        <span className="hero-badge">
            My Portfolio
        </span>

        <h3>Hello, I'm</h3>

        <h1>
          Sonali <span>Acharya</span>
        </h1>

        <h2>Java Full Stack Developer</h2>

        <p>
          Enjoy solving coding problems, fixing bugs, and building simple web applications. Always learning new technologies and improving skills with every project. Working towards becoming a Java Full Stack Developer.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="primary-btn">
            View Projects
          </a>

        </div>

        <div className="social-icons">

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

      </div>

      <div className="hero-right">

        <div className="tech-card">

          <h3>💻 Currently Working With</h3>

          <div className="tech-grid">

            <div className="tech-item">☕ Java</div>

            <div className="tech-item">🍃 Spring Boot</div>

            <div className="tech-item">⚛ React.js</div>

            <div className="tech-item">🛢 MySQL</div>

            <div className="tech-item">🔗 REST APIs</div>

            <div className="tech-item">🌿 Git & GitHub</div>

            <div className="tech-item">📮 Postman</div>

            <div className="tech-item">📦 Maven</div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;