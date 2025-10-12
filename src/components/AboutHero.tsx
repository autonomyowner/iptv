import Image from 'next/image'

export const AboutHero = (): JSX.Element => {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
                A propos
              </p>
              <h1 className="mt-5 text-4xl font-elegant font-semibold text-neutral-900 sm:text-5xl">
                L equipe Perfect Events cultive le sens du detail
              </h1>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                Basee a Tlemcen, Perfect Events imagine des decorums sur mesure
                pour des celebrations qui marquent les esprits. Nous mettons en
                scene votre histoire grace a un jeu de textures, de lumieres et
                d accessoires selectionnes avec soin.
              </p>
            </div>

            <div className="grid gap-8">
              <div>
                <h2 className="text-lg font-semibold text-neutral-900">
                  Notre histoire
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Depuis plus de trois ans, nous accompagnons mariages,
                  anniversaires et rencontres professionnelles avec un regard
                  contemporain et une grande exigence qualitative.
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-neutral-900">
                  Notre promesse
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Offrir des decorums coherents et fluides, du premier croquis a
                  l installation finale, pour une experience sans stress et
                  parfaitement orchestree.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 border-t border-neutral-200 pt-6">
              <div>
                <p className="text-3xl font-elegant font-semibold text-neutral-900">
                  100+
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.35em] text-neutral-500">
                  Evenements
                </p>
              </div>
              <div>
                <p className="text-3xl font-elegant font-semibold text-neutral-900">
                  3+
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.35em] text-neutral-500">
                  Annees
                </p>
              </div>
              <div>
                <p className="text-3xl font-elegant font-semibold text-neutral-900">
                  Equipe
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.35em] text-neutral-500">
                  Dediee
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[32px] border border-neutral-200 bg-white/80 shadow-lg">
              <div className="relative aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80"
                  alt="Equipe Perfect Events"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/10" />
              </div>
            </div>
            <div className="absolute -bottom-8 left-1/2 w-60 -translate-x-1/2 rounded-3xl border border-neutral-200 bg-white/95 px-6 py-5 text-center shadow-lg">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                Atelier creatif
              </p>
              <p className="mt-3 text-sm text-neutral-600">
                Materiaux nobles et mise en scene sur mesure pour chaque projet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
