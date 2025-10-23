import { ContactInfo } from '@/components/ContactInfo'
import { LocationMap } from '@/components/LocationMap'

export default function ContactPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-kitchen-lux-dark-green-50 to-kitchen-lux-dark-green-100 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-kitchen-lux-dark-green-600">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-elegant font-semibold text-kitchen-lux-dark-green-800 sm:text-5xl">
            Discutons de votre projet
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-kitchen-lux-dark-green-700">
            Partagez vos envies, contraintes et inspirations. Nous reviendrons
            vers vous rapidement avec des pistes creatives et un planning
            personnalise.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ContactInfo />
          <LocationMap />
        </div>
      </div>
    </div>
  )
}
