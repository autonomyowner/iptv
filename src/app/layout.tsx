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
  title: 'iptvzh - Votre destination #1 pour les produits numériques à prix imbattables',
  description:
    'Découvrez une large gamme de services digitaux : IPTV, comptes Netflix, RDP, VPN, hébergement, design tools et plus encore — livrés instantanément après paiement.',
  keywords:
    'IPTV, Netflix, Spotify, VPN, RDP, Canva Pro, Shopify, produits numériques, abonnements premium, livraison instantanée',
  authors: [{ name: 'iptvzh' }],
  creator: 'iptvzh',
  publisher: 'iptvzh',
  icons: {
    icon: '/picturs/logo.png',
    shortcut: '/picturs/logo.png',
    apple: '/picturs/logo.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://iptvzh.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'iptvzh - Votre destination #1 pour les produits numériques à prix imbattables',
    description:
      'Découvrez une large gamme de services digitaux : IPTV, comptes Netflix, RDP, VPN, hébergement, design tools et plus encore — livrés instantanément après paiement.',
    url: 'https://iptvzh.com',
    siteName: 'iptvzh',
    images: [
      {
        url: '/picturs/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'iptvzh - Votre destination #1 pour les produits numériques à prix imbattables',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iptvzh - Votre destination #1 pour les produits numériques à prix imbattables',
    description:
      'Découvrez une large gamme de services digitaux : IPTV, comptes Netflix, RDP, VPN, hébergement, design tools et plus encore — livrés instantanément après paiement.',
    images: ['/picturs/hero.jpg'],
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
        className={`${inter.className} bg-white min-h-screen text-slate-900`}
      >
        <Navbar />
        <main className="pt-20 md:pt-24 pb-20">{children}</main>
        <footer className="bg-gradient-iptvzh backdrop-blur-md border-t border-iptvzh-gold-primary/20 text-iptvzh-white-clean py-4">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-4 text-sm">
              <p className="mb-2">À propos | Conditions | Politique de confidentialité | Contact</p>
              <p className="mb-2">Paiement sécurisé par PayPal / Carte / Crypto</p>
              <p>© 2025 iptvzh.com – Tous droits réservés.</p>
            </div>
            <p className="text-xs text-iptvzh-gold-soft">
              Made by{' '}
              <a
                href="https://www.sitedz.store"
                target="_blank"
                rel="noopener noreferrer"
                className="text-iptvzh-gold-light hover:text-iptvzh-gold-primary transition-colors underline"
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
