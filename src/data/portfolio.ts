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

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Experience {
  period: string;
  company: string;
  role: string;
  description: string;
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

export interface PortfolioContent {
  personal: Personal;
  sideProjects: SideProject[];
  skillCategories: SkillCategory[];
  experiences: Experience[];
  ui: UI;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface SectionLabel {
  title: string;
  subtitle: string;
}

export interface UI {
  logo: string;
  nav: NavLink[];
  sections: {
    beyondTheCode: string;
    experience: SectionLabel;
    skills: SectionLabel;
    contact: SectionLabel;
  };
  meta: {
    title: string;
    description: string;
  };
}
