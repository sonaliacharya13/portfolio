import "../styles/Skills.css";

import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaServer,
} from "react-icons/fa";

import {
  SiJavascript,
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiApachemaven,
  SiJunit5,
} from "react-icons/si";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">

        <h2 className="skills-title">Technical Skills</h2>

        <p className="skills-subtitle">
          Technologies, frameworks and tools that I use to build modern web applications.
        </p>

        <div className="skills-grid">

          {/* Programming Languages */}

          <div className="skill-card">
            <h3>Programming Languages</h3>

            <div className="skill-items">

              <div className="skill-item">
                <FaJava />
                <span>Java</span>
              </div>

              <div className="skill-item">
                <FaPython />
                <span>Python</span>
              </div>

            </div>
          </div>

          {/* Frontend */}

          <div className="skill-card">
            <h3>Frontend Development</h3>

            <div className="skill-items">

              <div className="skill-item">
                <FaHtml5 />
                <span>HTML</span>
              </div>

              <div className="skill-item">
                <FaCss3Alt />
                <span>CSS</span>
              </div>

              <div className="skill-item">
                <SiJavascript />
                <span>JavaScript</span>
              </div>

              <div className="skill-item">
                <FaReact />
                <span>React</span>
              </div>

            </div>
          </div>

          {/* Backend */}

          <div className="skill-card">
            <h3>Backend Development</h3>

            <div className="skill-items">

              <div className="skill-item">
                <FaDatabase />
                <span>JDBC</span>
              </div>

              <div className="skill-item">
                <SiSpringboot />
                <span>Spring Boot</span>
              </div>

              <div className="skill-item">
                <SiHibernate />
                <span>Spring Data JPA</span>
              </div>

              <div className="skill-item">
                <SiHibernate />
                <span>Hibernate</span>
              </div>

              <div className="skill-item">
                <FaServer />
                <span>REST APIs</span>
              </div>

              <div className="skill-item">
                <FaServer />
                <span>JWT Authentication</span>
              </div>

              <div className="skill-item">
                <FaServer />
                <span>Spring Security</span>
              </div>

            </div>
          </div>

          {/* Database */}

          <div className="skill-card">
            <h3>Database</h3>

            <div className="skill-items">

              <div className="skill-item">
                <SiMysql />
                <span>MySQL</span>
              </div>

              <div className="skill-item">
                <SiMongodb />
                <span>MongoDB</span>
              </div>

            </div>
          </div>

          {/* Tools */}

          <div className="skill-card">
            <h3>Tools & Platforms</h3>

            <div className="skill-items">

              <div className="skill-item">
                <FaGitAlt />
                <span>Git</span>
              </div>

              <div className="skill-item">
                <FaGithub />
                <span>GitHub</span>
              </div>

              <div className="skill-item">
                <SiPostman />
                <span>Postman</span>
              </div>

              <div className="skill-item">
                <SiApachemaven />
                <span>Maven</span>
              </div>

            </div>
          </div>

          {/* Testing */}

          <div className="skill-card">
            <h3>Testing</h3>

            <div className="skill-items">

              <div className="skill-item">
                <SiJunit5 />
                <span>JUnit 5</span>
              </div>

            </div>
          </div>

          {/* Coursework */}

          <div className="skill-card coursework-card">
            <h3>Coursework</h3>

            <div className="skill-items">

              <div className="skill-item">
                <FaDatabase />
                <span>DBMS</span>
              </div>

              <div className="skill-item">
                <FaServer />
                <span>OS</span>
              </div>

              <div className="skill-item">
                <FaServer />
                <span>DSA</span>
              </div>

              <div className="skill-item">
                <FaServer />
                <span>Software Engineering</span>
              </div>

              <div className="skill-item">
                <FaServer />
                <span>AI</span>
              </div>

              <div className="skill-item">
                <FaJava />
                <span>OOPs</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;