import { ServicesList } from '@/components/ServicesList'

export default function ServicesPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-iptvzh-gray-blue">
            Catégories principales
          </p>
          <h1 className="mt-4 text-4xl font-bold text-iptvzh-black-deep sm:text-5xl">
            Nos produits numériques
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-iptvzh-gray-blue">
            Solutions réseau et hébergement, divertissement IPTV, licences et logiciels, services de création 
            et support client — tout ce dont vous avez besoin, livré instantanément.
          </p>
        </div>

        <div className="mt-16">
          <ServicesList />
        </div>
      </div>
    </div>
  )
}
