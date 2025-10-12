import Image from 'next/image'

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
    event: 'Mariage intimiste',
    content:
      "Perfect Events a sublime notre mariage. L equipe a compris notre vision et l a transformee en un decor chaleureux et raffine.",
    rating: '5/5 satisfaction',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '2',
    name: 'Fatima',
    event: 'Anniversaire 50 ans',
    content:
      "Une decoration sur mesure qui a totalement charme nos invites. Tout etait coordonne avec soin et beaucoup de gout.",
    rating: '5/5 satisfaction',
    image:
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '3',
    name: 'Mohammed',
    event: 'Ceremonie familiale',
    content:
      "Un decor respectueux et elegant qui a apporte beaucoup de douceur a notre ceremonie. Service attentionne du debut a la fin.",
    rating: '5/5 satisfaction',
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=400&q=80',
  },
]

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="border-y border-neutral-200 bg-white/80 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            Confiance clients
          </p>
          <h2 className="mt-5 text-4xl font-elegant font-semibold text-neutral-900 sm:text-5xl">
            Des evenements qui laissent une impression durable
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600">
            Chaque projet est accompagne avec discretion et rigueur pour offrir
            une experience memorables aux personnes qui nous font confiance.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-white/90 p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border border-neutral-200">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
                    {testimonial.rating}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-neutral-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-neutral-500">{testimonial.event}</p>
                </div>
              </div>

              <p className="mt-6 flex-1 text-sm leading-relaxed text-neutral-600">
                {`"${testimonial.content}"`}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 text-center sm:grid-cols-3">
          <div className="rounded-3xl border border-neutral-200 bg-white/70 px-6 py-8">
            <p className="text-4xl font-elegant font-semibold text-neutral-900">
              100+
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.35em] text-neutral-500">
              Evenements realises
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white/70 px-6 py-8">
            <p className="text-4xl font-elegant font-semibold text-neutral-900">
              3+
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.35em] text-neutral-500">
              Annees d experience
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white/70 px-6 py-8">
            <p className="text-4xl font-elegant font-semibold text-neutral-900">
              Equipe dediee
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.35em] text-neutral-500">
              Conseil sur mesure
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
