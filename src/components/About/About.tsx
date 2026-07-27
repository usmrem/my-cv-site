import { about } from "../../data/about";
import { skills } from "../../data/skills";

function About() {
  return (
    <section id="about">
      <div className="section-title">
        <h2>/ about me</h2>
        <span className="line"></span>
      </div>

      <div className="about-content">
        <div className="about-text">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <p>Core Technologies:</p>

          <ul className="tech-list">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="about-image">
          <img src={about.image} alt="Profile" />
        </div>
      </div>
    </section>
  );
}

export default About;