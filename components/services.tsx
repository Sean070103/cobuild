'use client';

import { Card } from '@/components/ui/card';
import { ArrowRight, Code, Server, Layout, FileText, Palette, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Layout,
      title: 'Frontend Development',
      description: 'Beautiful, responsive interfaces using React, Next.js, and modern CSS frameworks.'
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Robust server-side solutions with Node.js, Python, and database optimization.'
    },
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'End-to-end application development combining frontend expertise with backend power.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Stunning designs that balance aesthetics with user experience and accessibility.'
    },
    {
      icon: FileText,
      title: 'Thesis & Documentation',
      description: 'Professional thesis writing, technical documentation, and content creation services.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed, scalability, and efficiency improvements for existing applications.'
    }
  ];

  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Our Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to your unique needs and goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;

            return (
              <div
                key={idx}
                className="group"
              >
                <Card className="relative p-8 h-full border border-white/10 bg-black/35 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-white/30 hover:bg-black/45 hover:-translate-y-1">
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
                  </div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-lg border border-white/20 bg-black/50 p-3 mb-4 group-hover:border-white/40 group-hover:bg-black/60 transition-all duration-300">
                      <Icon className="w-full h-full text-gray-100" />
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {service.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 text-sm text-white/85 border-b border-white/20 group-hover:border-white/50 transition-colors">
                      <span className="font-medium">Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
