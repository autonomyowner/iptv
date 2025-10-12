import Image from 'next/image'

type Service = {
  id: string
  title: string
  description: string
  features: string[]
  image: string
  signature: string
}

const services: Service[] = [
  {
    id: 'weddings',
    title: 'Decoration de mariages',
    description:
      'Ambiances poetiques, arches florales, design de table et scenographie generale pour une celebration elegante et harmonieuse.',
    features: [
      'Direction artistique et moodboards',
      'Amenagement de la ceremonie et de la reception',
      'Centres de table, lumieres et textiles coordonnes',
      'Espaces photos dedies aux invites',
      'Installation, suivi sur site et demontage',
    ],
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    signature: 'Romance sur mesure',
  },
  {
    id: 'birthdays',
    title: 'Decoration d anniversaires',
    description:
      'Des univers festifs et personnalises pour celebrer chaque age avec originalite, que ce soit en famille ou entre amis.',
    features: [
      'Concept et palette chromatique personnalises',
      'Structures decoratives, arches et fonds photo',
      'Table de reception ou buffet coordonne',
      'Accessoires, papeterie et signaletique',
      'Assistance logistique le jour J',
    ],
    image:
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
    signature: 'Celebration taillee a vos envies',
  },
  {
    id: 'ceremonies',
    title: 'Decoration de ceremonies',
    description:
      'Un decor respectueux et soigne pour vos ceremonies religieuses ou officielles, avec une attention particuliere portee aux symboles.',
    features: [
      'Amenagement de l espace principal',
      'Traits de lumiere et textiles sobres',
      'Espaces d accueil et de recueillement',
      'Coordination des elements floraux et accessoires',
      'Presence discrete de l equipe pendant l installation',
    ],
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    signature: 'Sobriete elegante',
  },
  {
    id: 'corporate',
    title: 'Evenements d entreprise',
    description:
      'Des espaces a l image de votre marque pour vos conferences, lancements de produits et rencontres clients ou collaborateurs.',
    features: [
      'Scenographie globale et zoning des espaces',
      'Mise en avant de votre identite visuelle',
      'Mobilier, fleurs et eclairages coordonnes',
      'Accompagnement technique et logistique',
      'Pilotage des fournisseurs partenaires',
    ],
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    signature: 'Impact professionnel',
  },
  {
    id: 'graduations',
    title: 'Ceremonies de remise de diplomes',
    description:
      'Mise en scene ceremonielle et festive pour honorer les parcours academiques et offrir un cadre photo ideal.',
    features: [
      'Espace scene et podium',
      'Arriere-plans et signaletique personnalises',
      'Zones photos pour les diplomes',
      'Decor des espaces de reception',
      'Coordination logistique sur place',
    ],
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    signature: 'Celebration academique',
  },
  {
    id: 'custom',
    title: 'Evenements sur mesure',
    description:
      'Pour toute demande unique ou hors format, nous construisons un decor integre qui repond a vos attentes et contraintes.',
    features: [
      'Atelier d idees et curation sur mesure',
      'Propositions graphiques et maquettes',
      'Selection de materiaux et accessoires',
      'Coordination integrale avec vos prestataires',
      'Pilotage complet jusqu au demontage',
    ],
    image:
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
    signature: 'Signature exclusive',
  },
]

export const ServicesList = (): JSX.Element => {
  return (
    <div className="space-y-20">
      {services.map((service, index) => {
        const isReversed = index % 2 === 1
        return (
          <section
            key={service.id}
            id={service.id}
            className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2"
          >
            <div
              className={`relative overflow-hidden rounded-[32px] border border-neutral-200 bg-white/85 shadow-lg ${
                isReversed ? 'lg:order-2' : ''
              }`}
            >
            <div className="relative aspect-[4/3]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/35 via-transparent to-white/10" />
            </div>
            <div className="flex items-center justify-between px-6 py-5">
              <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                {service.signature}
              </span>
              <span className="text-xs uppercase tracking-[0.35em] text-neutral-400">
                Perfect Events
              </span>
            </div>
            </div>

            <div className={`space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
            <div>
              <h2 className="text-3xl font-elegant font-semibold text-neutral-900">
                {service.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                {service.description}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Compris dans la prestation
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-600">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <button
                type="button"
                className="rounded-full border border-neutral-400 px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-700 transition-colors duration-200 hover:border-neutral-700 hover:text-neutral-900"
              >
                Demander un devis
              </button>
            </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
