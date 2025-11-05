'use client'

import Image from 'next/image'

type FeatureCategory = {
  id: string
  title: string
  description: string
  image: string
}

const featureCategories: FeatureCategory[] = [
  {
    id: 'films-series',
    title: 'Films et Séries',
    description: 'Accédez à une vaste bibliothèque de films et séries en streaming de haute qualité.',
    image: '/picturs/gogo.jpg',
  },
  {
    id: 'jeux-games',
    title: 'Jeux (GAMES)',
    description: 'Découvrez une collection complète de jeux premium et applications de gaming.',
    image: '/picturs/1.jpg',
  },
  {
    id: 'applications',
    title: 'Applications Essentielles',
    description: 'Applications et outils utiles pour améliorer votre productivité.',
    image: '/picturs/gogo.jpg',
  },
  {
    id: 'abonnements-iptv',
    title: 'Abonnements IPTV',
    description: 'Abonnements premium avec des milliers de chaînes et contenus en direct.',
    image: '/picturs/ip.png',
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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Nos Catégories</h2>
          <p className="text-lg text-gray-600">Explorez Nos Services Premium</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <button
                  onClick={() => handleCategoryClick(category)}
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
    </section>
  )
}