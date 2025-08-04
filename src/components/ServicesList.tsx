import Image from 'next/image'

type Service = {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
  image: string
}

const services: Service[] = [
  {
    id: 'weddings',
    title: 'Décoration de Mariages',
    description: 'Transformez votre jour J en un événement de rêve avec notre décoration de mariage personnalisée. Nous créons l\'ambiance parfaite pour célébrer votre amour.',
    features: [
      'Décoration de salle de réception',
      'Arches et structures florales',
      'Décoration de table de mariage',
      'Photobooth et zones photos',
      'Éclairage d\'ambiance',
      'Décoration d\'entrée et couloirs'
    ],
    icon: '💒',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'birthdays',
    title: 'Décoration d\'Anniversaires',
    description: 'Fêtez vos anniversaires avec style ! Nous créons des décors personnalisés pour tous les âges et toutes les thématiques.',
    features: [
      'Décoration selon l\'âge et les goûts',
      'Thématiques personnalisées',
      'Ballons et guirlandes décoratives',
      'Décoration de gâteau',
      'Zones photos thématiques',
      'Éclairage festif'
    ],
    icon: '🎂',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ceremonies',
    title: 'Décoration de Cérémonies',
    description: 'Décoration solennelle et respectueuse pour vos cérémonies religieuses et événements officiels.',
    features: [
      'Décoration d\'églises et mosquées',
      'Arches de cérémonie',
      'Décoration de salles de prière',
      'Éclairage solennel',
      'Décoration d\'entrée',
      'Zones de recueillement'
    ],
    icon: '🕊️',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'corporate',
    title: 'Événements d\'Entreprise',
    description: 'Décoration professionnelle pour vos événements d\'entreprise, séminaires et lancements de produits.',
    features: [
      'Décoration de salles de conférence',
      'Stands et zones d\'exposition',
      'Décoration de réceptions',
      'Éclairage professionnel',
      'Branding et personnalisation',
      'Zones de networking'
    ],
    icon: '🏢',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'graduations',
    title: 'Cérémonies de Remise de Diplômes',
    description: 'Célébrez les réussites académiques avec une décoration élégante et festive.',
    features: [
      'Décoration de salles de cérémonie',
      'Arches de remise de diplômes',
      'Zones photos avec accessoires',
      'Décoration de tables de buffet',
      'Éclairage festif',
      'Décoration d\'entrée'
    ],
    icon: '🎓',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'custom',
    title: 'Événements Sur Mesure',
    description: 'Nous créons des décors uniques pour tous types d\'événements spéciaux selon vos besoins.',
    features: [
      'Consultation personnalisée',
      'Design sur mesure',
      'Thématiques originales',
      'Décoration complète',
      'Coordination avec fournisseurs',
      'Suivi jusqu\'au jour J'
    ],
    icon: '✨',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
]

export const ServicesList = (): JSX.Element => {
  return (
    <div className="space-y-16 mb-20">
      {services.map((service, index) => (
        <div
          key={service.id}
          id={service.id}
          className={`flex flex-col lg:flex-row gap-8 items-center ${
            index % 2 === 1 ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <div className="relative aspect-video">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4 bg-red-600/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
                  <span className="text-3xl">{service.icon}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 space-y-6">
            <div>
              <h2 className="text-3xl font-elegant font-bold text-white mb-4">
                {service.title}
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {service.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-red-400 mb-4">
                Ce qui est inclus :
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300 focus:ring-opacity-50">
                Demander un Devis
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 