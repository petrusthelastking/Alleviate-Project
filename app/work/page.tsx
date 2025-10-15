'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import SectionHeader from '@/components/SectionHeader';

const categories = ['All', 'AI/ML', 'Web', 'Blockchain', 'Design', 'Research'];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    // Fetch projects from API route
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error('Error fetching projects:', err));
  }, []);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="relative min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Portfolio"
          title="My Work"
          subtitle="A collection of projects showcasing my expertise in AI/ML, web development, and blockchain."
        />

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-glow'
                  : 'bg-surface-200 text-text-muted border border-primary/30 hover:border-primary'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-muted text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
