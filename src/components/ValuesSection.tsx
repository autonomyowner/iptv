export const ValuesSection = (): JSX.Element => {
  const values = [
    {
      icon: '💎',
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque détail, de la conception à l\'installation finale.'
    },
    {
      icon: '🎨',
      title: 'Créativité',
      description: 'Notre équipe créative transforme vos idées en décors uniques et mémorables.'
    },
    {
      icon: '🤝',
      title: 'Confiance',
      description: 'Nous construisons des relations durables basées sur la confiance et la transparence.'
    },
    {
      icon: '⏰',
      title: 'Ponctualité',
      description: 'Nous respectons vos délais et nous engageons à être ponctuels pour tous vos événements.'
    },
    {
      icon: '💝',
      title: 'Personnalisation',
      description: 'Chaque projet est unique et mérite une approche personnalisée selon vos besoins.'
    },
    {
      icon: '🌟',
      title: 'Passion',
      description: 'Notre passion pour la décoration nous pousse à créer des expériences extraordinaires.'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-elegant font-bold text-white mb-6">
            Nos Valeurs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ces valeurs guident chacune de nos actions et nous permettent de créer 
            des expériences exceptionnelles pour nos clients.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-elegant font-semibold text-white mb-4">
                {value.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Commitment Section */}
        <div className="mt-20 text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-12 border border-slate-700/50">
            <h3 className="text-3xl font-elegant font-bold text-white mb-6">
              Notre Engagement
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Nous nous engageons à créer des expériences uniques et mémorables pour chaque client. 
              Notre équipe dévouée travaille avec passion pour transformer vos rêves en réalité, 
              en respectant vos besoins, votre budget et vos délais.
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-elegant font-bold text-red-400 mb-2">
                  Qualité
                </div>
                <p className="text-gray-300 text-sm">
                  Matériaux de première qualité
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-elegant font-bold text-red-400 mb-2">
                  Service
                </div>
                <p className="text-gray-300 text-sm">
                  Accompagnement personnalisé
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-elegant font-bold text-red-400 mb-2">
                  Satisfaction
                </div>
                <p className="text-gray-300 text-sm">
                  Clients 100% satisfaits
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 