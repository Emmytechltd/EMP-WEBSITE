import { CheckCircle2 } from 'lucide-react';
import { alumniObjectives, departmentTopics, IconAward, IconBook, values } from '../data/siteData';
import GlassCard from './GlassCard';
import SectionHeader from './SectionHeader';

export default function About() {
  return (
    <section id="about" className="section-shell bg-night">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="About Our Set"
          title="A distinguished cohort with a shared story"
          description="The EMP 2015 Set comprises exceptional students from the Educational Management and Policy Department of the Umunze Branch, Nnamdi Azikiwe University."
        />

        <div className="grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
          <GlassCard className="p-7 sm:p-9">
            <p className="text-lg leading-8 text-slate-300">
              Our journey began in 2011 when we were admitted as fresh students, embarking on a transformative
              academic experience that shaped our professional lives and created bonds built to last.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              From matriculation to graduation in 2015, we navigated rigorous coursework, collaborative projects,
              cultural activities, and unforgettable moments with peers and mentors. Today, alumni are spread across
              Nigeria and beyond in education administration, policy development, consultancy, entrepreneurship, and
              other fields.
            </p>
          </GlassCard>

          <GlassCard className="relative overflow-hidden p-7 sm:p-9">
            <div className="absolute right-0 top-0 size-40 rounded-full bg-aurora/10 blur-3xl" />
            <IconBook className="relative size-10 text-aurora" />
            <h3 className="relative mt-6 text-2xl font-black text-white">2011 - 2015 Academic Journey</h3>
            <p className="relative mt-4 leading-7 text-slate-300">
              Four years of lectures, research, presentations, friendship, growth, and a shared standard of
              excellence.
            </p>
          </GlassCard>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <GlassCard className="p-7">
            <IconAward className="size-8 text-gold" />
            <h3 className="mt-5 text-xl font-black text-white">Our Vision</h3>
            <p className="mt-3 leading-7 text-slate-300">
              To be a vibrant, progressive alumni community that celebrates academic excellence and makes meaningful
              contributions to education and policy development.
            </p>
          </GlassCard>
          <GlassCard className="p-7" delay={0.05}>
            <IconBook className="size-8 text-aurora" />
            <h3 className="mt-5 text-xl font-black text-white">Our Mission</h3>
            <p className="mt-3 leading-7 text-slate-300">
              To maintain strong alumni bonds, provide networking and professional growth, support education
              initiatives, and uphold integrity and excellence.
            </p>
          </GlassCard>
          <GlassCard className="p-7" delay={0.1}>
            <CheckCircle2 className="size-8 text-signal" />
            <h3 className="mt-5 text-xl font-black text-white">Our Objectives</h3>
            <ul className="mt-4 space-y-3">
              {alumniObjectives.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-aurora" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <GlassCard key={value.title} className="p-6" delay={index * 0.03}>
                <Icon className="size-7 text-aurora" />
                <h3 className="mt-5 text-xl font-black text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{value.text}</p>
              </GlassCard>
            );
          })}
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 sm:p-9">
          <SectionHeader
            align="left"
            eyebrow="Our Department"
            title="Educational Management and Policy"
            description="The department trains professionals in educational administration, management, and policy formulation."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {departmentTopics.map((topic) => (
              <div key={topic} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm font-semibold text-slate-200">
                {topic}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
