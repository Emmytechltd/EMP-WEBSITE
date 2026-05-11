import { useState } from 'react';
import { CheckCircle2, Mail, MessageCircle, Send } from 'lucide-react';
import { contactLinks, faqs, socialLinks } from '../data/siteData';
import GlassCard from './GlassCard';
import SectionHeader from './SectionHeader';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [notice, setNotice] = useState('');

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submitForm = (event) => {
    event.preventDefault();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setNotice('Please complete the required fields.');
      return;
    }
    if (!emailOk) {
      setNotice('Please enter a valid email address.');
      return;
    }
    setNotice('Thank you for your message. We will get back to you soon.');
    setForm(initialForm);
  };

  return (
    <section id="contact" className="section-shell bg-night">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Contact"
          title="Reach the EMP 2015 alumni team"
          description="Use the form, WhatsApp, or email to share photos, request updates, send opportunities, or connect with executive members."
        />

        <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
          <GlassCard className="p-7 sm:p-9">
            <h3 className="text-2xl font-black text-white">Executive Members</h3>
            <div className="mt-6 space-y-5">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a key={link.label} href={link.href} className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/10" target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white text-night">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-sm font-semibold leading-6 text-slate-200">{link.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="mt-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-aurora">Social Media</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-slate-300 transition hover:bg-white hover:text-night">
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-7 sm:p-9">
            <h3 className="text-2xl font-black text-white">Send us a message</h3>
            <form className="mt-6 grid gap-4" onSubmit={submitForm}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="form-field">
                  <span>Full Name *</span>
                  <input name="name" value={form.name} onChange={updateField} placeholder="Your full name" />
                </label>
                <label className="form-field">
                  <span>Email Address *</span>
                  <input name="email" type="email" value={form.email} onChange={updateField} placeholder="you@example.com" />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="form-field">
                  <span>Phone Number</span>
                  <input name="phone" value={form.phone} onChange={updateField} placeholder="+234 XXX XXX XXXX" />
                </label>
                <label className="form-field">
                  <span>Subject *</span>
                  <input name="subject" value={form.subject} onChange={updateField} placeholder="What is this about?" />
                </label>
              </div>
              <label className="form-field">
                <span>Message *</span>
                <textarea name="message" value={form.message} onChange={updateField} placeholder="Type your message here..." />
              </label>
              {notice ? (
                <p className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="size-4 text-aurora" /> {notice}
                </p>
              ) : null}
              <button type="submit" className="btn-primary justify-center">
                Send Message <Send className="size-4" />
              </button>
            </form>
          </GlassCard>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {faqs.map((faq, index) => (
            <GlassCard key={faq.q} className="p-6" delay={index * 0.04}>
              <h3 className="text-lg font-black text-white">{faq.q}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{faq.a}</p>
            </GlassCard>
          ))}
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {[
            ['Share Photos', 'Have photos from our EMP days? Send them to us and we will add them to the gallery.', Mail],
            ['Job Opportunities', 'Post opportunities for education professionals and the wider alumni network.', MessageCircle],
            ['Partnership', 'Interested in collaborating with the alumni association? Let us discuss possibilities.', CheckCircle2],
          ].map(([title, text, Icon], index) => (
            <GlassCard key={title} className="p-6" delay={index * 0.04}>
              <Icon className="size-7 text-aurora" />
              <h3 className="mt-5 text-xl font-black text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
