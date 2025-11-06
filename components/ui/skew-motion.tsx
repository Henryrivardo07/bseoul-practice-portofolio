'use client';

import { Slot } from '@radix-ui/react-slot';
import { HTMLMotionProps, motion } from 'motion/react';

interface SkewMotionProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  asChild?: boolean;
}

const MotionSlot = motion.create(Slot);
const MotionDiv = motion.div;

const SkewMotion: React.FC<SkewMotionProps> = ({
  children,
  duration = 0.5,
  delay = 0,
  asChild,
  ...motionProps
}) => {
  const Comp = asChild ? MotionSlot : MotionDiv;

  return (
    <Comp
      transition={{ duration, delay }}
      animate={{ skewX: -7 }}
      {...motionProps}
    >
      {children}
    </Comp>
  );
};

export default SkewMotion;
