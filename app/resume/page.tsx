'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';

export default function ResumePage() {
  return (
    <div className="relative min-h-screen pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Resume"
          title="Experience & Skills"
          subtitle="A comprehensive overview of my professional journey and technical expertise."
        />

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <Link
            href="/resume/Gabriel_Batavia_Resume.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all hover:scale-105 focus-ring"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF Resume
          </Link>
        </motion.div>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-text-primary mb-8">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface-200 border border-surface-200 rounded-2xl p-6"
              >
                <h4 className="text-xl font-display font-semibold text-text-primary mb-4">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-surface-100 border border-primary/30 rounded-full text-sm text-text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-text-primary mb-8">Work Experience</h3>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface-200 border border-surface-200 hover:border-primary rounded-2xl p-6 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-display font-semibold text-text-primary">{job.title}</h4>
                    <p className="text-primary font-medium">{job.company}</p>
                  </div>
                  <p className="text-text-muted text-sm mt-2 md:mt-0">{job.period}</p>
                </div>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="text-text-muted text-sm flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-3xl font-display font-bold text-text-primary mb-8">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface-200 border border-surface-200 rounded-2xl p-6"
              >
                <h4 className="text-xl font-display font-semibold text-text-primary mb-2">{edu.degree}</h4>
                <p className="text-primary font-medium mb-1">{edu.institution}</p>
                <p className="text-text-muted text-sm">{edu.period}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const skills = [
  {
    title: 'AI/ML & Data Science',
    items: ['Python', 'TensorFlow', 'PyTorch', 'LangChain', 'OpenAI', 'YOLO', 'Pandas', 'Scikit-learn'],
  },
  {
    title: 'Web Development',
    items: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'FastAPI', 'Tailwind CSS'],
  },
  {
    title: 'Blockchain & Web3',
    items: ['Solidity', 'Web3.js', 'Ethers.js', 'Smart Contracts', 'DApp Development'],
  },
  {
    title: 'Databases & Tools',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Git', 'GCP', 'AWS'],
  },
];

const experience = [
  {
    title: 'Senior AI Engineer',
    company: 'Tech Innovation Labs',
    period: '2024 - Present',
    responsibilities: [
      'Architected and deployed RAG-based systems using LangChain and OpenAI',
      'Built real-time ML pipelines processing 10M+ data points daily',
      'Led team of 4 engineers in developing AI-powered products',
      'Reduced model inference time by 40% through optimization',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Digital Solutions Inc.',
    period: '2022 - 2024',
    responsibilities: [
      'Developed enterprise web applications using Next.js and Node.js',
      'Implemented microservices architecture serving 50K+ users',
      'Integrated third-party APIs and payment gateways',
      'Mentored junior developers and conducted code reviews',
    ],
  },
  {
    title: 'Blockchain Developer',
    company: 'DeFi Startup',
    period: '2021 - 2022',
    responsibilities: [
      'Built and audited smart contracts for DeFi protocols',
      'Developed trading dashboard with real-time blockchain data',
      'Implemented Web3 wallet integration (MetaMask, WalletConnect)',
      'Conducted security audits and gas optimization',
    ],
  },
];

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    period: '2016 - 2020',
  },
  {
    degree: 'AI/ML Specialization',
    institution: 'Coursera - Stanford University',
    period: '2023',
  },
];
