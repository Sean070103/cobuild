'use client';

import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <nav aria-label="Primary" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-white text-lg hover:scale-110 transition-transform">
            CB
          </div>
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
            CoBuild
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Team', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-gray-300 hover:text-accent transition-colors duration-300 text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </div>
        
        <div className="hidden md:block">
          <Button
            asChild
            className="bg-gradient-to-r from-accent to-violet-600 hover:shadow-lg hover:shadow-accent/50 text-white border-0 transition-all duration-300"
          >
            <a href="#contact">Get Started</a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur-xl">
          <div className="px-4 sm:px-6 py-4 space-y-4">
            {['Services', 'Team', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-300 hover:text-accent transition-colors"
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
