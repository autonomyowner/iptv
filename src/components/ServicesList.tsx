
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
    id: 'cuisine-moderne',
    title: 'Cuisine moderne',
    description:
      'Design contemporain aux lignes epurees avec des materiaux haut de gamme pour une cuisine fonctionnelle et esthetique.',
    features: [
      'Conception 3D et plans detailles',
      'Materiaux premium (lacquer, melamine, bois massif)',
      'Electromenager integre et dissimule',
      'Eclairage LED integre et ambiant',
      'Installation complete par nos equipes',
    ],
    image: '/picturs/3.jpg',
    signature: 'Design contemporain',
  },
  {
    id: 'cuisine-classique',
    title: 'Cuisine classique',
    description:
      'Style intemporel avec bois noble et finitions raffinees pour une cuisine chaleureuse et traditionnelle.',
    features: [
      'Bois massif et placage de qualite',
      'Finitions traditionnelles (vernis, cire, patine)',
      'Poignees et accessoires de style',
      'Plans de travail en granit ou marbre',
      'Fabrication artisanale sur mesure',
    ],
    image:
      '',
    signature: 'Tradition et qualite',
  },
  {
    id: 'amenagement-sur-mesure',
    title: 'Amenagement sur mesure',
    description:
      'Optimisation maximale de l espace avec des solutions personnalisees adaptees a vos contraintes et besoins.',
    features: [
      'Etude ergonomique de l espace',
      'Solutions de rangement optimisees',
      'Adaptation aux contraintes architecturales',
      'Integration d ilots et peninsules',
      'Conception modulaire et evolutive',
    ],
    image:
      '',
    signature: 'Optimisation espace',
  },
  {
    id: 'plans-de-travail',
    title: 'Plans de travail',
    description:
      'Granit, quartz, marbre ou stratifie pour des plans de travail durables et esthetiques adaptes a votre style.',
    features: [
      'Granit naturel et quartz composite',
      'Marbre et pierres naturelles',
      'Stratifie haute pression',
      'Decoupe et usinage precis',
      'Pose et finition professionnelle',
    ],
    image:
      '',
    signature: 'Materiaux nobles',
  },
  {
    id: 'menuiserie',
    title: 'Menuiserie',
    description:
      'Placards, rangements et ilots centraux fabriques sur mesure pour maximiser l espace et l organisation.',
    features: [
      'Placards hauts et bas sur mesure',
      'Ilots centraux et peninsules',
      'Rangements specifiques (epices, vaisselle)',
      'Tiroirs et portes a fermeture douce',
      'Fabrication locale et garantie',
    ],
    image:
      '',
    signature: 'Menuiserie d art',
  },
  {
    id: 'renovation-complete',
    title: 'Renovation complete',
    description:
      'Transformation totale de votre cuisine, de la demolition a la finition, pour un resultat cles en main.',
    features: [
      'Demolition et preparation des murs',
      'Plomberie et electricite',
      'Pose de carrelage et peinture',
      'Installation complete de la cuisine',
      'Suivi et garantie de finition',
    ],
    image:
      '',
    signature: 'Renovation cles en main',
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
              className={`relative overflow-hidden rounded-[32px] border border-kitchen-lux-dark-green-200 bg-gradient-to-br from-kitchen-lux-dark-green-50 to-kitchen-lux-dark-green-100 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-kitchen-lux-dark-green-200/20 ${
                isReversed ? 'lg:order-2' : ''
              }`}
            >
            <div className="relative aspect-[4/3] bg-neutral-100 flex items-center justify-center">
              {service.image ? (
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="text-center text-neutral-400">
                  <div className="text-4xl mb-2">📸</div>
                  <p className="text-sm">Image à venir</p>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between px-6 py-5">
              <span className="text-xs uppercase tracking-[0.35em] text-kitchen-lux-dark-green-600">
                {service.signature}
              </span>
              <span className="text-xs uppercase tracking-[0.35em] text-kitchen-lux-dark-green-500">
                Cuisine Alger
              </span>
            </div>
            </div>

            <div className={`space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
            <div>
              <h2 className="text-3xl font-elegant font-semibold text-kitchen-lux-dark-green-800">
                {service.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-kitchen-lux-dark-green-700">
                {service.description}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-kitchen-lux-dark-green-600">
                Compris dans la prestation
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-kitchen-lux-dark-green-700">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <button
                type="button"
                className="rounded-full border border-kitchen-lux-dark-green-400 px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-kitchen-lux-dark-green-700 transition-colors duration-200 hover:border-kitchen-lux-dark-green-600 hover:text-kitchen-lux-dark-green-800 hover:bg-kitchen-lux-dark-green-50"
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
