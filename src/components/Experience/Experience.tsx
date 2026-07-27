import { useState } from "react";
import { jobs } from "../../data/experience";

function Experience() {
  const [active, setActive] = useState(0);

  const job = jobs[active];

  return (
    <section id="experience">
      <div className="section-title">
        <h2>/ experience</h2>
        <span className="line"></span>
      </div>

      <div className="experience-wrapper">

        <div className="tabs">
          {jobs.map((item, index) => (
            <button
              key={item.company}
              className={`tab ${active === index ? "active" : ""}`}
              onClick={() => setActive(index)}
            >
              {item.company}
            </button>
          ))}
        </div>

        <div className="job-content">

          <h3>
            {job.title}
            <span>
              {" "}
              <a
                href={job.link}
                target="_blank"
                rel="noreferrer"
                className="company-link"
              >
                {job.company}
              </a>
            </span>
          </h3>

          <p className="date">{job.date}</p>

          <ul>
            {job.tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>

        </div>

      </div>
    </section>
  );
}

export default Experience;