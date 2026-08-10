import React from 'react';
import { motion } from 'framer-motion';

const SectionLabel = ({ children, className = '' }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`text-eyebrow mb-6 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default SectionLabel;
