import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');

  return (
    <p ref={ref} className={`relative ${className ?? ''}`} style={style} aria-label={text}>
      {chars.map((char, i) => {
        const start = i / chars.length;
        const end = Math.min((i + 1) / chars.length, 1);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
        return (
          <span key={i} className="relative inline-block whitespace-pre">
            <span className="opacity-0 select-none">{char}</span>
            <motion.span className="absolute inset-0" style={{ opacity }}>
              {char}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
}
