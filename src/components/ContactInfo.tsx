'use client'

export const ContactInfo = (): JSX.Element => {
  const handleWhatsAppClick = (): void => {
    const phoneNumber = '+213123456789'
    const message = 'Bonjour! Je souhaite discuter de mon projet de décoration événementielle.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handlePhoneClick = (): void => {
    window.open('tel:+213123456789', '_self')
  }

  const handleEmailClick = (): void => {
    window.open('mailto:contact@perfect-events-tlemcen.com', '_self')
  }

  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleWhatsAppClick()
    }
  }

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
        <h2 className="text-3xl font-elegant font-bold text-white mb-8">
          Nos Coordonnées
        </h2>
        
        <div className="space-y-6">
          {/* WhatsApp */}
          <div className="flex items-center space-x-4">
            <div className="bg-green-600 rounded-full p-3">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-1">WhatsApp</h3>
              <p className="text-gray-300 mb-2">Contact rapide et direct</p>
              <button
                onClick={handleWhatsAppClick}
                className="text-red-400 hover:text-red-300 font-medium transition-colors duration-200"
              >
                +213 123 456 789
              </button>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4">
            <div className="bg-red-600 rounded-full p-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 002.311 6.222l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-1">Téléphone</h3>
              <p className="text-gray-300 mb-2">Appel direct</p>
              <button
                onClick={handlePhoneClick}
                className="text-red-400 hover:text-red-300 font-medium transition-colors duration-200"
              >
                +213 123 456 789
              </button>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 rounded-full p-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
              <p className="text-gray-300 mb-2">Contact par email</p>
              <button
                onClick={handleEmailClick}
                className="text-red-400 hover:text-red-300 font-medium transition-colors duration-200"
              >
                contact@perfect-events-tlemcen.com
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
        <h2 className="text-3xl font-elegant font-bold text-white mb-8">
          Horaires d&apos;Ouverture
        </h2>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Lundi - Vendredi</span>
            <span className="text-white font-semibold">9h00 - 18h00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Samedi</span>
            <span className="text-white font-semibold">9h00 - 16h00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Dimanche</span>
            <span className="text-white font-semibold">Sur rendez-vous</span>
          </div>
        </div>

        <div className="mt-6 p-4 bg-red-600/20 rounded-lg border border-red-500/30">
          <p className="text-red-300 text-sm">
            💡 <strong>Conseil :</strong> Pour les urgences et événements en dehors des horaires, 
            contactez-nous sur WhatsApp pour une réponse rapide.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 text-center">
        <h3 className="text-2xl font-elegant font-bold text-white mb-4">
          Prêt à Commencer ?
        </h3>
        <p className="text-gray-300 mb-6">
          Contactez-nous dès maintenant pour discuter de votre projet et obtenir un devis personnalisé.
        </p>
        <button
          onClick={handleWhatsAppClick}
          onKeyDown={handleKeyDown}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
          aria-label="Contactez-nous sur WhatsApp"
          tabIndex={0}
        >
          📞 Commencer Maintenant
        </button>
      </div>
    </div>
  )
} 