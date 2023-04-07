import type { ElementType } from 'react';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: type,
      delay: delay,
      duration: duration,
      ease: 'easeOut',
    },
  },
});

export default function withFadeInAnimation(
  Component: ElementType,
  direction = 'left'
) {
  return function HOC(props) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        variants={fadeIn(direction, 'spring', 0, 0.3)}
      >
        <Component {...props} />
      </motion.div>
    );
  };
}
