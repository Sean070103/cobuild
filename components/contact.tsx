'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  const [submitState, setSubmitState] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Placeholder UX since the project doesn't currently have a backend handler wired up.
    setSubmitState('sending');
    setFormData({ name: '', email: '', project: '', message: '' });
    setSubmitState('sent');

    // Return to idle so the user can submit again.
    window.setTimeout(() => setSubmitState('idle'), 5000);
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

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-muted-foreground">hello@cobuild.dev</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MessageSquare className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Chat</h3>
                <p className="text-muted-foreground">Available on Discord & Slack</p>
              </div>
            </div>
            
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Response time: Usually within 24 hours
              </p>
              <p className="text-sm text-muted-foreground">
                We&apos;re based globally with team members across multiple time zones
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border border-border">
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

            <p aria-live="polite" className="text-sm text-muted-foreground">
              {submitState === 'sending' && 'Sending...'}
              {submitState === 'sent' && "Thank you! We'll be in touch soon."}
            </p>

            <Button
              type="submit"
              disabled={submitState === 'sending'}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              {submitState === 'sending' ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
