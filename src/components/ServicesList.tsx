'use client'

import Image from 'next/image'

type Service = {
  id: string
  title: string
  description: string
  image: string
}

type SpecialOffer = {
  id: string
  title: string
  price: string
  description: string
  badge: string
}

const services: Service[] = [
  {
    id: 'solutions-reseau-hebergement',
    title: 'Solutions Réseau et Hébergement',
    description: 'RDP, HOST, VPS et SMTP pour tous vos besoins d\'hébergement et de serveurs.',
    image: '/picturs/iron.jpg',
  },
  {
    id: 'divertissement-iptv',
    title: 'Divertissement IPTV',
    description: 'Abonnements IPTV, activation Ibo Player/pro et applications complémentaires.',
    image: '/picturs/ip.png',
  },
  {
    id: 'licences-logiciels',
    title: 'Licences et Logiciels',
    description: 'Produits digitaux, programmes Windows et clés d\'activation.',
    image: '/picturs/1.jpg',
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
    const message = `Bonjour! Je suis intéressé(e) par: ${service.title}\n\n${service.description}\n\nPouvez-vous me donner plus d'informations sur les prix et les options disponibles?`
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
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Services Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Nos Services</h2>
            <p className="text-lg text-gray-600">Solutions Complètes pour Vos Besoins</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button
                    onClick={() => handleWhatsAppClick(service)}
                    className="bg-brand-gold text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 hover:bg-yellow-600"
                    type="button"
                  >
                    Commander
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offers Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Offres Spéciales</h2>
            <p className="text-lg text-gray-600">Les meilleures ventes du moment</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialOffers.map((offer) => (
              <div
                key={offer.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="p-6 text-center">
                  <div className="mb-4">
                    <span className="inline-block bg-yellow-400 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {offer.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-gray-600 mb-4">{offer.description}</p>
                  <p className="text-3xl font-bold text-brand-dark mb-4">{offer.price}</p>
                  <button
                    onClick={() => handleProductClick(offer)}
                    className="bg-brand-gold text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 hover:bg-yellow-600"
                    type="button"
                  >
                    Acheter
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}