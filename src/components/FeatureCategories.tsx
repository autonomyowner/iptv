'use client'

import Image from 'next/image'

type FeatureCategory = {
  id: string
  title: string
  description: string
  image: string
  gradientFrom: string
  gradientTo: string
}

const featureCategories: FeatureCategory[] = [
  {
    id: 'films-series',
    title: 'Films et Séries',
    description: 'Accédez à une vaste bibliothèque de films et séries en streaming de haute qualité.',
    image: '/picturs/gogo.jpg',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-pink-500',
  },
  {
    id: 'jeux-games',
    title: 'Jeux (GAMES)',
    description: 'Découvrez une collection complète de jeux premium et applications de gaming.',
    image: '/picturs/1.jpg',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-cyan-500',
  },
  {
    id: 'applications',
    title: 'Applications Recommandées/Utiles',
    description: 'Applications essentielles et outils utiles pour améliorer votre productivité.',
    image: '/picturs/gogo.jpg',
    gradientFrom: 'from-emerald-500',
    gradientTo: 'to-teal-500',
  },
  {
    id: 'abonnements-iptv',
    title: 'Abonnements IPTV',
    description: 'Abonnements IPTV premium avec des milliers de chaînes et contenus en direct.',
    image: '/picturs/ip.png',
    gradientFrom: 'from-orange-500',
    gradientTo: 'to-red-500',
  },
]

export const FeatureCategories = (): JSX.Element => {
  const handleCategoryClick = (category: FeatureCategory): void => {
    const phoneNumber = '+33745947222'
    const message = `Bonjour! Je suis intéressé(e) par: ${category.title}\n\n${category.description}\n\nPouvez-vous me donner plus d'informations sur les prix et les options disponibles?`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-iptvzh-purple-accent uppercase tracking-wider mb-3">
            Catégories de Fonctionnalités
          </p>
          <h2 className="text-4xl font-bold text-iptvzh-black-deep sm:text-5xl mb-4">
            Découvrez Nos Services
          </h2>
          <p className="text-lg text-iptvzh-gray-blue max-w-2xl mx-auto">
            Choisissez parmi nos catégories principales pour accéder à une gamme complète de services numériques premium
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featureCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className="group relative overflow-hidden rounded-3xl bg-white border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 text-left"
              type="button"
            >
              {/* Image Background with Overlay */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradientFrom} ${category.gradientTo} opacity-60 group-hover:opacity-70 transition-opacity`} />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              
              <div className="relative p-6 flex flex-col min-h-[200px]">
                {/* Title */}
                <h3 className="text-2xl font-bold text-iptvzh-black-deep mb-3 text-center group-hover:text-iptvzh-purple-accent transition-colors">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-iptvzh-gray-blue mb-6 text-center flex-grow leading-relaxed">
                  {category.description}
                </p>

                {/* Clear WhatsApp CTA Button */}
                <div className="mt-auto">
                  <div className={`flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 bg-gradient-to-r ${category.gradientFrom} ${category.gradientTo} text-white font-bold text-base shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-200`}>
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
    </section>
  )
}

