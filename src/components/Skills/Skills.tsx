import './Skills.scss';
import { SkillCard } from "../../shared/ui/SkillCard/SkillCard.tsx";
import { SKILL_DATA } from "../../constants/skills.ts";


interface SkillsProps {
  className?: string;
}


export const Skills = ({className = ''}: SkillsProps) => {
  return (
    <section className={`skills ${className}`} id="services" aria-labelledby="skills-title">
      <div className="skills__inner container">
        <h2 className="visually-hidden" id="skills-title">My skills</h2>
        <ul className="skills__list" aria-label="My skills">
          {SKILL_DATA.map((skill) => (
            <SkillCard
              key={skill.id}
              Icon={skill.Icon}
              skill={skill.skill}
              description={skill.description}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}