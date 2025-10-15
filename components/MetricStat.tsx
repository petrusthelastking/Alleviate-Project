'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface MetricStatProps {
  value: string;
  label: string;
  delay?: number;
}

export default function MetricStat({ value, label, delay = 0 }: MetricStatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    // Check if value is a number to animate
    const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    const duration = 2000;
    const steps = 60;
    const stepValue = numericValue / steps;
    const stepDuration = duration / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= numericValue) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        const suffix = value.replace(/[0-9]/g, '');
        setDisplayValue(Math.floor(current) + suffix);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
        {displayValue}
      </div>
      <div className="text-text-muted text-sm uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}
