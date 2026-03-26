'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Team() {
  type TeamMember = {
    name: string;
    role: string;
    specialty: string;
    gradient: string;
    avatarSrc?: string;
  };

  const teamMembers: TeamMember[] = [
    {
      name: 'Grant',
      role: 'CEO',
      specialty: 'Leadership & Vision',
      gradient: 'from-violet-600 to-purple-600'
    },
    {
      name: 'Sean',
      role: 'Tech Lead',
      specialty: 'Full Stack Architecture',
      gradient: 'from-cyan-600 to-blue-600',
      avatarSrc: '/seanie-removebg.png'
    },
    {
      name: 'Michael Andrew B. Mendoza',
      role: 'Senior Developer',
      specialty: 'Backend & APIs',
      gradient: 'from-pink-600 to-rose-600'
    },
    {
      name: 'Kyle Tiongson',
      role: 'Designer',
      specialty: 'UI/UX & Design Systems',
      gradient: 'from-amber-600 to-orange-600'
    },
    {
      name: 'Frontend Engineer',
      role: 'Frontend Engineer',
      specialty: 'React & Performance',
      gradient: 'from-emerald-600 to-green-600'
    },
    {
      name: 'DevOps Engineer',
      role: 'DevOps Engineer',
      specialty: 'Cloud & Infrastructure',
      gradient: 'from-indigo-600 to-purple-600'
    }
  ];

  const featured = teamMembers.find((m) => m.avatarSrc) ?? teamMembers[0];
  const rest = teamMembers.filter((m) => m.name !== featured.name);

  const getInitials = (name: string) =>
    name
      .split(' ')
      .filter(Boolean)
      .map((n) => n[0])
      .join('');

  return (
    <section id="team" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(167, 139, 250, 0.28) 1px, transparent 1px), linear-gradient(0deg, rgba(167, 139, 250, 0.28) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
            Meet Our Team
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Split-profile energy. Real-world delivery.
          </p>
        </div>

        <div className="relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Text */}
            <div className="lg:col-span-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/50 bg-accent/10 backdrop-blur-md">
                  <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                    {featured.role}
                  </span>
                </div>

                <h3 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                  {featured.name}
                </h3>

                <p className="text-accent text-sm font-semibold uppercase tracking-wider">
                  {featured.specialty}
                </p>

                <p className="text-gray-300 leading-relaxed max-w-xl">
                  Clean architecture, fast iteration, and polish you can feel—built for teams that want results, not excuses.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-accent to-violet-600 hover:from-accent/90 hover:to-violet-600/90 text-white border-0 shadow-lg shadow-accent/50 transition-all duration-300"
                  >
                    <a href="#contact">Contact me</a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-accent/50 text-white hover:bg-accent/10 backdrop-blur-md transition-all duration-300"
                  >
                    <a href="#services">View projects</a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl border border-white/10 bg-black/30 overflow-hidden">
                <div
                  className="absolute inset-0 pointer-events-none opacity-60"
                  aria-hidden="true"
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        'linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.10) 1px, transparent 1px)',
                      backgroundSize: '54px 54px',
                    }}
                  />
                  <div className="absolute left-4 top-10 w-28 h-28 bg-white/5 border border-white/10" />
                  <div className="absolute right-10 top-24 w-10 h-10 bg-white/5 border border-white/10" />
                  <div className="absolute bottom-10 left-14 w-44 h-20 bg-white/5 border border-white/10" />
                </div>

                <div className="relative z-10 p-6 sm:p-10">
                  <div className="relative aspect-[16/10] w-full">
                    {featured.avatarSrc ? (
                      <Image
                        src={featured.avatarSrc}
                        alt={`${featured.name} photo`}
                        fill
                        sizes="(max-width: 1024px) 90vw, 42vw"
                        className="object-contain object-left-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.65)]"
                        priority
                      />
                    ) : (
                      <div
                        className={`h-full w-full bg-gradient-to-br ${featured.gradient} bg-opacity-20 flex items-center justify-center`}
                      >
                        <span className="font-bold text-white text-7xl">{getInitials(featured.name)}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other members */}
        {rest.length > 0 && (
          <div className="mt-12">
            <div className="text-center mb-8">
              <h4 className="text-lg font-semibold text-white">More talent</h4>
              <p className="text-sm text-gray-400 mt-1">
                Built by specialists across frontend, backend, design, and infrastructure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((member) => (
                <Card
                  key={member.name}
                  className="relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-6"
                >
                  <div className="absolute inset-0 opacity-70 pointer-events-none">
                    <div
                      className={`absolute -top-20 -right-16 w-64 h-64 rounded-full bg-gradient-to-br ${member.gradient} bg-opacity-20 blur-3xl`}
                    />
                  </div>

                  <div className="relative z-10 space-y-4">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.gradient} bg-opacity-25 border border-white/10 flex items-center justify-center flex-shrink-0`}
                      >
                        <span className="text-white font-bold text-2xl">{getInitials(member.name)}</span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-accent text-xs font-semibold uppercase tracking-wider">
                          {member.role}
                        </p>
                        <p className="text-white font-semibold text-lg truncate">
                          {member.name}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed">{member.specialty}</p>

                    <div className="pt-2">
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-accent/50 text-white hover:bg-accent/10 transition-all duration-300"
                      >
                        <a href="#contact">Contact</a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
