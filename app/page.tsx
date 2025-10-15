'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ProjectCarousel from '@/components/ProjectCarousel';
import SectionHeader from '@/components/SectionHeader';
import MetricStat from '@/components/MetricStat';

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 noise opacity-50" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary text-sm md:text-base font-semibold uppercase tracking-wider mb-6"
            >
              AI Engineer & Full-Stack Developer
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
                <span className="text-gradient">ALLEVIATE</span>
                <br />
                <span className="text-text-primary">AI Engineer &</span>
                <br />
                <span className="text-text-primary">System Builder</span>
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              I build <span className="text-primary font-semibold">reliable AI</span> & <span className="text-primary font-semibold">delightful UX</span>.
              <br className="hidden md:block" />
              From RAG systems to design systems, I ship end‑to‑end.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/work"
                className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all hover:scale-105 focus-ring"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all hover:scale-105 focus-ring"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2"
            >
              <motion.div className="w-1 h-2 bg-primary rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative py-24 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="Selected Work"
            title="Featured Projects"
            subtitle="A showcase of my most impactful work across AI, web development, and design."
            align="center"
          />
          <ProjectCarousel />
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="relative py-24 md:py-32 bg-surface-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="Expertise"
            title="What I Do"
            subtitle="Full-stack capabilities spanning AI/ML, modern web development, and blockchain."
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-surface-200 border border-surface-200 hover:border-primary rounded-2xl p-6 transition-all hover:shadow-glow group"
              >
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-display font-semibold text-text-primary mb-3 group-hover:text-primary transition-colors">
                  {capability.title}
                </h3>
                <ul className="space-y-2">
                  {capability.skills.map((skill) => (
                    <li key={skill} className="text-text-muted text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <MetricStat value="15+" label="Projects Delivered" delay={0} />
            <MetricStat value="5+" label="Years Experience" delay={0.1} />
            <MetricStat value="10+" label="Technologies" delay={0.2} />
            <MetricStat value="100%" label="Client Satisfaction" delay={0.3} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-surface-100 to-black overflow-hidden">
        <div className="absolute inset-0 noise opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6">
              Let&apos;s Build Something Amazing
            </h2>
            <p className="text-xl text-text-muted mb-8 leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all hover:scale-105 focus-ring"
              >
                Start a Conversation
              </Link>
              <Link
                href="/resume"
                className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all hover:scale-105 focus-ring"
              >
                Download Resume
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const capabilities = [
  {
    icon: '🤖',
    title: 'AI/ML Engineering',
    skills: ['LLM Integration', 'RAG Systems', 'Computer Vision', 'NLP'],
  },
  {
    icon: '💻',
    title: 'Web Development',
    skills: ['Next.js/React', 'Node.js', 'TypeScript', 'API Design'],
  },
  {
    icon: '⛓️',
    title: 'Blockchain/Web3',
    skills: ['Smart Contracts', 'DApps', 'Solidity', 'Web3.js'],
  },
  {
    icon: '📊',
    title: 'Data & Analytics',
    skills: ['Python/Pandas', 'Data Viz', 'ML Models', 'FastAPI'],
  },
];
