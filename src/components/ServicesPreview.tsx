import Link from 'next/link'
import Image from 'next/image'

type ServiceCard = {
  id: string
  title: string
  description: string
  highlight: string
  image: string
  href: string
}

const services: ServiceCard[] = [
  {
    id: 'cuisine-moderne',
    title: 'Cuisine moderne',
    description:
      'Design contemporain aux lignes epurees avec materiaux haut de gamme pour une cuisine fonctionnelle.',
    highlight: 'Design contemporain',
    image: '/picturs/3.jpg',
    href: '/services#cuisine-moderne',
  },
  {
    id: 'cuisine-classique',
    title: 'Cuisine classique',
    description:
      'Style intemporel avec bois noble et finitions raffinees pour une cuisine chaleureuse et traditionnelle.',
    highlight: 'Tradition et qualite',
    image: '',
    href: '/services#cuisine-classique',
  },
  {
    id: 'renovation-complete',
    title: 'Renovation complete',
    description:
      'Transformation totale de votre cuisine, de la demolition a la finition, pour un resultat cles en main.',
    highlight: 'Renovation cles en main',
    image: '',
    href: '/services#renovation-complete',
  },
]

export const ServicesPreview = (): JSX.Element => {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-kitchen-lux-dark-green-600">
            Savoir faire
          </p>
          <h2 className="mt-5 text-4xl font-elegant font-semibold text-kitchen-lux-dark-green-800 sm:text-5xl">
            Des cuisines soignees pour chaque style
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-kitchen-lux-dark-green-700">
            Nous concevons des cuisines sur mesure qui s adaptent a votre style de vie
            et assurent une experience fonctionnelle et esthetique au quotidien.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative block overflow-hidden rounded-3xl border border-kitchen-lux-dark-green-200 bg-gradient-to-br from-kitchen-lux-dark-green-50 to-kitchen-lux-dark-green-100 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-kitchen-lux-dark-green-200/20"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 flex items-center justify-center">
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

              <div className="flex h-full flex-col gap-5 p-6">
                <span className="text-xs uppercase tracking-[0.35em] text-kitchen-lux-dark-green-600">
                  {service.highlight}
                </span>
                <h3 className="text-2xl font-elegant font-semibold text-kitchen-lux-dark-green-800">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-kitchen-lux-dark-green-700">
                  {service.description}
                </p>
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-kitchen-lux-dark-green-800 group-hover:text-kitchen-lux-dark-green-600 transition-colors duration-200">
                  Decouvrir le service
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="inline-flex rounded-full border border-kitchen-lux-dark-green-400 px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-kitchen-lux-dark-green-700 transition-colors duration-200 hover:border-kitchen-lux-dark-green-600 hover:text-kitchen-lux-dark-green-800 hover:bg-kitchen-lux-dark-green-50"
          >
            Voir tous les services
          </Link>
        </div>
      </div>
    </section>
  )
}
