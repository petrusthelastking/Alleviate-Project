import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { getProjectBySlug, getAllProjects } from '@/lib/projects';
import { Metadata } from 'next';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - ALLEVIATE`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [project.thumbnail],
    },
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === params.slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <article className="relative min-h-screen pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Work
        </Link>

        {/* Hero */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-4 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
              {project.category}
            </span>
            <span className="text-text-muted text-sm">{project.role}</span>
            <span className="text-text-muted text-sm">•</span>
            <time className="text-text-muted text-sm">{new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</time>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6">
            {project.title}
          </h1>
          
          <p className="text-xl text-text-muted leading-relaxed mb-8">
            {project.summary}
          </p>

          {/* Meta Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Stack */}
            <div>
              <h3 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wider">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-surface-200 border border-surface-200 rounded-lg text-sm text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {project.links && (
              <div>
                <h3 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wider">Links</h3>
                <div className="flex flex-wrap gap-3">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all text-sm font-medium"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Site
                    </a>
                  )}
                  {project.links.repo && (
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-surface-200 border border-primary/30 text-text-primary rounded-lg hover:bg-surface-100 transition-all text-sm font-medium"
                    >
                      GitHub
                    </a>
                  )}
                  {project.links.docs && (
                    <a
                      href={project.links.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-surface-200 border border-primary/30 text-text-primary rounded-lg hover:bg-surface-100 transition-all text-sm font-medium"
                    >
                      Documentation
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6 bg-surface-200 border border-surface-200 rounded-2xl">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold text-primary mb-1">
                    {metric.value}
                  </div>
                  <div className="text-text-muted text-sm">{metric.label}</div>
                </div>
              ))}
            </div>
          )}
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none
          prose-headings:font-display prose-headings:font-bold prose-headings:text-text-primary
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-text-muted prose-p:leading-relaxed prose-p:mb-6
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-strong:text-text-primary prose-strong:font-semibold
          prose-ul:text-text-muted prose-ul:list-disc prose-ul:pl-6
          prose-ol:text-text-muted prose-ol:list-decimal prose-ol:pl-6
          prose-li:mb-2
          prose-code:text-primary prose-code:bg-surface-200 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-surface-200 prose-pre:border prose-pre:border-surface-200 prose-pre:rounded-xl
          prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic
        ">
          <MDXRemote source={project.content} />
        </div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-display font-bold text-text-primary mb-8">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((image, index) => (
                <div key={index} className="aspect-video bg-surface-200 rounded-xl overflow-hidden border border-surface-200">
                  <div className="w-full h-full flex items-center justify-center text-text-muted">
                    Image {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="mt-16 pt-8 border-t border-surface-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prevProject ? (
              <Link
                href={`/work/${prevProject.slug}`}
                className="group p-6 bg-surface-200 border border-surface-200 hover:border-primary rounded-2xl transition-all"
              >
                <p className="text-text-muted text-sm mb-2">← Previous Project</p>
                <h3 className="text-xl font-display font-semibold text-text-primary group-hover:text-primary transition-colors">
                  {prevProject.title}
                </h3>
              </Link>
            ) : (
              <div />
            )}
            {nextProject && (
              <Link
                href={`/work/${nextProject.slug}`}
                className="group p-6 bg-surface-200 border border-surface-200 hover:border-primary rounded-2xl transition-all text-right md:ml-auto"
              >
                <p className="text-text-muted text-sm mb-2">Next Project →</p>
                <h3 className="text-xl font-display font-semibold text-text-primary group-hover:text-primary transition-colors">
                  {nextProject.title}
                </h3>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </article>
  );
}
