import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={`glass-card ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
    >
      {children}
    </motion.div>
  );
}
