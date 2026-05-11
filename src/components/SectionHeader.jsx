import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  return (
    <motion.div
      className={align === 'left' ? 'mx-0 mb-12 max-w-2xl' : 'mx-auto mb-12 max-w-3xl text-center'}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="font-display text-3xl font-black tracking-normal text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{description}</p> : null}
    </motion.div>
  );
}
