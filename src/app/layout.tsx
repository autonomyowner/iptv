import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { WhatsAppButton } from '@/components/WhatsAppButton'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Perfect Events - Decoration evennementielle a Tlemcen',
  description:
    'Decoration evennementielle et organisation d evenements a Tlemcen. Services personnalises et elegants pour vos moments speciaux.',
  keywords:
    'decoration evennementielle, Tlemcen, evenements, mariage, anniversaire, ceremonie, organisation',
  authors: [{ name: 'Perfect Events' }],
  creator: 'Perfect Events',
  publisher: 'Perfect Events',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://perfect-events-tlemcen.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Perfect Events - Decoration evennementielle a Tlemcen',
    description:
      'Decoration evennementielle et organisation d evenements a Tlemcen. Services personnalises et elegants pour vos moments speciaux.',
    url: 'https://perfect-events-tlemcen.com',
    siteName: 'Perfect Events',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Perfect Events - Decoration evennementielle a Tlemcen',
      },
    ],
    locale: 'fr_DZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perfect Events - Decoration evennementielle a Tlemcen',
    description:
      'Decoration evennementielle et organisation d evenements a Tlemcen. Services personnalises et elegants pour vos moments speciaux.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body
        className={`${inter.className} bg-gradient-elegant min-h-screen text-slate-900`}
      >
        <Navbar />
        <main className="pt-20 md:pt-24 pb-20">{children}</main>
        <footer className="bg-slate-900 text-white py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">
              Made by{' '}
              <a
                href="https://www.sitedz.store"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors underline"
              >
                www.sitedz.store
              </a>
            </p>
          </div>
        </footer>
        <WhatsAppButton />
      </body>
    </html>
  )
}
