'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(mq.matches);
    update();

    // Safari compatibility: matchMedia listeners differ.
    if (mq.addEventListener) {
      mq.addEventListener('change', update);
      return () => mq.removeEventListener('change', update);
    }
    mq.addListener(update);
    return () => mq.removeListener(update);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      containerRef.current.style.setProperty('--mouse-x', `${x * 100}%`);
      containerRef.current.style.setProperty('--mouse-y', `${y * 100}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [reduceMotion]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(167, 139, 250, 0.15) 0%, transparent 50%), linear-gradient(135deg, rgba(15, 10, 26, 1) 0%, rgba(26, 15, 46, 1) 100%)',
      } as React.CSSProperties}
    >
      {/* Decorative layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(167, 139, 250, 0.12) 1px, transparent 1px), linear-gradient(0deg, rgba(167, 139, 250, 0.12) 1px, transparent 1px)',
              backgroundSize: '56px 56px',
              animation: reduceMotion ? 'none' : 'slide 20s linear infinite',
            }}
          />
        </div>

        <div className="absolute -top-24 left-1/2 w-[36rem] h-[36rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute top-40 right-0 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: picture */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 overflow-hidden">
              <div className="absolute inset-0 opacity-70 pointer-events-none">
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent/20 blur-2xl" />
                <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-violet-600/10 blur-3xl" />
              </div>

              <div className="relative z-10">
                <div className="rounded-3xl border border-white/10 bg-background/40 overflow-hidden">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src="/seanie-removebg.png"
                      alt="Sean, Tech Lead"
                      fill
                      priority
                      sizes="(max-width: 1024px) 40vw, 26vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-accent text-sm font-semibold uppercase tracking-wider">Tech Lead</p>
                  <p className="text-white font-bold text-2xl mt-1">Sean</p>
                  <p className="text-gray-400 text-sm mt-1">Full Stack Architecture</p>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-background/40 p-3 text-center">
                    <p className="text-xl font-bold text-white">50+</p>
                    <p className="text-[11px] text-gray-400 mt-1">Projects</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-background/40 p-3 text-center">
                    <p className="text-xl font-bold text-white">30+</p>
                    <p className="text-[11px] text-gray-400 mt-1">Team</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-background/40 p-3 text-center">
                    <p className="text-xl font-bold text-white">100%</p>
                    <p className="text-[11px] text-gray-400 mt-1">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: stats */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.02)] p-6 sm:p-8 overflow-hidden">
              <div className="absolute inset-0 opacity-70 pointer-events-none">
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent/20 blur-2xl" />
                <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-violet-600/10 blur-3xl" />
              </div>

              <div className="relative z-10 space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/50 bg-accent/10 backdrop-blur-md">
                    <Zap className="w-4 h-4 text-accent" />
                    <p className="text-accent text-sm font-semibold uppercase tracking-wider">
                      Full-stack + Design + Documentation
                    </p>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-accent">
                    Ship a product that feels
                    <span className="block text-accent">effortless</span>
                  </h1>

                  <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                    CoBuild delivers responsive full-stack development, high-impact UI/UX, and thesis-ready documentation—so you can launch with confidence.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-accent to-violet-600 hover:from-accent/90 hover:to-violet-600/90 text-white border-0 shadow-lg shadow-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/70"
                    >
                      <a href="#contact">
                        Start Your Project
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </Button>

                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-accent/50 text-white hover:bg-accent/10 backdrop-blur-md transition-all duration-300"
                    >
                      <a href="#services">Explore Services</a>
                    </Button>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-background/40 p-5">
                    <p className="text-3xl font-bold text-white">50+</p>
                    <p className="text-sm text-gray-400 mt-1">Projects Completed</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-background/40 p-5">
                    <p className="text-3xl font-bold text-white">30+</p>
                    <p className="text-sm text-gray-400 mt-1">Team Members</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-background/40 p-5 sm:col-span-2">
                    <p className="text-3xl font-bold text-white">100%</p>
                    <p className="text-sm text-gray-400 mt-1">Client Satisfaction</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-accent/20 border border-accent/40">
                      <Sparkles className="w-4 h-4 text-accent" />
                    </span>
                    <p className="text-sm text-gray-300">
                      Prefer a quick start? Tell us your idea in the contact form—we reply within 24 hours.
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Button asChild variant="ghost" className="text-accent hover:bg-accent/10 hover:text-accent">
                      <a href="#contact">Contact CoBuild</a>
                    </Button>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ShieldCheck className="w-4 h-4 text-accent" />
                      <span>Quality-first delivery</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
      `}</style>
    </section>
  );
}
