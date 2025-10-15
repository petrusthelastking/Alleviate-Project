'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ProjectCarousel from '@/components/ProjectCarousel';
import SectionHeader from '@/components/SectionHeader';
import MetricStat from '@/components/MetricStat';

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section - Modern Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#18479e 1px, transparent 1px), linear-gradient(90deg, #18479e 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
          }} />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-8"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
                >
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-primary text-sm font-medium">Available for Projects</span>
                </motion.div>

                {/* Main Heading */}
                <div className="space-y-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-none"
                  >
                    <span className="block text-text-primary">Building</span>
                    <span className="block text-gradient">Tomorrow's</span>
                    <span className="block text-text-primary">Digital World</span>
                  </motion.h1>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-wrap gap-3 pt-4"
                  >
                    <span className="px-4 py-2 bg-surface-200 border border-primary/20 rounded-lg text-text-muted text-sm font-medium">
                      Blockchain Developer
                    </span>
                    <span className="px-4 py-2 bg-surface-200 border border-primary/20 rounded-lg text-text-muted text-sm font-medium">
                      UI/UX Designer
                    </span>
                    <span className="px-4 py-2 bg-surface-200 border border-primary/20 rounded-lg text-text-muted text-sm font-medium">
                      Web3 Specialist
                    </span>
                  </motion.div>
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-xl md:text-2xl text-text-muted leading-relaxed max-w-2xl"
                >
                  Crafting <span className="text-primary font-semibold">decentralized solutions</span> and{' '}
                  <span className="text-primary font-semibold">beautiful interfaces</span> that bridge technology and human experience.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex flex-wrap items-center gap-4 pt-4"
                >
                  <Link
                    href="/work"
                    className="group px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 focus-ring inline-flex items-center gap-2"
                  >
                    Explore My Work
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-surface-200 border border-surface-200 text-text-primary font-semibold rounded-xl hover:border-primary transition-all focus-ring"
                  >
                    Let's Talk
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative"
              >
                {/* Stats Cards */}
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-surface-200/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-4xl font-display font-bold text-text-primary">15+</div>
                        <div className="text-text-muted text-sm mt-1">Projects Completed</div>
                      </div>
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-2xl">
                        🚀
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-surface-200/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-4xl font-display font-bold text-text-primary">5+</div>
                        <div className="text-text-muted text-sm mt-1">Years Experience</div>
                      </div>
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-2xl">
                        ⚡
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="bg-surface-200/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-4xl font-display font-bold text-text-primary">100%</div>
                        <div className="text-text-muted text-sm mt-1">Client Satisfaction</div>
                      </div>
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-2xl">
                        ⭐
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-text-muted text-xs uppercase tracking-wider">Scroll</span>
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
              <motion.div className="w-1.5 h-2 bg-primary rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative py-24 md:py-32 bg-surface-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="Portfolio Showcase"
            title="Featured Projects"
            subtitle="Discover my latest work in blockchain development, UI/UX design, and decentralized applications."
            align="center"
          />
          <ProjectCarousel />
        </div>
      </section>

      {/* Capabilities Section - Refined */}
      <section className="relative py-24 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow="Services & Expertise"
            title="What I Do Best"
            subtitle="Comprehensive solutions across blockchain, design, and modern web development."
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-surface-200 border border-surface-200 rounded-2xl p-8 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-3xl group-hover:bg-primary/20 transition-colors">
                    {capability.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-display font-bold text-text-primary mb-4 group-hover:text-primary transition-colors">
                    {capability.title}
                  </h3>
                  
                  {/* Skills */}
                  <ul className="space-y-3">
                    {capability.skills.map((skill) => (
                      <li key={skill} className="text-text-muted text-sm flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Modern Grid */}
      <section className="relative py-24 md:py-32 bg-surface-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
              Trusted by Clients Worldwide
            </h2>
            <p className="text-xl text-text-muted">
              Delivering excellence in every project
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-surface-200 border border-primary/20 rounded-2xl p-8 text-center"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-gradient mb-2">15+</div>
              <div className="text-text-muted text-sm font-medium">Projects Delivered</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-surface-200 border border-primary/20 rounded-2xl p-8 text-center"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-gradient mb-2">5+</div>
              <div className="text-text-muted text-sm font-medium">Years Experience</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-surface-200 border border-primary/20 rounded-2xl p-8 text-center"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-gradient mb-2">10+</div>
              <div className="text-text-muted text-sm font-medium">Technologies</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-surface-200 border border-primary/20 rounded-2xl p-8 text-center"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-gradient mb-2">100%</div>
              <div className="text-text-muted text-sm font-medium">Client Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative py-32 md:py-40 bg-black overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-primary text-sm font-medium">Ready to Start?</span>
            </div>

            {/* Heading */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-text-primary leading-tight">
              Let's Create Something
              <br />
              <span className="text-gradient">Extraordinary</span> Together
            </h2>

            {/* Description */}
            <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto leading-relaxed">
              Whether it's a blockchain project, a beautiful interface, or a complete digital solution—I'm here to bring your vision to life.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link
                href="/contact"
                className="group px-10 py-5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/20 focus-ring inline-flex items-center gap-2 text-lg"
              >
                Start a Project
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/resume"
                className="px-10 py-5 bg-surface-200 border border-surface-200 text-text-primary font-semibold rounded-xl hover:border-primary transition-all focus-ring text-lg"
              >
                View Resume
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
    icon: '⛓️',
    title: 'Blockchain Development',
    skills: ['Smart Contracts', 'DApps', 'Web3 Integration', 'Solidity'],
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    skills: ['Interface Design', 'User Research', 'Prototyping', 'Design Systems'],
  },
  {
    icon: '💻',
    title: 'Frontend Development',
    skills: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    icon: '🚀',
    title: 'Full-Stack Solutions',
    skills: ['API Development', 'Database Design', 'Cloud Deployment', 'Performance'],
  },
];
