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
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-iptvzh-gold-primary/20 bg-gradient-to-br from-iptvzh-white-clean to-iptvzh-gold-soft/20 px-6 py-16 shadow-sm sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-iptvzh-gold-primary">
            Prêt à commencer ?
          </p>
          <h2 className="mt-4 text-4xl font-elegant font-semibold text-iptvzh-navy-blue sm:text-5xl">
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
              className="rounded-full bg-gradient-to-r from-iptvzh-navy-blue to-iptvzh-gold-primary px-10 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition-all duration-200 hover:from-iptvzh-gold-primary hover:to-iptvzh-navy-blue hover:shadow-lg hover:shadow-iptvzh-gold-primary/30"
              type="button"
            >
              🛒 Découvrir nos abonnements
            </button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 text-center sm:grid-cols-3">
          <div className="rounded-2xl border border-iptvzh-gold-primary/20 bg-gradient-to-br from-iptvzh-gold-soft/20 to-iptvzh-white-clean px-6 py-8">
            <p className="text-sm uppercase tracking-[0.3em] text-iptvzh-gold-primary">
              WhatsApp
            </p>
            <p className="mt-4 text-lg font-semibold text-iptvzh-navy-blue">
              +33 7 45 94 72 22
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-iptvzh-gold-primary hover:text-iptvzh-navy-blue underline underline-offset-4 transition-colors duration-200"
              type="button"
            >
              Commander maintenant
            </button>
          </div>

          <div className="rounded-2xl border border-iptvzh-gold-primary/20 bg-gradient-to-br from-iptvzh-gold-soft/20 to-iptvzh-white-clean px-6 py-8">
            <p className="text-sm uppercase tracking-[0.3em] text-iptvzh-gold-primary">
              Telephone
            </p>
            <p className="mt-4 text-lg font-semibold text-iptvzh-navy-blue">
              +33 7 45 94 72 22
            </p>
            <button
              onClick={handlePhoneClick}
              className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-iptvzh-gold-primary hover:text-iptvzh-navy-blue underline underline-offset-4 transition-colors duration-200"
              type="button"
            >
              Appeler maintenant
            </button>
          </div>

          <div className="rounded-2xl border border-iptvzh-gold-primary/20 bg-gradient-to-br from-iptvzh-gold-soft/20 to-iptvzh-white-clean px-6 py-8">
            <p className="text-sm uppercase tracking-[0.3em] text-iptvzh-gold-primary">
              Email
            </p>
            <p className="mt-4 text-lg font-semibold text-iptvzh-navy-blue">
              contact@iptvzh.com
            </p>
            <button
              onClick={handleEmailClick}
              className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-iptvzh-gold-primary hover:text-iptvzh-navy-blue underline underline-offset-4 transition-colors duration-200"
              type="button"
            >
              Envoyer un email
            </button>
          </div>
        </div>

        <div className="mt-10 border-t border-iptvzh-gold-primary/20 pt-8 text-center text-xs uppercase tracking-[0.35em] text-iptvzh-gold-primary">
          Assistance rapide 24/7 via WhatsApp / Email
        </div>
      </div>
    </section>
  )
}
