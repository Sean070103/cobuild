'use client';

import type { CSSProperties } from 'react';

type ContactSendCatProps = {
  phase: 'sending' | 'sent' | null;
};

const PARTICLE_STOPS = [6, 18, 32, 48, 62, 74, 86, 94] as const;

/** High-impact “message in flight” UX: runway, particles, aurora, success burst. */
export function ContactSendCat({ phase }: ContactSendCatProps) {
  if (!phase) return null;

  const isSending = phase === 'sending';

  return (
    <div
      role="status"
      aria-live="polite"
      className={`contact-send-shell relative overflow-hidden rounded-2xl ${
        isSending ? 'contact-send-shell--sending' : 'contact-send-shell--sent'
      }`}
    >
      <div className="pointer-events-none absolute inset-0 z-0 contact-send-aurora" aria-hidden />
      <div
        className="pointer-events-none absolute inset-[1px] z-[1] rounded-[15px] bg-card/95 backdrop-blur-sm"
        aria-hidden
      />

      <div className="relative z-10 px-4 py-4 space-y-4">
        <div className="contact-send-stage relative h-36 overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          {/* Depth: grid + scanline */}
          <div className="contact-send-grid pointer-events-none absolute inset-0 opacity-[0.18]" aria-hidden />
          <div className="contact-send-scan pointer-events-none absolute inset-0" aria-hidden />

          {isSending && (
            <>
              <div className="contact-send-speed-lines pointer-events-none absolute inset-0" aria-hidden />
              <div className="pointer-events-none absolute inset-0" aria-hidden>
                {PARTICLE_STOPS.map((left, i) => (
                  <span
                    key={i}
                    className="contact-send-particle absolute bottom-[26%] h-1 w-1 rounded-[1px] bg-amber-300 shadow-[0_0_6px_#fcd34d]"
                    style={{
                      left: `${left}%`,
                      animationDelay: `${i * 0.12}s`,
                    }}
                  />
                ))}
              </div>
              <div className="pointer-events-none absolute left-[8%] top-[22%] text-[10px] tracking-[0.35em] text-cyan-300/70 contact-send-float-letter">
                @
              </div>
              <div className="pointer-events-none absolute right-[12%] top-[38%] h-3 w-4 border border-white/25 bg-white/10 contact-send-float-letter">
                <span className="absolute left-[3px] top-[4px] block h-px w-2 bg-white/40" />
              </div>
            </>
          )}

          {!isSending && (
            <div className="contact-send-success-burst pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden />
          )}

          {/* Runway */}
          <div className="absolute bottom-0 left-0 right-0 h-[42%] bg-gradient-to-t from-amber-500/10 via-transparent to-transparent" aria-hidden />
          <div className="absolute bottom-[22%] left-3 right-3 h-px bg-gradient-to-r from-transparent via-amber-400/45 to-transparent" aria-hidden />

          {isSending && (
            <div className="absolute bottom-[18%] left-4 right-4 h-1 rounded-full bg-white/5 overflow-hidden">
              <div className="contact-send-beam h-full w-1/3 rounded-full bg-gradient-to-r from-transparent via-amber-400/90 to-transparent" />
            </div>
          )}

          <div
            className="absolute left-3 right-3 top-[68%] border-t border-dashed border-amber-200/25"
            aria-hidden
          />

          <div
            className={`absolute bottom-2 z-20 flex flex-col items-center ${
              isSending
                ? 'contact-cat-dash contact-send-cat-wrap'
                : 'left-1/2 -translate-x-1/2 contact-send-cat-wrap contact-cat-pop'
            }`}
            aria-hidden
          >
            <div className={isSending ? 'contact-send-cat-glow contact-cat-bob' : 'contact-send-cat-glow-sent'}>
              <div style={{ imageRendering: 'pixelated' } satisfies CSSProperties}>
                {isSending ? <PixelCatRunning /> : <PixelCatMail />}
              </div>
            </div>
          </div>

          {!isSending && (
            <div className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-emerald-400/50 bg-emerald-500/15 contact-send-check">
              <svg width="14" height="14" viewBox="0 0 24 24" className="text-emerald-300" aria-hidden>
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12l4 4 8-8"
                />
              </svg>
            </div>
          )}
        </div>

        {isSending ? (
          <div className="space-y-2 text-center">
            <p className="text-sm font-semibold tracking-wide text-foreground contact-send-title-glow">
              Transmitting your message
              <span className="contact-send-ellipsis" aria-hidden>
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </span>
            </p>
            <div className="mx-auto flex max-w-xs justify-center gap-1.5" aria-hidden>
              <span className="h-1.5 flex-1 max-w-[3.5rem] rounded-full bg-amber-400/80 contact-send-step-pill" />
              <span className="h-1.5 flex-1 max-w-[3.5rem] rounded-full bg-amber-400/50 contact-send-step-pill" />
              <span className="h-1.5 flex-1 max-w-[3.5rem] rounded-full bg-amber-400/30 contact-send-step-pill" />
            </div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              SMTP lane · TLS · inbox handoff
            </p>
          </div>
        ) : (
          <div className="space-y-2 text-center">
            <p className="text-sm font-bold text-emerald-400/95 contact-send-success-title">
              Delivered — email confirmed
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Your note is in our inbox and a confirmation email is heading to you. We&apos;ll respond when we can.
            </p>
            <div className="flex flex-wrap justify-center gap-2 pt-1">
              <span className="rounded-full border border-emerald-500/35 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-200/90">
                Inbox ✓
              </span>
              <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-medium text-cyan-200/90">
                Auto-reply ✓
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Confetti — only success; hidden via reduced-motion in CSS */}
      {!isSending && (
        <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-2xl" aria-hidden>
          {[
            ['15%', '20%', '-8deg', '0s', '#34d399'],
            ['78%', '15%', '12deg', '0.05s', '#fbbf24'],
            ['42%', '8%', '-20deg', '0.1s', '#a78bfa'],
            ['88%', '35%', '6deg', '0.02s', '#22d3ee'],
            ['8%', '25%', '15deg', '0.08s', '#f472b6'],
            ['65%', '12%', '-10deg', '0.12s', '#fcd34d'],
          ].map(([left, top, rotate, delay, color], i) => (
            <span
              key={i}
              className="contact-send-confetti absolute block h-2 w-1.5 opacity-0"
              style={{
                left: left as string,
                top: top as string,
                transform: `rotate(${rotate})`,
                background: color as string,
                animationDelay: delay as string,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function PixelCatRunning() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 16 16"
      className="overflow-visible drop-shadow-[0_4px_14px_rgba(251,191,36,0.55)]"
    >
      <title>Running cat</title>
      <g className="contact-cat-legs-a">
        <rect x="5" y="12" width="2" height="3" fill="#fbbf24" />
        <rect x="9" y="12" width="2" height="3" fill="#fbbf24" />
      </g>
      <g className="contact-cat-legs-b">
        <rect x="5" y="13" width="2" height="2" fill="#f59e0b" />
        <rect x="9" y="13" width="2" height="2" fill="#f59e0b" />
      </g>
      <rect x="6" y="8" width="4" height="5" fill="#fdba74" />
      <rect x="5" y="9" width="6" height="4" fill="#fb923c" />
      <rect x="5" y="4" width="6" height="5" fill="#fb923c" />
      <rect x="6" y="5" width="4" height="3" fill="#fed7aa" />
      <rect x="4" y="3" width="2" height="2" fill="#fb923c" />
      <rect x="10" y="3" width="2" height="2" fill="#fb923c" />
      <rect x="12" y="7" width="3" height="2" fill="#fb923c" />
      <rect x="5" y="6" width="1" height="1" fill="#1f2937" />
      <rect x="10" y="6" width="1" height="1" fill="#1f2937" />
    </svg>
  );
}

function PixelCatMail() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 16 16"
      className="overflow-visible drop-shadow-[0_4px_14px_rgba(52,211,153,0.45)]"
    >
      <title>Cat with mail</title>
      <rect x="6" y="6" width="7" height="5" fill="#e5e7eb" />
      <path d="M6 6 L9.5 9 L13 6" fill="none" stroke="#9ca3af" strokeWidth="1" />
      <rect x="5" y="10" width="9" height="2" fill="#d1d5db" />
      <rect x="6" y="8" width="4" height="4" fill="#fdba74" />
      <rect x="5" y="9" width="6" height="3" fill="#fb923c" />
      <rect x="5" y="4" width="6" height="5" fill="#fb923c" />
      <rect x="6" y="5" width="4" height="3" fill="#fed7aa" />
      <rect x="4" y="3" width="2" height="2" fill="#fb923c" />
      <rect x="10" y="3" width="2" height="2" fill="#fb923c" />
      <rect x="5" y="6" width="1" height="1" fill="#1f2937" />
      <rect x="9" y="6" width="1" height="1" fill="#1f2937" />
    </svg>
  );
}
