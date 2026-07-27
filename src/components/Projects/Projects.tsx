import { projects } from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";


function Projects() {

  return (
    <section id="projects">

      <div className="section-title">

        <h2>/ Projects</h2>

        <span className="line"></span>

      </div>


      <div className="projects-grid">

        {projects.map((project) => (

          <ProjectCard
            key={project.title}
            project={project}
          />

        ))}

      </div>

    </section>
  );
}


export default Projects;