import { Github, Linkedin } from 'lucide-react';

const XIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.207-6.807-5.974 6.807H2.882l7.732-8.835L1.227 2.25h6.802l4.721 6.237 5.461-6.237zM17.002 18.335h1.833L6.822 4.156H4.881z" />
  </svg>
);

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
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CB</span>
              </div>
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">CoBuild</span>
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
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-accent hover:scale-110 transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent hover:scale-110 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent hover:scale-110 transition-all duration-300">
                <XIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2026 CoBuild. All rights reserved.</p>
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
