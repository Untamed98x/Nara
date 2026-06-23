// ─── Nara Private Academy — Memphis Modern redesign ───────────────────────────
// Design system: Lexend · nara-green #2D6A6A · spark-coral #FF7F67
// spark-teal #4DB6AC · spark-yellow #FFD54F · ink-black #1A1A1A
// Hard shadows · 2–4px solid borders · Memphis dual-dot background
// ──────────────────────────────────────────────────────────────────────────────

// ─── SVG SHAPES ────────────────────────────────────────────────────────────────

function ShapeCircle({ color, size = 60 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" aria-hidden="true">
      <circle cx="30" cy="30" r="28" fill={color} stroke="#1A1A1A" strokeWidth="4" />
    </svg>
  )
}

function ShapeSquare({ color, size = 80 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" aria-hidden="true">
      <rect x="10" y="10" width="60" height="60" fill={color} stroke="#1A1A1A" strokeWidth="4" transform="rotate(15 40 40)" />
    </svg>
  )
}

function ShapeTriangle({ color, size = 50 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 50 50" aria-hidden="true">
      <path d="M5,45 L25,5 L45,45 Z" fill={color} stroke="#1A1A1A" strokeWidth="4" />
    </svg>
  )
}

function ShapeStar({ color, size = 50 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12,2 L14.6,8.8 L22,8.8 L16.2,13.4 L18.4,20 L12,16 L5.6,20 L7.8,13.4 L2,8.8 L9.4,8.8 Z"
        fill={color}
        stroke="#1A1A1A"
        strokeWidth="1"
      />
    </svg>
  )
}

function ShapeSquiggle({ color = '#2D6A6A', width = 150 }: { color?: string; width?: number }) {
  return (
    <svg viewBox="0 0 200 30" width={width} fill="none" aria-hidden="true">
      <path
        d="M0,15 C15,3 30,27 45,15 C60,3 75,27 90,15 C105,3 120,27 135,15 C150,3 165,27 180,15"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  )
}

// ─── CHECK ICON ────────────────────────────────────────────────────────────────

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="11" fill={color} />
      <path d="M7 12.5l3.5 3.5 6.5-7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─── MAP PIN ICON ──────────────────────────────────────────────────────────────

function MapPinIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill={color} stroke="#1A1A1A" strokeWidth="1.5" />
      <circle cx="12" cy="9" r="2.5" fill="white" />
    </svg>
  )
}

// ─── PHONE ICON ────────────────────────────────────────────────────────────────

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#2D6A6A" />
    </svg>
  )
}

// ─── WHATSAPP ICON ─────────────────────────────────────────────────────────────

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

// ─── INSTAGRAM ICON ────────────────────────────────────────────────────────────

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

// ──────────────────────────────────────────────────────────────────────────────
// NAVBAR
// ──────────────────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-20 py-0 h-20 bg-background border-b-2 border-ink-black shadow-hard-sm">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
          <rect width="36" height="36" rx="8" fill="#2D6A6A" />
          <path d="M8,28 L8,12 L18,8 L28,12 L28,28" stroke="white" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
          <path d="M8,28 Q18,22 28,28" stroke="#FFD54F" strokeWidth="2.5" fill="none" />
          <circle cx="18" cy="10" r="4" fill="#FFD54F" />
        </svg>
        <div>
          <span className="text-xl font-black text-nara-green leading-none block">Nara</span>
          <span className="text-[10px] font-bold text-on-surface-variant tracking-widest uppercase leading-none">Private Academy</span>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-8 items-center">
        {[
          { href: '#program', label: 'Program' },
          { href: '#spark', label: 'Mata Pelajaran' },
          { href: '#lokasi', label: 'Lokasi' },
        ].map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="font-semibold text-on-surface-variant hover:text-nara-green transition-colors duration-200"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* CTA */}
      <a
        href="https://wa.me/6285924136533"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-nara-green text-white font-bold text-sm px-5 py-2.5 border-2 border-ink-black rounded-lg shadow-hard-sm btn-press transition-all duration-100"
      >
        Daftar Sekarang
      </a>
    </header>
  )
}

// ──────────────────────────────────────────────────────────────────────────────
// HERO
// ──────────────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 md:px-20 pt-28 pb-24 overflow-hidden memphis-pattern">
      {/* Floating Memphis shapes */}
      <div className="absolute top-24 left-[8%] pointer-events-none floating-shape">
        <ShapeCircle color="#FFD54F" size={64} />
      </div>
      <div className="absolute bottom-32 right-[6%] pointer-events-none floating-shape-2">
        <ShapeSquare color="#FF7F67" size={72} />
      </div>
      <div className="absolute top-56 right-[14%] pointer-events-none floating-shape-3">
        <ShapeTriangle color="#4DB6AC" size={52} />
      </div>
      <div className="absolute bottom-44 left-[12%] pointer-events-none floating-shape-2">
        <ShapeStar color="#FFD54F" size={44} />
      </div>

      <div className="relative z-10 max-w-4xl">
        {/* Badge */}
        <div className="inline-block px-4 py-2 bg-spark-yellow border-2 border-ink-black rounded-full font-black text-sm uppercase tracking-wider mb-6 -rotate-2 shadow-hard-sm">
          ✨ Bukan Bimbel Biasa
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-ink-black">
          Belajar Jadi Terasa{' '}
          <span className="bg-spark-teal text-white px-2 inline-block">Lebih Ringan</span>{' '}
          &amp;{' '}
          <span className="bg-spark-coral text-white px-2 inline-block underline decoration-4 underline-offset-4">
            Tidak Menegangkan
          </span>
        </h1>

        <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
          Les semi privat dengan kelas kecil — maksimal 3–4 anak per sesi. Setiap anak punya ritmenya sendiri,
          dan kami di sini untuk mendampingi, bukan sekadar mengejar nilai.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/6285924136533"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 border-2 border-ink-black rounded-xl shadow-hard btn-press transition-all duration-100 text-base"
          >
            <WhatsAppIcon size={22} />
            Ngobrol dulu, gratis
          </a>
          <a
            href="#program"
            className="flex items-center justify-center bg-nara-beige text-ink-black font-bold px-8 py-4 border-2 border-ink-black rounded-xl shadow-hard-sm btn-press transition-all duration-100 text-base hover:bg-surface-container"
          >
            Lihat Program Kami
          </a>
        </div>
      </div>

      {/* Hero visual card */}
      <div className="relative z-10 mt-16 w-full max-w-4xl px-4">
        <div className="relative rounded-2xl border-2 border-ink-black shadow-hard overflow-hidden bg-nara-green aspect-video">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSQhrLLQpAjDoNTmJAO6hyMgH4xhBU-e_Em761yXyYI8pQ0VLMInLaWK2iBo2JIATxTizaPk_yF54YU40LmP8WJhuwcXQjmuLeorPwNKT7G1GrWiW6b3BTypOpTY9KFGresmpkT7tYjHFaRMCNtmv6HLY3zvyAq0ECuHJRPVdB5qNZC4RrUo5w7GqyI7DHt5g-qwA-Tk21TELDoT-EpaY72dSARD3VHfkeaaCY2Poj9C3xInQ1-jSDNzQvEH6Rf0h6R8pNoci4hZJg"
            alt="Suasana belajar di Nara Private Academy — kelas kecil, suasana hangat"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────────────────────────────────────
// STATS BAR
// ──────────────────────────────────────────────────────────────────────────────

const stats = [
  { icon: '👥', value: 'Maks 3–4 Anak', label: 'Semi Privat', rotate: 'hover:rotate-2' },
  { icon: '💰', value: '150rb/bln', label: 'Harga Mulai', rotate: 'hover:-rotate-2' },
  { icon: '📚', value: '4 Mata Pelajaran', label: 'Program Unggulan', rotate: 'hover:rotate-2' },
  { icon: '🏫', value: 'TK – SMA', label: 'Semua Jenjang', rotate: 'hover:-rotate-2' },
]

function StatsBar() {
  return (
    <section className="bg-nara-green py-16 px-6 md:px-20 border-y-4 border-ink-black">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map(({ icon, value, label, rotate }) => (
          <div
            key={label}
            className={`bg-white p-6 rounded-xl border-2 border-ink-black shadow-hard-sm text-center transition-transform duration-200 ${rotate}`}
          >
            <div className="text-4xl mb-2">{icon}</div>
            <p className="text-xl font-black text-on-surface block">{value}</p>
            <p className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mt-1">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────────────────────────────────────
// PROGRAMS
// ──────────────────────────────────────────────────────────────────────────────

const programs = [
  {
    title: 'Regular Class',
    color: 'bg-spark-teal',
    textColor: 'text-white',
    borderColor: 'border-spark-teal',
    btnColor: 'bg-spark-teal text-white',
    price: 'Rp 150.000 / bln',
    sub: '2–6 orang · 4–8 pertemuan',
    features: [
      'Kelompok kecil 2–6 siswa',
      'Materi mengikuti kurikulum sekolah',
      'Tersedia semua jenjang TK–SMA',
    ],
    badge: null,
  },
  {
    title: 'Private Class',
    color: 'bg-spark-coral',
    textColor: 'text-white',
    borderColor: 'border-spark-coral',
    btnColor: 'bg-spark-coral text-white',
    price: 'Rp 250.000 / bln',
    sub: '1-on-1 · 4–8 pertemuan',
    features: [
      'Belajar 1-on-1, lebih fokus & terarah',
      'Materi by request, jadwal fleksibel',
      'Pendampingan penuh per sesi',
    ],
    badge: 'POPULER!',
  },
  {
    title: 'Bimbel TKA',
    color: 'bg-spark-yellow',
    textColor: 'text-ink-black',
    borderColor: 'border-spark-yellow',
    btnColor: 'bg-spark-yellow text-ink-black',
    price: 'Rp 300.000 / bln',
    sub: '2–4 orang · 8–16 pertemuan',
    features: [
      'Persiapan Tes Kemampuan Akademik',
      'Simulasi try out berkala',
      'Strategi soal UTBK / masuk SMA',
    ],
    badge: null,
  },
]

function ProgramsSection() {
  return (
    <section id="program" className="py-28 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-ink-black mb-4">
          Pilih Program Yang Cocok Untukmu
        </h2>
        <div className="h-2 w-24 bg-spark-coral mx-auto rounded-full border border-ink-black" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {programs.map(({ title, color, textColor, borderColor, btnColor, price, sub, features, badge }) => (
          <div
            key={title}
            className="bg-white border-4 border-ink-black rounded-2xl overflow-hidden shadow-hard flex flex-col hover:scale-[1.02] transition-transform duration-200 relative"
          >
            {badge && (
              <div className="absolute -top-4 -right-4 bg-spark-yellow border-2 border-ink-black px-4 py-2 rounded-lg font-black text-xs text-ink-black rotate-12 z-20 shadow-hard-sm">
                {badge}
              </div>
            )}

            {/* Card header */}
            <div className={`${color} p-6 border-b-4 border-ink-black flex justify-between items-center`}>
              <h3 className={`text-xl font-black ${textColor}`}>{title}</h3>
              <span className={`text-2xl ${textColor}`}>✦</span>
            </div>

            {/* Card body */}
            <div className="p-8 flex-grow">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-5">{sub}</p>
              <ul className="space-y-4 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckIcon color="#2D6A6A" />
                    <span className="text-base text-on-surface-variant">{f}</span>
                  </li>
                ))}
              </ul>
              <div>
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block mb-1">Mulai Dari</span>
                <span className="text-2xl font-black text-nara-green">{price}</span>
              </div>
            </div>

            <div className="p-6 pt-0">
              <a
                href="https://wa.me/6285924136533"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3.5 border-2 border-ink-black rounded-xl ${btnColor} font-bold text-sm shadow-hard-sm btn-press transition-all duration-100`}
              >
                Tanya dulu, yuk →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────────────────────────────────────
// WHY NARA
// ──────────────────────────────────────────────────────────────────────────────

const whyItems = [
  {
    icon: '⏰',
    bg: 'bg-spark-teal',
    title: 'Jadwal Fleksibel',
    desc: 'Pilih waktu belajar yang paling nyaman — tersedia sesi pagi hingga malam.',
  },
  {
    icon: '📖',
    bg: 'bg-spark-coral',
    title: 'Modul Gratis',
    desc: 'Semua siswa mendapatkan modul pembelajaran eksklusif Nara tanpa biaya tambahan.',
  },
  {
    icon: '🎤',
    bg: 'bg-spark-yellow',
    title: 'Tutor Berpengalaman',
    desc: 'Tutor kami dilatih khusus untuk menciptakan suasana belajar yang ramah anak.',
  },
]

function WhyNaraSection() {
  return (
    <section id="tentang" className="bg-nara-beige py-28 px-6 md:px-20 border-y-2 border-ink-black relative overflow-hidden">
      {/* Background squiggle doodle */}
      <div className="absolute top-10 right-16 opacity-10 pointer-events-none">
        <ShapeSquiggle color="#2D6A6A" width={200} />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Text column */}
        <div className="w-full md:w-1/2">
          <div className="relative inline-block mb-6">
            <h2 className="text-3xl md:text-4xl font-black text-ink-black relative z-10">
              Kenapa Harus Nara Academy?
            </h2>
            <div className="absolute -bottom-2 -left-2 w-full h-4 bg-spark-yellow -z-0 opacity-70" />
          </div>
          <p className="text-lg text-on-surface-variant mb-10 leading-relaxed">
            Kami nggak jual mimpi nilai langsung naik. Yang kami jaga: anak jadi lebih nyaman, berani nanya,
            dan nggak ketinggalan diam-diam. Sisanya nyusul dengan sendirinya.
          </p>
          <div className="flex flex-col gap-5">
            {whyItems.map(({ icon, bg, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 items-start bg-white p-5 border-2 border-ink-black rounded-xl shadow-hard-sm"
              >
                <div className={`w-12 h-12 ${bg} border-2 border-ink-black rounded-lg flex items-center justify-center text-2xl shrink-0`}>
                  {icon}
                </div>
                <div>
                  <h4 className="text-lg font-black text-ink-black mb-1">{title}</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual column */}
        <div className="w-full md:w-1/2 relative">
          <div className="absolute -top-4 -left-4 w-full h-full border-4 border-spark-teal rounded-2xl rotate-3 pointer-events-none" />
          <div className="relative border-4 border-ink-black rounded-2xl overflow-hidden shadow-hard aspect-square">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtaoU5laBfsVI_sjwGmulfMT4nTUra2q0FXIdGo4hPjazbU5J6tBZi2eoib9GqagxUH49vA3s5s4g3TBYWBxa4FJi-2PZpgXGJR31XJtkWILOEewsONRlNhvqRKGm1I4066Cfj_eI2v2-Wte-q_I7oAOOzyzEfH4GotCrY9iyphiO6ofUtI2NEix5iaAVejMAGHFKncqud1bIGNzlBKFQEZhIIhxx6AaK5-Bdq7OE4x0WPDPWVLHDbs9FZXkc2HaHJh2rn_kOHXoXw"
              alt="Tutor Nara bersama murid — suasana belajar yang hangat dan personal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────────────────────────────────────
// SPARK PROGRAMS
// ──────────────────────────────────────────────────────────────────────────────

const sparkPrograms = [
  {
    id: 'words',
    title: 'Spark Words',
    icon: '📝',
    iconBg: 'bg-spark-coral',
    border: 'border-spark-coral',
    checkColor: '#FF7F67',
    desc: 'Program penguasaan Bahasa Inggris yang menyenangkan dengan metode imersif untuk membangun kepercayaan diri berbicara.',
    tags: ['LEVEL: SD – SMA', 'FOKUS: Conversational & Reading'],
    badge: { label: 'POPULER', bg: 'bg-spark-coral', text: 'text-white' },
  },
  {
    id: 'numbers',
    title: 'Spark Numbers',
    icon: '🔢',
    iconBg: 'bg-spark-teal',
    border: 'border-spark-teal',
    checkColor: '#4DB6AC',
    desc: 'Matematika tidak lagi menakutkan. Kami menggunakan visualisasi konkret untuk membedah konsep logika yang kompleks.',
    tags: ['LEVEL: SD – SMP', 'FOKUS: Logic & Problem Solving'],
    badge: null,
  },
  {
    id: 'tech',
    title: 'Spark Tech',
    icon: '💻',
    iconBg: 'bg-nara-green',
    border: 'border-nara-green',
    checkColor: '#2D6A6A',
    desc: 'Membangun dasar berpikir komputasional melalui coding, robotika, dan literasi digital sejak dini.',
    tags: ['LEVEL: SMP – SMA', 'FOKUS: Coding & Robotics'],
    badge: { label: 'NEW', bg: 'bg-spark-yellow', text: 'text-ink-black' },
  },
  {
    id: 'art',
    title: 'Spark Art',
    icon: '🎨',
    iconBg: 'bg-spark-yellow',
    border: 'border-spark-yellow',
    checkColor: '#FFD54F',
    desc: 'Mengasah ekspresi diri melalui eksplorasi warna, komposisi, dan berbagai media seni rupa.',
    tags: ['LEVEL: TK – SD', 'FOKUS: Coloring & Sketching'],
    badge: null,
  },
]

function SparkProgramsSection() {
  return (
    <section id="spark" className="py-28 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block bg-spark-yellow border-2 border-ink-black px-4 py-1.5 rounded-full font-black text-sm uppercase tracking-wider mb-4 -rotate-2 shadow-hard-sm">
          Eksplorasi Bakat
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-ink-black mb-4">Pilih Program yang Tepat</h2>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          Setiap anak beda kebutuhan — makanya programnya juga beda. Geser buat lihat mana yang paling pas, atau langsung chat, biar kami bantu pilihin.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {sparkPrograms.map(({ id, title, icon, iconBg, border, checkColor, desc, tags, badge }) => (
          <div
            key={id}
            className={`bg-nara-beige border-2 ${border} p-8 rounded-xl shadow-hard-lg flex flex-col md:flex-row gap-8 hover:-translate-y-1 transition-transform duration-200`}
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center border-2 border-ink-black text-2xl`}>
                  {icon}
                </div>
                <h3 className="text-2xl font-black text-ink-black">{title}</h3>
              </div>
              <p className="text-sm text-on-surface-variant mb-5 leading-relaxed">{desc}</p>
              <div className="space-y-2">
                {tags.map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <CheckIcon color={checkColor} />
                    <span className="text-xs font-black text-ink-black uppercase tracking-wider">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual panel */}
            <div className={`w-full md:w-44 h-44 bg-white rounded-xl border-2 ${border} overflow-hidden flex items-center justify-center relative shrink-0`}>
              <span className="text-7xl">{icon}</span>
              {badge && (
                <div className={`absolute bottom-0 right-0 ${badge.bg} border-2 border-ink-black px-2 py-1 rotate-3`}>
                  <span className={`${badge.text} font-black text-xs`}>{badge.label}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────────────────────────────────────
// HOW TO REGISTER
// ──────────────────────────────────────────────────────────────────────────────

const steps = [
  { num: '1', bg: 'bg-spark-yellow', text: 'text-ink-black', title: 'Pilih Program', desc: 'Tentukan paket yang sesuai kebutuhan Anda.' },
  { num: '2', bg: 'bg-spark-teal', text: 'text-white', title: 'Hubungi Admin', desc: 'Klik tombol WhatsApp untuk konsultasi gratis.' },
  { num: '3', bg: 'bg-spark-coral', text: 'text-white', title: 'Trial Class', desc: 'Coba keseruan belajar di Nara Academy.' },
  { num: '4', bg: 'bg-nara-green', text: 'text-white', title: 'Mulai Belajar!', desc: 'Selamat datang di keluarga Nara!' },
]

function HowItWorksSection() {
  return (
    <section className="py-28 px-6 md:px-20 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-black text-ink-black mb-16">
        Cara Daftar Gampang Banget!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        {/* Connector line */}
        <div className="hidden md:block absolute top-10 left-[13%] right-[13%] h-1 bg-ink-black opacity-20 -z-10 rounded-full" />

        {steps.map(({ num, bg, text, title, desc }) => (
          <div key={num} className="flex flex-col items-center">
            <div
              className={`w-20 h-20 ${bg} border-4 border-ink-black rounded-full flex items-center justify-center text-2xl font-black shadow-hard-sm mb-5 ${text}`}
            >
              {num}
            </div>
            <h5 className="text-xl font-black text-ink-black mb-2">{title}</h5>
            <p className="text-sm text-on-surface-variant px-4 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────────────────────────────────────
// LOCATIONS
// ──────────────────────────────────────────────────────────────────────────────

const locations = [
  {
    name: 'Area Inkopad',
    address: 'Komplek Inkopad, Tajurhalang, Kab. Bogor — dekat pintu masuk komplek.',
    phone: '0859-2413-6533',
    mapUrl: 'https://maps.google.com',
    bg: '#4DB6AC',
    accent: '#FFD54F',
  },
  {
    name: 'Area Parung',
    address: 'Area Parung, Kab. Bogor — konfirmasi lokasi persis via WhatsApp.',
    phone: '0859-2413-6533',
    mapUrl: 'https://maps.google.com',
    bg: '#2D6A6A',
    accent: '#FF7F67',
  },
]

function LocationSection() {
  return (
    <section id="lokasi" className="py-28 px-6 md:px-20 bg-surface-container-highest border-t-4 border-ink-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-ink-black mb-4">
            Temukan Cabang Nara Terdekat
          </h2>
          <div className="h-2 w-24 bg-nara-green mx-auto rounded-full border border-ink-black" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {locations.map(({ name, address, phone, mapUrl, bg, accent }) => (
            <div
              key={name}
              className="bg-white border-2 border-ink-black rounded-2xl overflow-hidden shadow-hard flex flex-col md:flex-row"
            >
              {/* Map visual */}
              <div className="md:w-1/2 h-48 md:h-auto overflow-hidden" style={{ minHeight: '200px' }}>
                <svg viewBox="0 0 300 250" className="w-full h-full" style={{ background: bg }} aria-hidden="true">
                  {/* Grid lines */}
                  {[50, 100, 150, 200, 250].map(x => (
                    <line key={x} x1={x} y1="0" x2={x} y2="250" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                  ))}
                  {[50, 100, 150, 200].map(y => (
                    <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                  ))}
                  {/* Roads */}
                  <line x1="0" y1="125" x2="300" y2="125" stroke="rgba(255,255,255,0.4)" strokeWidth="8" />
                  <line x1="150" y1="0" x2="150" y2="250" stroke="rgba(255,255,255,0.4)" strokeWidth="6" />
                  {/* Pin */}
                  <circle cx="150" cy="110" r="18" fill={accent} stroke="#1A1A1A" strokeWidth="3" />
                  <circle cx="150" cy="110" r="7" fill="white" />
                  <line x1="150" y1="128" x2="150" y2="145" stroke={accent} strokeWidth="4" />
                  {/* Label */}
                  <rect x="100" y="152" width="100" height="26" rx="6" fill="white" stroke="#1A1A1A" strokeWidth="1.5" />
                  <text x="150" y="169" textAnchor="middle" fill="#1A1A1A" fontSize="11" fontWeight="700" fontFamily="sans-serif">{name}</text>
                </svg>
              </div>

              {/* Info */}
              <div className="md:w-1/2 p-8">
                <h3 className="text-xl font-black text-nara-green mb-3">{name}</h3>
                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">{address}</p>
                <div className="space-y-3">
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-bold text-sm text-nara-green hover:underline underline-offset-2"
                  >
                    <MapPinIcon color="#2D6A6A" />
                    Buka Google Maps
                  </a>
                  <a
                    href={`https://wa.me/${phone.replace(/-/g, '').replace('0', '62')}`}
                    className="flex items-center gap-2 font-bold text-sm text-nara-green hover:underline underline-offset-2"
                  >
                    <PhoneIcon />
                    {phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────────────────────────────────────
// CTA SECTION
// ──────────────────────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section className="py-24 px-6 md:px-20 text-center bg-spark-yellow border-t-4 border-ink-black relative overflow-hidden">
      {/* Memphis deco */}
      <div className="absolute top-8 left-8 pointer-events-none opacity-30">
        <ShapeCircle color="#2D6A6A" size={80} />
      </div>
      <div className="absolute bottom-8 right-8 pointer-events-none opacity-30">
        <ShapeTriangle color="#FF7F67" size={70} />
      </div>
      <div className="absolute top-12 right-32 pointer-events-none opacity-20">
        <ShapeSquiggle color="#1A1A1A" width={120} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-ink-black mb-6 leading-tight">
          Lagi cari les yang nggak bikin anak tertekan?
        </h2>
        <p className="text-lg font-medium text-on-surface mb-10 max-w-xl mx-auto">
          Boleh ngobrol dulu — ceritain kebutuhan anak, kami bantu cariin yang paling cocok. Tanpa paksaan.
        </p>

        {/* Bounce arrow doodle */}
        <div className="hidden md:block absolute bottom-10 right-20 animate-bounce pointer-events-none">
          <svg fill="none" height="70" viewBox="0 0 100 100" width="70">
            <path d="M20 20C40 30 50 60 80 80M80 80L70 60M80 80L60 70" stroke="#2D6A6A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
          </svg>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/6285924136533"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-ink-black text-white font-bold px-10 py-4 border-2 border-ink-black rounded-2xl shadow-hard btn-press transition-all duration-100 text-base hover:bg-nara-green"
          >
            <WhatsAppIcon size={22} />
            Chat di WhatsApp, santai aja
          </a>
          <a
            href="https://instagram.com/belajardinara_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-transparent text-ink-black font-bold px-10 py-4 border-2 border-ink-black rounded-2xl hover:bg-white/50 transition-colors text-base"
          >
            <InstagramIcon size={22} />
            Follow Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────────────────────────────────────
// FOOTER
// ──────────────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="w-full py-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-10 bg-surface-container-highest border-t-2 border-ink-black">
      {/* Brand */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <svg width="32" height="32" viewBox="0 0 36 36" aria-hidden="true">
            <rect width="36" height="36" rx="8" fill="#2D6A6A" />
            <path d="M8,28 L8,12 L18,8 L28,12 L28,28" stroke="white" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
            <path d="M8,28 Q18,22 28,28" stroke="#FFD54F" strokeWidth="2.5" fill="none" />
            <circle cx="18" cy="10" r="4" fill="#FFD54F" />
          </svg>
          <span className="text-lg font-black text-nara-green">Nara Private Academy</span>
        </div>
        <p className="text-sm text-on-surface-variant leading-relaxed max-w-xs mb-4">
          Bukan Bimbel Biasa. Memberikan pengalaman belajar yang personal, kreatif, dan menyenangkan untuk generasi masa depan.
        </p>
        <div className="flex gap-3">
          <a
            href="https://wa.me/6285924136533"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#25D366] border-2 border-ink-black rounded-lg flex items-center justify-center hover:shadow-hard-sm transition-shadow"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon size={18} />
          </a>
          <a
            href="https://instagram.com/belajardinara_"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] border-2 border-ink-black rounded-lg flex items-center justify-center hover:shadow-hard-sm transition-shadow"
            aria-label="Instagram"
          >
            <InstagramIcon size={18} />
          </a>
        </div>
      </div>

      {/* Navigation */}
      <div>
        <h4 className="font-black text-ink-black uppercase tracking-widest text-sm mb-5">Navigasi</h4>
        <ul className="space-y-3">
          {[
            { href: '#program', label: 'Program Kami' },
            { href: '#spark', label: 'Mata Pelajaran' },
            { href: '#tentang', label: 'Kenapa Nara' },
            { href: '#lokasi', label: 'Lokasi Cabang' },
          ].map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="text-sm text-on-surface-variant hover:text-nara-green hover:underline underline-offset-4 transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="font-black text-ink-black uppercase tracking-widest text-sm mb-5">Kontak</h4>
        <ul className="space-y-3 text-sm text-on-surface-variant">
          <li>📍 Inkopad & Parung, Kab. Bogor</li>
          <li>📱 0859-2413-6533 (WhatsApp)</li>
          <li>📸 @belajardinara_</li>
        </ul>
      </div>

      {/* Copyright */}
      <div className="col-span-full border-t-2 border-ink-black pt-8 text-center">
        <p className="text-sm text-on-surface-variant">
          © 2025 Nara Private Academy · Bukan Bimbel Biasa.
        </p>
      </div>
    </footer>
  )
}

// ──────────────────────────────────────────────────────────────────────────────
// PAGE
// ──────────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <ProgramsSection />
        <WhyNaraSection />
        <SparkProgramsSection />
        <HowItWorksSection />
        <LocationSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
