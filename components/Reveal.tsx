'use client';

import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
}: RevealProps) {
  const getOffset = () => {
    switch (direction) {
      case 'up':
        return { y: 28, x: 0 };
      case 'down':
        return { y: -28, x: 0 };
      case 'left':
        return { x: 28, y: 0 };
      case 'right':
        return { x: -28, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
