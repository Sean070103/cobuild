import { Facebook, Linkedin } from 'lucide-react';
import Image from 'next/image';

const FACEBOOK_URL =
  'https://www.facebook.com/profile.php?id=61576399276889';
const LINKEDIN_URL =
  'https://www.linkedin.com/in/skyrant-tech-a77635400/?skipRedirect=true';

export default function Footer() {
  return (
    <footer className="relative bg-background border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 backdrop-blur-xl overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/main_logo.png"
                alt="Skyrant logo mark"
                width={64}
                height={64}
                className="h-10 w-10 object-contain"
              />
              <span className="font-bold text-white">Skyrant</span>
            </div>
            <p className="text-sm text-gray-400">
              Expert freelance team building digital solutions
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-accent transition-colors duration-300">Frontend Dev</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors duration-300">Backend Dev</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors duration-300">Full Stack</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors duration-300">UI/UX Design</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-accent transition-colors duration-300">About Us</a></li>
              <li><a href="#team" className="hover:text-accent transition-colors duration-300">Team</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Connect</h3>
            <div className="flex flex-wrap gap-3">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/45 text-gray-300 shadow-[0_0_22px_rgba(251,191,36,0.14)] transition-all duration-300 hover:scale-110 hover:border-amber-400/45 hover:text-amber-50 hover:shadow-[0_0_36px_rgba(251,191,36,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50"
                aria-label="Skyrant on Facebook"
              >
                <span
                  className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_40%,rgba(253,230,138,0.35),rgba(251,191,36,0.08),transparent_72%)] opacity-50 blur-md transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
                <Facebook className="relative z-10 h-5 w-5 drop-shadow-[0_0_12px_rgba(253,230,138,0.4)]" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/45 text-gray-300 shadow-[0_0_22px_rgba(251,191,36,0.14)] transition-all duration-300 hover:scale-110 hover:border-amber-400/45 hover:text-amber-50 hover:shadow-[0_0_36px_rgba(251,191,36,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50"
                aria-label="Skyrant on LinkedIn"
              >
                <span
                  className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_40%,rgba(253,230,138,0.35),rgba(251,191,36,0.08),transparent_72%)] opacity-50 blur-md transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
                <Linkedin className="relative z-10 h-5 w-5 drop-shadow-[0_0_12px_rgba(253,230,138,0.4)]" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2026 Skyrant. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-accent transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
