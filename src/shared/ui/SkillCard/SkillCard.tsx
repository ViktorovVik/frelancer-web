import "./SkillCard.scss";

interface SkillCardProps {
  Icon:  React.FC<React.SVGProps<SVGSVGElement>>;
  skill: string;
  description: string;
}

export const SkillCard = ({Icon, skill, description}: SkillCardProps) => {
  return (
    <li className="skill-card">
      <figure className="skills-card__figure">
        <div className="skills-card__icon">
          <Icon/>
        </div>
        <figcaption className="skills-card__caption">
          <h3 className="h3 skills-card__title">{skill}</h3>
          <p className="skills-card__description">{description}</p>
        </figcaption >
      </figure>
    </li>
  )
}