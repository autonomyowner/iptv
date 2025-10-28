import { ServicesList } from '@/components/ServicesList'

export default function ServicesPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-iptvzh-gold-soft/10 to-iptvzh-white-clean px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-iptvzh-gold-primary">
            Catégories principales
          </p>
          <h1 className="mt-4 text-4xl font-elegant font-semibold text-iptvzh-navy-blue sm:text-5xl">
            Nos produits numériques
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-iptvzh-gray-blue">
            Découvrez une large gamme de services digitaux : IPTV, comptes Netflix, RDP, VPN, 
            hébergement, design tools et plus encore — livrés instantanément après paiement.
          </p>
        </div>

        <div className="mt-16">
          <ServicesList />
        </div>
      </div>
    </div>
  )
}
