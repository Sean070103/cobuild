'use client';

import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-2 left-0 right-0 z-50 px-2 flex justify-center">
      <nav
        aria-label="Primary"
        className="w-full md:w-auto md:inline-flex px-3 md:px-5 py-1.5 flex items-center justify-center border border-white/20 bg-transparent backdrop-blur-md shadow-none rounded-none"
      >
        <div className="hidden md:flex items-center gap-7">
          {[
            { label: 'Services', color: 'text-cyan-300 hover:text-cyan-200' },
            { label: 'Team', color: 'text-violet-300 hover:text-violet-200' },
            { label: 'Contact', color: 'text-emerald-300 hover:text-emerald-200' },
          ].map((item) => (
            <a 
              key={item.label}
              href={`#${item.label.toLowerCase()}`} 
              className={`${item.color} transition-colors duration-300 text-xl font-semibold`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="md:hidden flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-md flex items-center justify-center font-bold text-white text-[9px]">
              CB
            </div>
            <span className="font-bold text-xs bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
              CoBuild
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white"
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
          className="md:hidden max-w-4xl mx-auto mt-2 rounded-none border border-white/10 bg-black/80 backdrop-blur-xl"
        >
          <div className="px-4 sm:px-6 py-4 space-y-3">
            {['Services', 'Team', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-300 hover:text-white transition-colors text-sm"
                onClick={() => setMobileOpen(false)}
              >
                {item}
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
