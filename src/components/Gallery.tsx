import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('tous');
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: "/WhatsApp Image 2025-06-05 at 10.46.37.jpeg",
      alt: "Coupe moderne avec dégradé - Barber Plus",
      category: "coupes"
    },
    {
      id: 2,
      src: "/WhatsApp Image 2025-06-05 at 10.46.38.jpeg",
      alt: "Coupe avec motifs rasés - Barber Plus",
      category: "coupes"
    },
    {
      id: 3,
      src: "/WhatsApp Image 2025-06-05 at 10.46.39.jpeg",
      alt: "Coupe fade avec cheveux bouclés - Barber Plus",
      category: "coupes"
    },
    {
      id: 4,
      src: "/WhatsApp Image 2025-06-05 at 10.46.39 (1).jpeg",
      alt: "Coupe classique avec raie - Barber Plus",
      category: "coupes"
    },
    {
      id: 5,
      src: "/WhatsApp Image 2025-06-05 at 10.46.39 (2).jpeg",
      alt: "Coupe moderne avec barbe - Barber Plus",
      category: "coupes"
    },
    {
      id: 6,
      src: "/WhatsApp Image 2025-06-05 at 10.42.42.jpeg",
      alt: "Coupe fade avec barbe - Barber Plus",
      category: "coupes"
    },
    {
      id: 7,
      src: "/WhatsApp Image 2025-06-05 at 10.42.42 (1).jpeg",
      alt: "Fade classique - Barber Plus",
      category: "coupes"
    },
    {
      id: 8,
      src: "/WhatsApp Image 2025-06-05 at 10.42.48.jpeg",
      alt: "Vue d'ensemble du salon - Barber Plus",
      category: "salon"
    },
    {
      id: 9,
      src: "/WhatsApp Image 2025-06-05 at 10.42.48 (1).jpeg",
      alt: "Intérieur du salon professionnel - Barber Plus",
      category: "salon"
    },
    {
      id: 10,
      src: "/WhatsApp Image 2025-06-05 at 10.42.48 (2).jpeg",
      alt: "Espace de travail moderne - Barber Plus",
      category: "salon"
    },
  ];

  const filters = [
    { id: 'tous', label: 'TOUT VOIR', count: galleryImages.length },
    { id: 'coupes', label: 'NOS COUPES', count: galleryImages.filter(img => img.category === 'coupes').length },
    { id: 'salon', label: 'NOTRE SALON', count: galleryImages.filter(img => img.category === 'salon').length }
  ];

  const filteredImages = activeFilter === 'tous' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(filteredImages.length / itemsPerPage);
  const currentImages = filteredImages.slice(
    currentIndex * itemsPerPage, 
    (currentIndex + 1) * itemsPerPage
  );

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    setCurrentIndex(0); // Reset to first page when changing filter
  };

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light tracking-wide text-black mb-4">
            NOTRE TRAVAIL
          </h2>
          <div className="w-16 h-px bg-black mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez nos réalisations et l'ambiance de notre salon professionnel
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              className={`px-6 py-3 text-sm tracking-wider transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-black text-white'
                  : 'border border-black text-black hover:bg-black hover:text-white'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Carrousel */}
        <div className="relative">
          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {currentImages.map((image) => (
              <div
                key={image.id}
                className="aspect-[4/5] overflow-hidden group cursor-pointer rounded-lg shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Navigation du carrousel */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={prevSlide}
                className="p-2 border border-black hover:bg-black hover:text-white transition-all duration-300"
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Indicateurs de page */}
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === currentIndex ? 'bg-black' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 border border-black hover:bg-black hover:text-white transition-all duration-300"
                disabled={currentIndex === totalPages - 1}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}

          {/* Informations sur la pagination */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Page {currentIndex + 1} sur {totalPages} • {filteredImages.length} photo{filteredImages.length > 1 ? 's' : ''}
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Vous aimez ce que vous voyez ? Prenez rendez-vous dès maintenant 
            pour votre prochaine coupe chez Barber Plus.
          </p>
          <a
            href="tel:0187902203"
            className="inline-block border border-black px-8 py-3 text-sm tracking-widest hover:bg-black hover:text-white transition-all duration-300"
          >
            PRENDRE RENDEZ-VOUS
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;