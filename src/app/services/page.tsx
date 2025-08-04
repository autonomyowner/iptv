import { ServicesList } from '@/components/ServicesList'
import { PricingSection } from '@/components/PricingSection'

export default function ServicesPage(): JSX.Element {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-elegant font-bold text-white mb-6">
            Nos Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services de décoration événementielle. 
            Chaque service est personnalisé selon vos besoins et votre budget.
          </p>
        </div>

        {/* Services List */}
        <ServicesList />
        
        {/* Pricing Section */}
        <PricingSection />
      </div>
    </div>
  )
} 