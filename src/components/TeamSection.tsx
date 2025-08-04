import Image from 'next/image'

type TeamMember = {
  name: string
  role: string
  description: string
  image: string
  experience: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sarah Benali',
    role: 'Directrice & Décoratrice en Chef',
    description: 'Passionnée de décoration depuis plus de 5 ans, Sarah apporte sa créativité et son expertise pour créer des décors uniques et mémorables.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    experience: '5+ ans d&apos;expérience'
  },
  {
    name: 'Ahmed Mansouri',
    role: 'Décorateur & Installateur',
    description: 'Spécialiste de l\'installation et de la logistique, Ahmed s\'assure que chaque détail est parfaitement exécuté.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    experience: '3+ ans d&apos;expérience'
  },
  {
    name: 'Fatima Zerrouki',
    role: 'Designer & Consultante',
    description: 'Fatima apporte son sens du design et sa créativité pour transformer vos idées en décors magnifiques.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    experience: '4+ ans d&apos;expérience'
  }
]

export const TeamSection = (): JSX.Element => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-elegant font-bold text-white mb-6">
            Notre Équipe
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Une équipe passionnée et expérimentée qui met tout son savoir-faire 
            au service de vos événements les plus importants.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-elegant font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <div className="text-red-400 font-medium mb-3">
                  {member.role}
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {member.description}
                </p>
                <div className="text-sm text-gray-400">
                  {member.experience}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Values */}
        <div className="mt-20 text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-12 border border-slate-700/50">
            <h3 className="text-3xl font-elegant font-bold text-white mb-8">
              Notre Philosophie
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  Créativité
                </h4>
                <p className="text-gray-300">
                  Chaque projet est une nouvelle aventure créative où nous explorons 
                  des idées uniques pour créer des décors extraordinaires.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  Collaboration
                </h4>
                <p className="text-gray-300">
                  Nous travaillons en étroite collaboration avec nos clients pour 
                  comprendre leurs besoins et créer des décors parfaits.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💫</div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  Excellence
                </h4>
                <p className="text-gray-300">
                  Nous visons l&apos;excellence dans chaque détail, de la conception 
                  initiale à l&apos;installation finale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 