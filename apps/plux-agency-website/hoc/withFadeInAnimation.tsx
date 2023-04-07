import type { ElementType } from 'react';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { fadeIn } from '../common/motion';

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
