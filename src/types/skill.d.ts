export interface ISkill {
  name: string;
  level: number;
  text?: string;
  maxLevel?: number;
}

export interface IKills {
  languages: ISkill[];
  frameworks: ISkill[];
  technologies: ISkill[];
  libraries: ISkill[];
  databases: ISkill[];
  practices: ISkill[];
  tools: ISkill[];
}
