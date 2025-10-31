'use client'

export const HeroSection = (): JSX.Element => {

  const handleContactClick = (): void => {
    const phoneNumber = '+33745947222'
    const message =
      'Bonjour! Je suis intéressé(e) par vos produits numériques et services IPTV.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-gray-50 to-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold text-iptvzh-black-deep sm:text-5xl lg:text-6xl mb-6">
              Produits Numériques Premium
            </h1>
            <p className="text-xl text-iptvzh-gray-blue mb-8">
              Votre destination #1 pour les services numériques à prix imbattables
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleContactClick}
                className="rounded-xl bg-gradient-to-r from-iptvzh-green-whatsapp to-iptvzh-green-success px-8 py-4 text-base font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                type="button"
              >
                Contactez-nous sur WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
