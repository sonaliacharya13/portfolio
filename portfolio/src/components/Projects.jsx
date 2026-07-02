import "../styles/Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">

        <h2 className="projects-title">Projects</h2>

          <p className="projects-subtitle">
            Real-world applications built using Java, Spring Boot, React and MySQL.
          </p>

        <div className="projects-grid">

          {/* Project 1 */}

          <div className="project-card">

            <div className="project-number">
              01
            </div>

            <h3>Java Banking System</h3>

            <p>
              Console-based banking application that allows users to
              create accounts, deposit money, withdraw money and
              check account balances using a menu-driven interface.
            </p>

            <div className="tech-stack">

              <span>Java</span>
              <span>JDBC</span>
              <span>MySQL</span>
              <span>OOP</span>

            </div>

            <div className="project-links">

              <a
                href="https://github.com/sonaliacharya13/BankingSystem.git"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                GitHub
              </a>

            </div>

          </div>

          {/* Project 2 */}

          <div className="project-card">

            <div className="project-number">
              02
            </div>

            <h3>Student Placement Management API</h3>

            <p>
              Backend REST API built with Spring Boot to manage
              students, companies, job opportunities and placement
              applications using complete CRUD operations.
            </p>

            <div className="tech-stack">

              <span>Spring Boot</span>
              <span>Hibernate</span>
              <span>MySQL</span>
              <span>REST API</span>

            </div>

            <div className="project-links">

              <a
                href="https://github.com/sonaliacharya13/student-placement-management-system-api.git"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                GitHub
              </a>

            </div>

          </div>

          {/* Project 3 */}

          <div className="project-card">

            <div className="project-number">
              03
            </div>

            <h3>Developer Portfolio</h3>

            <p>
              Responsive portfolio website built using React to
              showcase my projects, skills and journey as a
              Java Full Stack Developer.
            </p>

            <div className="tech-stack">

              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Vite</span>

            </div>

            <div className="project-links">

              <a
                href="https://github.com/sonaliacharya13/portfolio.git"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://portfolio-8t5q.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;