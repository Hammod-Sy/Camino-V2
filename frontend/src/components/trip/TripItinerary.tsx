import { useState } from 'react';
import type { Trip } from '../../types';

interface TripItineraryProps {
  trip: Trip;
}

export default function TripItinerary({ trip }: TripItineraryProps) {
  const [openDay, setOpenDay] = useState<number | null>(null);

  // Generate mock itinerary days based on stops
  const itinerary = trip.stops.map((stop, index) => ({
    day: index + 1,
    title: `Day ${index + 1}: Arrive in ${stop.city}`,
    description: `Explore ${stop.city} and its surroundings. ${stop.nights > 1 ? `Stay for ${stop.nights} nights.` : 'Overnight stay.'}`,
    activities: [
      `Arrival in ${stop.city}`,
      `Check into accommodation`,
      `Explore the city center`,
      `Local dining recommendations`,
    ],
  }));

  return (
    <section className="mb-8 sm:mb-12 md:mb-16">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-camino-charcoal mb-4 sm:mb-6 md:mb-8">Itinerary</h2>
      <div className="space-y-3 sm:space-y-4">
        {itinerary.map((day) => (
          <div key={day.day} className="card overflow-hidden">
            <button
              onClick={() => setOpenDay(openDay === day.day ? null : day.day)}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <div className="text-left flex-1 pr-2">
                <h3 className="text-base sm:text-lg font-semibold text-camino-charcoal">{day.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">{day.description}</p>
              </div>
              <svg
                className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-transform flex-shrink-0 ${
                  openDay === day.day ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDay === day.day && (
              <div className="px-4 sm:px-6 pb-3 sm:pb-4 border-t bg-gray-50">
                <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
                  {day.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-start space-x-1.5 sm:space-x-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-camino-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm sm:text-base text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

