export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface PortfolioData {
  about: AboutSection;
  skills: SkillsSection;
  services: ServicesSection;
  portfolio: PortfolioSection;
  references: ReferencesSection;
  contact: ContactSection;
}

export interface AboutSection {
  title: string;
  description: string;
  image: string;
  socialLinks: SocialLink[];
}

export interface SkillsSection {
  title: string;
  categories: SkillCategory[];
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon: string;
  level?: number;
}

export interface ServicesSection {
  title: string;
  services: Service[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioSection {
  title: string;
  projects: Project[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface ReferencesSection {
  title: string;
  references: Reference[];
}

export interface Reference {
  name: string;
  logo: string;
  url?: string;
}

export interface ContactSection {
  title: string;
  description: string;
  form: ContactForm;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  csrfToken: string;
}
