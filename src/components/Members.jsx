import { Linkedin, MapPin, MessageCircle, UserRound } from 'lucide-react';
import { members, testimonials } from '../data/siteData';
import GlassCard from './GlassCard';
import SectionHeader from './SectionHeader';

export default function Members() {
  return (
    <section id="members" className="section-shell bg-ink">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Members & Testimonials"
          title="The people behind the EMP 2015 network"
          description="A polished member directory and testimonial area preserving the current names, roles, locations, and reflections."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member, index) => (
            <GlassCard key={`${member.name}-${index}`} className="p-5" delay={index * 0.03}>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/20 to-white/5 p-5">
                <div className="absolute -right-6 -top-6 size-24 rounded-full bg-aurora/20 blur-2xl" />
                <div className="relative grid size-16 place-items-center rounded-2xl bg-white text-night">
                  <UserRound className="size-8" />
                </div>
              </div>
              <h3 className="mt-5 text-xl font-black text-white">{member.name}</h3>
              <p className="mt-1 text-sm font-bold text-aurora">{member.position}</p>
              <p className="mt-3 text-sm text-slate-300">{member.role}</p>
              {member.specialty ? <p className="mt-1 text-xs text-slate-400">Specialization: {member.specialty}</p> : null}
              <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-400">
                <MapPin className="size-4" /> {member.location}
              </p>
              <div className="mt-5 flex gap-2">
                <a href="#" className="icon-link" aria-label={`${member.name} LinkedIn`}>
                  <Linkedin className="size-4" />
                </a>
                <a href={`https://wa.me/${member.phone.replace(/\D/g, '')}`} className="icon-link" target="_blank" rel="noreferrer" aria-label={`${member.name} WhatsApp`}>
                  <MessageCircle className="size-4" />
                </a>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 text-center text-slate-300">
          We have 150+ members in our alumni association. This page showcases some outstanding members. Get in touch
          to be featured or update your information.
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <GlassCard key={testimonial.name} className="p-7" delay={index * 0.05}>
              <p className="text-lg leading-8 text-slate-200">"{testimonial.quote}"</p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="font-black text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-400">{testimonial.role}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
