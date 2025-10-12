'use client'

export const ContactInfo = (): JSX.Element => {
  const handleWhatsAppClick = (): void => {
    const phoneNumber = '+213123456789'
    const message =
      'Bonjour! Je souhaite discuter de mon projet de decoration evennementielle.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`
    window.open(whatsappUrl, '_blank')
  }

  const handlePhoneClick = (): void => {
    window.open('tel:+213123456789', '_self')
  }

  const handleEmailClick = (): void => {
    window.open('mailto:contact@perfect-events-tlemcen.com', '_self')
  }

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-neutral-200 bg-white/90 px-6 py-10 shadow-sm">
        <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
          Coordonnees
        </p>
        <h2 className="mt-4 text-3xl font-elegant font-semibold text-neutral-900">
          Echanger avec notre equipe
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-neutral-600">
          Nous sommes disponibles pour discuter de votre projet, definir un
          budget et planifier les prochaines etapes.
        </p>
      </div>

      <div className="rounded-3xl border border-neutral-200 bg-white/85 px-6 py-8 shadow-sm">
        <h3 className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          WhatsApp
        </h3>
        <p className="mt-2 text-lg font-semibold text-neutral-900">
          +213 123 456 789
        </p>
        <p className="mt-2 text-sm text-neutral-600">
          Reponse rapide et partage de moodboards.
        </p>
        <button
          onClick={handleWhatsAppClick}
          className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 underline underline-offset-4"
          type="button"
        >
          Ouvrir WhatsApp
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="rounded-3xl border border-neutral-200 bg-white/85 px-6 py-8 shadow-sm">
          <h3 className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Telephone
          </h3>
          <p className="mt-2 text-lg font-semibold text-neutral-900">
            +213 123 456 789
          </p>
          <p className="mt-2 text-sm text-neutral-600">
            Pour un briefing rapide ou un suivi d installation.
          </p>
          <button
            onClick={handlePhoneClick}
            className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 underline underline-offset-4"
            type="button"
          >
            Appeler
          </button>
        </div>
        <div className="rounded-3xl border border-neutral-200 bg-white/85 px-6 py-8 shadow-sm">
          <h3 className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Email
          </h3>
          <p className="mt-2 text-lg font-semibold text-neutral-900">
            contact@perfect-events-tlemcen.com
          </p>
          <p className="mt-2 text-sm text-neutral-600">
            Pour partager vos inspirations et documents.
          </p>
          <button
            onClick={handleEmailClick}
            className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 underline underline-offset-4"
            type="button"
          >
            Ecrire un message
          </button>
        </div>
      </div>

      <div className="rounded-3xl border border-neutral-200 bg-white/80 px-6 py-8 text-sm uppercase tracking-[0.3em] text-neutral-500 shadow-sm">
        Horaires : lundi a samedi 9h - 18h • Dimanche sur rendez-vous
      </div>
    </div>
  )
}
