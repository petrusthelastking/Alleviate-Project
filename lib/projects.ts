import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export interface Project {
  slug: string;
  title: string;
  date: string;
  thumbnail: string;
  gallery?: string[];
  category: string;
  stack: string[];
  role: string;
  summary: string;
  problem?: string;
  solution?: string;
  process?: string;
  results?: string;
  metrics?: { label: string; value: string }[];
  links?: {
    live?: string;
    repo?: string;
    docs?: string;
  };
  featured: boolean;
  content: string;
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.(mdx|md)$/, '');
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        ...(data as Omit<Project, 'slug' | 'content'>),
        content,
      } as Project;
    });

  return allProjectsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    let fileContents: string;
    
    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, 'utf8');
    } else {
      const mdPath = path.join(projectsDirectory, `${slug}.md`);
      if (fs.existsSync(mdPath)) {
        fileContents = fs.readFileSync(mdPath, 'utf8');
      } else {
        return null;
      }
    }

    const { data, content } = matter(fileContents);

    return {
      slug,
      ...(data as Omit<Project, 'slug' | 'content'>),
      content,
    } as Project;
  } catch (error) {
    console.error(`Error loading project ${slug}:`, error);
    return null;
  }
}

export function getFeaturedProjects(): Project[] {
  const allProjects = getAllProjects();
  return allProjects.filter((project) => project.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  const allProjects = getAllProjects();
  if (category === 'All') return allProjects;
  return allProjects.filter((project) => project.category === category);
}
