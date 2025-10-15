'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  slug: string;
  thumbnail: string;
  category: string;
  stack: string[];
  role: string;
  summary: string;
  metric?: { label: string; value: string };
  featured?: boolean;
}

export default function ProjectCard({
  title,
  slug,
  thumbnail,
  category,
  stack,
  role,
  summary,
  metric,
}: ProjectCardProps) {
  return (
    <Link href={`/work/${slug}`}>
      <motion.article
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="group relative bg-surface-200 rounded-2xl overflow-hidden border border-surface-200 hover:border-primary transition-all duration-300 hover:shadow-glow"
      >
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden bg-surface-100">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Metric Chip */}
          {metric && (
            <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <p className="text-xs font-semibold text-white">{metric.value}</p>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Meta Row */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-surface-100 border border-primary/30 rounded-full text-xs font-medium text-primary">
              {category}
            </span>
            <span className="text-xs text-text-muted">{role}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-display font-semibold text-text-primary mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Summary */}
          <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-2">
            {summary}
          </p>

          {/* Stack Pills */}
          <div className="flex flex-wrap gap-2">
            {stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-surface-100 rounded text-xs text-text-muted"
              >
                {tech}
              </span>
            ))}
            {stack.length > 4 && (
              <span className="px-2 py-1 text-xs text-text-muted">
                +{stack.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Hover Arrow */}
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </motion.article>
    </Link>
  );
}
