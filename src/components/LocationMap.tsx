const serviceAreas = [
  'Tlemcen centre',
  'Tlemcen ouest',
  'Tlemcen est',
  'Ain Temouchent',
  'Oran (sur demande)',
  'Mostaganem (sur demande)',
]

export const LocationMap = (): JSX.Element => {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-neutral-200 bg-white/90 px-6 py-10 shadow-sm">
        <h2 className="text-2xl font-elegant font-semibold text-neutral-900">
          Zone de service
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-neutral-600">
          Nous intervenons principalement a Tlemcen et sur demande dans les
          villes voisines. Pour tout projet hors zone, contactez-nous afin
          d evaluer la faisabilite et les frais eventuels.
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
          Deplacements longs sur devis supplementaire
        </p>
      </div>

      <div className="rounded-3xl border border-neutral-200 bg-white/80 px-6 py-10 shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          Notre localisation
        </h3>
        <div className="mt-6 h-64 rounded-2xl border border-neutral-200 bg-neutral-100/70">
          <div className="flex h-full items-center justify-center text-sm uppercase tracking-[0.3em] text-neutral-500">
            Carte interactive bientot disponible
          </div>
        </div>
        <div className="mt-6 grid gap-4 text-sm text-neutral-600">
          <div>
            <p className="font-semibold text-neutral-900">Adresse</p>
            <p className="mt-1">
              Tlemcen, Wilaya de Tlemcen
              <br />
              Algerie
            </p>
          </div>
          <div>
            <p className="font-semibold text-neutral-900">Accessibilite</p>
            <p className="mt-1">
              Acces facile en voiture, possibilite de parking sur demande.
            </p>
          </div>
          <div>
            <p className="font-semibold text-neutral-900">Couverture</p>
            <p className="mt-1">
              Intervention dans un rayon de 50 km, extensions possibles avec
              frais de deplacement.
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
