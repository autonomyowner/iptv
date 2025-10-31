'use client'

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
    id: 'solutions-reseau-hebergement',
    title: '🖥️ Solutions Réseau et Hébergement',
    description:
      'RDP, HOST, VPS et SMTP pour tous vos besoins d\'hébergement et de serveurs. Services de qualité professionnelle avec support technique.',
    highlight: 'Hébergement professionnel',
    image: '/picturs/iron.jpg',
    href: '/services#solutions-reseau-hebergement',
    products: ['RDP / HOST / VPS Premium', 'Serveurs SMTP', 'Hébergement haute performance']
  },
  {
    id: 'divertissement-iptv',
    title: '📺 Divertissement Numérique et IPTV',
    description:
      'Abonnements IPTV, activation Ibo Player/pro et applications complémentaires. Accédez à des milliers de chaînes et contenus en illimité.',
    highlight: 'Divertissement illimité',
    image: '/picturs/gogo.jpg',
    href: '/services#divertissement-iptv',
    products: ['Abonnements IPTV', 'Activation Ibo Player/pro', 'Applications complémentaires']
  },
  {
    id: 'licences-logiciels',
    title: '🔑 Licences et Logiciels',
    description:
      'Produits digitaux, programmes Windows et clés d\'activation. Solutions complètes pour vos besoins logiciels et système.',
    highlight: 'Licences authentiques',
    image: '/picturs/1.jpg',
    href: '/services#licences-logiciels',
    products: ['Produits digitaux', 'Programmes Windows', 'Windows Keys']
  },
  {
    id: 'services-creation',
    title: '🛠️ Services de Création et Développement',
    description:
      'Création de sites web, développement de programmes Windows/Android, création de logos professionnels et production vidéo créative.',
    highlight: 'Services sur mesure',
    image: '/picturs/gogo.jpg',
    href: '/services#services-creation',
    products: ['Ouvrir un site Web', 'Programmer sur Windows/Android', 'Créer un Logo professionnel']
  },
  {
    id: 'contact-support',
    title: '📞 Information et Support',
    description:
      'Besoin d\'aide ou d\'informations ? Contactez-nous pour toute question, demande de devis ou support client. Nous sommes là pour vous.',
    highlight: 'Support client',
    image: '/picturs/hero.jpg',
    href: '/contact',
    products: ['Support client dédié', 'Demandes de devis', 'Assistance personnalisée']
  },
]

export const ServicesPreview = (): JSX.Element => {
  const handleWhatsAppClick = (service: ServiceCard): void => {
    const phoneNumber = '+33745947222'
    const serviceTitle = service.title.includes(' ') ? service.title.substring(service.title.indexOf(' ') + 1) : service.title
    const message = `Bonjour! Je suis intéressé(e) par: ${serviceTitle}\n\n${service.description}\n\nPouvez-vous me donner plus d'informations sur les prix et les options disponibles?`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.4em] text-iptvzh-gray-blue">
            Catégories principales
          </p>
          <h2 className="mt-5 text-4xl font-bold text-iptvzh-black-deep sm:text-5xl">
            Découvrez nos produits numériques premium
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.filter(service => service.id !== 'contact-support').map((service) => (
            <button
              key={service.id}
              onClick={() => handleWhatsAppClick(service)}
              className="group relative block overflow-hidden rounded-2xl bg-gradient-to-br from-iptvzh-navy-blue-dark via-iptvzh-navy-blue-dark to-iptvzh-navy-blue-light shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl w-full text-left"
              type="button"
            >
              <div className="flex h-full flex-col p-6 text-white min-h-[200px]">
                <div className="mb-4 text-5xl flex items-center justify-center">
                  {service.title.includes(' ') ? service.title.split(' ')[0] : service.title}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 text-center">
                  {service.title.includes(' ') ? service.title.substring(service.title.indexOf(' ') + 1) : service.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/90 mb-4 text-center">
                  {service.description.substring(0, 80)}...
                </p>
                <div className="mt-auto pt-4">
                  <span className="block text-center text-xs font-bold bg-iptvzh-green-whatsapp rounded-lg px-3 py-2 group-hover:bg-iptvzh-green-success transition-colors duration-200">
                    💬 Commander
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
