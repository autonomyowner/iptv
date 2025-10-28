'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

type SpecialOffer = {
  id: string
  title: string
  price: string
  originalPrice?: string
  description: string
  image: string
  badge: string
}

const specialOffers: SpecialOffer[] = [
  {
    id: 'crystal-ott',
    title: 'Crystal OTT IPTV',
    price: '35 $',
    originalPrice: '50 $',
    description: '12 mois d\'abonnement IPTV premium avec plus de 10,000 chaînes',
    image: '/picturs/gogo.jpg',
    badge: '🔥 Meilleure vente'
  },
  {
    id: 'canva-pro',
    title: 'Canva Pro',
    price: '10 $',
    originalPrice: '15 $',
    description: '1 an d\'accès complet à Canva Pro pour tous vos designs',
    image: '/picturs/1.jpg',
    badge: '⚡ Livraison instantanée'
  },
  {
    id: 'nordvpn',
    title: 'NordVPN',
    price: '15 $',
    originalPrice: '25 $',
    description: '1 an de protection VPN premium avec serveurs dans le monde entier',
    image: '/picturs/iron.jpg',
    badge: '🛡️ Sécurisé'
  },
  {
    id: 'netflix',
    title: 'Netflix Premium',
    price: '5 $',
    originalPrice: '8 $',
    description: '1 mois d\'accès Netflix Premium avec 4K et multi-écrans',
    image: '/picturs/hero.jpg',
    badge: '📺 Streaming'
  },
]

export const ImageCarousel = (): JSX.Element => {
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOfferIndex((prevIndex) => 
        prevIndex === specialOffers.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000) // Change offer every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const handlePreviousOffer = (): void => {
    setCurrentOfferIndex((prevIndex) => 
      prevIndex === 0 ? specialOffers.length - 1 : prevIndex - 1
    )
  }

  const handleNextOffer = (): void => {
    setCurrentOfferIndex((prevIndex) => 
      prevIndex === specialOffers.length - 1 ? 0 : prevIndex + 1
    )
  }

  const handleWhatsAppClick = (offer: SpecialOffer): void => {
    const phoneNumber = '+33745947222'
    const message = `Bonjour! Je suis intéressé(e) par l'offre ${offer.title} - ${offer.price}.`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="border-y border-iptvzh-gold-primary/20 bg-gradient-to-br from-iptvzh-white-clean to-iptvzh-gold-soft/10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-iptvzh-gold-primary">
            Offres spéciales
          </p>
          <h2 className="mt-5 text-4xl font-elegant font-semibold text-iptvzh-navy-blue sm:text-5xl">
            Les meilleures ventes du moment
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-iptvzh-gray-blue">
            Découvrez nos offres spéciales avec des prix imbattables — livraison instantanée !
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="relative h-96 w-full overflow-hidden rounded-3xl border border-iptvzh-gold-primary/20 shadow-lg bg-gradient-to-br from-iptvzh-gold-soft/30 to-iptvzh-white-clean">
            <Image
              src={specialOffers[currentOfferIndex].image}
              alt={specialOffers[currentOfferIndex].title}
              fill
              className="object-cover transition-opacity duration-500"
              priority={currentOfferIndex === 0}
            />
            
            {/* Offer content overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white px-6">
                <div className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                  {specialOffers[currentOfferIndex].badge}
                </div>
                <h3 className="text-3xl font-bold mb-2">{specialOffers[currentOfferIndex].title}</h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-4xl font-bold text-green-400">{specialOffers[currentOfferIndex].price}</span>
                  {specialOffers[currentOfferIndex].originalPrice && (
                    <span className="text-xl line-through text-gray-300">{specialOffers[currentOfferIndex].originalPrice}</span>
                  )}
                </div>
                <p className="text-lg mb-6 max-w-md">{specialOffers[currentOfferIndex].description}</p>
                <button
                  onClick={() => handleWhatsAppClick(specialOffers[currentOfferIndex])}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200"
                >
                  🛒 Acheter maintenant
                </button>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <button
              onClick={handlePreviousOffer}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-md transition-all duration-200 hover:bg-white hover:shadow-lg"
              aria-label="Offre précédente"
            >
              <svg className="h-6 w-6 text-iptvzh-navy-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={handleNextOffer}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-md transition-all duration-200 hover:bg-white hover:shadow-lg"
              aria-label="Offre suivante"
            >
              <svg className="h-6 w-6 text-iptvzh-navy-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Offer counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-white text-sm">
              {currentOfferIndex + 1} / {specialOffers.length}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="mt-6 flex justify-center gap-2">
            {specialOffers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentOfferIndex(index)}
                className={`h-3 w-3 rounded-full transition-all duration-200 ${
                  index === currentOfferIndex
                    ? 'bg-iptvzh-navy-blue'
                    : 'bg-iptvzh-gold-primary/30 hover:bg-iptvzh-gold-primary/60'
                }`}
                aria-label={`Aller à l'offre ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 text-center sm:grid-cols-3">
          <div className="rounded-3xl border border-iptvzh-gold-primary/20 bg-gradient-to-br from-iptvzh-gold-soft/30 to-iptvzh-white-clean px-6 py-8">
            <p className="text-4xl font-elegant font-semibold text-iptvzh-navy-blue">
              ✅
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.35em] text-iptvzh-gold-primary">
              Livraison instantanée
            </p>
          </div>
          <div className="rounded-3xl border border-iptvzh-gold-primary/20 bg-gradient-to-br from-iptvzh-gold-soft/30 to-iptvzh-white-clean px-6 py-8">
            <p className="text-4xl font-elegant font-semibold text-iptvzh-navy-blue">
              🌍
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.35em] text-iptvzh-gold-primary">
              Compatible tous appareils
            </p>
          </div>
          <div className="rounded-3xl border border-iptvzh-gold-primary/20 bg-gradient-to-br from-iptvzh-gold-soft/30 to-iptvzh-white-clean px-6 py-8">
            <p className="text-4xl font-elegant font-semibold text-iptvzh-navy-blue">
              🛡️
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.35em] text-iptvzh-gold-primary">
              100% sécurisé
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
