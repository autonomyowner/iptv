'use client'

import { useState } from 'react'
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
    title: 'Mariage Élégant',
    category: 'Mariage',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Décoration romantique et élégante pour un mariage de rêve'
  },
  {
    id: '2',
    title: 'Anniversaire 50 ans',
    category: 'Anniversaire',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Célébration chaleureuse avec décoration personnalisée'
  },
  {
    id: '3',
    title: 'Cérémonie Religieuse',
    category: 'Cérémonie',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Décoration solennelle et respectueuse'
  },
  {
    id: '4',
    title: 'Mariage Traditionnel',
    category: 'Mariage',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Mélange parfait entre tradition et modernité'
  },
  {
    id: '5',
    title: 'Anniversaire Enfant',
    category: 'Anniversaire',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Décoration colorée et festive pour les petits'
  },
  {
    id: '6',
    title: 'Cérémonie Officielle',
    category: 'Cérémonie',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Ambiance solennelle et professionnelle'
  },
  {
    id: '7',
    title: 'Mariage Moderne',
    category: 'Mariage',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Design contemporain et épuré'
  },
  {
    id: '8',
    title: 'Anniversaire Adulte',
    category: 'Anniversaire',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Élégance et sophistication pour les grandes occasions'
  },
  {
    id: '9',
    title: 'Cérémonie Familiale',
    category: 'Cérémonie',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Chaleur familiale et traditions respectées'
  }
]

export const GalleryGrid = (): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const handleImageClick = (item: GalleryItem): void => {
    setSelectedImage(item)
  }

  const handleCloseLightbox = (): void => {
    setSelectedImage(null)
  }

  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === 'Escape') {
      handleCloseLightbox()
    }
  }

  const handlePrevious = (): void => {
    if (!selectedImage) return
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id)
    const previousIndex = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1
    setSelectedImage(galleryItems[previousIndex])
  }

  const handleNext = (): void => {
    if (!selectedImage) return
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id)
    const nextIndex = currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1
    setSelectedImage(galleryItems[nextIndex])
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer"
            onClick={() => handleImageClick(item)}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="relative aspect-square">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-elegant font-semibold text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-200 mb-2">
                    {item.category}
                  </p>
                  <p className="text-xs text-gray-300">
                    {item.description}
                  </p>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 bg-red-600/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={handleCloseLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            {/* Close Button */}
            <button
              onClick={handleCloseLightbox}
              className="absolute top-4 right-4 z-10 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-red-300 focus:ring-opacity-50"
              aria-label="Fermer la galerie"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-red-600 hover:bg-red-700 text-white rounded-full p-3 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-red-300 focus:ring-opacity-50"
              aria-label="Image précédente"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-red-600 hover:bg-red-700 text-white rounded-full p-3 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-red-300 focus:ring-opacity-50"
              aria-label="Image suivante"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Image */}
            <div className="relative">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-2xl font-elegant font-semibold text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-red-400 font-medium mb-2">
                  {selectedImage.category}
                </p>
                <p className="text-gray-200">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 