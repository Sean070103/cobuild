'use client';

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
      gradient: 'from-violet-600 to-purple-600',
      avatarSrc: '/grantt-removebg-preview.png',
    },
    {
      name: 'Sean',
      role: 'Tech Lead',
      specialty: 'Fullstack Developer',
      gradient: 'from-cyan-600 to-blue-600',
      avatarSrc: '/seanie-removebg.png'
    },
    {
      name: 'Kyle Tiongson',
      role: 'Designer',
      specialty: 'UI/UX & Design Systems',
      gradient: 'from-amber-600 to-orange-600',
      avatarSrc: '/kyleee-removebg.png'
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
                  {featured.role === 'CEO' && (
                    <span className="text-base leading-none" aria-hidden="true">
                      👑
                    </span>
                  )}
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
            <div className="lg:col-span-6 relative">
              {featured.role === 'CEO' && (
                <>
                  <div
                    className="ceo-glow-breathe absolute -left-10 sm:-left-16 top-1/2 -translate-y-1/2 w-[min(78vw,24rem)] h-[min(92vh,30rem)] rounded-full bg-gradient-to-r from-amber-400/40 via-amber-200/20 to-transparent blur-[48px] pointer-events-none"
                    aria-hidden="true"
                  />
                  <div
                    className="ceo-glow-breathe-alt absolute -right-8 sm:-right-14 top-[28%] w-[min(65vw,20rem)] h-[min(75vh,26rem)] rounded-full bg-gradient-to-l from-white/30 via-amber-100/12 to-transparent blur-[42px] pointer-events-none"
                    aria-hidden="true"
                  />
                  <div
                    className="ceo-glow-floor absolute left-1/4 -bottom-16 w-[min(90vw,28rem)] h-40 rounded-full bg-gradient-to-t from-amber-300/25 via-transparent to-transparent blur-[36px] pointer-events-none"
                    aria-hidden="true"
                  />
                </>
              )}
              <div
                className={
                  featured.role === 'CEO'
                    ? 'relative rounded-3xl border border-amber-400/25 bg-black/30 overflow-hidden shadow-[0_0_50px_-8px_rgba(251,191,36,0.35),0_0_90px_-20px_rgba(255,255,255,0.14),inset_0_1px_0_rgba(255,255,255,0.08)]'
                    : 'relative rounded-3xl border border-white/10 bg-black/30 overflow-hidden'
                }
              >
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
                      <>
                        <Image
                          src={featured.avatarSrc}
                          alt={`${featured.name} photo`}
                          fill
                          sizes="(max-width: 1024px) 90vw, 42vw"
                          className={
                            featured.role === 'CEO'
                              ? 'object-contain object-left-bottom drop-shadow-[0_24px_48px_rgba(0,0,0,0.75)] saturate-0 contrast-[1.12] brightness-[1.03]'
                              : 'object-contain object-left-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.65)]'
                          }
                          priority
                        />
                        {featured.role === 'CEO' && (
                          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                            <div className="ceo-glow-spot absolute inset-0 mix-blend-screen bg-[radial-gradient(ellipse_110%_65%_at_50%_-5%,rgba(255,252,245,0.28),transparent_52%)]" />
                            <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(254,243,199,0.12)]" />
                            <div className="ceo-glow-rim absolute inset-0 rounded-[inherit] shadow-[inset_0_0_45px_rgba(252,211,77,0.18)]" />
                            <div className="absolute inset-0 border border-amber-200/25 shadow-[inset_0_0_0_1px_rgba(250,204,21,0.18)]" />
                            {/* Local light pools — right side (behind badges & corners) */}
                            <div
                              className="ceo-glow-badge-halo absolute -top-4 -right-4 h-36 w-40 rounded-full bg-[radial-gradient(circle_at_70%_30%,rgba(253,230,138,0.45),rgba(251,191,36,0.12),transparent_68%)] blur-2xl"
                              aria-hidden="true"
                            />
                            <div
                              className="ceo-glow-badge-halo absolute -bottom-2 -right-2 h-28 w-36 rounded-full bg-[radial-gradient(circle_at_80%_70%,rgba(254,243,199,0.4),rgba(252,211,77,0.1),transparent_65%)] blur-xl"
                              aria-hidden="true"
                            />
                            <div className="absolute top-3 left-3 h-10 w-10 border-l-2 border-t-2 border-amber-300/80" />
                            <div className="absolute top-3 right-3 z-[2] h-10 w-10 border-r-2 border-t-2 border-amber-200/95 shadow-[0_0_16px_rgba(251,191,36,0.65),0_0_28px_rgba(255,255,255,0.12)]" />
                            <div className="absolute bottom-3 left-3 h-10 w-10 border-l-2 border-b-2 border-amber-200/60" />
                            <div className="absolute bottom-3 right-3 z-[2] h-10 w-10 border-r-2 border-b-2 border-amber-200/90 shadow-[0_0_14px_rgba(251,191,36,0.55),0_0_22px_rgba(252,211,77,0.2)]" />
                            <div className="ceo-glow-badge absolute top-3 right-3 z-[3] bg-black/65 border border-amber-400/55 px-2.5 py-1 text-[10px] tracking-[0.2em] text-amber-100/95 uppercase shadow-[0_0_22px_rgba(251,191,36,0.55),0_0_40px_rgba(253,230,138,0.2),inset_0_1px_0_rgba(255,255,255,0.12)]">
                              Executive
                            </div>
                            <div className="absolute bottom-3 left-3 z-[3] bg-black/60 border border-white/15 px-2.5 py-1 text-[10px] tracking-wider text-white/85">
                              Skyrant · Leadership
                            </div>
                            <div className="ceo-glow-badge absolute bottom-3 right-3 z-[3] bg-black/55 border border-amber-400/45 px-2 py-1 text-[10px] tracking-[0.25em] text-amber-100/90 uppercase shadow-[0_0_20px_rgba(251,191,36,0.5),0_0_36px_rgba(252,211,77,0.18)]">
                              Vision
                            </div>
                          </div>
                        )}
                      </>
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
                          {kyleFeatured.role}
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
                    <div className="relative rounded-3xl border border-fuchsia-300/20 bg-black/30 overflow-hidden">
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
                        {/* Designer-themed background */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(244,114,182,0.16),transparent_34%),radial-gradient(circle_at_78%_22%,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(167,139,250,0.14),transparent_34%)]" />
                        <div className="absolute left-5 top-8 w-28 h-28 border border-fuchsia-200/25 bg-fuchsia-300/5" />
                        <div className="absolute right-7 top-14 w-20 h-20 rounded-full border border-cyan-200/20 bg-cyan-300/5" />
                        <div className="absolute bottom-7 left-10 w-48 h-20 border border-violet-200/20 bg-violet-300/5" />
                        <svg className="absolute right-5 bottom-5 w-32 h-20 opacity-80" viewBox="0 0 120 80" fill="none">
                          <path d="M8 68 C24 16, 74 78, 112 12" stroke="rgba(217,70,239,0.72)" strokeWidth="2" />
                          <circle cx="8" cy="68" r="3" fill="rgba(34,211,238,0.9)" />
                          <circle cx="112" cy="12" r="3" fill="rgba(244,114,182,0.9)" />
                        </svg>
                        <div className="absolute top-3 right-3 bg-black/55 border border-fuchsia-300/30 px-2 py-1 text-[10px] tracking-wider text-fuchsia-100/90">
                          DESIGN BG
                        </div>
                      </div>

                      <div className="relative z-10 p-6 sm:p-10">
                        <div className="relative aspect-[16/10] w-full">
                          {kyleFeatured.avatarSrc ? (
                            <Image
                              src={kyleFeatured.avatarSrc}
                              alt={`${kyleFeatured.name} photo`}
                              fill
                              sizes="(max-width: 1024px) 90vw, 42vw"
                              className="object-contain object-bottom object-right drop-shadow-[0_20px_40px_rgba(0,0,0,0.65)]"
                            />
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

            {membersGrid.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {membersGrid.map((member) => (
                  <div
                    key={member.name}
                    className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
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
                          <p className="text-white font-semibold text-lg truncate">{member.name}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {member.specialty}
                        {member.role === 'Designer' ? ' 🎨' : ''}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
        </div>
        )}
      </div>
    </section>
  );
}
