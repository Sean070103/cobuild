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
      specialty: 'Fullstack Developer',
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
      gradient: 'from-amber-600 to-orange-600',
      avatarSrc: '/kyleee-removebg.png'
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

  const rolePriority: Record<string, number> = {
    CEO: 0,
    'Tech Lead': 1,
  };

  const orderedTeamMembers = [...teamMembers].sort(
    (a, b) => (rolePriority[a.role] ?? 99) - (rolePriority[b.role] ?? 99),
  );

  const featured = orderedTeamMembers[0];
  const rest = orderedTeamMembers.slice(1);
  const techLead = rest.find((m) => m.role === 'Tech Lead');
  const otherMembers = rest.filter((m) => m.role !== 'Tech Lead');
  const kyle = otherMembers.find((m) => m.name === 'Kyle Tiongson');
  const remainingMembers = otherMembers.filter((m) => m.name !== 'Kyle Tiongson');
  const orderedOtherMembers = kyle ? [kyle, ...remainingMembers] : otherMembers;
  const kyleFeatured = orderedOtherMembers.find((m) => m.name === 'Kyle Tiongson');
  const membersGrid = orderedOtherMembers.filter((m) => m.name !== 'Kyle Tiongson');

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

                <div className="pt-2" />
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

            {techLead && (
              <div className="relative mb-6">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Text */}
                  <div className="lg:col-span-6 lg:order-2">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/50 bg-accent/10 backdrop-blur-md">
                          <span className="text-base leading-none" aria-hidden="true">🤖</span>
                          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                            {techLead.role}
                          </span>
                        </div>
                        <div
                          className="rounded-lg border border-white/10 bg-black/30 p-1.5"
                          aria-hidden="true"
                          title="Pixel buddy"
                        >
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 16 16"
                            className="block"
                            style={{ imageRendering: 'pixelated' }}
                          >
                            <rect x="5" y="2" width="6" height="2" fill="#f8fafc" />
                            <rect x="4" y="4" width="8" height="6" fill="#f8fafc" />
                            <rect x="5" y="10" width="6" height="3" fill="#f8fafc" />
                            <rect x="6" y="13" width="2" height="2" fill="#f8fafc" />
                            <rect x="8" y="13" width="2" height="2" fill="#f8fafc" />

                            <rect x="6" y="6" width="1" height="1" fill="#111827" />
                            <rect x="9" y="6" width="1" height="1" fill="#111827" />
                            <rect x="7" y="8" width="2" height="1" fill="#111827" />

                            <rect x="11" y="3" width="2" height="2" fill="#a78bfa" />
                            <rect x="13" y="5" width="1" height="1" fill="#a78bfa" />
                          </svg>
                        </div>
                      </div>

                      <h3 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                        {techLead.name}
                      </h3>

                      <p className="text-accent text-sm font-semibold uppercase tracking-wider">
                        {techLead.specialty}
                      </p>

                      <p className="text-gray-300 leading-relaxed max-w-xl">
                        Clean architecture, fast iteration, and polish you can feel—built for teams that want results, not excuses.
                      </p>

                      <div className="pt-2" />
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="lg:col-span-6 lg:order-1">
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
                          {techLead.avatarSrc ? (
                            <>
                              <Image
                                src={techLead.avatarSrc}
                                alt={`${techLead.name} photo`}
                                fill
                                sizes="(max-width: 1024px) 90vw, 42vw"
                                className="object-contain object-left-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.65)] saturate-0 contrast-125"
                              />

                              {/* Robo-cop style HUD overlays */}
                              <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.09)_1px,transparent_1px)] bg-[size:100%_3px] opacity-20" />
                                <div className="absolute inset-0 border border-cyan-400/30 shadow-[inset_0_0_20px_rgba(34,211,238,0.12)]" />
                                <div className="absolute top-3 right-3 bg-black/60 border border-red-400/60 px-2 py-1 text-[10px] tracking-wider text-red-300">
                                  TARGET LOCK 🤖
                                </div>

                                {/* Corner brackets */}
                                <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-cyan-300/70" />
                                <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-cyan-300/70" />
                                <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-cyan-300/70" />
                                <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-cyan-300/70" />

                                {/* Crosshair */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                  <div className="relative w-14 h-14">
                                    <div className="absolute inset-0 rounded-full border border-red-400/50" />
                                    <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-red-400/40" />
                                    <div className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 bg-red-400/40" />
                                  </div>
                                </div>

                                <div className="absolute bottom-3 right-3 bg-black/60 border border-cyan-400/50 px-2 py-1 text-[10px] tracking-wider text-cyan-200">
                                  UNIT: TL-01 🚓
                                </div>
                              </div>
                            </>
                          ) : (
                            <div
                              className={`h-full w-full bg-gradient-to-br ${techLead.gradient} bg-opacity-20 flex items-center justify-center`}
                            >
                              <span className="font-bold text-white text-7xl">{getInitials(techLead.name)}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {kyleFeatured && (
              <div className="relative mb-6">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Text */}
                  <div className="lg:col-span-6">
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/50 bg-accent/10 backdrop-blur-md">
                        <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                          {kyleFeatured.role} 🎨
                    </span>
                      </div>

                      <h3 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                        {kyleFeatured.name}
                      </h3>

                      <p className="text-accent text-sm font-semibold uppercase tracking-wider">
                        {kyleFeatured.specialty}
                      </p>

                      <p className="text-gray-300 leading-relaxed max-w-xl">
                        Clean architecture, fast iteration, and polish you can feel—built for teams that want results, not excuses.
                      </p>

                      <div className="pt-2" />
                    </div>
                  </div>
                  
                  {/* Visual (right side) */}
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
                          {kyleFeatured.avatarSrc ? (
                            <>
                              <Image
                                src={kyleFeatured.avatarSrc}
                                alt={`${kyleFeatured.name} photo`}
                                fill
                                sizes="(max-width: 1024px) 90vw, 42vw"
                                className="object-contain object-left-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.65)]"
                              />

                              {/* Designer theme overlays */}
                              <div className="absolute inset-0 pointer-events-none">
                                {/* Keep face clean, put action elements around edges */}
                                <div className="absolute inset-0 border border-white/20" />
                                <div className="absolute inset-3 border border-white/10 border-dashed" />
                                <div className="absolute inset-x-2 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent animate-[kyleScan_3.2s_linear_infinite]" />
                                <div className="absolute left-3 top-1/3 w-10 h-px bg-cyan-300/70 animate-[kyleBlink_1.6s_steps(2,end)_infinite]" />
                                <div className="absolute right-3 bottom-1/3 w-12 h-px bg-violet-300/70 animate-[kyleBlink_2s_steps(2,end)_infinite]" />
                                <div className="absolute left-1/2 top-2 -translate-x-1/2 w-20 h-6 border border-white/20 animate-[kyleFloat_6s_ease-in-out_infinite]" />

                                {/* Highly visible running pixel characters */}
                                <div className="absolute inset-x-0 top-8 h-28 overflow-hidden z-20">
                                  <div className="absolute left-[-24%] top-1 animate-[pixelRunFast_12s_linear_infinite] drop-shadow-[0_0_12px_rgba(34,211,238,0.85)]">
                                    <div className="bg-black/75 border border-cyan-300/70 px-2.5 py-1.5">
                                      <svg
                                        width="54"
                                        height="54"
                                        viewBox="0 0 16 16"
                                        style={{ imageRendering: 'pixelated' }}
                                      >
                                        <rect x="5" y="1" width="6" height="2" fill="#ffffff" />
                                        <rect x="4" y="3" width="8" height="5" fill="#f8fafc" />
                                        <rect x="6" y="5" width="1" height="1" fill="#111827" />
                                        <rect x="9" y="5" width="1" height="1" fill="#111827" />
                                        <rect x="3" y="8" width="3" height="3" fill="#22d3ee" />
                                        <rect x="10" y="8" width="3" height="3" fill="#a78bfa" />
                                        <rect x="5" y="11" width="2" height="3" fill="#ffffff" />
                                        <rect x="9" y="11" width="2" height="3" fill="#ffffff" />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="absolute left-[-40%] top-14 animate-[pixelRunSlow_16s_linear_infinite] drop-shadow-[0_0_12px_rgba(244,114,182,0.85)]">
                                    <div className="bg-black/75 border border-fuchsia-300/70 px-2.5 py-1.5">
                                      <svg
                                        width="46"
                                        height="46"
                                        viewBox="0 0 16 16"
                                        style={{ imageRendering: 'pixelated' }}
                                      >
                                        <rect x="5" y="2" width="6" height="2" fill="#ffffff" />
                                        <rect x="4" y="4" width="8" height="4" fill="#ffffff" />
                                        <rect x="6" y="5" width="1" height="1" fill="#111827" />
                                        <rect x="9" y="5" width="1" height="1" fill="#111827" />
                                        <rect x="3" y="8" width="10" height="2" fill="#fb7185" />
                                        <rect x="5" y="10" width="2" height="3" fill="#ffffff" />
                                        <rect x="9" y="10" width="2" height="3" fill="#ffffff" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>

                                <div className="absolute top-3 right-3 bg-black/60 border border-white/20 px-2 py-1 text-[10px] tracking-wider text-white/90">
                                  DESIGN MODE 🎨
                                </div>

                                {/* Color swatches */}
                                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/55 border border-white/15 px-2 py-1">
                                  <span className="h-3 w-3 bg-pink-400 border border-white/30" />
                                  <span className="h-3 w-3 bg-violet-400 border border-white/30" />
                                  <span className="h-3 w-3 bg-cyan-300 border border-white/30" />
                                  <span className="h-3 w-3 bg-emerald-300 border border-white/30" />
                                </div>

                                {/* Bezier-ish curve motif */}
                                <svg
                                  className="absolute right-4 bottom-4 w-28 h-20 opacity-80"
                                  viewBox="0 0 112 80"
                                  fill="none"
                                >
                                  <path d="M8 68 C28 10, 84 72, 104 12" stroke="rgba(196,181,253,0.9)" strokeWidth="2" />
                                  <circle cx="8" cy="68" r="3" fill="rgba(244,114,182,0.95)" />
                                  <circle cx="104" cy="12" r="3" fill="rgba(34,211,238,0.95)" />
                                </svg>

                                {/* Layer badges */}
                                <div className="absolute left-3 top-14 bg-black/50 border border-white/20 px-2 py-1 text-[10px] text-white/90">
                                  LAYER 01
                                </div>
                                <div className="absolute right-3 top-20 bg-black/50 border border-white/20 px-2 py-1 text-[10px] text-white/90">
                                  FX ON
                                </div>
                              </div>
                            </>
                          ) : (
                            <div
                              className={`h-full w-full bg-gradient-to-br ${kyleFeatured.gradient} bg-opacity-20 flex items-center justify-center`}
                            >
                              <span className="font-bold text-white text-7xl">{getInitials(kyleFeatured.name)}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {membersGrid.map((member) => (
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
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.gradient} bg-opacity-25 border border-white/10 flex items-center justify-center flex-shrink-0 overflow-hidden`}
                      >
                        {member.avatarSrc ? (
                          <Image
                            src={member.avatarSrc}
                            alt={`${member.name} avatar`}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-white font-bold text-2xl">{getInitials(member.name)}</span>
                        )}
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

                    <p className="text-gray-300 leading-relaxed">
                      {member.specialty}
                      {member.role === 'Designer' ? ' 🎨' : ''}
                    </p>

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
