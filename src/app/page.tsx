import Image from 'next/image'
import Link from 'next/link'
import { HeroSection } from '@/components/HeroSection'
import { ServicesPreview } from '@/components/ServicesPreview'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { CTASection } from '@/components/CTASection'

export default function HomePage(): JSX.Element {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesPreview />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
} 