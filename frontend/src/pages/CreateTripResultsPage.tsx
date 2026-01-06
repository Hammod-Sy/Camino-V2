import { Link } from 'react-router-dom';
import { useTrips } from '../hooks/useTrips';

export default function CreateTripResultsPage() {
  const { data: trips } = useTrips();
  const results = Array.isArray(trips) ? trips.slice(0, 3) : [];

  return (
    <div className="container mx-auto px-[6%] py-8 sm:py-16 max-w-6xl">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-camino-charcoal mb-3 sm:mb-4 text-center">
        Your personalized itineraries
      </h1>
      <p className="text-center text-gray-600 mb-6 sm:mb-12 text-sm sm:text-base">
        We've curated three trip options based on your preferences
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {results.map((trip, index) => (
          <div key={trip.id} className="card overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={trip.heroImage}
                alt={trip.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 sm:p-6">
              <div className="text-xs sm:text-sm text-camino-orange font-semibold mb-2">
                Option {index + 1}
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-camino-charcoal mb-2">
                {trip.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">{trip.routeCities.join(' → ')}</p>
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <span className="text-gray-700 text-sm sm:text-base">{trip.durationDays} days</span>
                <span className="text-base sm:text-lg font-bold text-camino-charcoal">
                  From €{trip.priceFrom}
                </span>
              </div>
              <Link to={`/trip/${trip.slug}`} className="btn-primary w-full text-center block text-sm sm:text-base py-2 sm:py-3">
                View details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

