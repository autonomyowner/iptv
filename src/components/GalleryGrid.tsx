'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

type GalleryItem = {
  id: string
  title: string
  category: string
  image: string
  description: string
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Mariage elegant',
    category: 'Mariage',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    description:
      'Decor romantique avec compositions florales suspendues et mise en lumiere douce.',
  },
  {
    id: '2',
    title: 'Anniversaire 50 ans',
    category: 'Anniversaire',
    image:
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
    description:
      'Atmosphere chaleureuse aux tons caramel avec bar a douceurs personnalise.',
  },
  {
    id: '3',
    title: 'Ceremonie religieuse',
    category: 'Ceremonie',
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    description:
      'Espace solennel et epure, respect des traditions et mise en avant des symboles.',
  },
  {
    id: '4',
    title: 'Mariage traditionnel',
    category: 'Mariage',
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
    description:
      'Alliance de touches traditionnelles et contemporaines pour une ambiance chaleureuse.',
  },
  {
    id: '5',
    title: 'Anniversaire enfant',
    category: 'Anniversaire',
    image:
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
    description:
      'Univers ludique et colore avec zones de jeux et buffet personalise.',
  },
  {
    id: '6',
    title: 'Ceremonie officielle',
    category: 'Ceremonie',
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    description:
      'Mise en scene precise pour un evenement institutionnel avec accueil des invites.',
  },
  {
    id: '7',
    title: 'Mariage moderne',
    category: 'Mariage',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    description:
      'Design contemporain, melange de structures metalliques et de fleurs delicates.',
  },
  {
    id: '8',
    title: 'Anniversaire adulte',
    category: 'Anniversaire',
    image:
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
    description:
      'Reception chic avec bar signature et scenographie lumineuse.',
  },
  {
    id: '9',
    title: 'Ceremonie familiale',
    category: 'Ceremonie',
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    description:
      'Decor intime pour une reunion familiale avec espaces lounges accueillants.',
  },
]

export const GalleryGrid = (): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  useEffect(() => {
    if (!selectedImage) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        setSelectedImage(null)
        return
      }

      const currentIndex = galleryItems.findIndex(
        (item) => item.id === selectedImage.id,
      )

      if (event.key === 'ArrowRight') {
        const nextIndex =
          currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1
        setSelectedImage(galleryItems[nextIndex])
      }

      if (event.key === 'ArrowLeft') {
        const previousIndex =
          currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1
        setSelectedImage(galleryItems[previousIndex])
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  const handleImageClick = (item: GalleryItem): void => {
    setSelectedImage(item)
  }

  const handlePrevious = (): void => {
    if (!selectedImage) return
    const currentIndex = galleryItems.findIndex(
      (item) => item.id === selectedImage.id,
    )
    const previousIndex =
      currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1
    setSelectedImage(galleryItems[previousIndex])
  }

  const handleNext = (): void => {
    if (!selectedImage) return
    const currentIndex = galleryItems.findIndex(
      (item) => item.id === selectedImage.id,
    )
    const nextIndex =
      currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1
    setSelectedImage(galleryItems[nextIndex])
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleImageClick(item)}
            className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white/80 text-left shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="relative aspect-square">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/80">
                  {item.category}
                </p>
                <p className="text-lg font-elegant font-semibold text-white">
                  {item.title}
                </p>
                <p className="text-sm text-white/80">{item.description}</p>
                <span className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 underline underline-offset-4">
                  Voir le projet
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-10">
          <div className="relative w-full max-w-4xl rounded-3xl border border-neutral-700 bg-neutral-900/80 p-6 backdrop-blur">
            <div className="flex justify-between gap-4 text-xs uppercase tracking-[0.3em] text-neutral-300">
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="underline underline-offset-4"
              >
                Fermer
              </button>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="underline underline-offset-4"
                >
                  Precedent
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="underline underline-offset-4"
                >
                  Suivant
                </button>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                width={1200}
                height={800}
                className="w-full object-cover"
              />
            </div>
            <div className="mt-6 rounded-2xl bg-neutral-900/70 px-6 py-5 text-neutral-100">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-300">
                {selectedImage.category}
              </p>
              <p className="mt-3 text-2xl font-elegant font-semibold">
                {selectedImage.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-200">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
