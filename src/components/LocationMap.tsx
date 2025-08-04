export const LocationMap = (): JSX.Element => {
  const serviceAreas = [
    'Tlemcen Centre',
    'Tlemcen Ouest',
    'Tlemcen Est',
    'Aïn Témouchent',
    'Oran (sur demande)',
    'Mostaganem (sur demande)'
  ]

  return (
    <div className="space-y-8">
      {/* Service Area */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
        <h2 className="text-3xl font-elegant font-bold text-white mb-8">
          Zone de Service
        </h2>
        
        <div className="mb-6">
          <p className="text-gray-300 leading-relaxed mb-4">
            Nous servons principalement la région de Tlemcen et ses environs. 
            Pour les événements en dehors de notre zone habituelle, contactez-nous 
            pour discuter des possibilités.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {serviceAreas.map((area, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <span className="text-gray-300">{area}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-600/20 rounded-lg border border-blue-500/30">
          <p className="text-blue-300 text-sm">
            🌍 <strong>Note :</strong> Pour les événements en dehors de notre zone habituelle, 
            des frais de déplacement peuvent s&apos;appliquer.
          </p>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
        <h2 className="text-3xl font-elegant font-bold text-white mb-8">
          Notre Localisation
        </h2>
        
        <div className="relative h-64 bg-slate-700 rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4">📍</div>
              <p className="text-gray-300 mb-2">Tlemcen, Algérie</p>
              <p className="text-sm text-gray-400">
                Carte interactive à venir
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-start space-x-3">
            <div className="text-red-400 mt-1">📍</div>
            <div>
              <h4 className="text-white font-semibold mb-1">Adresse</h4>
              <p className="text-gray-300 text-sm">
                Tlemcen, Wilaya de Tlemcen<br />
                Algérie
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="text-red-400 mt-1">🚗</div>
            <div>
              <h4 className="text-white font-semibold mb-1">Accessibilité</h4>
              <p className="text-gray-300 text-sm">
                Facilement accessible en voiture<br />
                Parking disponible sur demande
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="text-red-400 mt-1">🌍</div>
            <div>
              <h4 className="text-white font-semibold mb-1">Couverture</h4>
              <p className="text-gray-300 text-sm">
                Service disponible dans un rayon de 50km<br />
                Déplacements plus loin sur demande
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
        <h2 className="text-3xl font-elegant font-bold text-white mb-8">
          Informations Pratiques
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Rendez-vous</h3>
            <p className="text-gray-300 text-sm">
              Nous proposons des rendez-vous à domicile pour discuter de votre projet 
              et prendre les mesures nécessaires. Contactez-nous pour planifier une visite.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Installation</h3>
            <p className="text-gray-300 text-sm">
              Notre équipe se déplace sur site pour l&apos;installation et le démontage 
              de tous nos décors. Nous nous adaptons à vos horaires et contraintes.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Urgences</h3>
            <p className="text-gray-300 text-sm">
              Pour les événements en urgence ou les modifications de dernière minute, 
              contactez-nous sur WhatsApp pour une réponse rapide.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 