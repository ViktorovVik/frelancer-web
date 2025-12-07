import './Projects.scss';
import {PROJECTS_DATA} from "../../constants/projects.ts";
import {ProjectCard} from "../../shared/ui/ProjectCard/ProjectCard.tsx";

interface ProjectsProps {
  className?: string;
  link?: string;
}

export const Projects = ({className = ''}: ProjectsProps) => {
  return (
    <section className={`projects ${className}`} aria-labelledby="projects-title">
      <div className="projects__inner container">
        <div className="projects__title">
          <h2 className="h2" id="projects-title">Portfolio</h2>
        </div>
        <h3 className="visually-hidden">My projects list</h3>
        <ul className="projects__list" aria-label="My projects">
          {PROJECTS_DATA.map((item) => (
            <ProjectCard key={item.id} img={item.img} title={item.title} alt={item.alt}/>
          ))}
        </ul>
      </div>

    </section>
  )
}