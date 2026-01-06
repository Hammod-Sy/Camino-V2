import { useState } from 'react';
import type { Trip } from '../../types';

interface PhotoMosaicProps {
  trip: Trip;
}

export default function PhotoMosaic({ trip }: PhotoMosaicProps) {
  const [showModal, setShowModal] = useState(false);
  const images = Array.isArray(trip.images) ? trip.images : [trip.heroImage];
  const mainImage = images[0];
  const mosaicImages = Array.isArray(images) ? images.slice(1, 5) : [];

  return (
    <>
      <section className="mb-8 sm:mb-12 md:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-4 rounded-lg sm:rounded-card-lg overflow-hidden">
          <div className="lg:col-span-2">
            <img
              src={mainImage}
              alt={trip.title}
              className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto lg:h-[600px]"
            />
          </div>
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            {mosaicImages.map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`${trip.title} ${index + 2}`}
                  className="w-full h-full object-cover"
                />
                {trip.stops[index + 1] && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 sm:p-3">
                    <p className="text-white text-xs sm:text-sm font-medium">
                      {trip.stops[index + 1].city}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="mt-3 sm:mt-4 btn-secondary flex items-center space-x-2 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
        >
          <span>See all photos</span>
          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>
      </section>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="max-w-7xl w-full max-h-[95vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {images.map((image, index) => (
                <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer">
                  <img
                    src={image}
                    alt={`${trip.title} ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white text-3xl sm:text-5xl hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}

