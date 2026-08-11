import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({
  children,
  animation = 'fade', // fade, slide-up, slide-left, slide-right
  duration = 0.8,
  delay = 0,
  className = '',
  style = {},
  amount = 0.2
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: animation === 'slide-up' ? 50 : animation === 'slide-down' ? -50 : 0,
      x: animation === 'slide-left' ? 50 : animation === 'slide-right' ? -50 : 0,
      scale: animation === 'scale-up' ? 0.9 : animation === 'scale-down' ? 1.1 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1] // Custom ease out
      }
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
