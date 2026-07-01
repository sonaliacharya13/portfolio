import "../styles/Education.css";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

function Education() {
  return (
    <section className="education" id="education">
      <div className="container">

        <h2 className="education-title">Education</h2>

        <p className="education-subtitle">
          My academic journey and the foundation of my software development career.
        </p>

        {/* BCA */}

        <div className="education-card">

          <div className="education-icon">
            <FaGraduationCap />
          </div>

          <div className="education-content">

            <h3>Bachelor of Computer Applications (BCA)</h3>

            <h4>
              <FaUniversity />
              Science (Autonomous) College, Hinjilicut
            </h4>

            <span className="education-year">
              2023 – 2026
            </span>

            <p>
              Currently pursuing my Bachelor's degree with a focus on Java Full
              Stack Development, Data Structures & Algorithms, Database
              Management Systems, Operating Systems, Software Engineering,
              Artificial Intelligence, and Object-Oriented Programming.
            </p>

          </div>

        </div>

        {/* Higher Secondary */}

        <div className="education-card">

          <div className="education-icon">
            <FaGraduationCap />
          </div>

          <div className="education-content">

            <h3>Higher Secondary Education</h3>

            <h4>
              <FaUniversity />
              Science College, Konkorada
            </h4>

            <span className="education-year">
              2022 – 2024
            </span>

            <p>
              Completed Higher Secondary Education with a Science stream,
              building a strong foundation in Mathematics, Physics, Chemistry,
              and analytical problem-solving.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;