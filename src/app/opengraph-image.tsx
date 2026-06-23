import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Nara Private Academy — Les Privat & Semi Privat di Parung & Inkopad'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '1200px',
          height: '630px',
          backgroundColor: '#F5EFE6',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: '"Arial Black", "Arial Bold", Arial, sans-serif',
        }}
      >
        {/* ============ MEMPHIS BACKGROUND DECORATIONS ============ */}

        {/* Coral triangle top-left */}
        <svg style={{ position: 'absolute', top: -16, left: 24 }} width="100" height="90" viewBox="0 0 100 90">
          <polygon points="50,0 100,90 0,90" fill="#E8917D" opacity="0.6" />
        </svg>

        {/* Teal circle ring */}
        <svg style={{ position: 'absolute', top: 48, left: 136 }} width="72" height="72" viewBox="0 0 72 72">
          <circle cx="36" cy="36" r="33" fill="none" stroke="#5A8A8A" strokeWidth="4" opacity="0.45" />
        </svg>

        {/* Mustard dot row */}
        <div style={{ position: 'absolute', top: '28px', left: '232px', display: 'flex', gap: '10px' }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{ width: '13px', height: '13px', borderRadius: '50%', backgroundColor: '#E5B85C', opacity: 0.8 }}
            />
          ))}
        </div>

        {/* Squiggle left middle */}
        <svg style={{ position: 'absolute', top: 200, left: 8 }} width="56" height="24" viewBox="0 0 112 30">
          <path
            d="M0,15 C15,3 30,27 45,15 C60,3 75,27 90,15 C105,3 112,15 112,15"
            stroke="#8B6F47"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.4"
          />
        </svg>

        {/* Plus bottom-left */}
        <svg style={{ position: 'absolute', bottom: 85, left: 28 }} width="26" height="26" viewBox="0 0 26 26">
          <line x1="13" y1="0" x2="13" y2="26" stroke="#8B6F47" strokeWidth="4" strokeLinecap="round" opacity="0.45" />
          <line x1="0" y1="13" x2="26" y2="13" stroke="#8B6F47" strokeWidth="4" strokeLinecap="round" opacity="0.45" />
        </svg>

        {/* Sage diamond bottom-left */}
        <svg style={{ position: 'absolute', bottom: 22, left: 65 }} width="38" height="38" viewBox="0 0 40 40">
          <rect x="5" y="5" width="30" height="30" fill="#A8C66C" transform="rotate(45 20 20)" opacity="0.55" />
        </svg>

        {/* Large circle ring behind teal panel */}
        <svg style={{ position: 'absolute', bottom: -70, right: 400 }} width="170" height="170" viewBox="0 0 170 170">
          <circle cx="85" cy="85" r="80" fill="none" stroke="#E5B85C" strokeWidth="5" opacity="0.3" />
        </svg>

        {/* Zigzag top edge */}
        <svg style={{ position: 'absolute', top: 0, left: 260, opacity: 0.2 }} width="300" height="16" viewBox="0 0 300 16">
          <polyline
            points="0,14 20,2 40,14 60,2 80,14 100,2 120,14 140,2 160,14 180,2 200,14 220,2 240,14 260,2 280,14 300,2"
            stroke="#8B6F47"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* ============ LEFT CONTENT PANEL ============ */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '50px 54px',
            width: '730px',
            height: '630px',
          }}
        >
          {/* Logo row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Book + sun icon */}
            <svg width="52" height="52" viewBox="0 0 58 58">
              <line x1="29" y1="2" x2="29" y2="8" stroke="#E5B85C" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="41" y1="6" x2="38" y2="11" stroke="#E5B85C" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="17" y1="6" x2="20" y2="11" stroke="#E5B85C" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="29" cy="18" r="8" fill="#E5B85C" />
              <path d="M29,25 C29,25 14,22 6,27 L6,52 C14,47 29,50 29,50 Z" fill="#5A8A8A" />
              <path d="M29,25 C29,25 44,22 52,27 L52,52 C44,47 29,50 29,50 Z" fill="#3D6666" />
              <line x1="29" y1="25" x2="29" y2="50" stroke="#E5B85C" strokeWidth="1.5" />
              <line x1="11" y1="33" x2="26" y2="31" stroke="#F5EFE6" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
              <line x1="11" y1="39" x2="26" y2="37" stroke="#F5EFE6" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
              <line x1="32" y1="31" x2="47" y2="33" stroke="#F5EFE6" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
              <line x1="32" y1="37" x2="47" y2="39" stroke="#F5EFE6" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
            </svg>

            {/* Wordmark */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '30px', fontWeight: 900, color: '#3D6666', lineHeight: 1.1, fontStyle: 'italic' }}>
                Nara
              </span>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#5A8A8A',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                }}
              >
                Private Academy
              </span>
            </div>

            {/* Location pill */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: '10px',
                backgroundColor: 'rgba(90,138,138,0.1)',
                borderWidth: '1.5px',
                borderStyle: 'solid',
                borderColor: 'rgba(90,138,138,0.35)',
                borderRadius: '999px',
                paddingTop: '5px',
                paddingBottom: '5px',
                paddingLeft: '14px',
                paddingRight: '14px',
                fontSize: '12px',
                color: '#3D6666',
                fontWeight: 600,
              }}
            >
              Parung &amp; Inkopad, Bogor
            </div>
          </div>

          {/* Headline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
            <span style={{ fontSize: '57px', fontWeight: 900, color: '#3D6666', lineHeight: 1.05, letterSpacing: '-1.5px' }}>
              Belajar Lebih
            </span>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'baseline' }}>
              <span style={{ fontSize: '57px', fontWeight: 900, color: '#E8917D', lineHeight: 1.05, letterSpacing: '-1.5px' }}>
                Nyaman
              </span>
              <span style={{ fontSize: '57px', fontWeight: 900, color: '#3D6666', lineHeight: 1.05, letterSpacing: '-1.5px' }}>
                &amp;
              </span>
            </div>
            <span style={{ fontSize: '57px', fontWeight: 900, color: '#5A8A8A', lineHeight: 1.05, letterSpacing: '-1.5px' }}>
              Menyenangkan!
            </span>
          </div>

          {/* Feature checklist */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              'Kelas kecil maks. 4–6 siswa · jadwal fleksibel',
              'Matematika · B. Inggris · Komputer · Mewarnai',
              'Tersedia untuk TK, SD, SMP, SMA/SMK',
            ].map((text) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(168,198,108,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path
                      d="M2,6 L5,9 L10,3"
                      stroke="#A8C66C"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span style={{ fontSize: '16px', color: '#555', fontWeight: 500 }}>{text}</span>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            {/* WhatsApp badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: '#5A8A8A',
                color: '#F5EFE6',
                paddingTop: '13px',
                paddingBottom: '13px',
                paddingLeft: '26px',
                paddingRight: '26px',
                borderRadius: '999px',
                fontSize: '18px',
                fontWeight: 700,
                borderWidth: '2.5px',
                borderStyle: 'solid',
                borderColor: '#3D6666',
              }}
            >
              {/* WhatsApp icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#F5EFE6">
                <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12 0C5.37 0 0 5.37 0 12c0 2.14.56 4.15 1.54 5.89L0 24l6.3-1.52A11.97 11.97 0 0012 24c6.63 0 12-5.37 12-12S18.63 0 12 0zm0 22c-1.9 0-3.66-.52-5.16-1.43l-.37-.22-3.84.93.97-3.77-.24-.39A9.98 9.98 0 012 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" />
              </svg>
              0859-2413-6533
            </div>

            {/* Instagram handle */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#8B6F47',
                fontSize: '16px',
                fontWeight: 600,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#8B6F47">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @belajardinara_
            </div>
          </div>
        </div>

        {/* ============ RIGHT TEAL PANEL ============ */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '470px',
            height: '630px',
            backgroundColor: '#5A8A8A',
            paddingTop: '44px',
            paddingBottom: '44px',
            paddingLeft: '36px',
            paddingRight: '36px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Memphis decorations on teal */}

          {/* Dot grid top-left */}
          <div
            style={{ position: 'absolute', top: '18px', left: '18px', display: 'flex', flexDirection: 'column', gap: '7px' }}
          >
            {[0, 1, 2, 3].map((r) => (
              <div key={r} style={{ display: 'flex', gap: '7px' }}>
                {[0, 1, 2, 3].map((c) => (
                  <div
                    key={c}
                    style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#F5EFE6', opacity: 0.2 }}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Sage diamond top-right */}
          <svg style={{ position: 'absolute', top: '22px', right: '26px' }} width="34" height="34" viewBox="0 0 40 40">
            <rect x="5" y="5" width="30" height="30" fill="#A8C66C" transform="rotate(45 20 20)" opacity="0.7" />
          </svg>

          {/* Coral triangle bottom-left */}
          <svg style={{ position: 'absolute', bottom: '20px', left: '20px' }} width="40" height="36" viewBox="0 0 60 52">
            <polygon points="30,4 56,48 4,48" fill="#E8917D" opacity="0.55" />
          </svg>

          {/* Mustard star bottom-right */}
          <svg style={{ position: 'absolute', bottom: '24px', right: '24px' }} width="32" height="32" viewBox="0 0 24 24">
            <path
              d="M12,2 L14.5,8.5 L22,8.5 L16,13 L18.5,20 L12,16 L5.5,20 L8,13 L2,8.5 L9.5,8.5 Z"
              fill="#E5B85C"
              opacity="0.7"
            />
          </svg>

          {/* Stripe accent right edge */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '12px',
              height: '100%',
              backgroundImage:
                'repeating-linear-gradient(45deg, rgba(245,239,230,0.08) 0, rgba(245,239,230,0.08) 2px, transparent 0, transparent 50%)',
              backgroundSize: '10px 10px',
            }}
          />

          {/* Price badge */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#F5EFE6',
              borderWidth: '3px',
              borderStyle: 'solid',
              borderColor: '#3D6666',
              borderRadius: '18px',
              paddingTop: '20px',
              paddingBottom: '20px',
              paddingLeft: '30px',
              paddingRight: '30px',
              marginBottom: '22px',
              width: '100%',
            }}
          >
            <span
              style={{
                fontSize: '11px',
                color: '#8B6F47',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                marginBottom: '6px',
              }}
            >
              Mulai dari
            </span>
            <span style={{ fontSize: '40px', fontWeight: 900, color: '#E8917D', lineHeight: 1 }}>
              Rp 150.000
            </span>
            <span style={{ fontSize: '14px', color: '#777', marginTop: '5px' }}>/bulan · tanpa komitmen</span>
          </div>

          {/* Program list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', marginBottom: '20px' }}>
            {[
              { spark: 'Spark Words', sub: 'Bahasa Inggris · SD–SMA' },
              { spark: 'Spark Numbers', sub: 'Matematika · SD–SMA' },
              { spark: 'Spark Tech', sub: 'Komputer · SD–SMA' },
              { spark: 'Spark Art', sub: 'Mewarnai · TK–SD' },
            ].map((p) => (
              <div
                key={p.spark}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'rgba(245,239,230,0.13)',
                  borderRadius: '10px',
                  paddingTop: '9px',
                  paddingBottom: '9px',
                  paddingLeft: '14px',
                  paddingRight: '14px',
                }}
              >
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#F5EFE6' }}>{p.spark}</span>
                <span style={{ fontSize: '11px', color: 'rgba(245,239,230,0.6)' }}>{p.sub}</span>
              </div>
            ))}
          </div>

          {/* Batch pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#E5B85C',
              borderRadius: '999px',
              paddingTop: '9px',
              paddingBottom: '9px',
              paddingLeft: '20px',
              paddingRight: '20px',
              fontSize: '14px',
              fontWeight: 700,
              color: '#3D6666',
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: '#8B6F47',
              width: '100%',
            }}
          >
            Batch 3 · Kuota Terbatas!
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
