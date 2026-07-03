import "../styles/Certifications.css";

import {
  FaPython,
  FaHtml5,
  FaCertificate,
  FaJava,
} from "react-icons/fa";

import { SiMongodb, SiHackerrank } from "react-icons/si";

function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="container">

        <h2 className="certifications-title">Certifications</h2>

        <p className="certifications-subtitle">
          Professional certifications and internship experiences that strengthen my technical expertise.
        </p>

        <div className="certifications-grid">

          {/* IBM */}
          <a
            href="/certificates/ibm.pdf"
            target="_blank"
            rel="noreferrer"
            className="certificate-link"
          >
            <div className="certificate-card">
              <div className="certificate-icon">
                <FaCertificate />
              </div>

              <h3>IBM Data Science Professional Certificate</h3>

              <p>IBM • Coursera</p>

              <span className="certificate-badge">
                Professional Certificate
              </span>
            </div>
          </a>

          {/* YuvaIntern */}
          <a
            href="certificates/yuvaintern.pdf"
            target="_blank"
            rel="noreferrer"
            className="certificate-link"
          >
            <div className="certificate-card">
              <div className="certificate-icon">
                <FaJava />
              </div>

              <h3>Junior Java Developer</h3>

              <p>YuvaIntern • Virtual Internship</p>

              <span className="certificate-badge">
                Internship
              </span>
            </div>
          </a>

          {/* MongoDB */}
          <a
            href="https://www.credly.com/badges/a10ccd35-4b55-4a0d-b76e-17c16535fc49/"
            target="_blank"
            rel="noreferrer"
            className="certificate-link"
          >
            <div className="certificate-card">
              <div className="certificate-icon">
                <SiMongodb />
              </div>

              <h3>MongoDB Vector Search Fundamentals</h3>

              <p>MongoDB</p>

              <span className="certificate-badge">
                Database
              </span>
            </div>
          </a>

          {/* HackerRank */}
          <a
            href="https://www.hackerrank.com/certificates/9d456101a3e7"
            target="_blank"
            rel="noreferrer"
            className="certificate-link"
          >
            <div className="certificate-card">
              <div className="certificate-icon">
                <SiHackerrank />
              </div>

              <h3>Software Engineer Intern</h3>

              <p>HackerRank • Jun 2026</p>

              <span className="certificate-badge">
                Test
              </span>
            </div>
          </a>

          {/* HTML5 */}
          <a
            href="certificates/html5.pdf"
            target="_blank"
            rel="noreferrer"
            className="certificate-link"
          >
            <div className="certificate-card">
              <div className="certificate-icon">
                <FaHtml5 />
              </div>

              <h3>Introduction to HTML5</h3>

              <p>University of Michigan • Coursera</p>

              <span className="certificate-badge">
                Frontend
              </span>
            </div>
          </a>

          {/* Python */}
          <a
            href="certificates/python.pdf"
            target="_blank"
            rel="noreferrer"
            className="certificate-link"
          >
            <div className="certificate-card">
              <div className="certificate-icon">
                <FaPython />
              </div>

              <h3>Python Course</h3>

              <p>GeeksforGeeks</p>

              <span className="certificate-badge">
                Programming
              </span>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Certifications;