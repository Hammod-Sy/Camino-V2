import type { Trip } from '../../types';

interface TripHeaderProps {
  trip: Trip;
}

export default function TripHeader({ trip }: TripHeaderProps) {
  return (
    <div className="mb-8 sm:mb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-start mb-4 sm:mb-6 gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-camino-charcoal flex-1">
          {trip.title}
        </h1>
        <div className="text-left sm:text-right w-full sm:w-auto sm:ml-8">
          <p className="text-xs sm:text-sm text-gray-600">From</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-camino-charcoal">
            €{trip.priceFrom} / person
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-4 sm:mb-6">
        <div className="flex items-center space-x-1.5 sm:space-x-2">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm sm:text-base text-gray-700">{trip.durationDays} days</span>
        </div>
        {trip.co2Emissions && (
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm sm:text-base text-gray-700">
              {trip.co2Emissions} {trip.co2Unit || 'kg'} CO₂
            </span>
          </div>
        )}
      </div>

      <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6">{trip.description}</p>

      {/* What's included */}
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {trip.included.map((item) => (
          <div key={item} className="flex items-center space-x-1.5 sm:space-x-2 bg-gray-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-xs sm:text-sm text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

