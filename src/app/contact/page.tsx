import { ContactInfo } from '@/components/ContactInfo'
import { LocationMap } from '@/components/LocationMap'

export default function ContactPage(): JSX.Element {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-elegant font-bold text-white mb-6">
            Contactez-Nous
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Prêt à créer votre événement parfait ? Contactez-nous pour discuter de votre projet 
            et obtenir un devis personnalisé.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <LocationMap />
        </div>
      </div>
    </div>
  )
} 