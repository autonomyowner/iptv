const serviceAreas = [
  'Toutes les 58 wilayas',
  'Alger et région',
  'Oran et région',
  'Constantine et région',
  'Annaba et région',
  'Autres wilayas sur demande',
]

export const LocationMap = (): JSX.Element => {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-neutral-200 bg-white/90 px-6 py-10 shadow-sm">
        <h2 className="text-2xl font-elegant font-semibold text-neutral-900">
          Zone de service
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-neutral-600">
          Nous intervenons dans toutes les 58 wilayas d&apos;Algérie. 
          Pour tout projet, contactez-nous afin d&apos;évaluer la faisabilité 
          et les frais de déplacement selon votre localisation.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-3 text-sm text-neutral-600 sm:grid-cols-2">
          {serviceAreas.map((area) => (
            <div
              key={area}
              className="rounded-2xl border border-neutral-200 bg-white/80 px-4 py-3"
            >
              {area}
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-neutral-500">
          Frais de déplacement selon la distance
        </p>
      </div>

      <div className="rounded-3xl border border-neutral-200 bg-white/80 px-6 py-10 shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          Nos localisations
        </h3>
        <p className="mt-2 text-sm text-neutral-600">
          Nous disposons de deux points de service pour mieux vous servir
        </p>
        
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Bouzareah Location */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-neutral-900">Bouzareah</h4>
            <div className="h-48 rounded-2xl border border-neutral-200 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.123456789!2d3.1718739!3d36.5656777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128eff12c7cb1229%3A0xb92a54a68d5c140e!2sCuisine%20Alger!5e0!3m2!1sfr!2sdz!4v1234567890123!5m2!1sfr!2sdz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cuisine Alger - Bouzareah"
                className="w-full h-full"
              />
            </div>
            <div className="text-sm text-neutral-600">
              <p className="font-semibold text-neutral-900">Adresse</p>
              <p className="mt-1">
                Cuisine Alger
                <br />
                Bouzareah, Alger, Algérie
              </p>
            </div>
          </div>

          {/* Larbaâ Location */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-neutral-900">Larbaâ</h4>
            <div className="h-48 rounded-2xl border border-neutral-200 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.123456789!2d3.1718739!3d36.5656777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128eff12c7cb1229%3A0xb92a54a68d5c140e!2sCuisine%20Alger!5e0!3m2!1sfr!2sdz!4v1234567890123!5m2!1sfr!2sdz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cuisine Alger - Larbaâ"
                className="w-full h-full"
              />
            </div>
            <div className="text-sm text-neutral-600">
              <p className="font-semibold text-neutral-900">Adresse</p>
              <p className="mt-1">
                Cuisine Alger
                <br />
                Larbaâ, Blida, Algérie
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 text-sm text-neutral-600">
          <div>
            <p className="font-semibold text-neutral-900">Accessibilité</p>
            <p className="mt-1">
              Accès facile en voiture aux deux emplacements, possibilité de parking sur demande.
            </p>
          </div>
          <div>
            <p className="font-semibold text-neutral-900">Couverture</p>
            <p className="mt-1">
              Intervention dans toutes les 58 wilayas d&apos;Algérie avec 
              frais de déplacement selon la distance.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-neutral-200 bg-white/80 px-6 py-8 shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          Informations pratiques
        </h3>
        <div className="mt-4 grid gap-4 text-sm text-neutral-600">
          <div>
            <p className="font-semibold text-neutral-900">Rendez-vous</p>
            <p className="mt-1">
              Possibilite de rendez-vous sur site pour comprendre vos besoins et
              prendre les mesures necessaires.
            </p>
          </div>
          <div>
            <p className="font-semibold text-neutral-900">Installation</p>
            <p className="mt-1">
              Equipe dediee pour installer et demonter les elements de decor,
              avec respect des contraintes horaires.
            </p>
          </div>
          <div>
            <p className="font-semibold text-neutral-900">Urgences</p>
            <p className="mt-1">
              Pour les demandes de derniere minute, privilégiez WhatsApp pour
              obtenir une reponse rapide.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
