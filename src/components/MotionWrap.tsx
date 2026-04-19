import React from 'react';
import { motion } from 'framer-motion';

interface MotionWrapProps {
  children: React.ReactNode;
  className?: string;
}

const MotionWrap: React.FC<MotionWrapProps> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrap;