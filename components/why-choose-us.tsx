import { CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    'Expert team with diverse skill sets and years of experience',
    'Transparent communication and regular project updates',
    'Flexible engagement models to fit your budget and timeline',
    'Quality-first approach with rigorous testing and standards',
    'On-time delivery with zero compromise on excellence',
    'Post-launch support and maintenance services available'
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse transform -translate-x-1/2" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
            Why Choose CoBuild?
          </h2>
          <p className="text-gray-400 text-lg">
            We deliver more than code—we deliver results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="group flex gap-4 items-start p-4 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all duration-300">
              <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
              <p className="text-base text-gray-300 group-hover:text-white leading-relaxed transition-colors duration-300">
                {benefit}
              </p>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="relative bg-gradient-to-r from-accent/20 to-violet-600/20 border border-accent/30 rounded-xl p-8 text-center space-y-4 backdrop-blur-xl overflow-hidden group hover:border-accent/60 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-[3px]"
          aria-label="Contact CoBuild"
        >
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-violet-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold text-white">Ready to Transform Your Vision?</h3>
            <p className="text-gray-400">
              Let&apos;s collaborate and create something exceptional together
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
