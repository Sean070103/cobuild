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
    <header className="fixed top-1 left-0 right-0 z-50 px-2 flex justify-center">
      <nav
        aria-label="Primary"
        className="group relative w-full md:w-auto md:inline-flex px-2.5 md:px-3 py-1 flex items-center justify-center border border-white/20 bg-black/35 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_12px_30px_rgba(0,0,0,0.45)] rounded-xl overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_38%),radial-gradient(circle_at_80%_30%,rgba(167,139,250,0.15),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.12),transparent_36%)] opacity-70" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

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

        <div className="md:hidden flex items-center justify-between w-full relative z-10">
          <a href="#hero" className="inline-flex items-center" aria-label="Skyrant home">
            <Image
              src="/main_logo.png"
              alt="Skyrant logo mark"
              width={64}
              height={64}
              priority
              className="h-9 w-9 object-contain"
            />
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white rounded-md border border-white/20 bg-black/35 p-1"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden max-w-4xl mx-auto mt-2 rounded-2xl border border-white/10 bg-black/85 backdrop-blur-xl shadow-[0_10px_28px_rgba(0,0,0,0.45)]"
        >
          <div className="px-4 sm:px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white transition-colors hover:text-white/85"
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
