import "../styles/About.css";
import { FaGraduationCap, FaLaptopCode, FaJava, FaDownload } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">

      <div className="container">

        <h2 className="about-title">About Me</h2>
        <p className="about-subtitle">
            Get to know me better.
        </p>

        <div className="about-container">

          {/* Left Side */}

          <div className="about-left">

            <h3>Who am I?</h3>

            <p>
              I'm <strong>Sonali Acharya</strong>, a 3rd-year BCA student. Right now, I'm focused on learning how to build modern web apps, mostly using Java, Spring Boot, and React.

For me, coding isn't just about making things work—I love the challenge of solving a tough programming problem and figuring out how to write clean, neat code that doesn't break. </p>
            <p>
              My ultimate goal is to become a solid Java Full Stack Developer and work on real, impactful software projects.

It’s definitely a journey, but I take it step by step. I try to learn something brand new every single day, and I'm consistently practicing <strong>Data Structures and Algorithms (DSA)</strong> to sharpen my problem-solving skills.
            </p>

            <p>
              I enjoy solving programming problems, learning new technologies,
              and creating responsive applications with clean and maintainable
              code.
            </p>

          </div>

          {/* Right Side */}

          <div className="about-right">

            <div className="info-card">

              <div className="info-item">
                <FaGraduationCap />
                <div>
                  <h4>Education</h4>
                  <p>BCA (3rd Year)</p>
                </div>
              </div>

              <div className="info-item">
                <FaLaptopCode />
                <div>
                  <h4>Specialization</h4>
                  <p>Java Full Stack Development</p>
                </div>
              </div>

              <div className="info-item">
                <FaJava />
                <div>
                  <h4>Primary Language</h4>
                  <p>Java</p>
                </div>
              </div>

              <a
                href="/resume.pdf"
                download="Sonali_Acharya_Resume.pdf"
                className="about-btn"
              >
                <FaDownload />
                Download Resume
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;