'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[82vh] pt-20 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(255, 255, 255, 0.12) 1px, transparent 1px), linear-gradient(0deg, rgba(255, 255, 255, 0.12) 1px, transparent 1px)',
              backgroundSize: '56px 56px',
            }}
          />
        </div>
        <div className="absolute top-0 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute inset-x-0 bottom-10 text-center select-none">
          <p className="text-white/[0.03] text-6xl sm:text-7xl lg:text-8xl font-black tracking-[0.18em]">
            SKYRANT
          </p>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto text-center -translate-y-8 sm:-translate-y-10">
        {/* Company Logo */}
        <div className="relative flex justify-center">
          <div className="pointer-events-none absolute -inset-x-10 -inset-y-12 hero-logo-halo" aria-hidden />
          <Image
            src="/logo_final.png"
            alt="Skyrant Tech logo final"
            width={1400}
            height={620}
            priority
            className="hero-logo h-auto w-[min(96vw,1080px)] translate-x-[3%] sm:translate-x-[3.5%] lg:translate-x-[4%]"
          />
        </div>
      </div>

    </section>
  );
}

