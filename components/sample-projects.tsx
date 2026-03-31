'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

export default function SampleProjects() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  const slideLabels = ['Beany Website', 'Dashboard UI', 'Behance 1', 'Behance 2'];

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(mq.matches);
    update();

    if (mq.addEventListener) {
      mq.addEventListener('change', update);
      return () => mq.removeEventListener('change', update);
    }
    mq.addListener(update);
    return () => mq.removeListener(update);
  }, []);

  useEffect(() => {
    if (!api) return;
    if (reduceMotion) return;
    if (paused) return;

    const id = window.setInterval(() => {
      api.scrollNext();
    }, 6500);

    return () => window.clearInterval(id);
  }, [api, paused, reduceMotion]);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    setSlideCount(api.scrollSnapList().length);
    onSelect();
    api.on('select', onSelect);
    api.on('reInit', onSelect);

    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api]);

  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 lg:px-10 bg-background overflow-hidden scroll-mt-24"
    >
      <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(167, 139, 250, 0.25) 1px, transparent 1px), linear-gradient(0deg, rgba(167, 139, 250, 0.25) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-8">
          <Carousel
            opts={{ loop: true }}
            className="w-full"
            setApi={setApi}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
          >
            <CarouselContent>
              <CarouselItem>
                <a
                  href="https://www.beanyavenue.space/"
                  target="_blank"
                  rel="noreferrer"
                  className="group block relative rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
                  aria-label="Visit Beany Avenue sample project"
                >
                  <div className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-[620px]">
                    <Image
                      src="/projects/project1.png"
                      alt="Beany Avenue sample project"
                      fill
                      sizes="(max-width: 1024px) 96vw, 60vw"
                      quality={100}
                      className="object-cover scale-[0.92] group-hover:scale-[0.97] transition-transform duration-500"
                      priority
                    />
                  </div>
                </a>
              </CarouselItem>

              <CarouselItem>
                <div className="group block relative rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
                  <div className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-[620px]">
                    <Image
                      src="/projects/project2.png"
                      alt="Sample project 2"
                      fill
                      sizes="(max-width: 1024px) 96vw, 60vw"
                      quality={100}
                      className="object-cover scale-[0.92] group-hover:scale-[0.97] transition-transform duration-500"
                      priority={false}
                    />
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="group rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
                  <div className="relative h-[520px] sm:h-[640px] lg:h-[760px]">
                    <iframe
                      src="https://www.behance.net/embed/project/233957459?ilo0=1"
                      title="Behance embedded project"
                      className="absolute inset-0 w-full h-full scale-[0.86] origin-top transition-transform duration-500 group-hover:scale-[0.92]"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allow="clipboard-write"
                      frameBorder={0}
                    />
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="group rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
                  <div className="relative h-[520px] sm:h-[640px] lg:h-[760px]">
                    <iframe
                      src="https://www.behance.net/embed/project/233725683?ilo0=1"
                      title="Behance embedded project 2"
                      className="absolute inset-0 w-full h-full scale-[0.86] origin-top transition-transform duration-500 group-hover:scale-[0.92]"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allow="clipboard-write"
                      frameBorder={0}
                    />
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="top-1/2 -left-4 -translate-y-1/2 h-11 w-11 rounded-full border border-white/15 bg-black/55 text-white shadow-[0_0_24px_rgba(251,191,36,0.18)] backdrop-blur-sm hover:border-amber-400/40 hover:bg-black/70 hover:shadow-[0_0_36px_rgba(251,191,36,0.42)]" />
            <CarouselNext className="top-1/2 -right-4 -translate-y-1/2 h-11 w-11 rounded-full border border-white/15 bg-black/55 text-white shadow-[0_0_28px_rgba(251,191,36,0.28)] backdrop-blur-sm hover:border-amber-400/45 hover:bg-black/70 hover:shadow-[0_0_42px_rgba(251,191,36,0.5)]" />
          </Carousel>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {Array.from({ length: slideCount }).map((_, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => api?.scrollTo(index)}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs transition-colors ${
                    isActive
                      ? 'border-white/50 bg-white/10 text-white'
                      : 'border-white/15 bg-black/20 text-gray-400 hover:text-white hover:border-white/30'
                  }`}
                  aria-label={`Go to ${slideLabels[index] ?? `slide ${index + 1}`}`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isActive ? 'bg-white' : 'bg-gray-500'
                    }`}
                  />
                  <span>{slideLabels[index] ?? `Slide ${index + 1}`}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

