'use client';

import { Card } from '@/components/ui/card';
import { Code, Server, Layout, FileText, Palette, Zap } from 'lucide-react';
import { useState } from 'react';

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const services = [
    {
      icon: Layout,
      title: 'Frontend Development',
      description: 'Beautiful, responsive interfaces using React, Next.js, and modern CSS frameworks.',
      gradient: 'from-violet-600 to-purple-600'
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Robust server-side solutions with Node.js, Python, and database optimization.',
      gradient: 'from-cyan-600 to-blue-600'
    },
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'End-to-end application development combining frontend expertise with backend power.',
      gradient: 'from-pink-600 to-rose-600'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Stunning designs that balance aesthetics with user experience and accessibility.',
      gradient: 'from-amber-600 to-orange-600'
    },
    {
      icon: FileText,
      title: 'Thesis & Documentation',
      description: 'Professional thesis writing, technical documentation, and content creation services.',
      gradient: 'from-emerald-600 to-green-600'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed, scalability, and efficiency improvements for existing applications.',
      gradient: 'from-indigo-600 to-purple-600'
    }
  ];

  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden scroll-mt-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
            Our Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to your unique needs and goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isHovered = hoveredIdx === idx;
            
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group cursor-pointer perspective"
                style={{
                  perspective: '1000px',
                  transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.3s ease-out',
                }}
              >
                <Card className={`relative p-8 h-full border-0 bg-gradient-to-br ${service.gradient} bg-opacity-5 backdrop-blur-xl overflow-hidden transition-all duration-300`}>
                  {/* Glassmorphism border effect */}
                  <div className="absolute inset-0 border border-white/10 rounded-lg pointer-events-none" />
                  
                  {/* Animated gradient overlay on hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg`} 
                    style={{
                      background: `linear-gradient(135deg, rgba(167, 139, 250, 0.1), rgba(6, 182, 212, 0.1))`,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.gradient} p-3 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {service.description}
                    </p>

                    <div className={`mt-4 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 ${isHovered ? 'translate-x-0' : '-translate-x-2'}`}>
                      <span className="text-sm font-medium">Learn more</span>
                      <Code className="w-4 h-4" />
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
