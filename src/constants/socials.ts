import { LinkedInIcon } from "../shared/ui/LinkedInIcon/LinkedInIcon.tsx";
import { InstagramIcon } from "../shared/ui/InstagramIcon/InstagramIcon.tsx";
import { BehanceIcon } from "../shared/ui/BehanceIcon/BehanceIcon.tsx";
import { DribbleIcon } from "../shared/ui/DribbleIcon/DribbleIcon.tsx";

export interface Social {
  id: string;
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  href: string;
}

export const SOCIALS_DATA: Social[] = [
  {
    id: 'linkedIn',
    name: 'LinkedIn',
    Icon: LinkedInIcon,
    href: 'https://linkedin.com',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    Icon: InstagramIcon,
    href: 'https://instagram.com',
  },
  {
    id: 'behance',
    name: 'Behance',
    Icon: BehanceIcon,
    href: 'https://behance.com',
  },
  {
    id: 'dribble',
    name: 'Dribble',
    Icon: DribbleIcon,
    href: 'https://dribble.com',
  },
]