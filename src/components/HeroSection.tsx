'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export const HeroSection = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [elementsVisible, setElementsVisible] = useState<{
    subtitle: boolean
    title: boolean
    buttons: boolean
    footer: boolean
  }>({
    subtitle: false,
    title: false,
    buttons: false,
    footer: false
  })

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsVisible(true), 100)
    return () => window.clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (isVisible) {
      const delays = {
        subtitle: 200,
        title: 400,
        buttons: 600,
        footer: 800
      }

      Object.entries(delays).forEach(([key, delay]) => {
        setTimeout(() => {
          setElementsVisible(prev => ({ ...prev, [key]: true }))
        }, delay)
      })
    }
  }, [isVisible])

  const handleContactClick = (): void => {
    const phoneNumber = '+33745947222'
    const message =
      'Bonjour! Je suis intéressé(e) par vos produits numériques et services IPTV.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="relative isolate overflow-hidden bg-gradient-iptvzh-hero">
      <div className="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-4 py-28 sm:px-6 lg:px-8 lg:py-36">
        <div className="max-w-3xl space-y-8">
          <p 
            className={`text-xs uppercase tracking-[0.4em] text-white/80 transition-all duration-700 ease-out ${
              elementsVisible.subtitle
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            Produits numériques premium
          </p>

          <h1 
            className={`text-4xl font-elegant font-semibold text-white sm:text-5xl lg:text-6xl transition-all duration-800 ease-out ${
              elementsVisible.title
                ? 'translate-y-0 opacity-100'
                : 'translate-y-12 opacity-0'
            }`}
          >
            Bienvenue sur iptvzh – Votre destination #1 pour les produits numériques à prix imbattables
          </h1>


          <div 
            className={`flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 transition-all duration-700 ease-out ${
              elementsVisible.buttons
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            <button
              onClick={handleContactClick}
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black transition-all duration-200 hover:bg-white/90"
              type="button"
            >
              🛒 Acheter maintenant
            </button>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/50 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
            >
              🎯 Explorer nos offres
            </Link>
          </div>

          <div 
            className={`flex flex-col gap-4 border-t border-white/20 pt-6 sm:flex-row sm:items-center sm:justify-between transition-all duration-700 ease-out ${
              elementsVisible.footer
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="text-sm uppercase tracking-[0.3em] text-white/70">
              Livraison instantanée - Support 24/7
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
              <span className="whitespace-nowrap">IPTV Premium</span>
              <span className="whitespace-nowrap">Comptes Netflix</span>
              <span className="whitespace-nowrap">VPN & RDP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
