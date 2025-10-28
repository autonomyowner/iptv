'use client'

import { useState, useEffect } from 'react'

export const WhatsAppButton = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = (): void => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsAppClick = (): void => {
    const phoneNumber = '+33745947222'
    const message = 'Bonjour! Je suis intéressé(e) par vos produits numériques et services IPTV.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      <button
        onClick={handleWhatsAppClick}
        className="rounded-full border border-iptvzh-gold-primary bg-gradient-to-r from-iptvzh-gold-primary to-iptvzh-gold-light px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-lg backdrop-blur transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:from-iptvzh-gold-light hover:to-iptvzh-gold-primary"
        type="button"
        aria-label="Discuter sur WhatsApp"
      >
        WhatsApp
      </button>
    </div>
  )
} 
