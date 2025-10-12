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
    id: 'weddings',
    title: 'Mariages',
    description:
      'Ambiances romantiques, arches florales et design de table pour sublimer votre journee.',
    highlight: 'Signature romance',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    href: '/services#weddings',
  },
  {
    id: 'birthdays',
    title: 'Anniversaires',
    description:
      'Scenographies festives et personnalisees pour célébrer chaque nouvel age avec style.',
    highlight: 'Atmosphere festive',
    image:
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
    href: '/services#birthdays',
  },
  {
    id: 'ceremonies',
    title: 'Ceremonies',
    description:
      'Decor epure et solennel pour vos ceremonies religieuses et evenements officiels.',
    highlight: 'Elegance intemporelle',
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    href: '/services#ceremonies',
  },
]

export const ServicesPreview = (): JSX.Element => {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            Savoir faire
          </p>
          <h2 className="mt-5 text-4xl font-elegant font-semibold text-neutral-900 sm:text-5xl">
            Des ambiances soignees pour chaque occasion
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600">
            Nous composons des espaces sur mesure qui donnent le ton de votre evennement
            et assurent une experience fluide pour vos invites.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative block overflow-hidden rounded-3xl border border-neutral-200 bg-white/90 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 via-transparent to-transparent" />
              </div>

              <div className="flex h-full flex-col gap-5 p-6">
                <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                  {service.highlight}
                </span>
                <h3 className="text-2xl font-elegant font-semibold text-neutral-900">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {service.description}
                </p>
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
                  Decouvrir le service
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="inline-flex rounded-full border border-neutral-400 px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-700 transition-colors duration-200 hover:border-neutral-700 hover:text-neutral-900"
          >
            Voir tous les services
          </Link>
        </div>
      </div>
    </section>
  )
}
