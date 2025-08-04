'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const HeroSection = (): JSX.Element => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleContactClick = (): void => {
    const phoneNumber = '+213123456789'
    const message = 'Bonjour! Je suis intéressé(e) par vos services de décoration événementielle.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleContactClick()
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          alt="Décoration événementielle élégante"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-red-900/60 to-slate-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-elegant font-bold text-white mb-6 leading-tight">
            Perfect Events{' '}
            <span className="text-red-400 animate-pulse">❤️</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-8 font-light">
            Décoration événementielle à Tlemcen
          </p>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transformez vos événements en moments inoubliables avec nos services de décoration 
            personnalisés et élégants. Mariages, anniversaires, cérémonies - nous créons 
            l&apos;ambiance parfaite pour vos occasions spéciales.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleContactClick}
              onKeyDown={handleKeyDown}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
              aria-label="Contactez-nous sur WhatsApp"
              tabIndex={0}
            >
              📞 Réserver Maintenant
            </button>
            
            <Link
              href="/gallery"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
            >
              🖼️ Voir Nos Réalisations
            </Link>
          </div>

          {/* Location Info */}
          <div className="mt-12 text-gray-300">
            <p className="text-lg">
              📍 Disponible à Tlemcen et environs
            </p>
            <p className="text-sm mt-2">
              ✨ Services sur demande - Pas de paiement en ligne
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
} 