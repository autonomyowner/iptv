
type Testimonial = {
  id: string
  name: string
  event: string
  content: string
  rating: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Amina et Karim',
    event: 'Cuisine moderne',
    content:
      "Cuisine Alger a transforme notre cuisine avec un design moderne et fonctionnel. L equipe a su optimiser l espace et nous offrir exactement ce que nous souhaitions.",
    rating: '5/5 satisfaction',
    image: '',
  },
  {
    id: '2',
    name: 'Fatima',
    event: 'Renovation complete',
    content:
      "Une renovation complete de notre cuisine qui a depasse nos attentes. La qualite de fabrication et l attention aux details sont remarquables.",
    rating: '5/5 satisfaction',
    image: '',
  },
  {
    id: '3',
    name: 'Mohammed',
    event: 'Cuisine classique',
    content:
      "Un travail d artisan exceptionnel pour notre cuisine classique. Le bois noble et les finitions sont d une qualite rare. Service professionnel du debut a la fin.",
    rating: '5/5 satisfaction',
    image: '',
  },
]

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="border-y border-kitchen-lux-dark-green-200 bg-white/80 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-kitchen-lux-dark-green-600">
            Confiance clients
          </p>
          <h2 className="mt-5 text-4xl font-elegant font-semibold text-kitchen-lux-dark-green-800 sm:text-5xl">
            Des cuisines qui transforment votre quotidien
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-kitchen-lux-dark-green-700">
            Chaque cuisine est concue et fabriquee avec precision et passion pour offrir
            un espace fonctionnel et esthetique a nos clients satisfaits.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="flex h-full flex-col rounded-3xl border border-kitchen-lux-dark-green-200 bg-gradient-to-br from-kitchen-lux-dark-green-50 to-kitchen-lux-dark-green-100 p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-kitchen-lux-dark-green-200/20"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border border-kitchen-marble-gray-light bg-neutral-200 flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-kitchen-lux-dark-green-600">
                    {testimonial.rating}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-kitchen-lux-dark-green-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-kitchen-lux-dark-green-600">{testimonial.event}</p>
                </div>
              </div>

              <p className="mt-6 flex-1 text-sm leading-relaxed text-kitchen-lux-dark-green-700">
                {`"${testimonial.content}"`}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 text-center sm:grid-cols-3">
          <div className="rounded-3xl border border-kitchen-lux-dark-green-200 bg-gradient-to-br from-kitchen-lux-dark-green-50 to-kitchen-lux-dark-green-100 px-6 py-8">
            <p className="text-4xl font-elegant font-semibold text-kitchen-lux-dark-green-800">
              50+
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.35em] text-kitchen-lux-dark-green-600">
              Cuisines realisees
            </p>
          </div>
          <div className="rounded-3xl border border-kitchen-lux-dark-green-200 bg-gradient-to-br from-kitchen-lux-dark-green-50 to-kitchen-lux-dark-green-100 px-6 py-8">
            <p className="text-4xl font-elegant font-semibold text-kitchen-lux-dark-green-800">
              5+
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.35em] text-kitchen-lux-dark-green-600">
              Annees d experience
            </p>
          </div>
          <div className="rounded-3xl border border-kitchen-lux-dark-green-200 bg-gradient-to-br from-kitchen-lux-dark-green-50 to-kitchen-lux-dark-green-100 px-6 py-8">
            <p className="text-4xl font-elegant font-semibold text-kitchen-lux-dark-green-800">
              Artisans
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.35em] text-kitchen-lux-dark-green-600">
              Qualifies
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
