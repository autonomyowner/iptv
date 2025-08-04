import { AboutHero } from '@/components/AboutHero'
import { ValuesSection } from '@/components/ValuesSection'

export default function AboutPage(): JSX.Element {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <ValuesSection />
    </div>
  )
} 