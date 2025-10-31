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
                  <div className={`flex items-center justify-center rounded-xl px-6 py-3.5 bg-gradient-to-r ${category.gradientFrom} ${category.gradientTo} text-white font-bold text-base shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-200`}>
                    Commander sur WhatsApp
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

