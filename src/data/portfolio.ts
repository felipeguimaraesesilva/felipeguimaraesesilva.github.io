// Type definitions for content.json
// Edit the actual content in: /public/content.json

export interface Personal {
  greeting: string;
  name: string;
  photo?: string;
  role: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  competencies: string;
}

export type SkillLevelId = "core" | "strong" | "exposure";

export interface SkillLevelDef {
  id: SkillLevelId;
  label: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  levels: Record<SkillLevelId, string[]>;
}

export interface Experience {
  period: string;
  company: string;
  website?: string;
  location?: string;
  role: string;
  description: string;
  stack?: string[];
}

export interface SideProject {
  name: string;
  tag: string;
  type: "band" | "project" | "spotify";
  description: string;
  logo?: string;
  instagram?: string;
  github?: string;
  website?: string;
  spotify?: string;
}

export interface Education {
  period: string;
  degree: string;
  field?: string;
  institution: string;
  location?: string;
  featured?: boolean;
}

export interface Certification {
  period: string;
  degree: string;
  field?: string;
  institution: string;
  logo?: string;
  link?: string;
}

export interface ImpactStat {
  value: string;
  label: string;
  description: string;
}

export interface PortfolioContent {
  personal: Personal;
  impactStats: ImpactStat[];
  sideProjects: SideProject[];
  skillCategories: SkillCategory[];
  experiences: Experience[];
  education: Education[];
  certifications?: Certification[];
  ui: UI;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface SectionLabel {
  title: string;
  subtitle: string;
  additionalTraining?: string;
}

export interface UI {
  logo: string;
  nav: NavLink[];
  sections: {
    beyondTheCode: string;
    experience: SectionLabel;
    skills: {
      title: string;
      subtitle: string;
      filterAll: string;
      levels: SkillLevelDef[];
    };
    education: SectionLabel;
    contact: SectionLabel;
  };
  meta: {
    title: string;
    description: string;
  };
}
