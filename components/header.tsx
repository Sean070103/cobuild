'use client';

import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-1 left-0 right-0 z-50 px-3 sm:px-4 flex flex-col items-center gap-2 md:flex-row md:justify-center md:gap-0">
      <nav
        aria-label="Primary"
        className="group relative w-full max-w-4xl md:max-w-none md:w-auto md:inline-flex px-2.5 md:px-3 py-1.5 md:py-1 flex items-center justify-center border border-border bg-background shadow-[0_12px_30px_rgba(0,0,0,0.35)] rounded-xl overflow-hidden shrink-0"
      >
        <div className="hidden md:flex items-center gap-3 relative z-10">
          <a href="#hero" className="inline-flex items-center" aria-label="Skyrant home">
            <Image
              src="/main_logo.png"
              alt="Skyrant logo mark"
              width={72}
              height={72}
              priority
              className="h-10 w-10 object-contain"
            />
          </a>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative px-2.5 py-0.5 text-base font-semibold tracking-wide text-white transition-all duration-300 hover:text-white/85"
            >
              <span className="absolute inset-x-2 -bottom-0.5 h-px scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
              {item.label}
            </a>
          ))}
        </div>

        <div className="md:hidden relative flex min-h-11 w-full items-center justify-center z-10">
          <a
            href="#hero"
            className="max-w-[calc(100%-3.5rem)] truncate text-center font-bold text-white tracking-wide"
            aria-label="Skyrant Tech home"
          >
            Skyrant Tech
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="absolute right-0 top-1/2 -translate-y-1/2 shrink-0 text-white rounded-lg border border-border bg-secondary p-2 min-h-11 min-w-11 inline-flex items-center justify-center touch-manipulation hover:bg-muted transition-colors"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — must stack under nav (header is flex-col on small screens) */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden w-full max-w-4xl rounded-2xl border border-border bg-background shadow-[0_10px_28px_rgba(0,0,0,0.45)] animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="px-4 py-4 space-y-2.5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block rounded-lg border border-border bg-secondary px-3 py-3 text-sm font-medium text-white transition-colors hover:text-white/85 hover:bg-muted active:bg-muted"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="w-full bg-gradient-to-r from-accent to-violet-600 text-white border-0">
              <a href="#contact" onClick={() => setMobileOpen(false)}>
                Get Started
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
