'use client'

export const CTASection = (): JSX.Element => {
  const handleWhatsAppClick = (): void => {
    const phoneNumber = '+213123456789'
    const message = 'Bonjour! Je souhaite réserver vos services de décoration événementielle.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handlePhoneClick = (): void => {
    window.open('tel:+213123456789', '_self')
  }

  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleWhatsAppClick()
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-red-900/30 to-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main CTA */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-elegant font-bold text-white mb-6">
            Prêt à Créer Votre Événement Parfait ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour discuter de votre projet et obtenir 
            un devis personnalisé pour votre événement.
          </p>
          
          <button
            onClick={handleWhatsAppClick}
            onKeyDown={handleKeyDown}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
            aria-label="Contactez-nous sur WhatsApp"
            tabIndex={0}
          >
            📞 Réserver Maintenant
          </button>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-xl font-semibold text-white mb-2">WhatsApp</h3>
            <p className="text-gray-300 mb-4">Contact rapide et direct</p>
            <button
              onClick={handleWhatsAppClick}
              className="text-red-400 hover:text-red-300 font-medium transition-colors duration-200"
            >
              +213 123 456 789
            </button>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50">
            <div className="text-3xl mb-4">📞</div>
            <h3 className="text-xl font-semibold text-white mb-2">Téléphone</h3>
            <p className="text-gray-300 mb-4">Appel direct</p>
            <button
              onClick={handlePhoneClick}
              className="text-red-400 hover:text-red-300 font-medium transition-colors duration-200"
            >
              +213 123 456 789
            </button>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50">
            <div className="text-3xl mb-4">📍</div>
            <h3 className="text-xl font-semibold text-white mb-2">Localisation</h3>
            <p className="text-gray-300 mb-4">Zone de service</p>
            <p className="text-red-400 font-medium">
              Tlemcen et environs
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-gray-400 text-sm">
          <p>✨ Services sur demande - Pas de paiement en ligne</p>
          <p className="mt-2">📅 Disponible 7j/7 pour vos événements</p>
        </div>
      </div>
    </section>
  )
} 