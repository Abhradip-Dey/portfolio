export type SkillLevel = 'Familiar' | 'Learning' | 'Exploring';

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Web Development' | 'Currently Exploring';
  level: SkillLevel;
  iconName: string;
  description: string;
  keyTopics: string[];
  codeSample?: {
    language: string;
    filename: string;
    code: string;
  };
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription?: string;
  category: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  status: 'Completed' | 'In Progress' | 'Prototype';
  accentColor?: string;
  codeSnippet?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  yearStatus: string;
  period: string;
  location: string;
  description: string;
  focusAreas: string[];
  courseworkHighlights: string[];
}

export interface LearningItem {
  id: string;
  title: string;
  category: string;
  status: 'In Progress' | 'Upcoming' | 'Active Exploration';
  description: string;
  topics: string[];
  progressPercent?: number;
  iconName: string;
}

export interface PhilosophyPrinciple {
  id: number;
  title: string;
  summary: string;
  detailedInsight: string;
  iconName: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type AccentTheme = 'cyan' | 'violet' | 'emerald' | 'blue' | 'amber';
