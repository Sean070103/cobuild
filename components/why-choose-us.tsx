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
            Why Choose Skyrant?
          </h2>
          <p className="text-gray-400 text-lg">
            We deliver more than code—we deliver results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="group flex gap-4 items-start p-4 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all duration-300">
              <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
              <p className="text-base text-gray-300 group-hover:text-white leading-relaxed transition-colors duration-300">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
