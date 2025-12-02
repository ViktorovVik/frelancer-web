import React from 'react';
import { DesignIcon } from '../shared/ui/DesightIcon';
import { DevelopIcon } from '../shared/ui/DevelopIcon';
import { TestingIcon } from '../shared/ui/TestingIcon';

export interface Skill {
  id: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  skill: string;
  description: string;
}

export const SKILL_DATA: Skill[] = [
  {
    id: 'ui-ux-design',
    Icon: DesignIcon,
    skill: 'UI/UX Design',
    description: "Our design is translated " +
      "into comprehensive digital environments built on latest development standards."
  },
  {
    id: 'development',
    Icon: DevelopIcon,
    skill: 'Development',
    description: "Our design is translated into " +
      "comprehensive digital environments built on latest development standards."
  },
  {
    id: 'testing',
    Icon: TestingIcon,
    skill: 'software testing',
    description: "Our design is translated into comprehensive digital environments" +
      "built on latest development standards."
  },
]
