import { ServicesList } from '@/components/ServicesList'

export default function ServicesPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-kitchen-lux-dark-green-50 to-kitchen-lux-dark-green-100 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-kitchen-lux-dark-green-600">
            Prestations
          </p>
          <h1 className="mt-4 text-4xl font-elegant font-semibold text-kitchen-lux-dark-green-800 sm:text-5xl">
            Nos services
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-kitchen-lux-dark-green-700">
            Decouvrez notre expertise en conception et fabrication de cuisines modernes
            avec une approche personnalisee et un savoir-faire artisanal.
          </p>
        </div>

        <div className="mt-16">
          <ServicesList />
        </div>
      </div>
    </div>
  )
}
