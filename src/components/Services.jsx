import { services } from '../data/siteData';
import GlassCard from './GlassCard';
import SectionHeader from './SectionHeader';

export default function Services() {
  return (
    <section id="services" className="section-shell bg-ink">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Alumni Services"
          title="The useful parts of the community, redesigned"
          description="A practical set of touchpoints for connection, visibility, shared memories, events, and professional opportunity."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <GlassCard key={service.title} className="p-7" delay={index * 0.04}>
                <div className="flex items-start justify-between gap-6">
                  <div className="grid size-12 place-items-center rounded-2xl bg-white text-night">
                    <Icon className="size-6" />
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-slate-400">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-7 text-2xl font-black text-white">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{service.text}</p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
