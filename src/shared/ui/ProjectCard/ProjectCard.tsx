import "./ProjectCard.scss";

interface ProjectCardProps {
  img: string;
  title: string;
  alt: string;
  link?: string;
}

export const ProjectCard = ({img, title, alt, link}: ProjectCardProps) => {
  return (
    <li className="project-card">
      <figure className="project-card__figure">
        <div className="project-card__wrapper">
            <img
              className="project-card__img"
              src={img}
              alt={alt}
              width="930"
              height="500"
              loading="lazy"
            />
        </div>
        <h4 className="h4 project-card__title">{title}</h4>
        <a className='project-card__link' href={link}></a>
      </figure>
    </li>
  )
}