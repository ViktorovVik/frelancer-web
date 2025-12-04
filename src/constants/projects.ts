import portfolio1 from "../assets/portfolio1.webp";
import portfolio2 from "../assets/portfolio2.webp";
import portfolio3 from "../assets/portfolio3.webp";

export interface Projects {
  id: string;
  img: string;
  title: string;
  alt: string;
}

export const PROJECTS_DATA: Projects[] = [
  {
    id: '1',
    img: portfolio1,
    title: `Online fashion store - Homepage`,
    alt: 'Online fashion store homepage screenshot'
  },
  {
    id: '2',
    img: portfolio2,
    title: `Reebok Store - Concept`,
    alt: 'Reebok store concept screenshot'
  },
  {
    id: '3',
    img: portfolio3,
    title: `Braun Landing Page - Concept`,
    alt: 'Braun landing page concept screenshot'
  }
]