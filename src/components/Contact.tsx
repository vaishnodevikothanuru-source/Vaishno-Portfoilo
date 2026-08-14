import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { profileData } from '@/data/portfolio';
import { useInView } from '@/hooks/useInView';
import { supabase } from '@/lib/supabase';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      });

      if (error) throw error;

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or email me directly.');
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: profileData.email, href: `mailto:${profileData.email}` },
    { icon: MapPin, label: 'Location', value: profileData.location },
  ];

  const socials = [
    { icon: Github, label: 'GitHub', url: profileData.github },
    { icon: Linkedin, label: 'LinkedIn', url: profileData.linkedin },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-ink-100/50 dark:bg-ink-900/30">
      <div className="section-container">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-mono text-sm text-accent-500 mb-2 tracking-widest">06 / CONTACT</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-cyan-400 rounded-full mx-auto" />
          <p className="max-w-2xl mx-auto mt-6 text-ink-500 dark:text-ink-400 text-base md:text-lg">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: Contact info */}
          <div className={`lg:col-span-2 space-y-6 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="font-display font-bold text-xl mb-6">Let's connect!</h3>
              <p className="text-ink-500 dark:text-ink-400 text-sm leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the channels below.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-center gap-4 group">
                      <div className="w-11 h-11 rounded-xl bg-accent-50 dark:bg-accent-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 text-accent-500" />
                      </div>
                      <div>
                        <p className="text-xs text-ink-400 mb-0.5">{info.label}</p>
                        <p className="text-sm font-medium text-ink-700 dark:text-ink-300">{info.value}</p>
                      </div>
                    </div>
                  );
                  return info.href ? (
                    <a key={info.label} href={info.href} className="block hover:opacity-80 transition-opacity">
                      {content}
                    </a>
                  ) : (
                    <div key={info.label}>{content}</div>
                  );
                })}
              </div>

              {/* Social links */}
              <div className="mt-8 pt-6 border-t border-ink-200/60 dark:border-ink-800/60">
                <p className="text-xs text-ink-400 mb-3">Follow me on</p>
                <div className="flex items-center gap-3">
                  {socials.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-11 h-11 rounded-xl glass-card flex items-center justify-center hover:scale-110 hover:border-accent-500 transition-all duration-300 group"
                      >
                        <Icon className="w-5 h-5 text-ink-600 dark:text-ink-400 group-hover:text-accent-500 transition-colors" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink-600 dark:text-ink-400 mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className="input-field"
                    disabled={status === 'submitting'}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink-600 dark:text-ink-400 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    className="input-field"
                    disabled={status === 'submitting'}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink-600 dark:text-ink-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Hi Vaishno! I'd like to talk about..."
                  className="input-field resize-none"
                  disabled={status === 'submitting'}
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 animate-fade-in">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span className="text-sm font-medium">{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
