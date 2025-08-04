import Link from 'next/link'
import Image from 'next/image'

type ServiceCard = {
  id: string
  title: string
  description: string
  icon: string
  image: string
  href: string
}

const services: ServiceCard[] = [
  {
    id: 'weddings',
    title: 'Mariages',
    description: 'Décoration élégante et romantique pour votre jour J. Nous créons l\'ambiance parfaite pour célébrer votre amour.',
    icon: '💒',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    href: '/services#weddings'
  },
  {
    id: 'birthdays',
    title: 'Anniversaires',
    description: 'Fêtez vos anniversaires avec style ! Décoration personnalisée pour tous les âges et toutes les thématiques.',
    icon: '🎂',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    href: '/services#birthdays'
  },
  {
    id: 'ceremonies',
    title: 'Cérémonies',
    description: 'Décoration solennelle et respectueuse pour vos cérémonies religieuses et événements officiels.',
    icon: '🕊️',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    href: '/services#ceremonies'
  }
]

export const ServicesPreview = (): JSX.Element => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-elegant font-bold text-white mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services de décoration événementielle 
            personnalisés pour tous vos événements spéciaux.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group block"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-slate-700/50 hover:border-red-500/50">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4 bg-red-600/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-elegant font-semibold text-white mb-3 group-hover:text-red-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Arrow */}
                  <div className="mt-4 flex items-center text-red-400 group-hover:text-red-300 transition-colors duration-300">
                    <span className="text-sm font-medium">En savoir plus</span>
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
          >
            Voir Tous Nos Services
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
} 