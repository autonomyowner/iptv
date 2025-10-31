'use client'

export const CTASection = (): JSX.Element => {
  const handleWhatsAppClick = (): void => {
    const phoneNumber = '+33745947222'
    const message =
      'Bonjour! Je suis intéressé(e) par vos produits numériques et services IPTV.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`
    window.open(whatsappUrl, '_blank')
  }

  const handlePhoneClick = (): void => {
    window.open('tel:+33745947222', '_self')
  }

  const handleEmailClick = (): void => {
    window.open('mailto:contact@iptvzh.com', '_self')
  }

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-5xl rounded-2xl border border-gray-200 bg-white px-6 py-16 shadow-lg sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-iptvzh-gray-blue">
            Prêt à commencer ?
          </p>
          <h2 className="mt-4 text-4xl font-bold text-iptvzh-black-deep sm:text-5xl">
            Rejoignez des milliers d&apos;utilisateurs satisfaits
          </h2>
          <p className="mt-6 text-base leading-relaxed text-iptvzh-gray-blue">
            Profitez des meilleurs services numériques dès aujourd&apos;hui ! 
            Livraison instantanée après paiement et support client 24/7.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="rounded-xl bg-iptvzh-yellow-primary px-10 py-4 text-base font-bold text-iptvzh-black-deep transition-all duration-200 hover:bg-iptvzh-yellow-bright hover:shadow-lg hover:scale-105"
              type="button"
            >
Découvrir nos abonnements
            </button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 text-center sm:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white px-6 py-8 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-sm uppercase tracking-[0.3em] text-iptvzh-gray-blue">
              WhatsApp
            </p>
            <p className="mt-4 text-lg font-bold text-iptvzh-black-deep">
              +33 7 45 94 72 22
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="mt-4 rounded-lg bg-iptvzh-green-whatsapp px-4 py-2 text-sm font-bold text-white hover:bg-iptvzh-green-success transition-colors duration-200"
              type="button"
            >
              Commander maintenant
            </button>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white px-6 py-8 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-sm uppercase tracking-[0.3em] text-iptvzh-gray-blue">
              Telephone
            </p>
            <p className="mt-4 text-lg font-bold text-iptvzh-black-deep">
              +33 7 45 94 72 22
            </p>
            <button
              onClick={handlePhoneClick}
              className="mt-4 rounded-lg bg-iptvzh-navy-blue px-4 py-2 text-sm font-bold text-white hover:bg-iptvzh-navy-blue-dark transition-colors duration-200"
              type="button"
            >
              Appeler maintenant
            </button>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white px-6 py-8 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-sm uppercase tracking-[0.3em] text-iptvzh-gray-blue">
              Email
            </p>
            <p className="mt-4 text-lg font-bold text-iptvzh-black-deep">
              contact@iptvzh.com
            </p>
            <button
              onClick={handleEmailClick}
              className="mt-4 rounded-lg bg-iptvzh-navy-blue px-4 py-2 text-sm font-bold text-white hover:bg-iptvzh-navy-blue-dark transition-colors duration-200"
              type="button"
            >
              Envoyer un email
            </button>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-8 text-center text-sm text-iptvzh-gray-blue">
          Assistance rapide 24/7 via WhatsApp / Email
        </div>
      </div>
    </section>
  )
}
