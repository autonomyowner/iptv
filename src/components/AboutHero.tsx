import Image from 'next/image'

export const AboutHero = (): JSX.Element => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl font-elegant font-bold text-white mb-6">
                À Propos de Perfect Events ❤️
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Nous sommes passionnés par la création d&apos;expériences uniques et mémorables 
                à travers la décoration événementielle.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-elegant font-semibold text-red-400 mb-4">
                  Notre Histoire
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Fondée à Tlemcen, Perfect Events est née de la passion pour transformer 
                  les événements ordinaires en moments extraordinaires. Depuis plus de 3 ans, 
                  nous créons des décors qui racontent des histoires et célèbrent l&apos;amour, 
                  la joie et les réussites de nos clients.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-elegant font-semibold text-red-400 mb-4">
                  Notre Mission
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Notre mission est de transformer vos rêves en réalité à travers des 
                  décors personnalisés et élégants. Nous croyons que chaque événement 
                  mérite d&apos;être unique et mémorable, et nous mettons tout notre savoir-faire 
                  pour créer l&apos;ambiance parfaite.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-elegant font-semibold text-red-400 mb-4">
                  Notre Approche
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Nous travaillons en étroite collaboration avec nos clients pour comprendre 
                  leurs besoins, leurs goûts et leur budget. Chaque projet est unique et 
                  mérite une attention particulière pour créer une expérience inoubliable.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-elegant font-bold text-red-400 mb-2">
                  100+
                </div>
                <div className="text-gray-300 text-sm">
                  Événements Réalisés
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-elegant font-bold text-red-400 mb-2">
                  3+
                </div>
                <div className="text-gray-300 text-sm">
                  Années d&apos;Expérience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-elegant font-bold text-red-400 mb-2">
                  100%
                </div>
                <div className="text-gray-300 text-sm">
                  Clients Satisfaits
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <div className="relative aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Équipe Perfect Events"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-slate-800/90 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-slate-700/50">
              <div className="flex items-center space-x-4">
                <div className="text-3xl">💫</div>
                <div>
                  <div className="font-semibold text-white">
                    Service Premium
                  </div>
                  <div className="text-sm text-gray-300">
                    Qualité garantie
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 