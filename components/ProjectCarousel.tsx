'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const featuredProjects = [
  {
    title: 'GambutGuard: IoT Peatland Fire Monitor',
    slug: 'gambutguard-iot',
    thumbnail: '/images/projects/gambutguard.jpg',
    category: 'AI/ML',
    stack: ['Next.js', 'FastAPI', 'YOLO', 'LoRa', 'GCP'],
    role: 'Lead Engineer',
    summary: 'End-to-end early warning system for peatland fires with LoRa sensors and AI.',
    metric: { label: 'Sensor uptime', value: '99.1%' },
  },
  {
    title: 'AI-Powered Content Platform',
    slug: 'ai-content-platform',
    thumbnail: '/images/projects/ai-platform.jpg',
    category: 'AI/ML',
    stack: ['React', 'OpenAI', 'LangChain', 'PostgreSQL'],
    role: 'Full-Stack Engineer',
    summary: 'RAG-based content generation platform with real-time collaboration features.',
    metric: { label: 'Response time', value: '< 2s' },
  },
  {
    title: 'DeFi Trading Dashboard',
    slug: 'defi-dashboard',
    thumbnail: '/images/projects/defi-dashboard.jpg',
    category: 'Blockchain',
    stack: ['Next.js', 'Web3.js', 'Solidity', 'Ethers'],
    role: 'Blockchain Developer',
    summary: 'Real-time crypto trading dashboard with smart contract integration.',
    metric: { label: 'Daily volume', value: '$2M+' },
  },
];

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = featuredProjects.length - 1;
      if (nextIndex >= featuredProjects.length) nextIndex = 0;
      return nextIndex;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') paginate(-1);
      if (e.key === 'ArrowRight') paginate(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentProject = featuredProjects[currentIndex];

  return (
    <div className="relative max-w-[1100px] mx-auto">
      <div className="relative aspect-video md:aspect-[16/10] overflow-hidden rounded-2xl">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute inset-0"
          >
            <Link href={`/work/${currentProject.slug}`} className="block h-full">
              <article className="relative h-full bg-surface-200 border border-surface-200 hover:border-primary transition-all duration-300 rounded-2xl overflow-hidden group">
                {/* Image */}
                <div className="relative h-2/3 overflow-hidden">
                  <div className="relative w-full h-full bg-surface-100">
                    <div className="absolute inset-0 flex items-center justify-center text-text-muted text-4xl">
                      {currentProject.category === 'AI/ML' ? '🤖' : currentProject.category === 'Blockchain' ? '⛓️' : '💻'}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-200 via-transparent to-transparent" />
                  
                  {/* Metric */}
                  {currentProject.metric && (
                    <div className="absolute top-6 right-6 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <p className="text-sm font-semibold text-white">{currentProject.metric.value}</p>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-surface-100 border border-primary/30 rounded-full text-xs font-medium text-primary">
                      {currentProject.category}
                    </span>
                    <span className="text-sm text-text-muted">{currentProject.role}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                    {currentProject.title}
                  </h3>

                  <p className="text-text-muted leading-relaxed mb-4">
                    {currentProject.summary}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {currentProject.stack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-surface-100 rounded-full text-xs text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface-200 border border-primary/30 hover:bg-primary hover:border-primary transition-all flex items-center justify-center group z-10"
        aria-label="Previous project"
      >
        <svg className="w-6 h-6 text-text-muted group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface-200 border border-primary/30 hover:bg-primary hover:border-primary transition-all flex items-center justify-center group z-10"
        aria-label="Next project"
      >
        <svg className="w-6 h-6 text-text-muted group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {featuredProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-surface-200 hover:bg-primary/50'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
