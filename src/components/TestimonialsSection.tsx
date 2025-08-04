import Image from 'next/image'

type Testimonial = {
  id: string
  name: string
  event: string
  content: string
  rating: number
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Amina & Karim',
    event: 'Mariage',
    content: 'Perfect Events a transformé notre mariage en un rêve éveillé. La décoration était magnifique et l\'équipe très professionnelle. Nous recommandons vivement !',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '2',
    name: 'Fatima',
    event: 'Anniversaire 50 ans',
    content: 'Une décoration exceptionnelle pour l\'anniversaire de ma mère. L\'équipe a su créer une ambiance chaleureuse et élégante. Service impeccable !',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '3',
    name: 'Mohammed',
    event: 'Cérémonie religieuse',
    content: 'Décoration respectueuse et solennelle pour notre cérémonie. L\'équipe a parfaitement compris nos besoins et a créé une atmosphère appropriée.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }
]

const StarRating = ({ rating }: { rating: number }): JSX.Element => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < rating ? 'text-yellow-400' : 'text-gray-400'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-red-900/10 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-elegant font-bold text-white mb-6">
            Avis de Nos Clients
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez ce que nos clients disent de nos services de décoration événementielle.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-slate-700/50"
            >
              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Content */}
              <blockquote className="text-gray-300 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-red-400">
                    {testimonial.event}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50">
            <div className="text-4xl font-elegant font-bold text-red-400 mb-2">
              100+
            </div>
            <div className="text-gray-300">
              Événements Réalisés
            </div>
          </div>
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50">
            <div className="text-4xl font-elegant font-bold text-red-400 mb-2">
              5.0
            </div>
            <div className="text-gray-300">
              Note Moyenne
            </div>
          </div>
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50">
            <div className="text-4xl font-elegant font-bold text-red-400 mb-2">
              3+
            </div>
            <div className="text-gray-300">
              Années d&apos;Expérience
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 