'use client'

import Image from 'next/image'

type Service = {
  id: string
  title: string
  description: string
  features: string[]
  image: string
  signature: string
  href: string
}

type SpecialOffer = {
  id: string
  title: string
  price: string
  originalPrice?: string
  description: string
  badge: string
}

const services: Service[] = [
  {
    id: 'solutions-reseau-hebergement',
    title: 'Solutions Réseau et Hébergement',
    description:
      'RDP, HOST, VPS et SMTP pour tous vos besoins d\'hébergement et de serveurs. Services de qualité professionnelle avec support technique.',
    features: [
      'RDP / HOST / VPS Premium',
      'Serveurs SMTP',
      'Hébergement haute performance',
      'Support technique 24/7',
    ],
    image: '/picturs/iron.jpg',
    signature: 'Hébergement professionnel',
    href: '/services#solutions-reseau-hebergement',
  },
  {
    id: 'divertissement-iptv',
    title: 'Divertissement Numérique et IPTV',
    description:
      'Abonnements IPTV, activation Ibo Player/pro et applications complémentaires. Accédez à des milliers de chaînes et contenus en illimité.',
    features: [
      'Abonnements IPTV',
      'Activation Ibo Player/pro',
      'Applications complémentaires',
      'Milliers de chaînes disponibles',
    ],
    image: '/picturs/ip.png',
    signature: 'Divertissement illimité',
    href: '/services#divertissement-iptv',
  },
  {
    id: 'licences-logiciels',
    title: 'Licences et Logiciels',
    description:
      'Produits digitaux, programmes Windows et clés d\'activation. Solutions complètes pour vos besoins logiciels et système.',
    features: [
      'Produits digitaux',
      'Programmes Windows',
      'Windows Keys',
      'Licences premium',
    ],
    image: '/picturs/1.jpg',
    signature: 'Licences authentiques',
    href: '/services#licences-logiciels',
  },
  {
    id: 'services-creation',
    title: 'Services de Création et Développement',
    description:
      'Création de sites web, développement de programmes Windows/Android, création de logos professionnels et production vidéo créative.',
    features: [
      'Ouvrir un site Web',
      'Programmer sur Windows/Android',
      'Créer un Logo professionnel',
      'Créer une vidéo créative',
    ],
    image: '/picturs/1.jpg',
    signature: 'Services sur mesure',
    href: '/services#services-creation',
  },
  {
    id: 'contact-support',
    title: 'Information et Support',
    description:
      'Besoin d\'aide ou d\'informations ? Contactez-nous pour toute question, demande de devis ou support client. Nous sommes là pour vous.',
    features: [
      'Support client dédié',
      'Demandes de devis',
      'Questions générales',
      'Assistance personnalisée',
    ],
    image: '/picturs/hero.jpg',
    signature: 'Support client',
    href: '/contact',
  },
]

const specialOffers: SpecialOffer[] = [
  {
    id: 'crystal-ott',
    title: 'Crystal OTT IPTV',
    price: '35 $',
    description: '12 mois d\'abonnement',
    badge: 'Meilleure vente',
  },
  {
    id: 'canva-pro',
    title: 'Canva Pro',
    price: '10 $',
    description: '1 an d\'abonnement',
    badge: 'Populaire',
  },
  {
    id: 'nordvpn',
    title: 'NordVPN',
    price: '15 $',
    description: '1 an d\'abonnement',
    badge: 'Sécurisé',
  },
  {
    id: 'netflix',
    title: 'Netflix',
    price: '5 $',
    description: '1 mois d\'abonnement',
    badge: 'Nouveau',
  },
]

export const ServicesList = (): JSX.Element => {
  const handleWhatsAppClick = (service: Service): void => {
    const phoneNumber = '+33745947222'
    const serviceTitle = service.title.includes(' ') ? service.title.substring(service.title.indexOf(' ') + 1) : service.title
    const message = `Bonjour! Je suis intéressé(e) par: ${serviceTitle}\n\n${service.description}\n\nPouvez-vous me donner plus d'informations sur les prix et les options disponibles?`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleProductClick = (offer: SpecialOffer): void => {
    const phoneNumber = '+33745947222'
    const message = `Bonjour! Je souhaite acheter: ${offer.title}\n\nPrix: ${offer.price}\nDescription: ${offer.description}\n\nJe voudrais procéder à l'achat.`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="space-y-24">
      {/* Services Categories Section */}
      <div>
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-iptvzh-purple-accent uppercase tracking-wider mb-3">
            Nos Services
          </p>
          <h2 className="text-3xl font-bold text-iptvzh-black-deep sm:text-4xl mb-4">
            Solutions Complètes pour Vos Besoins
          </h2>
          <p className="text-lg text-iptvzh-gray-blue max-w-2xl mx-auto">
            Explorez notre gamme complète de services numériques professionnels
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.filter(service => service.id !== 'contact-support').map((service) => (
            <button
              key={service.id}
              onClick={() => handleWhatsAppClick(service)}
              className="group relative block overflow-hidden rounded-3xl bg-white border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 w-full text-left"
              type="button"
            >
              {/* Image Header */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-iptvzh-navy-blue-dark/80 to-iptvzh-navy-blue-light/80" />
              </div>

              <div className="flex h-full flex-col p-6 min-h-[280px]">
                <h3 className="text-2xl font-bold text-iptvzh-black-deep mb-3 text-center group-hover:text-iptvzh-purple-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-iptvzh-gray-blue mb-6 text-center flex-grow">
                  {service.description}
                </p>
                
                {/* Clear WhatsApp CTA */}
                <div className="mt-auto pt-4">
                  <div className="flex items-center justify-center rounded-xl px-6 py-3.5 bg-gradient-to-r from-iptvzh-green-whatsapp to-iptvzh-green-success text-white font-bold text-base shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-200">
                    Commander sur WhatsApp
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Special Offers Section */}
      <div>
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-iptvzh-purple-accent uppercase tracking-wider mb-3">
            Meilleures Offres
          </p>
          <h2 className="text-3xl font-bold text-iptvzh-black-deep sm:text-4xl mb-4">
            Offres Spéciales et Promotions
          </h2>
          <p className="text-lg text-iptvzh-gray-blue max-w-2xl mx-auto">
            Les meilleures ventes du moment — livraison instantanée après paiement !
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {specialOffers.map((offer) => (
            <div
              key={offer.id}
              className="group relative overflow-hidden rounded-2xl bg-white border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute top-4 right-4 z-10">
                <span className="inline-flex items-center rounded-full bg-gradient-to-r from-iptvzh-yellow-primary to-iptvzh-yellow-bright px-3 py-1 text-xs font-bold text-iptvzh-black-deep shadow-md">
                  {offer.badge}
                </span>
              </div>
              
              <div className="p-6 pt-12">
                <h3 className="text-xl font-bold text-iptvzh-black-deep mb-3 group-hover:text-iptvzh-purple-accent transition-colors">
                  {offer.title}
                </h3>
                <p className="text-sm text-iptvzh-gray-blue mb-6 leading-relaxed">
                  {offer.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex flex-col">
                    <span className="text-xs text-iptvzh-gray-blue mb-1">Prix</span>
                    <div className="text-3xl font-bold bg-gradient-to-r from-iptvzh-navy-blue to-iptvzh-purple-accent bg-clip-text text-transparent">
                      {offer.price}
                    </div>
                  </div>
                  <button 
                    onClick={() => handleProductClick(offer)}
                    className="rounded-xl bg-gradient-to-r from-iptvzh-green-whatsapp to-iptvzh-green-success px-5 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:shadow-lg hover:scale-105"
                    type="button"
                  >
                    Acheter
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
