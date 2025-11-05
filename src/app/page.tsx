import { HeroSection } from '@/components/HeroSection'
import { FeatureCategories } from '@/components/FeatureCategories'
import { ServicesList } from '@/components/ServicesList'

export default function HomePage(): JSX.Element {
  return (
    <div className="min-h-screen bg-brand-gray">
      <HeroSection />
      <FeatureCategories />
      <ServicesList />
    </div>
  )
}