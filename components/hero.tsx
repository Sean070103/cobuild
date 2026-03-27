'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[82vh] pt-28 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden"
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
            COBUILD
          </p>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl w-full mx-auto text-center">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14 shadow-[0_24px_80px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.03)]">
          {/* CB Effects */}
          <div className="relative mb-8 flex justify-center">
            <div className="cb-orbit cb-orbit-outer" />
            <div className="cb-orbit cb-orbit-inner" />
            <div className="cb-core">
              <span className="cb-text">CB</span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3 py-1.5">
            <Sparkles className="w-3.5 h-3.5 text-white/70" />
            <p className="text-gray-300 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em]">
              CoBuild Creative Studio
            </p>
          </div>

          <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] text-balance">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
              CoBuild
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Modern full-stack execution with design-first thinking.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-200 border-0 shadow-lg shadow-white/20"
            >
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10"
            >
              <a href="#contact">Contact CoBuild</a>
            </Button>
          </div>

          <div className="mt-8 h-px w-full max-w-3xl mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="rounded-xl border border-white/10 bg-black/25 px-4 py-3">
              <p className="text-white font-semibold text-lg">6</p>
              <p className="text-gray-400 text-xs uppercase tracking-wider">Projects Delivered</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/25 px-4 py-3">
              <p className="text-white font-semibold text-lg">6</p>
              <p className="text-gray-400 text-xs uppercase tracking-wider">Clients Satisfied</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/25 px-4 py-3">
              <p className="text-white font-semibold text-lg">24h</p>
              <p className="text-gray-400 text-xs uppercase tracking-wider">Typical Response</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cb-core {
          position: relative;
          width: 110px;
          height: 110px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.95), rgba(107, 114, 128, 0.92));
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.18),
            0 0 35px rgba(255, 255, 255, 0.25),
            inset 0 -10px 28px rgba(0, 0, 0, 0.35);
          animation: cbPulse 3.2s ease-in-out infinite;
          z-index: 3;
        }

        .cb-text {
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: black;
          text-shadow: 0 6px 24px rgba(0, 0, 0, 0.45);
        }

        .cb-orbit {
          position: absolute;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .cb-orbit-outer {
          width: 176px;
          height: 176px;
          animation: rotateSlow 12s linear infinite;
        }

        .cb-orbit-inner {
          width: 142px;
          height: 142px;
          border-color: rgba(209, 213, 219, 0.4);
          animation: rotateReverse 9s linear infinite;
        }

        @keyframes cbPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.045);
          }
        }

        @keyframes rotateSlow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes rotateReverse {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }
      `}</style>
    </section>
  );
}

