import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Search, X } from 'lucide-react';
import { galleryItems, projects } from '../data/siteData';
import GlassCard from './GlassCard';
import SectionHeader from './SectionHeader';

const filters = [
  { label: 'All Photos', value: 'all' },
  { label: 'Matriculation', value: 'matriculation' },
  { label: 'Classes', value: 'classes' },
  { label: 'Final Year', value: 'finalyear' },
  { label: 'Graduation', value: 'graduation' },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [activeImage, setActiveImage] = useState(null);
  const visibleItems = useMemo(
    () => (filter === 'all' ? galleryItems : galleryItems.filter((item) => item.category === filter)),
    [filter],
  );

  return (
    <section id="projects" className="section-shell bg-night">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Projects & Portfolio"
          title="Gallery albums as premium interactive showcases"
          description="The original gallery content is preserved with animated filters, modern hover states, and a cleaner lightbox interaction."
        />

        <div className="grid gap-5 lg:grid-cols-4">
          {projects.map((project, index) => (
            <GlassCard key={project.title} className="group overflow-hidden p-0" delay={index * 0.05}>
              <div className={`h-44 bg-gradient-to-br ${project.gradient} p-5`}>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white">
                    {project.category}
                  </span>
                  <ArrowUpRight className="size-5 text-white transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{project.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 sm:p-6">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((item) => (
              <button
                key={item.value}
                onClick={() => setFilter(item.value)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  filter === item.value ? 'bg-white text-night' : 'border border-white/10 text-slate-300 hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {visibleItems.map((item) => (
                <motion.button
                  layout
                  key={item.id}
                  onClick={() => setActiveImage(item)}
                  className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-slate-950 text-left"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(100,255,218,.32),transparent_35%),linear-gradient(135deg,rgba(138,180,255,.32),rgba(247,201,72,.18),rgba(15,23,42,1))]" />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:28px_28px] opacity-30" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-aurora">{item.category}</p>
                    <h3 className="mt-2 text-lg font-black text-white">{item.title}</h3>
                  </div>
                  <div className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                    <Search className="size-5" />
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            className="fixed inset-0 z-[60] grid place-items-center bg-slate-950/90 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-night p-4 shadow-soft"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute right-6 top-6 z-10 grid size-11 place-items-center rounded-full bg-white text-night"
                aria-label="Close gallery preview"
              >
                <X className="size-5" />
              </button>
              <div className="aspect-video rounded-[1.5rem] bg-[radial-gradient(circle_at_30%_10%,rgba(100,255,218,.36),transparent_35%),linear-gradient(135deg,rgba(138,180,255,.34),rgba(247,201,72,.2),rgba(15,23,42,1))]" />
              <div className="p-4">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-aurora">{activeImage.category}</p>
                <h3 className="mt-2 text-3xl font-black text-white">{activeImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
