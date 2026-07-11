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
              I'm <strong>Sonali Acharya</strong>, a 3rd-year BCA student. Right now, I'm focused on learning backend development, mainly using Java, Spring Boot, Spring Security, Hibernate, and MySQL. For me, coding isn't just about making things work—I enjoy solving backend problems and writing clean, organized, and maintainable code. </p>
            <p>
              My goal is to become a strong Backend Developer and work on real-world software projects that are secure, reliable, and scalable. I take the learning process step by step and try to improve my skills every day.
            </p>

            <p>
              I'm also consistently practicing Data Structures and Algorithms (DSA) to strengthen my problem-solving ability and improve my understanding of programming concepts.

I enjoy building REST APIs, working with databases, learning new backend technologies, and developing applications with clean and maintainable code.
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
                  <p>Backend Development</p>
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
                href="/Sonali_Acharya_resume.pdf"
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