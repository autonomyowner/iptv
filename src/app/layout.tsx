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
  title: 'Perfect Events ❤️ - Décoration événementielle à Tlemcen',
  description: 'Décoration événementielle et organisation d\'événements à Tlemcen. Services personnalisés et élégants pour vos événements spéciaux.',
  keywords: 'décoration événementielle, Tlemcen, événements, mariage, anniversaire, cérémonie, organisation événements',
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
    title: 'Perfect Events ❤️ - Décoration événementielle à Tlemcen',
    description: 'Décoration événementielle et organisation d\'événements à Tlemcen. Services personnalisés et élégants pour vos événements spéciaux.',
    url: 'https://perfect-events-tlemcen.com',
    siteName: 'Perfect Events',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Perfect Events - Décoration événementielle à Tlemcen',
      },
    ],
    locale: 'fr_DZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perfect Events ❤️ - Décoration événementielle à Tlemcen',
    description: 'Décoration événementielle et organisation d\'événements à Tlemcen. Services personnalisés et élégants pour vos événements spéciaux.',
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
      <body className={`${inter.className} bg-gradient-elegant min-h-screen`}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <WhatsAppButton />
      </body>
    </html>
  )
} 