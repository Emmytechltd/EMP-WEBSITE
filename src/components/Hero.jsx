import { motion } from 'framer-motion';
import { ArrowRight, Images, Sparkles, Users } from 'lucide-react';
import { stats } from '../data/siteData';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-mesh-dark px-4 pb-24 pt-32 sm:pt-36">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
      <motion.div
        className="absolute left-8 top-32 hidden rounded-3xl border border-white/10 bg-white/10 p-4 shadow-glow backdrop-blur-xl md:block"
        animate={{ y: [0, -16, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Users className="size-7 text-aurora" />
      </motion.div>
      <motion.div
        className="absolute bottom-28 right-8 hidden rounded-3xl border border-white/10 bg-white/10 p-4 shadow-glow backdrop-blur-xl md:block"
        animate={{ y: [0, 18, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Images className="size-7 text-gold" />
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
        <div>
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            Educational Management and Policy Department
          </motion.p>
          <motion.h1
            className="max-w-5xl font-display text-5xl font-black tracking-normal text-white sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            EMP 2015 Set - Umunze Branch
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
          >
            Nnamdi Azikiwe University, Awka. Connecting alumni, celebrating achievements, and fostering lifelong
            bonds with a renewed digital home for the EMP 2015 family.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24 }}
          >
            <a href="#about" className="btn-primary">
              Learn More <ArrowRight className="size-4" />
            </a>
            <a href="#projects" className="btn-secondary">
              View Gallery <Images className="size-4" />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.18 }}
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-aurora/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-4 shadow-soft backdrop-blur-2xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-400">Alumni OS</p>
                  <p className="mt-1 text-2xl font-black text-white">Community Pulse</p>
                </div>
                <Sparkles className="size-8 text-aurora" />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                    <p className="text-3xl font-black text-white">{stat.value}</p>
                    <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-3xl border border-aurora/20 bg-aurora/10 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-aurora">Mission</p>
                <p className="mt-3 text-lg font-bold text-white">
                  A stronger alumni network for professional growth, service, and memory preservation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
