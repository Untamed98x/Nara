// =============================================================
// NARA PRIVATE ACADEMY — Memphis-Style Landing Page
// Brand palette: Cream #F5EFE6 | Teal #5A8A8A | Brown #8B6F47
// Accents: Coral #E8917D | Mustard #E5B85C | Sage #A8C66C
// =============================================================

// ------------------------------------------------------------------
// MEMPHIS DECORATIVE PRIMITIVES
// ------------------------------------------------------------------

function Squiggle({
  color = '#5A8A8A',
  width = 120,
  className = '',
}: {
  color?: string
  width?: number
  className?: string
}) {
  return (
    <svg viewBox="0 0 200 30" width={width} fill="none" className={className} aria-hidden="true">
      <path
        d="M0,15 C15,3 30,27 45,15 C60,3 75,27 90,15 C105,3 120,27 135,15 C150,3 165,27 180,15 C192,5 198,15 200,15"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Zigzag({
  color = '#8B6F47',
  width = 200,
  className = '',
}: {
  color?: string
  width?: number
  className?: string
}) {
  return (
    <svg viewBox="0 0 200 24" width={width} className={className} aria-hidden="true">
      <polyline
        points="0,22 20,2 40,22 60,2 80,22 100,2 120,22 140,2 160,22 180,2 200,22"
        stroke={color}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Triangle({
  color = '#E8917D',
  size = 40,
  className = '',
}: {
  color?: string
  size?: number
  className?: string
}) {
  return (
    <svg viewBox="0 0 60 52" width={size} className={className} aria-hidden="true">
      <polygon points="30,4 56,48 4,48" fill={color} />
    </svg>
  )
}

function CircleRing({
  color = '#5A8A8A',
  size = 40,
  className = '',
}: {
  color?: string
  size?: number
  className?: string
}) {
  return (
    <svg viewBox="0 0 40 40" width={size} className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="17" fill="none" stroke={color} strokeWidth="3.5" />
    </svg>
  )
}

function Diamond({
  color = '#A8C66C',
  size = 30,
  className = '',
}: {
  color?: string
  size?: number
  className?: string
}) {
  return (
    <svg viewBox="0 0 40 40" width={size} className={className} aria-hidden="true">
      <rect x="5" y="5" width="30" height="30" fill={color} transform="rotate(45 20 20)" />
    </svg>
  )
}

function Dot({
  color = '#E5B85C',
  size = 12,
  className = '',
}: {
  color?: string
  size?: number
  className?: string
}) {
  return (
    <svg viewBox="0 0 20 20" width={size} className={className} aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill={color} />
    </svg>
  )
}

function Star({
  color = '#E5B85C',
  size = 28,
  className = '',
}: {
  color?: string
  size?: number
  className?: string
}) {
  return (
    <svg viewBox="0 0 24 24" width={size} className={className} aria-hidden="true">
      <path
        d="M12,2 L14.6,8.8 L22,8.8 L16.2,13.4 L18.4,20 L12,16 L5.6,20 L7.8,13.4 L2,8.8 L9.4,8.8 Z"
        fill={color}
      />
    </svg>
  )
}

function Plus({
  color = '#8B6F47',
  size = 22,
  className = '',
}: {
  color?: string
  size?: number
  className?: string
}) {
  return (
    <svg viewBox="0 0 24 24" width={size} className={className} aria-hidden="true">
      <path d="M12,3 L12,21 M3,12 L21,12" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  )
}

// ------------------------------------------------------------------
// WAVY SECTION DIVIDER
// ------------------------------------------------------------------

function WaveDivider({
  from,
  to,
  flip = false,
}: {
  from: string
  to: string
  flip?: boolean
}) {
  return (
    <div style={{ backgroundColor: from, lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{ display: 'block', transform: flip ? 'scaleX(-1)' : undefined }}
        aria-hidden="true"
      >
        <path
          d="M0,30 C180,60 360,0 540,35 C720,70 900,10 1080,40 C1260,65 1380,20 1440,30 L1440,60 L0,60 Z"
          fill={to}
        />
      </svg>
    </div>
  )
}

// ------------------------------------------------------------------
// DOT GRID PATTERN
// ------------------------------------------------------------------

function DotGrid({
  color = '#8B6F47',
  rows = 5,
  cols = 5,
  gap = 18,
  r = 2.5,
  opacity = 0.15,
  className = '',
}: {
  color?: string
  rows?: number
  cols?: number
  gap?: number
  r?: number
  opacity?: number
  className?: string
}) {
  const w = cols * gap
  const h = rows * gap
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h} className={className} aria-hidden="true">
      {Array.from({ length: rows }).map((_, ri) =>
        Array.from({ length: cols }).map((_, ci) => (
          <circle
            key={`${ri}-${ci}`}
            cx={ci * gap + gap / 2}
            cy={ri * gap + gap / 2}
            r={r}
            fill={color}
            opacity={opacity}
          />
        ))
      )}
    </svg>
  )
}

// ------------------------------------------------------------------
// NARA LOGO (SVG recreation of brand logo)
// ------------------------------------------------------------------

function NaraLogo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-3 select-none">
      {/* Book + Sun icon */}
      <svg viewBox="0 0 58 58" width={50} height={50} aria-hidden="true">
        {/* Sun rays */}
        <g>
          <line x1="29" y1="2" x2="29" y2="8" stroke="#E5B85C" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="41" y1="6" x2="38" y2="11" stroke="#E5B85C" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="17" y1="6" x2="20" y2="11" stroke="#E5B85C" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="48" y1="14" x2="43" y2="17" stroke="#E5B85C" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="10" y1="14" x2="15" y2="17" stroke="#E5B85C" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        {/* Sun circle */}
        <circle cx="29" cy="18" r="8" fill="#E5B85C" />
        {/* Open book - left page */}
        <path d="M29,25 C29,25 14,22 6,27 L6,52 C14,47 29,50 29,50 Z" fill="#5A8A8A" />
        {/* Open book - right page */}
        <path d="M29,25 C29,25 44,22 52,27 L52,52 C44,47 29,50 29,50 Z" fill="#3D6666" />
        {/* Spine */}
        <line x1="29" y1="25" x2="29" y2="50" stroke="#E5B85C" strokeWidth="1.5" />
        {/* Left page lines */}
        <line x1="12" y1="34" x2="26" y2="32" stroke="#F5EFE6" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
        <line x1="12" y1="39" x2="26" y2="37" stroke="#F5EFE6" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
        <line x1="12" y1="44" x2="26" y2="42" stroke="#F5EFE6" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
        {/* Right page lines */}
        <line x1="32" y1="32" x2="46" y2="34" stroke="#F5EFE6" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
        <line x1="32" y1="37" x2="46" y2="39" stroke="#F5EFE6" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
        <line x1="32" y1="42" x2="46" y2="44" stroke="#F5EFE6" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      </svg>
      {/* Wordmark */}
      <div>
        <span
          className="font-script text-[1.7rem] leading-none block"
          style={{ color: dark ? '#F5EFE6' : '#3D6666' }}
        >
          Nara
        </span>
        <span
          className="text-[0.6rem] font-bold tracking-[0.22em] uppercase block mt-0.5"
          style={{ color: dark ? 'rgba(245,239,230,0.75)' : '#5A8A8A' }}
        >
          Private Academy
        </span>
      </div>
    </div>
  )
}

// ------------------------------------------------------------------
// NAVBAR
// ------------------------------------------------------------------

function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      style={{ backgroundColor: 'rgba(245,239,230,0.95)', borderBottom: '2px solid rgba(90,138,138,0.2)' }}
    >
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
        <NaraLogo />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold" style={{ color: '#3D6666' }}>
          <a href="#program" className="hover:text-coral transition-colors" style={{ color: '#3D6666' }}>
            Program
          </a>
          <a href="#mapel" className="hover:text-coral transition-colors" style={{ color: '#3D6666' }}>
            Mata Pelajaran
          </a>
          <a href="#lokasi" className="hover:text-coral transition-colors" style={{ color: '#3D6666' }}>
            Lokasi
          </a>
          <a
            href="https://wa.me/6285924136533"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream font-bold px-5 py-2 rounded-full transition-all"
            style={{
              backgroundColor: '#5A8A8A',
              boxShadow: '3px 3px 0px 0px #3D6666',
            }}
          >
            Daftar Sekarang
          </a>
        </div>

        {/* Mobile CTA */}
        <a
          href="https://wa.me/6285924136533"
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden text-cream font-bold px-4 py-2 rounded-full text-sm"
          style={{ backgroundColor: '#5A8A8A' }}
        >
          Daftar
        </a>
      </div>
    </nav>
  )
}

// ------------------------------------------------------------------
// HERO SECTION
// ------------------------------------------------------------------

function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ backgroundColor: '#F5EFE6' }}
    >
      {/* ---- Memphis background scatter ---- */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Top-left cluster */}
        <Triangle color="#E8917D" size={90} className="absolute top-24 left-6 opacity-70" />
        <CircleRing color="#5A8A8A" size={65} className="absolute top-40 left-28 opacity-50" />
        <Dot color="#E5B85C" size={22} className="absolute top-28 left-48 opacity-80" />
        <Plus color="#A8C66C" size={26} className="absolute top-56 left-16 opacity-60" />

        {/* Top-right cluster */}
        <Star color="#E5B85C" size={42} className="absolute top-20 right-52 opacity-70" />
        <Diamond color="#A8C66C" size={55} className="absolute top-16 right-16 opacity-60" />
        <Squiggle color="#E8917D" width={130} className="absolute top-44 right-24 opacity-55" />
        <Dot color="#8B6F47" size={16} className="absolute top-20 right-32 opacity-50" />

        {/* Left middle */}
        <Diamond color="#E5B85C" size={22} className="absolute top-1/2 left-10 opacity-50" />
        <Squiggle color="#5A8A8A" width={90} className="absolute top-2/3 left-4 opacity-40" />
        <CircleRing color="#E8917D" size={45} className="absolute top-3/4 left-24 opacity-35" />

        {/* Right middle */}
        <Plus color="#E8917D" size={22} className="absolute top-1/3 right-36 opacity-40" />
        <Dot color="#A8C66C" size={12} className="absolute top-1/2 right-8 opacity-60" />

        {/* Bottom decorations */}
        <Triangle color="#5A8A8A" size={65} className="absolute bottom-28 right-10 opacity-35 rotate-180" />
        <Star color="#A8C66C" size={30} className="absolute bottom-40 right-40 opacity-50" />
        <CircleRing color="#E5B85C" size={110} className="absolute -bottom-14 right-48 opacity-25" />

        {/* Dot grid bottom-left */}
        <div className="absolute bottom-12 left-0 opacity-100">
          <DotGrid color="#8B6F47" rows={6} cols={6} gap={20} r={2.5} opacity={0.12} />
        </div>

        {/* Scattered fills */}
        <Dot color="#E8917D" size={14} className="absolute top-64 left-1/3 opacity-60" />
        <Dot color="#5A8A8A" size={18} className="absolute bottom-48 left-1/4 opacity-40" />
        <Plus color="#E5B85C" size={20} className="absolute bottom-36 right-1/3 opacity-45" />
        <Triangle color="#A8C66C" size={28} className="absolute top-1/2 left-1/2 opacity-25" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* ---- Left: text ---- */}
        <div>
          {/* Batch badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border-2"
            style={{
              backgroundColor: 'rgba(229,184,92,0.2)',
              borderColor: '#E5B85C',
            }}
          >
            <Star color="#E5B85C" size={15} />
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#8B6F47' }}>
              Batch 3 · Mulai Juli 2025
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-5"
            style={{ color: '#3D6666' }}
          >
            Belajar Jadi Lebih{' '}
            <span className="relative inline-block">
              <span className="relative z-10" style={{ color: '#E8917D' }}>
                Nyaman
              </span>
              <span
                className="absolute -bottom-1 left-0 right-0 h-3 rounded-sm z-0"
                style={{ backgroundColor: 'rgba(229,184,92,0.45)' }}
                aria-hidden="true"
              />
            </span>{' '}
            &amp;{' '}
            <span style={{ color: '#5A8A8A' }}>Menyenangkan!</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
            Les privat &amp; semi privat kelas kecil{' '}
            <strong style={{ color: '#3D6666' }}>maksimal 4–6 siswa</strong> untuk anak{' '}
            <strong style={{ color: '#3D6666' }}>TK–SMA</strong> di Parung &amp; Inkopad. Suasana
            hangat, pendampingan penuh, harga mulai{' '}
            <strong style={{ color: '#E8917D' }}>Rp 150.000/bulan</strong>.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="https://wa.me/6285924136533"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 font-bold px-7 py-3.5 rounded-full transition-all hover:translate-x-0.5 hover:translate-y-0.5 text-cream"
              style={{
                backgroundColor: '#5A8A8A',
                border: '2.5px solid #3D6666',
                boxShadow: '5px 5px 0px 0px #3D6666',
              }}
            >
              {/* WhatsApp icon */}
              <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden="true">
                <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12 0C5.37 0 0 5.37 0 12c0 2.14.56 4.15 1.54 5.89L0 24l6.3-1.52A11.97 11.97 0 0012 24c6.63 0 12-5.37 12-12S18.63 0 12 0zm0 22c-1.9 0-3.66-.52-5.16-1.43l-.37-.22-3.84.93.97-3.77-.24-.39A9.98 9.98 0 012 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" />
              </svg>
              Hubungi via WhatsApp
            </a>
            <a
              href="#program"
              className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-full transition-colors hover:bg-teal/10"
              style={{
                border: '2.5px solid #5A8A8A',
                color: '#5A8A8A',
              }}
            >
              Lihat Program
              <svg viewBox="0 0 24 24" width={18} fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            {['Gratis modul & worksheet', 'Jadwal fleksibel', 'Konsultasi gratis'].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(168,198,108,0.3)' }}
                >
                  <svg viewBox="0 0 24 24" width={11} fill="none" stroke="#A8C66C" strokeWidth={3} aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ---- Right: Memphis info card ---- */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            {/* Main card */}
            <div
              className="rounded-2xl p-7 relative z-10 w-full max-w-xs"
              style={{
                backgroundColor: '#ffffff',
                border: '3px solid #3D6666',
                boxShadow: '10px 10px 0px 0px #3D6666',
              }}
            >
              {/* Star accent */}
              <Star color="#E5B85C" size={38} className="absolute -top-5 -right-5" />

              {/* Logo */}
              <div className="flex justify-center mb-6">
                <NaraLogo />
              </div>

              {/* Program list */}
              <div className="space-y-2.5 mb-5">
                {[
                  { name: 'Spark Words', sub: 'Bahasa Inggris — SD–SMA', emoji: '💬', bg: 'rgba(232,145,125,0.15)' },
                  { name: 'Spark Numbers', sub: 'Matematika — SD–SMA', emoji: '🔢', bg: 'rgba(90,138,138,0.15)' },
                  { name: 'Spark Tech', sub: 'Komputer — SD–SMA', emoji: '💻', bg: 'rgba(168,198,108,0.15)' },
                  { name: 'Spark Art', sub: 'Mewarnai — TK–SD', emoji: '🎨', bg: 'rgba(229,184,92,0.15)' },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center gap-3 rounded-xl p-2.5"
                    style={{ backgroundColor: '#F5EFE6' }}
                  >
                    <span
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                      style={{ backgroundColor: p.bg }}
                    >
                      {p.emoji}
                    </span>
                    <div>
                      <p className="text-xs font-extrabold" style={{ color: '#3D6666' }}>
                        {p.name}
                      </p>
                      <p className="text-[10px] text-gray-400">{p.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price badge */}
              <div className="rounded-xl p-3 text-center text-cream" style={{ backgroundColor: '#5A8A8A' }}>
                <p className="text-xs opacity-80">Mulai dari</p>
                <p className="text-2xl font-black">Rp 150.000</p>
                <p className="text-xs opacity-80">/bulan</p>
              </div>
            </div>

            {/* Floating badges */}
            <div
              className="absolute -top-7 -left-10 text-cream text-xs font-bold px-3 py-2 rounded-xl border-2 -rotate-6 whitespace-nowrap"
              style={{
                backgroundColor: '#E8917D',
                borderColor: '#3D6666',
                boxShadow: '3px 3px 0px 0px #3D6666',
              }}
            >
              Max 6 siswa 👥
            </div>
            <div
              className="absolute -bottom-8 -left-6 text-brown text-xs font-bold px-3 py-2 rounded-xl border-2 rotate-3 whitespace-nowrap"
              style={{
                backgroundColor: '#E5B85C',
                borderColor: '#8B6F47',
                boxShadow: '3px 3px 0px 0px #8B6F47',
                color: '#3D6666',
              }}
            >
              Jadwal Fleksibel 📅
            </div>
            <div
              className="absolute -bottom-5 right-2 text-xs font-bold px-3 py-2 rounded-xl border-2 -rotate-3 whitespace-nowrap"
              style={{
                backgroundColor: '#A8C66C',
                borderColor: '#5A8A8A',
                boxShadow: '3px 3px 0px 0px #5A8A8A',
                color: '#3D6666',
              }}
            >
              Gratis Modul 📚
            </div>
          </div>
        </div>
      </div>

      {/* Wave to next section (teal) */}
      <WaveDivider from="#F5EFE6" to="#5A8A8A" />
    </section>
  )
}

// ------------------------------------------------------------------
// STATS BAR
// ------------------------------------------------------------------

function StatsBar() {
  const stats = [
    { value: 'Maks. 6', label: 'Siswa per Kelas', icon: '👥' },
    { value: '150rb', label: 'Mulai /bulan', icon: '💰' },
    { value: '4', label: 'Mata Pelajaran', icon: '📚' },
    { value: 'TK–SMA', label: 'Jenjang Tersedia', icon: '🎓' },
  ]

  return (
    <section className="relative" style={{ backgroundColor: '#5A8A8A' }}>
      <div className="max-w-5xl mx-auto px-5 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" style={{ color: '#F5EFE6' }}>
          {stats.map((s, i) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="text-4xl mb-2">{s.icon}</span>
              <span className="text-3xl font-black mb-1">{s.value}</span>
              <span className="text-sm opacity-75">{s.label}</span>
              {/* Memphis dot separator */}
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -translate-y-1/2" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
      <WaveDivider from="#5A8A8A" to="#F5EFE6" />
    </section>
  )
}

// ------------------------------------------------------------------
// PROGRAMS SECTION
// ------------------------------------------------------------------

const PROGRAMS = [
  {
    name: 'Regular Class',
    emoji: '👥',
    price: '150.000',
    color: '#E8917D',
    shadow: '#c4614a',
    bg: '#FEF3F0',
    group: '2–6 orang/kelompok',
    meetings: '4–8 pertemuan/bulan',
    features: [
      'Kurikulum sekolah (SD/MI, SMP/MTS, SMA)',
      'Gratis modul & lembar latihan',
      'Laporan hasil belajar berkala',
      'Konsultasi di luar pertemuan',
      'Jadwal Sabtu & Minggu',
    ],
  },
  {
    name: 'Private Class',
    emoji: '⭐',
    price: '250.000',
    color: '#5A8A8A',
    shadow: '#3D6666',
    bg: '#EDF4F4',
    group: '1 siswa (eksklusif)',
    meetings: '4–8 pertemuan/bulan',
    features: [
      'Materi sepenuhnya by request',
      'Fokus & perhatian 100% untuk 1 anak',
      'Jadwal super fleksibel',
      'Gratis modul & lembar latihan',
      'Laporan hasil belajar berkala',
    ],
    highlighted: true,
  },
  {
    name: 'Bimbel TKA',
    emoji: '🏆',
    price: '300.000',
    color: '#E5B85C',
    shadow: '#8B6F47',
    bg: '#FDF9EE',
    group: '2–4 orang/kelompok',
    meetings: '8–16 pertemuan/bulan',
    features: [
      'Persiapan TKA intensif & terstruktur',
      'Simulasi try out berkala',
      'Materi fokus TKA (quran & akademik)',
      'Gratis modul khusus TKA',
      'Laporan perkembangan detail',
    ],
  },
]

function ProgramsSection() {
  return (
    <section id="program" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#F5EFE6' }}>
      {/* Memphis decorations */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <Squiggle color="#E8917D" width={200} className="absolute -top-2 right-8 opacity-40" />
        <Diamond color="#A8C66C" size={48} className="absolute top-16 left-8 opacity-40" />
        <Dot color="#E5B85C" size={20} className="absolute bottom-16 right-12 opacity-60" />
        <Plus color="#5A8A8A" size={26} className="absolute bottom-24 left-16 opacity-40" />
        <Star color="#E8917D" size={32} className="absolute top-1/2 right-6 opacity-30" />
        <Triangle color="#E5B85C" size={40} className="absolute bottom-8 left-1/2 opacity-25" />
        <DotGrid color="#5A8A8A" rows={4} cols={4} gap={22} r={2} opacity={0.08} className="absolute top-8 right-40" />
      </div>

      <div className="max-w-6xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <Zigzag color="#E5B85C" width={55} />
            <span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: '#8B6F47' }}>
              Harga &amp; Program
            </span>
            <Zigzag color="#E5B85C" width={55} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#3D6666' }}>
            Pilih Program yang Tepat
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Semua program dilengkapi modul &amp; worksheet gratis, jadwal fleksibel, dan guru
            berpengalaman yang ngerti ritme belajar anak.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-7">
          {PROGRAMS.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-6 relative transition-transform ${
                p.highlighted ? 'md:-translate-y-5' : ''
              }`}
              style={{
                backgroundColor: p.bg,
                border: `3px solid ${p.color}`,
                boxShadow: `7px 7px 0px 0px ${p.shadow}`,
              }}
            >
              {p.highlighted && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 text-cream text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap"
                  style={{ backgroundColor: p.color }}
                >
                  ⭐ Paling Populer
                </div>
              )}

              <div className="text-4xl mb-3">{p.emoji}</div>
              <h3 className="text-xl font-black mb-1" style={{ color: '#3D6666' }}>
                {p.name}
              </h3>
              <p className="text-xs text-gray-500 mb-5">
                {p.group} · {p.meetings}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-xs text-gray-400 block mb-0.5">Mulai dari</span>
                <span className="text-3xl font-black" style={{ color: p.color }}>
                  Rp {p.price}
                </span>
                <span className="text-sm text-gray-400"> /bulan</span>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-7">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <span
                      className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${p.color}30` }}
                    >
                      <svg viewBox="0 0 24 24" width={10} fill="none" stroke={p.color} strokeWidth={3} aria-hidden="true">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/6285924136533"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-cream font-bold py-3 rounded-xl text-sm transition-opacity hover:opacity-85"
                style={{
                  backgroundColor: p.color,
                  boxShadow: `3px 3px 0px 0px ${p.shadow}`,
                }}
              >
                Daftar {p.name}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          Periode aktif: Batch 3 · Januari–Juni 2026 · Kuota terbatas per kelas!
        </p>
      </div>
    </section>
  )
}

// ------------------------------------------------------------------
// WHY NARA SECTION
// ------------------------------------------------------------------

function WhyNaraSection() {
  const reasons = [
    {
      icon: '👥',
      title: 'Kelas Kecil & Eksklusif',
      desc: 'Maksimal 4–6 siswa per kelas. Setiap anak mendapat perhatian penuh dari guru — nggak ada yang ketinggalan materi.',
      color: '#E8917D',
      bg: '#FEF3F0',
    },
    {
      icon: '📅',
      title: 'Jadwal Super Fleksibel',
      desc: 'Waktu belajar bisa disesuaikan dengan kebutuhan siswa dan orang tua. Tersedia hari Sabtu & Minggu.',
      color: '#5A8A8A',
      bg: '#EDF4F4',
    },
    {
      icon: '📚',
      title: 'Modul & Worksheet Gratis',
      desc: 'Setiap siswa mendapatkan materi belajar dan lembar latihan sesuai kebutuhannya tanpa biaya tambahan.',
      color: '#A8C66C',
      bg: '#F2F8EA',
    },
    {
      icon: '🎓',
      title: 'Guru Berpengalaman',
      desc: 'Guru ramah yang benar-benar memahami ritme belajar anak. Bukan sekadar ngajar, tapi mendampingi.',
      color: '#E5B85C',
      bg: '#FDF9EE',
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Stripe pattern top-left */}
        <div
          className="absolute top-0 left-0 w-56 h-56 opacity-100"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, rgba(90,138,138,0.07) 0, rgba(90,138,138,0.07) 2px, transparent 0, transparent 50%)',
            backgroundSize: '16px 16px',
          }}
        />
        <Triangle color="#E5B85C" size={55} className="absolute top-10 right-20 opacity-40" />
        <CircleRing color="#E8917D" size={90} className="absolute bottom-10 left-8 opacity-25" />
        <Squiggle color="#5A8A8A" width={160} className="absolute bottom-24 right-6 opacity-30" />
        <Diamond color="#A8C66C" size={30} className="absolute top-1/2 right-48 opacity-35" />
        <Star color="#E8917D" size={25} className="absolute bottom-1/3 left-1/3 opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <Squiggle color="#5A8A8A" width={55} />
            <span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: '#8B6F47' }}>
              Kenapa Nara?
            </span>
            <Squiggle color="#5A8A8A" width={55} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#3D6666' }}>
            Bukan Bimbel Biasa
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Kami percaya setiap anak punya ritme belajarnya sendiri. Nara hadir untuk mendampingi
            dengan hangat, bukan mengejar nilai.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="rounded-2xl p-6 relative"
              style={{
                backgroundColor: r.bg,
                border: `2.5px solid ${r.color}`,
                boxShadow: `5px 5px 0px 0px ${r.color}`,
              }}
            >
              {/* Number badge */}
              <div
                className="absolute -top-3.5 -right-3.5 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-cream"
                style={{ backgroundColor: r.color }}
              >
                {i + 1}
              </div>
              <div className="text-4xl mb-4">{r.icon}</div>
              <h3 className="font-black text-base mb-2" style={{ color: '#3D6666' }}>
                {r.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote strip */}
        <div
          className="mt-14 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden"
          style={{ backgroundColor: '#F5EFE6', border: '2.5px solid #5A8A8A' }}
        >
          <div className="absolute right-4 top-4 opacity-20">
            <DotGrid color="#5A8A8A" rows={3} cols={5} gap={16} r={2} opacity={0.5} />
          </div>
          <div className="text-5xl flex-shrink-0">&ldquo;</div>
          <p className="text-lg font-semibold italic text-center sm:text-left" style={{ color: '#3D6666' }}>
            Belajar sambil bermain, asah kreativitas — setiap anak punya ritmenya sendiri.
          </p>
          <div
            className="flex-shrink-0 px-5 py-2 rounded-full text-cream font-bold text-sm whitespace-nowrap"
            style={{ backgroundColor: '#5A8A8A' }}
          >
            Tagline Nara
          </div>
        </div>
      </div>
    </section>
  )
}

// ------------------------------------------------------------------
// SUBJECTS / SPARK PROGRAMS SECTION
// ------------------------------------------------------------------

function SubjectsSection() {
  const subjects = [
    {
      spark: 'Spark Words',
      subject: 'Bahasa Inggris',
      level: 'SD – SMA',
      emoji: '💬',
      color: '#E8917D',
      bg: '#FEF3F0',
      shadow: '#c4614a',
      desc: 'Belajar Bahasa Inggris dengan cara yang nyaman dan menyenangkan. Speaking, reading, writing, dan grammar yang relevan untuk sekolah.',
    },
    {
      spark: 'Spark Numbers',
      subject: 'Matematika',
      level: 'SD – SMA',
      emoji: '🔢',
      color: '#5A8A8A',
      bg: '#EDF4F4',
      shadow: '#3D6666',
      desc: 'Matematika jadi lebih mudah dipahami dan disukai. Dari operasi dasar, persamaan, hingga aljabar dan geometri sesuai jenjang.',
    },
    {
      spark: 'Spark Tech',
      subject: 'Komputer',
      level: 'SD – SMA',
      emoji: '💻',
      color: '#A8C66C',
      bg: '#F2F8EA',
      shadow: '#6b9a35',
      desc: 'Komputer dasar dan Microsoft Office jadi lebih aplikatif dan seru. Persiapan untuk era digital sejak dini.',
    },
    {
      spark: 'Spark Art',
      subject: 'Mewarnai',
      level: 'TK – SD',
      emoji: '🎨',
      color: '#E5B85C',
      bg: '#FDF9EE',
      shadow: '#8B6F47',
      desc: 'Asah kreativitas dan motorik halus anak melalui seni mewarnai yang menyenangkan. Cocok untuk TK dan SD awal.',
    },
  ]

  return (
    <section id="mapel" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#EDF7F5' }}>
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <DotGrid
          color="#5A8A8A"
          rows={5}
          cols={6}
          gap={22}
          r={2.5}
          opacity={0.1}
          className="absolute top-4 right-4"
        />
        <Triangle color="#E5B85C" size={65} className="absolute bottom-10 left-6 opacity-40" />
        <Diamond color="#E8917D" size={42} className="absolute top-16 left-1/3 opacity-30" />
        <Star color="#A8C66C" size={38} className="absolute bottom-1/3 right-8 opacity-40" />
        <CircleRing color="#E5B85C" size={80} className="absolute -bottom-10 left-1/2 opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <Diamond color="#E5B85C" size={22} />
            <span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: '#8B6F47' }}>
              Program Pembelajaran
            </span>
            <Diamond color="#E5B85C" size={22} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#3D6666' }}>
            4 Spark Programs
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Dirancang untuk membuat belajar terasa lebih ringan, relevan, dan bermakna di setiap
            jenjang.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {subjects.map((s) => (
            <div
              key={s.spark}
              className="rounded-2xl p-6 flex gap-5 transition-transform hover:-translate-y-1"
              style={{
                backgroundColor: s.bg,
                border: `3px solid ${s.color}`,
                boxShadow: `6px 6px 0px 0px ${s.shadow}`,
              }}
            >
              {/* Icon */}
              <div
                className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-3xl"
                style={{ backgroundColor: `${s.color}25` }}
              >
                {s.emoji}
              </div>

              {/* Content */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-black text-lg" style={{ color: '#3D6666' }}>
                    {s.spark}
                  </h3>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full text-cream"
                    style={{ backgroundColor: s.color }}
                  >
                    {s.level}
                  </span>
                </div>
                <p className="text-sm font-semibold text-gray-400 mb-2">{s.subject}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ------------------------------------------------------------------
// HOW IT WORKS
// ------------------------------------------------------------------

function HowItWorksSection() {
  const steps = [
    {
      n: '01',
      title: 'Hubungi Kami',
      desc: 'Chat via WhatsApp atau DM Instagram untuk tanya-tanya tanpa komitmen.',
      color: '#E8917D',
      bg: '#FEF3F0',
    },
    {
      n: '02',
      title: 'Konsultasi Gratis',
      desc: 'Ceritakan kebutuhan anak — kami bantu pilih program dan jadwal yang pas.',
      color: '#5A8A8A',
      bg: '#EDF4F4',
    },
    {
      n: '03',
      title: 'Pilih Program',
      desc: 'Tentukan kelas (Regular / Private / TKA) dan mata pelajaran yang diinginkan.',
      color: '#A8C66C',
      bg: '#F2F8EA',
    },
    {
      n: '04',
      title: 'Mulai Belajar!',
      desc: 'Anak langsung masuk kelas kecil yang hangat dan menyenangkan. Selamat datang di Nara!',
      color: '#E5B85C',
      bg: '#FDF9EE',
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#F5EFE6' }}>
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <Squiggle color="#E5B85C" width={180} className="absolute top-4 left-0 opacity-35" />
        <Squiggle color="#E8917D" width={140} className="absolute bottom-4 right-0 opacity-35" />
        <Plus color="#5A8A8A" size={28} className="absolute top-1/3 right-8 opacity-40" />
        <Diamond color="#E8917D" size={32} className="absolute bottom-1/4 left-8 opacity-35" />
      </div>

      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <Plus color="#E8917D" size={18} />
            <span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: '#8B6F47' }}>
              Cara Daftar
            </span>
            <Plus color="#E8917D" size={18} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#3D6666' }}>
            Mudah & Cepat
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Cukup 4 langkah dan anak sudah bisa mulai belajar di Nara.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              {/* Connector arrow (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-8 -right-2 z-10 items-center" aria-hidden="true">
                  <svg viewBox="0 0 24 12" width={24} fill="none">
                    <path d="M0,6 L18,6 M12,1 L18,6 L12,11" stroke="#8B6F47" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" opacity={0.4} />
                  </svg>
                </div>
              )}

              <div
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: s.bg,
                  border: `2.5px solid ${s.color}`,
                  boxShadow: `5px 5px 0px 0px ${s.color}`,
                }}
              >
                <div
                  className="text-2xl font-black mb-4 inline-block px-3 py-1 rounded-xl text-cream"
                  style={{ backgroundColor: s.color }}
                >
                  {s.n}
                </div>
                <h3 className="font-black text-base mb-2" style={{ color: '#3D6666' }}>
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ------------------------------------------------------------------
// LOCATION SECTION
// ------------------------------------------------------------------

function LocationSection() {
  return (
    <section id="lokasi" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#F5EFE6' }}>
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <CircleRing color="#5A8A8A" size={130} className="absolute -bottom-14 -left-14 opacity-20" />
        <Triangle color="#E8917D" size={55} className="absolute top-20 right-8 opacity-35" />
        <Squiggle color="#E5B85C" width={160} className="absolute bottom-24 right-12 opacity-35" />
        <DotGrid color="#8B6F47" rows={4} cols={3} gap={20} r={2} opacity={0.1} className="absolute top-8 left-12" />
      </div>

      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <Squiggle color="#E8917D" width={55} />
            <span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: '#8B6F47' }}>
              Lokasi Kami
            </span>
            <Squiggle color="#E8917D" width={55} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#3D6666' }}>
            Dua Lokasi Strategis
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Tersedia di Inkopad dan Parung — mudah dijangkau dari berbagai penjuru area Bogor Selatan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-7">
          {/* Inkopad */}
          <div
            className="rounded-2xl p-7 relative overflow-hidden bg-white"
            style={{
              border: '3px solid #5A8A8A',
              boxShadow: '7px 7px 0px 0px #5A8A8A',
            }}
          >
            <div className="absolute top-0 right-0 w-20 h-20" aria-hidden="true">
              <DotGrid color="#5A8A8A" rows={4} cols={4} gap={12} r={1.5} opacity={0.15} />
            </div>
            <div className="flex items-start gap-4 relative">
              <div
                className="w-13 h-13 flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ backgroundColor: 'rgba(90,138,138,0.15)' }}
              >
                📍
              </div>
              <div>
                <h3 className="text-xl font-black mb-1" style={{ color: '#3D6666' }}>
                  Inkopad
                </h3>
                <p className="text-sm text-gray-400 mb-1">Tajurhalang, Bogor</p>
                <p className="text-xs text-gray-400 mb-4 italic">
                  Perumahan Inkopad Blok H8 No. 32
                </p>
                <p className="text-xs font-bold mb-2" style={{ color: '#5A8A8A' }}>
                  Semua program tersedia:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['Matematika', 'Bahasa Inggris', 'Komputer', 'Mewarnai'].map((m) => (
                    <span
                      key={m}
                      className="text-xs px-2.5 py-1 rounded-full font-semibold"
                      style={{
                        backgroundColor: 'rgba(90,138,138,0.12)',
                        color: '#3D6666',
                        border: '1px solid rgba(90,138,138,0.3)',
                      }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Parung */}
          <div
            className="rounded-2xl p-7 relative overflow-hidden bg-white"
            style={{
              border: '3px solid #E5B85C',
              boxShadow: '7px 7px 0px 0px #8B6F47',
            }}
          >
            <div className="absolute top-0 right-0 w-20 h-20" aria-hidden="true">
              <DotGrid color="#E5B85C" rows={4} cols={4} gap={12} r={1.5} opacity={0.2} />
            </div>
            <div className="flex items-start gap-4 relative">
              <div
                className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center text-2xl"
                style={{ backgroundColor: 'rgba(229,184,92,0.2)' }}
              >
                📍
              </div>
              <div>
                <h3 className="text-xl font-black mb-1" style={{ color: '#3D6666' }}>
                  Parung
                </h3>
                <p className="text-sm text-gray-400 mb-1">Parung, Bogor</p>
                <p className="text-xs text-gray-400 mb-4 italic">
                  Area Parung (detail lokasi via WhatsApp)
                </p>
                <p className="text-xs font-bold mb-2" style={{ color: '#8B6F47' }}>
                  Program tersedia:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['Matematika', 'Bahasa Inggris', 'Komputer'].map((m) => (
                    <span
                      key={m}
                      className="text-xs px-2.5 py-1 rounded-full font-semibold"
                      style={{
                        backgroundColor: 'rgba(229,184,92,0.15)',
                        color: '#8B6F47',
                        border: '1px solid rgba(229,184,92,0.4)',
                      }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ------------------------------------------------------------------
// CTA / CONTACT SECTION
// ------------------------------------------------------------------

function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#5A8A8A' }}>
      {/* Memphis background on teal */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 0, transparent 50%)',
            backgroundSize: '18px 18px',
          }}
        />
        <Triangle color="#F5EFE6" size={110} className="absolute -top-10 right-24 opacity-15" />
        <CircleRing color="#E5B85C" size={90} className="absolute bottom-8 left-16 opacity-40" />
        <Star color="#E8917D" size={45} className="absolute top-20 left-1/4 opacity-35" />
        <Diamond color="#A8C66C" size={55} className="absolute bottom-24 right-16 opacity-30" />
        <Squiggle color="#F5EFE6" width={220} className="absolute top-6 right-0 opacity-15" />
        <Squiggle color="#E5B85C" width={160} className="absolute bottom-6 left-0 opacity-30" />
        <DotGrid
          color="#F5EFE6"
          rows={4}
          cols={4}
          gap={20}
          r={2}
          opacity={0.12}
          className="absolute top-8 left-8"
        />
        <DotGrid
          color="#F5EFE6"
          rows={4}
          cols={4}
          gap={20}
          r={2}
          opacity={0.12}
          className="absolute bottom-8 right-8"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-5 text-center" style={{ color: '#F5EFE6' }}>
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-8 border"
          style={{ backgroundColor: 'rgba(245,239,230,0.15)', borderColor: 'rgba(245,239,230,0.35)' }}
        >
          <Star color="#E5B85C" size={16} />
          <span className="text-sm font-semibold">Batch 3 · Januari–Juni 2026 · Kuota Terbatas!</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-black mb-5 leading-tight">
          Siap Bergabung
          <br />
          dengan Nara?
        </h2>

        <p className="text-xl opacity-85 mb-10 max-w-2xl mx-auto leading-relaxed">
          Hubungi kami sekarang untuk info lengkap, jadwal terbaru, dan konsultasi gratis.
          Nggak ada komitmen — langsung ngobrol aja!
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {/* WhatsApp */}
          <a
            href="https://wa.me/6285924136533"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-bold px-8 py-4 rounded-full text-lg transition-all hover:translate-y-0.5"
            style={{
              backgroundColor: '#F5EFE6',
              color: '#3D6666',
              border: '3px solid #F5EFE6',
              boxShadow: '5px 5px 0px 0px rgba(0,0,0,0.3)',
            }}
          >
            <svg viewBox="0 0 24 24" width={24} height={24} fill="#5A8A8A" aria-hidden="true">
              <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12 0C5.37 0 0 5.37 0 12c0 2.14.56 4.15 1.54 5.89L0 24l6.3-1.52A11.97 11.97 0 0012 24c6.63 0 12-5.37 12-12S18.63 0 12 0zm0 22c-1.9 0-3.66-.52-5.16-1.43l-.37-.22-3.84.93.97-3.77-.24-.39A9.98 9.98 0 012 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" />
            </svg>
            0859-2413-6533
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/belajardinara_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-bold px-8 py-4 rounded-full text-lg transition-colors hover:bg-white/10"
            style={{ border: '2.5px solid rgba(245,239,230,0.5)', color: '#F5EFE6' }}
          >
            <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @belajardinara_
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm opacity-75">
          {['✓ Konsultasi gratis', '✓ Tanpa komitmen jangka panjang', '✓ Kuota terbatas!'].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ------------------------------------------------------------------
// FOOTER
// ------------------------------------------------------------------

function Footer() {
  return (
    <footer className="py-12" style={{ backgroundColor: '#3D6666', color: '#F5EFE6' }}>
      <div className="max-w-5xl mx-auto px-5">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <NaraLogo dark />
            <p className="text-sm mt-3 leading-relaxed" style={{ opacity: 0.65 }}>
              Tempat les privat &amp; semi privat kelas kecil untuk anak TK–SMA. Belajar nyaman,
              kelas kecil, dengan pendampingan penuh.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4
              className="font-bold text-xs uppercase tracking-[0.2em] mb-4"
              style={{ color: '#E5B85C' }}
            >
              Program
            </h4>
            <ul className="space-y-2 text-sm" style={{ opacity: 0.75 }}>
              <li>Regular Class — mulai Rp 150.000</li>
              <li>Private Class — mulai Rp 250.000</li>
              <li>Bimbel TKA — mulai Rp 300.000</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-bold text-xs uppercase tracking-[0.2em] mb-4"
              style={{ color: '#E5B85C' }}
            >
              Kontak &amp; Lokasi
            </h4>
            <ul className="space-y-2 text-sm" style={{ opacity: 0.75 }}>
              <li>
                <a
                  href="https://wa.me/6285924136533"
                  className="hover:opacity-100 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📱 0859-2413-6533
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/belajardinara_"
                  className="hover:opacity-100 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📸 @belajardinara_
                </a>
              </li>
              <li>📍 Inkopad Tajurhalang &amp; Parung, Bogor</li>
            </ul>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: '1px solid rgba(245,239,230,0.2)', opacity: 0.5 }}
        >
          <span>© 2026 Nara Private Academy. All rights reserved.</span>
          <span>Belajar nyaman, kelas kecil, pendampingan penuh.</span>
        </div>
      </div>
    </footer>
  )
}

// ------------------------------------------------------------------
// ROOT PAGE
// ------------------------------------------------------------------

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <ProgramsSection />
        <WhyNaraSection />
        <SubjectsSection />
        <HowItWorksSection />
        <LocationSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
