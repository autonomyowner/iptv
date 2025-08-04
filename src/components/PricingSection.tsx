'use client'

export const PricingSection = (): JSX.Element => {
  const handleContactClick = (): void => {
    const phoneNumber = '+213123456789'
    const message = 'Bonjour! Je souhaite obtenir un devis pour vos services de décoration.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleContactClick()
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-elegant font-bold text-white mb-6">
            Tarification Transparente
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nos tarifs sont personnalisés selon vos besoins et votre budget. 
            Chaque devis est unique et adapté à votre événement.
          </p>
        </div>

        {/* Pricing Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <div className="text-4xl mb-4">💒</div>
            <h3 className="text-2xl font-elegant font-semibold text-white mb-4">
              Mariages
            </h3>
            <p className="text-gray-300 mb-6">
              Décoration complète pour votre jour J
            </p>
            <div className="text-3xl font-bold text-red-400 mb-4">
              Sur Devis
            </div>
            <ul className="text-gray-300 text-sm space-y-2 mb-6">
              <li>• Consultation gratuite</li>
              <li>• Design personnalisé</li>
              <li>• Installation incluse</li>
              <li>• Démontage inclus</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-red-500/50 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Populaire
            </div>
            <div className="text-4xl mb-4">🎂</div>
            <h3 className="text-2xl font-elegant font-semibold text-white mb-4">
              Anniversaires
            </h3>
            <p className="text-gray-300 mb-6">
              Décoration festive et personnalisée
            </p>
            <div className="text-3xl font-bold text-red-400 mb-4">
              Sur Devis
            </div>
            <ul className="text-gray-300 text-sm space-y-2 mb-6">
              <li>• Thématique au choix</li>
              <li>• Accessoires inclus</li>
              <li>• Installation rapide</li>
              <li>• Nettoyage inclus</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <div className="text-4xl mb-4">🕊️</div>
            <h3 className="text-2xl font-elegant font-semibold text-white mb-4">
              Cérémonies
            </h3>
            <p className="text-gray-300 mb-6">
              Décoration solennelle et respectueuse
            </p>
            <div className="text-3xl font-bold text-red-400 mb-4">
              Sur Devis
            </div>
            <ul className="text-gray-300 text-sm space-y-2 mb-6">
              <li>• Respect des traditions</li>
              <li>• Ambiance solennelle</li>
              <li>• Installation discrète</li>
              <li>• Service professionnel</li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-12">
          <h3 className="text-3xl font-elegant font-bold text-white mb-8">
            Pourquoi Nous Choisir ?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">✨</div>
              <h4 className="text-lg font-semibold text-white mb-2">Personnalisé</h4>
              <p className="text-gray-300 text-sm">Chaque décoration est unique</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">💎</div>
              <h4 className="text-lg font-semibold text-white mb-2">Qualité</h4>
              <p className="text-gray-300 text-sm">Matériaux de première qualité</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">⏰</div>
              <h4 className="text-lg font-semibold text-white mb-2">Ponctuel</h4>
              <p className="text-gray-300 text-sm">Respect des délais</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="text-lg font-semibold text-white mb-2">Service</h4>
              <p className="text-gray-300 text-sm">Accompagnement complet</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
          <h3 className="text-2xl font-elegant font-bold text-white mb-4">
            Obtenez Votre Devis Gratuit
          </h3>
          <p className="text-gray-300 mb-6">
            Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé 
            adapté à vos besoins et votre budget.
          </p>
          <button
            onClick={handleContactClick}
            onKeyDown={handleKeyDown}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
            aria-label="Obtenir un devis gratuit"
            tabIndex={0}
          >
            📞 Demander un Devis Gratuit
          </button>
        </div>
      </div>
    </section>
  )
} 