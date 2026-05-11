import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { GraduationCap, Menu, X } from 'lucide-react';
import { navItems } from '../data/siteData';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const goTo = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/60 px-4 py-3 shadow-soft backdrop-blur-2xl sm:px-6">
        <button onClick={() => goTo('#home')} className="group flex items-center gap-3" aria-label="EMP 2015 home">
          <span className="grid size-10 place-items-center rounded-full bg-white text-night shadow-glow transition group-hover:scale-105">
            <GraduationCap className="size-5" aria-hidden="true" />
          </span>
          <span className="font-display text-sm font-extrabold uppercase tracking-[0.22em] text-white sm:text-base">EMP 2015</span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => goTo(item.href)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                active === item.href ? 'bg-white text-night' : 'text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <a
          href="https://wa.me/2347067797360"
          className="hidden rounded-full bg-aurora px-5 py-2.5 text-sm font-bold text-night shadow-glow transition hover:-translate-y-0.5 hover:bg-white md:inline-flex"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>

        <button
          className="grid size-11 place-items-center rounded-full border border-white/10 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950/90 p-3 shadow-soft backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => goTo(item.href)}
                className={`block w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold ${
                  active === item.href ? 'bg-white text-night' : 'text-slate-200 hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
