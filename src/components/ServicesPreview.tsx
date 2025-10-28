import Link from 'next/link'
import Image from 'next/image'

type ServiceCard = {
  id: string
  title: string
  description: string
  highlight: string
  image: string
  href: string
  products: string[]
}

const services: ServiceCard[] = [
  {
    id: 'iptv-streaming',
    title: '📺 IPTV & Streaming',
    description:
      'IPTV Yinix, Dream IPTV, Dino IPTV, Magnum OTT, Abonnement Shahid VIP, Netflix, OSN+, Amazon Prime. Profitez de milliers de chaînes et de films en illimité !',
    highlight: 'Milliers de chaînes',
    image: '/picturs/gogo.jpg',
    href: '/services#iptv-streaming',
    products: ['IPTV Yinix – 6 mois / 12 mois / 24 mois', 'Dream IPTV, Dino IPTV, Magnum OTT', 'Abonnement Shahid VIP, Netflix, OSN+, Amazon Prime']
  },
  {
    id: 'comptes-premium',
    title: '💻 Comptes Premium & Abonnements',
    description:
      'Spotify Premium, Canva Pro, ChatGPT Plus (via clé d\'accès API), Envato Elements. Des outils professionnels à petit prix pour vos besoins créatifs et personnels.',
    highlight: 'Outils professionnels',
    image: '/picturs/1.jpg',
    href: '/services#comptes-premium',
    products: ['Spotify Premium', 'Canva Pro', 'ChatGPT Plus (via clé d\'accès API)', 'Envato Elements']
  },
  {
    id: 'rdp-vps-cloud',
    title: '🧠 RDP / VPS & Services Cloud',
    description:
      'RDP Google / Windows, VPS Premium pour hébergement, Serveurs dédiés haute performance. Puissance, sécurité et rapidité pour vos projets en ligne.',
    highlight: 'Haute performance',
    image: '/picturs/iron.jpg',
    href: '/services#rdp-vps-cloud',
    products: ['RDP Google / Windows', 'VPS Premium pour hébergement', 'Serveurs dédiés haute performance']
  },
  {
    id: 'vpn-securite',
    title: '🔐 VPN & Sécurité',
    description:
      'NordVPN, ExpressVPN, Surfshark. Protégez votre vie privée et accédez à tous vos contenus sans restrictions.',
    highlight: 'Sécurité maximale',
    image: '/picturs/hero.jpg',
    href: '/services#vpn-securite',
    products: ['NordVPN', 'ExpressVPN', 'Surfshark']
  },
  {
    id: 'ecommerce-business',
    title: '🛍️ E-commerce & Business Tools',
    description:
      'Comptes Shopify, Abonnements Dropify, Licences Microsoft Office / Windows. Tout pour booster votre activité en ligne.',
    highlight: 'Business tools',
    image: '/picturs/1.jpg',
    href: '/services#ecommerce-business',
    products: ['Comptes Shopify', 'Abonnements Dropify', 'Licences Microsoft Office / Windows']
  },
  {
    id: 'design-creation',
    title: '🎨 Outils de Design & Création',
    description:
      'Adobe Suite (Photoshop, Illustrator, Premiere), Canva Pro, Figma Premium. Créez, éditez et partagez sans limites.',
    highlight: 'Création illimitée',
    image: '/picturs/gogo.jpg',
    href: '/services#design-creation',
    products: ['Adobe Suite (Photoshop, Illustrator, Premiere)', 'Canva Pro', 'Figma Premium']
  },
]

export const ServicesPreview = (): JSX.Element => {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-iptvzh-gold-primary">
            Catégories principales
          </p>
          <h2 className="mt-5 text-4xl font-elegant font-semibold text-iptvzh-navy-blue sm:text-5xl">
            Découvrez nos produits numériques premium
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-iptvzh-gray-blue">
            Découvrez une large gamme de services digitaux : IPTV, comptes Netflix, RDP, VPN, 
            hébergement, design tools et plus encore — livrés instantanément après paiement.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                    <div className="text-4xl mb-2">📸</div>
                    <p className="text-sm">Image à venir</p>
                  </div>
                )}
              </div>

              <div className="flex h-full flex-col gap-5 p-6">
                <span className="text-xs uppercase tracking-[0.35em] text-iptvzh-gold-primary">
                  {service.highlight}
                </span>
                <h3 className="text-2xl font-elegant font-semibold text-iptvzh-navy-blue">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-iptvzh-gray-blue">
                  {service.description}
                </p>
                <div className="mt-2 space-y-1">
                  {service.products.slice(0, 3).map((product, index) => (
                    <div key={index} className="text-xs text-iptvzh-gold-primary">
                      • {product}
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

        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="inline-flex rounded-full border border-iptvzh-gold-primary px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-iptvzh-navy-blue transition-colors duration-200 hover:border-iptvzh-gold-dark hover:text-iptvzh-black-deep hover:bg-iptvzh-gold-soft"
          >
            Voir tous les produits
          </Link>
        </div>
      </div>
    </section>
  )
}
