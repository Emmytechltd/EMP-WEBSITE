import { GraduationCap } from 'lucide-react';
import { navItems, socialLinks } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink px-4 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-white text-night">
              <GraduationCap className="size-5" />
            </span>
            <span className="font-display text-xl font-black text-white">EMP 2015 Set</span>
          </div>
          <p className="mt-5 max-w-md leading-7 text-slate-300">
            Umunze Branch, Educational Management and Policy Department, Nnamdi Azikiwe University, Awka.
          </p>
          <p className="mt-5 text-sm text-slate-500">Designed By Emmytech for our alumni community.</p>
        </div>

        <div>
          <h3 className="font-black text-white">Navigate</h3>
          <div className="mt-4 grid gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-semibold text-slate-400 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-black text-white">Social</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {socialLinks.slice(0, 3).map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-slate-300 transition hover:bg-white hover:text-night">
                {social.label}
              </a>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-500">&copy; 2026 EMP 2015 Set Alumni Association. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
