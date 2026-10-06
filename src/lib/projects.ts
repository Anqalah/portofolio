// src/lib/projects.ts
import { projects as rawProjects } from "./data";

export type Project = {
  slug: string;
  title: string;
  tag: string;
  year: string;
  summary: string;
  description: string;
  role: string;
  duration: string;
  stack: string[];
  features: string[];
  challenges: string;
  outcome: string;
  links?: { label: string; href: string }[];
};

export const projectsData: Project[] = rawProjects as Project[];

export function getProjectBySlug(slug: string) {
  return projectsData.find((p) => p.slug === slug);
}

export function getAllProjectSlugs() {
  return projectsData.map((p) => p.slug);
}