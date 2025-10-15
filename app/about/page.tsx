'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="About Me"
          title="Building the Future with AI & Code"
          subtitle="From concept to deployment, I create intelligent systems that solve real-world problems."
        />

        {/* Portrait & Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20"
        >
          <div className="md:col-span-1">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-surface-200 border border-primary/30">
              <div className="absolute inset-0 flex items-center justify-center text-6xl">
                👨‍💻
              </div>
            </div>
          </div>
          <div className="md:col-span-2 space-y-4 text-text-muted leading-relaxed">
            <p>
              Hi, I&apos;m <span className="text-primary font-semibold">ALLEVIATE</span>, an AI Engineer and Full-Stack Developer passionate about building intelligent systems that make a difference.
            </p>
            <p>
              With over 5 years of experience, I specialize in creating end-to-end solutions that combine cutting-edge AI/ML technologies with beautiful, functional user interfaces. From RAG-based systems to blockchain applications, I thrive on solving complex challenges.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-display font-bold text-text-primary mb-8">Journey</h3>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                <div className="text-primary text-sm font-semibold mb-1">{item.year}</div>
                <h4 className="text-xl font-display font-semibold text-text-primary mb-2">{item.title}</h4>
                <p className="text-text-muted">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-display font-bold text-text-primary mb-8">Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface-200 border border-surface-200 hover:border-primary rounded-2xl p-6 transition-all"
              >
                <div className="text-3xl mb-3">{value.icon}</div>
                <h4 className="text-xl font-display font-semibold text-text-primary mb-2">{value.title}</h4>
                <p className="text-text-muted">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const timeline = [
  {
    year: '2025',
    title: 'Senior AI Engineer',
    description: 'Leading AI/ML projects, building RAG systems and LLM-powered applications.',
  },
  {
    year: '2023',
    title: 'Full-Stack Developer',
    description: 'Developed enterprise web applications with React, Next.js, and Node.js.',
  },
  {
    year: '2021',
    title: 'Blockchain Developer',
    description: 'Built DeFi applications and smart contracts on Ethereum.',
  },
  {
    year: '2020',
    title: 'Started Journey',
    description: 'Began professional career as a software developer.',
  },
];

const values = [
  {
    icon: '🎯',
    title: 'Excellence',
    description: 'I strive for the highest quality in every project, ensuring robust and scalable solutions.',
  },
  {
    icon: '🚀',
    title: 'Innovation',
    description: 'Always exploring cutting-edge technologies to deliver modern, future-proof solutions.',
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    description: 'I believe in the power of teamwork and open communication to achieve great results.',
  },
  {
    icon: '📚',
    title: 'Continuous Learning',
    description: 'Technology evolves rapidly, and I&apos;m committed to staying at the forefront.',
  },
];
