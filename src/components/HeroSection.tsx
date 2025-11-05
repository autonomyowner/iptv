'use client'

export const HeroSection = (): JSX.Element => {
  const handleContactClick = (): void => {
    const phoneNumber = '+33745947222'
    const message = 'Bonjour! Je suis intéressé(e) par vos produits numériques et services IPTV.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section
      className="relative h-screen bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: "url('/picturs/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60" />
      <div className="relative z-10 text-center p-4">
        <h1 className="text-5xl md:text-7xl font-bold">Bienvenue chez IPTVZH</h1>
        <p className="mt-4 text-lg md:text-2xl">
          La destination ultime pour les produits numériques et les abonnements IPTV en France.
        </p>
        <div className="mt-8">
          <button
            onClick={handleContactClick}
            className="bg-brand-gold text-white font-bold py-4 px-8 rounded-full transition-transform duration-300 hover:scale-105"
            type="button"
          >
            Contactez-nous sur WhatsApp
          </button>
        </div>
      </div>
    </section>
  )
}