// Type definitions for content.json
// Edit the actual content in: /public/content.json

export interface Personal {
  greeting: string;
  name: string;
  role: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  competencies: string;
}

export interface Band {
  name: string;
  genre: string;
  description: string;
  since: string;
  instagram: string;
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

export interface PortfolioContent {
  personal: Personal;
  band: Band;
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
