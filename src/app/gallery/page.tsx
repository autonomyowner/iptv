import { GalleryGrid } from '@/components/GalleryGrid'

export default function GalleryPage(): JSX.Element {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-elegant font-bold text-white mb-6">
            Notre Galerie
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez nos réalisations en décoration événementielle. 
            Chaque événement est unique et nous mettons tout notre savoir-faire 
            pour créer des moments inoubliables.
          </p>
        </div>

        {/* Gallery Grid */}
        <GalleryGrid />
      </div>
    </div>
  )
} 