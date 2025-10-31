import { HeroSection } from '@/components/HeroSection'
import { FeatureCategories } from '@/components/FeatureCategories'
import { ServicesList } from '@/components/ServicesList'

export default function HomePage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section - Minimal */}
      <HeroSection />
      
      {/* Feature Categories Section - Prominent */}
      <div className="bg-white">
        <FeatureCategories />
      </div>

      {/* Services & Products Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <ServicesList />
          </div>
        </div>
      </div>
    </div>
  )
} 