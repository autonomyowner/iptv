import Link from 'next/link'
import { HeroSection } from '@/components/HeroSection'
import { ServicesPreview } from '@/components/ServicesPreview'
import { ImageCarousel } from '@/components/ImageCarousel'
import { CTASection } from '@/components/CTASection'

export default function HomePage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-kitchen-lux-dark-green-50 to-kitchen-lux-dark-green-100">
      <HeroSection />
      <ServicesPreview />
      <ImageCarousel />
      <CTASection />
    </div>
  )
} 