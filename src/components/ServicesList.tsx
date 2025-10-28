
import Image from 'next/image'
import Link from 'next/link'

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
    id: 'iptv-streaming',
    title: '📺 IPTV & Streaming',
    description:
      'IPTV Yinix, Dream IPTV, Dino IPTV, Magnum OTT, Abonnement Shahid VIP, Netflix, OSN+, Amazon Prime. Profitez de milliers de chaînes et de films en illimité !',
    features: [
      'IPTV Yinix – 6 mois / 12 mois / 24 mois',
      'Dream IPTV, Dino IPTV, Magnum OTT',
      'Abonnement Shahid VIP, Netflix, OSN+, Amazon Prime',
      'Milliers de chaînes et de films en illimité',
      'Livraison instantanée après paiement',
    ],
    image: '/picturs/gogo.jpg',
    signature: 'Milliers de chaînes',
    icon: '📺',
    href: '/services#iptv-streaming',
  },
  {
    id: 'comptes-premium',
    title: '💻 Comptes Premium & Abonnements',
    description:
      'Spotify Premium, Canva Pro, ChatGPT Plus (via clé d\'accès API), Envato Elements. Des outils professionnels à petit prix pour vos besoins créatifs et personnels.',
    features: [
      'Spotify Premium',
      'Canva Pro',
      'ChatGPT Plus (via clé d\'accès API)',
      'Envato Elements',
      'Outils professionnels à petit prix',
    ],
    image: '/picturs/1.jpg',
    signature: 'Outils professionnels',
    icon: '💻',
    href: '/services#comptes-premium',
  },
  {
    id: 'rdp-vps-cloud',
    title: '🧠 RDP / VPS & Services Cloud',
    description:
      'RDP Google / Windows, VPS Premium pour hébergement, Serveurs dédiés haute performance. Puissance, sécurité et rapidité pour vos projets en ligne.',
    features: [
      'RDP Google / Windows',
      'VPS Premium pour hébergement',
      'Serveurs dédiés haute performance',
      'Puissance, sécurité et rapidité',
      'Support technique 24/7',
    ],
    image: '/picturs/iron.jpg',
    signature: 'Haute performance',
    icon: '🧠',
    href: '/services#rdp-vps-cloud',
  },
  {
    id: 'vpn-securite',
    title: '🔐 VPN & Sécurité',
    description:
      'NordVPN, ExpressVPN, Surfshark. Protégez votre vie privée et accédez à tous vos contenus sans restrictions.',
    features: [
      'NordVPN',
      'ExpressVPN',
      'Surfshark',
      'Protection de la vie privée',
      'Accès sans restrictions',
    ],
    image: '/picturs/hero.jpg',
    signature: 'Sécurité maximale',
    icon: '🔐',
    href: '/services#vpn-securite',
  },
  {
    id: 'ecommerce-business',
    title: '🛍️ E-commerce & Business Tools',
    description:
      'Comptes Shopify, Abonnements Dropify, Licences Microsoft Office / Windows. Tout pour booster votre activité en ligne.',
    features: [
      'Comptes Shopify',
      'Abonnements Dropify',
      'Licences Microsoft Office / Windows',
      'Outils pour booster votre activité',
      'Support et formation inclus',
    ],
    image: '/picturs/1.jpg',
    signature: 'Business tools',
    icon: '🛍️',
    href: '/services#ecommerce-business',
  },
  {
    id: 'design-creation',
    title: '🎨 Outils de Design & Création',
    description:
      'Adobe Suite (Photoshop, Illustrator, Premiere), Canva Pro, Figma Premium. Créez, éditez et partagez sans limites.',
    features: [
      'Adobe Suite (Photoshop, Illustrator, Premiere)',
      'Canva Pro',
      'Figma Premium',
      'Création sans limites',
      'Formation et support inclus',
    ],
    image: '/picturs/gogo.jpg',
    signature: 'Création illimitée',
    icon: '🎨',
    href: '/services#design-creation',
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
  return (
    <div className="space-y-20">
      {/* Categories Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.id}
            href={service.href}
            className="group relative block overflow-hidden rounded-3xl border border-iptvzh-gold-primary/20 bg-gradient-to-br from-iptvzh-gold-soft/30 to-iptvzh-white-clean shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-iptvzh-gold-primary/20"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 flex items-center justify-center">
              {service.image ? (
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="text-center text-neutral-400">
                  <div className="text-6xl mb-2">{service.icon}</div>
                  <p className="text-sm">Image à venir</p>
                </div>
              )}
            </div>

            <div className="flex h-full flex-col gap-5 p-6">
              <span className="text-xs uppercase tracking-[0.35em] text-iptvzh-gold-primary">
                {service.signature}
              </span>
              <h3 className="text-2xl font-elegant font-semibold text-iptvzh-navy-blue">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-iptvzh-gray-blue">
                {service.description}
              </p>
              <div className="mt-2 space-y-1">
                {service.features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="text-xs text-iptvzh-gold-primary">
                    • {feature}
                  </div>
                ))}
              </div>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-iptvzh-navy-blue group-hover:text-iptvzh-gold-primary transition-colors duration-200">
                Voir les produits
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Special Offers Section */}
      <div className="mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-elegant font-semibold text-iptvzh-navy-blue sm:text-5xl">
            🔥 Offres Spéciales
          </h2>
          <p className="mt-4 text-lg text-iptvzh-gray-blue">
            Les meilleures ventes du moment — livraison instantanée !
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {specialOffers.map((offer) => (
            <div
              key={offer.id}
              className="relative overflow-hidden rounded-2xl border border-iptvzh-gold-primary/30 bg-gradient-to-br from-iptvzh-gold-soft/20 to-iptvzh-white-clean shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-iptvzh-gold-primary/20"
            >
              <div className="absolute top-3 right-3">
                <span className="inline-flex items-center rounded-full bg-iptvzh-gold-primary px-3 py-1 text-xs font-semibold text-iptvzh-white-clean">
                  {offer.badge}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-elegant font-semibold text-iptvzh-navy-blue mb-2">
                  {offer.title}
                </h3>
                <p className="text-sm text-iptvzh-gray-blue mb-4">
                  {offer.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-iptvzh-gold-primary">
                    {offer.price}
                  </div>
                  <button className="rounded-full bg-iptvzh-gold-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-iptvzh-white-clean transition-colors duration-200 hover:bg-iptvzh-gold-dark">
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
