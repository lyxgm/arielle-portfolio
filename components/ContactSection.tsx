'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent'>(
    'idle'
  );
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data?.error || 'Unable to send message.');
      }

      setStatus('sent');
      setForm({ name: '', email: '', company: '', service: '', message: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
      setStatus('idle');
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* SIDE-BY-SIDE CONTACT LAYOUT */}
        <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-8 items-stretch">

          {/* LEFT — INTRO */}
          <div className="glass p-8 sm:p-10 rounded-3xl border-primary/10 relative overflow-hidden">

            {/* Decorative glow */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">

              {/* Get In Touch */}
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5 block">
                Get In Touch
              </span>

              {/* Heading */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.04em] leading-none">
                Let's Build Something{' '}
                <span className="font-serif italic bg-gradient-to-r from-purple-500 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent">
                  Great
                </span>
              </h2>

              {/* Description */}
              <p className="mt-5 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md">
                Ready to reclaim your time? Whether you need administrative
                support or a new website, I'm here to help you find a better
                way.
              </p>

              {/* Bottom Info */}
              <div className="mt-10 pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  Have a project in mind?
                </p>

                <p className="mt-1 font-bold">
                  Let's talk about it.
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="glass p-8 sm:p-10 rounded-3xl border-primary/10 relative overflow-hidden">

            {/* Decorative glow */}
            <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            {status === 'sent' ? (

              /* SUCCESS STATE */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 h-full min-h-[500px] flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2
                    size={40}
                    className="text-green-600 dark:text-green-400"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-2">
                  Message Sent!
                </h3>

                <p className="text-muted-foreground max-w-sm">
                  Thank you for reaching out. I'll get back to you within
                  24 hours.
                </p>

                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-primary font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>

            ) : (

              /* FORM */
              <form
                onSubmit={handleSubmit}
                className="relative z-10 space-y-5"
              >

                {/* NAME + EMAIL */}
                <div className="grid sm:grid-cols-2 gap-5">

                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">
                      Your Name
                    </label>

                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          name: e.target.value,
                        })
                      }
                      className="w-full px-5 py-4 rounded-2xl border border-border bg-background/50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">
                      Email Address
                    </label>

                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          email: e.target.value,
                        })
                      }
                      className="w-full px-5 py-4 rounded-2xl border border-border bg-background/50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="jane@company.com"
                    />
                  </div>

                </div>

                {/* COMPANY + SERVICE */}
                <div className="grid sm:grid-cols-2 gap-5">

                  {/* Company */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">
                      Company
                    </label>

                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          company: e.target.value,
                        })
                      }
                      className="w-full px-5 py-4 rounded-2xl border border-border bg-background/50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="Acme Inc."
                    />
                  </div>

                  {/* Service */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">
                      Service Needed
                    </label>

                    <select
                      value={form.service}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          service: e.target.value,
                        })
                      }
                      className="w-full px-5 py-4 rounded-2xl border border-border bg-background/50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none"
                    >
                      <option value="">
                        Select a service
                      </option>

                      <option value="va">
                        Virtual Assistance
                      </option>

                      <option value="admin">
                        Administrative Support
                      </option>

                      <option value="web">
                        Web Design
                      </option>

                      <option value="other">
                        Other
                      </option>
                    </select>
                  </div>

                </div>

                {/* MESSAGE */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">
                    Your Message
                  </label>

                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        message: e.target.value,
                      })
                    }
                    className="w-full px-5 py-4 rounded-2xl border border-border bg-background/50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                    placeholder="How can I help you today?"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <motion.button
                  type="submit"
                  disabled={status === 'submitting'}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-primary text-primary-foreground font-black rounded-2xl shadow-xl shadow-primary/20 hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <ArrowRight size={18} />
                    </>
                  )}
                </motion.button>

              </form>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}