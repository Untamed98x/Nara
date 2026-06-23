import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import './globals.css'

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-lexend',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://belajar-di-nara.vercel.app'),
  title: 'Nara Private Academy — Les Privat & Semi Privat Parung & Inkopad',
  description:
    'Tempat les privat & semi privat kelas kecil (maks. 4–6 siswa) untuk anak TK–SMA di Parung & Inkopad. Matematika, Bahasa Inggris, Komputer, Mewarnai. Mulai Rp 150.000/bulan.',
  keywords:
    'les privat parung, les semi privat inkopad, bimbel parung, les matematika, les bahasa inggris, nara private academy',
  openGraph: {
    title: 'Nara Private Academy — Les Privat & Semi Privat',
    description:
      'Kelas kecil maks. 4–6 siswa · Matematika, B. Inggris, Komputer, Mewarnai · TK–SMA · Mulai Rp 150.000/bulan · Parung & Inkopad, Bogor.',
    url: 'https://belajar-di-nara.vercel.app',
    siteName: 'Nara Private Academy',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nara Private Academy — Les Privat & Semi Privat',
    description:
      'Kelas kecil maks. 4–6 siswa · TK–SMA · Mulai Rp 150.000/bulan · Parung & Inkopad',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${lexend.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
