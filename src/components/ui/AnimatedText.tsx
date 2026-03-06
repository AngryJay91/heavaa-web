'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

export default function AnimatedText({ text, className, delay = 0, once = true }: AnimatedTextProps) {
  return (
    <motion.span
      className={cn('inline-block', className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {text}
    </motion.span>
  );
}
