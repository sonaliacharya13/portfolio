import "../styles/Articles.css";
import { FaExternalLinkAlt, FaPenNib } from "react-icons/fa";

function Articles() {
  return (
    <section className="articles" id="articles">
      <div className="container">

        <h2 className="articles-title">Technical Articles</h2>

        <p className="articles-subtitle">
          I enjoy documenting what I learn and sharing my development journey through technical articles.
        </p>

        <div className="articles-grid">

          <div className="article-card">

            <div className="article-icon">
              <FaPenNib />
            </div>

            <h3>My Backend Learning Journey</h3>

            <p>
              In this article, I share how I started learning Java backend
              development, the roadmap I followed, the technologies I explored,
              and the lessons I learned along the way.
            </p>

            <span className="article-platform">
              Medium • July 2026
            </span>

            <a
              href="https://medium.com/@acharyasonali2006/my-java-backend-learning-journey-0111a231a841"
              target="_blank"
              rel="noreferrer"
              className="article-btn"
            >
              Read Article
              <FaExternalLinkAlt />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Articles;