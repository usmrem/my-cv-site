import {
  FaFolder,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";


type Project = {
  title: string;
  description: string;
  tech: string;
  github: string;
  live: string;
};


type Props = {
  project: Project;
};



function ProjectCard({ project }: Props) {

  return (
    <div className="project-card show">


      <div className="project-header">


        <FaFolder
          className="folder-icon"
          size={32}
        />


        <div className="project-links">


          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={20}/>
          </a>


          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live"
          >
            <FaExternalLinkAlt size={18}/>
          </a>


        </div>


      </div>



      <h3 className="project-title">
        {project.title}
      </h3>



      <p className="project-description">
        {project.description}
      </p>



      <p className="project-tech">
        {project.tech}
      </p>



    </div>
  );
}


export default ProjectCard;
