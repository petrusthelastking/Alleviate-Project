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
              Blockchain Developer & UI/UX Designer
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
                <span className="text-text-primary">Blockchain Developer</span>
                <br />
                <span className="text-text-primary">& UI/UX Designer</span>
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

      {/* Visual Showcase Section - 3D Card Gallery */}
      <section className="relative py-32 md:py-40 bg-gradient-to-b from-black via-[#0a1628] to-black overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/20 to-cyan-500/20 border border-primary/30 rounded-full mb-8 shadow-lg shadow-primary/10"
            >
              <span className="w-2 h-2 bg-gradient-to-r from-primary to-cyan-500 rounded-full animate-pulse" />
              <span className="text-gradient text-sm font-semibold">Showcase & Portfolio</span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight">
              <span className="block text-text-primary">Experience My Work</span>
              <span className="block text-gradient">In Every Dimension</span>
            </h2>
            <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto leading-relaxed">
              Immersive 3D showcase of real projects across web, mobile, and beyond
            </p>
          </motion.div>

          {/* 3D Floating Cards - Apple-style */}
          <div className="relative perspective-[2000px]">
            <div className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center">
              
              {/* Card 1 - Left (Rotated) */}
              <motion.div
                initial={{ opacity: 0, x: -200, rotateY: -45, rotateX: 15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: -25, rotateX: 10 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ 
                  rotateY: -15, 
                  rotateX: 5,
                  scale: 1.05,
                  z: 50,
                  transition: { duration: 0.4 }
                }}
                style={{ 
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'center center',
                }}
                className="absolute left-0 md:left-8 lg:left-16 top-1/2 -translate-y-1/2 z-20 hidden md:block cursor-pointer"
              >
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-cyan-500/40 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60 group-hover:opacity-100" 
                       style={{ transform: 'translateZ(-20px)' }} />
                  
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                    <div className="aspect-[4/5] w-[280px] lg:w-[320px]">
                      <img 
                        src="https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=800&fit=crop&q=80" 
                        alt="Mobile Design"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      
                      {/* Overlay text */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">Mobile App</h3>
                        <p className="text-sm text-gray-300">iOS & Android Design</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 - Center (Main Focus) */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  rotateX: 2,
                  transition: { duration: 0.4 }
                }}
                style={{ 
                  transformStyle: 'preserve-3d',
                }}
                className="relative z-30 cursor-pointer"
              >
                <div className="relative group">
                  {/* Enhanced glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-cyan-500/60 rounded-3xl blur-3xl group-hover:blur-[80px] transition-all duration-500" 
                       style={{ transform: 'translateZ(-30px)' }} />
                  
                  {/* Main Card */}
                  <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500">
                    <div className="aspect-[16/10] w-full max-w-[600px] lg:max-w-[700px]">
                      <img 
                        src="MOCKUP COVER IG NOVA NEWS.jpg" 
                        alt="Web Dashboard"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      
                      {/* Floating badge */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="absolute top-6 left-6 bg-black/50 backdrop-blur-xl border border-white/20 px-5 py-2.5 rounded-full"
                      >
                        <span className="text-white font-semibold text-sm flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                          Live Project
                        </span>
                      </motion.div>
                      
                      {/* Bottom info */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.2 }}
                        >
                          <h3 className="text-4xl font-display font-bold mb-3">Web Dashboard</h3>
                          <p className="text-lg text-gray-300 mb-4">Full-stack Analytics Platform</p>
                          <div className="flex gap-2">
                            <span className="px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-xs">React</span>
                            <span className="px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-xs">Next.js</span>
                            <span className="px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-xs">TypeScript</span>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Reflection effect */}
                  <div className="absolute -bottom-2 left-0 right-0 h-32 bg-gradient-to-t from-primary/10 to-transparent rounded-b-3xl blur-2xl opacity-50" 
                       style={{ transform: 'translateZ(-40px) rotateX(180deg)' }} />
                </div>
              </motion.div>

              {/* Card 3 - Right (Rotated) */}
              <motion.div
                initial={{ opacity: 0, x: 200, rotateY: 45, rotateX: 15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 25, rotateX: 10 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ 
                  rotateY: 15, 
                  rotateX: 5,
                  scale: 1.05,
                  z: 50,
                  transition: { duration: 0.4 }
                }}
                style={{ 
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'center center',
                }}
                className="absolute right-0 md:right-8 lg:right-16 top-1/2 -translate-y-1/2 z-20 hidden md:block cursor-pointer"
              >
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 to-primary/40 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60 group-hover:opacity-100" 
                       style={{ transform: 'translateZ(-20px)' }} />
                  
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                    <div className="aspect-[4/5] w-[280px] lg:w-[320px]">
                      <img 
                        src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=800&fit=crop&q=80" 
                        alt="Tablet Design"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      
                      {/* Overlay text */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">Tablet UI</h3>
                        <p className="text-sm text-gray-300">Responsive Interface</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mobile Only View */}
              <div className="block md:hidden w-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl border border-primary/20">
                    <div className="aspect-[16/10] w-full">
                      <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80" 
                        alt="Portfolio Showcase"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">Featured Project</h3>
                        <p className="text-sm text-gray-300">View Full Portfolio</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Feature Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24"
          >
            {[
              { icon: '🎨', label: 'Pixel Perfect', value: 'Design', color: 'from-pink-500 to-purple-500' },
              { icon: '⚡', label: 'Blazing Fast', value: 'Performance', color: 'from-yellow-500 to-orange-500' },
              { icon: '📱', label: 'Mobile First', value: 'Responsive', color: 'from-blue-500 to-cyan-500' },
              { icon: '🔒', label: 'Bank-Level', value: 'Security', color: 'from-green-500 to-emerald-500' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="relative group cursor-pointer"
              >
                <div className="relative bg-surface-200/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center group-hover:border-primary/30 transition-all duration-300">
                  {/* Glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`} />
                  
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-5xl mb-3 inline-block"
                  >
                    {item.icon}
                  </motion.div>
                  <div className="text-text-primary font-bold text-lg group-hover:text-primary transition-colors">{item.value}</div>
                  <div className="text-text-muted text-sm">{item.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative py-24 md:py-32 bg-surface-100">
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
