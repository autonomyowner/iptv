'use client'

import Image from 'next/image'

type Service = {
  id: string
  title: string
  description: string
  features: string[]
  image: string
  signature: string
  icon: string
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
    title: '🖥️ Solutions Réseau et Hébergement',
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
    icon: '🖥️',
    href: '/services#solutions-reseau-hebergement',
  },
  {
    id: 'divertissement-iptv',
    title: '📺 Divertissement Numérique et IPTV',
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
    icon: '📺',
    href: '/services#divertissement-iptv',
  },
  {
    id: 'licences-logiciels',
    title: '🔑 Licences et Logiciels',
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
    icon: '🔑',
    href: '/services#licences-logiciels',
  },
  {
    id: 'services-creation',
    title: '🛠️ Services de Création et Développement',
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
    icon: '🛠️',
    href: '/services#services-creation',
  },
  {
    id: 'contact-support',
    title: '📞 Information et Support',
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
    icon: '📞',
    href: '/contact',
  },
]

const specialOffers: SpecialOffer[] = [
  {
    id: 'crystal-ott',
    title: 'Crystal OTT IPTV',
    price: '35 $',
    description: '12 mois d\'abonnement',
    badge: '🔥 Meilleure vente',
  },
  {
    id: 'canva-pro',
    title: 'Canva Pro',
    price: '10 $',
    description: '1 an d\'abonnement',
    badge: '🔥 Populaire',
  },
  {
    id: 'nordvpn',
    title: 'NordVPN',
    price: '15 $',
    description: '1 an d\'abonnement',
    badge: '🔥 Sécurisé',
  },
  {
    id: 'netflix',
    title: 'Netflix',
    price: '5 $',
    description: '1 mois d\'abonnement',
    badge: '🔥 Nouveau',
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
                <div className="absolute top-4 left-4">
                  <div className="text-4xl">{service.icon}</div>
                </div>
              </div>

              <div className="flex h-full flex-col p-6 min-h-[280px]">
                <h3 className="text-2xl font-bold text-iptvzh-black-deep mb-3 text-center group-hover:text-iptvzh-purple-accent transition-colors">
                  {service.title.includes(' ') ? service.title.substring(service.title.indexOf(' ') + 1) : service.title}
                </h3>
                <p className="text-sm leading-relaxed text-iptvzh-gray-blue mb-6 text-center flex-grow">
                  {service.description}
                </p>
                
                {/* Clear WhatsApp CTA */}
                <div className="mt-auto pt-4">
                  <div className="flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 bg-gradient-to-r from-iptvzh-green-whatsapp to-iptvzh-green-success text-white font-bold text-base shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span>Commander sur WhatsApp</span>
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
            ✨ Offres Spéciales et Promotions
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
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-iptvzh-green-whatsapp to-iptvzh-green-success px-5 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:shadow-lg hover:scale-105"
                    type="button"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span>Acheter</span>
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
