'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ContactSendCat } from '@/components/contact-send-cat';
import { cn } from '@/lib/utils';

export default function Contact() {
  const projectPresets = [
    'Full-Stack Web App',
    'Dashboard / Admin Panel',
    'UI/UX Design',
    'Landing Page',
    'API + Backend',
    'Thesis / Documentation',
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  const [submitState, setSubmitState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState('sending');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setSubmitState('error');
        setErrorMessage(
          typeof data.error === 'string' ? data.error : 'Something went wrong. Please try again.',
        );
        return;
      }

      setSubmitState('sent');
      setFormData({ name: '', email: '', project: '', message: '' });
      window.setTimeout(() => setSubmitState('idle'), 6000);
    } catch {
      setSubmitState('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">
            Let&apos;s discuss your project and how we can help
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-xl space-y-6 bg-card p-8 rounded-lg border border-border"
        >
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Your name"
                disabled={submitState === 'sending'}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="your@email.com"
                disabled={submitState === 'sending'}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Project Type</label>
              <div className="flex flex-wrap gap-2 mb-3">
                {projectPresets.map((preset) => {
                  const isActive = formData.project === preset;
                  return (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, project: preset }))}
                      disabled={submitState === 'sending'}
                      className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                        isActive
                          ? 'border-accent/60 bg-accent/20 text-accent'
                          : 'border-border bg-background text-muted-foreground hover:text-foreground hover:border-accent/40'
                      }`}
                    >
                      {preset}
                    </button>
                  );
                })}
              </div>
              <input
                type="text"
                name="project"
                autoComplete="off"
                value={formData.project}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="e.g., Full Stack Web App, Thesis Writing"
                disabled={submitState === 'sending'}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                autoComplete="off"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                placeholder="Tell us about your project..."
                disabled={submitState === 'sending'}
              />
            </div>

            <ContactSendCat
              phase={
                submitState === 'sending'
                  ? 'sending'
                  : submitState === 'sent'
                    ? 'sent'
                    : null
              }
            />

            {submitState === 'error' && (
              <p aria-live="assertive" className="text-sm text-destructive">
                {errorMessage}
              </p>
            )}

            <Button
              type="submit"
              disabled={submitState === 'sending'}
              className={cn(
                'relative w-full overflow-hidden border-0 bg-white font-semibold text-neutral-950 shadow-sm hover:bg-neutral-100 disabled:opacity-60',
                submitState === 'sending' && 'contact-send-submit-glow',
              )}
            >
              {submitState === 'sending' ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
      </div>
    </section>
  );
}
