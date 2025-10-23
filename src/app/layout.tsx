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
  title: 'Cuisine Alger - Conception et fabrication de cuisines modernes a Bouzareah',
  description:
    'Conception et fabrication de cuisines modernes a Bouzareah. Cuisines sur mesure, menuiserie haut de gamme et amenagement complet.',
  keywords:
    'cuisine moderne, fabrication cuisine, menuiserie, Bouzareah, cuisine sur mesure, amenagement cuisine, plans de travail',
  authors: [{ name: 'Cuisine Alger' }],
  creator: 'Cuisine Alger',
  publisher: 'Cuisine Alger',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cuisine-alger.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Cuisine Alger - Conception et fabrication de cuisines modernes a Bouzareah',
    description:
      'Conception et fabrication de cuisines modernes a Bouzareah. Cuisines sur mesure, menuiserie haut de gamme et amenagement complet.',
    url: 'https://cuisine-alger.com',
    siteName: 'Cuisine Alger',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cuisine Alger - Conception et fabrication de cuisines modernes a Bouzareah',
      },
    ],
    locale: 'fr_DZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cuisine Alger - Conception et fabrication de cuisines modernes a Bouzareah',
    description:
      'Conception et fabrication de cuisines modernes a Bouzareah. Cuisines sur mesure, menuiserie haut de gamme et amenagement complet.',
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
        <footer className="bg-kitchen-lux-dark-green-800 backdrop-blur-md border-t border-kitchen-lux-dark-green-800/20 text-kitchen-white-clean py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">
              Made by{' '}
              <a
                href="https://www.sitedz.store"
                target="_blank"
                rel="noopener noreferrer"
                className="text-kitchen-warm-light hover:text-kitchen-warm-light-soft transition-colors underline"
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
