import type { Trip } from '../../types';

interface TripPracticalInfoProps {
  trip: Trip;
}

export default function TripPracticalInfo({ trip }: TripPracticalInfoProps) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-serif font-bold text-camino-charcoal mb-8">Practical information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-camino-charcoal mb-4">Getting there</h3>
          <p className="text-gray-700">
            Your journey begins at {trip.stops[0]?.city || 'the starting point'}. 
            Detailed arrival instructions and transport connections will be provided in your journey guide.
          </p>
        </div>
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-camino-charcoal mb-4">Accommodation</h3>
          <p className="text-gray-700">
            All accommodations are carefully selected for comfort and location. 
            Check-in details and local recommendations are included in your guide.
          </p>
        </div>
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-camino-charcoal mb-4">What to bring</h3>
          <p className="text-gray-700">
            Pack comfortable walking shoes, weather-appropriate clothing, and a sense of adventure. 
            Full packing suggestions are provided in your journey guide.
          </p>
        </div>
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-camino-charcoal mb-4">Support</h3>
          <p className="text-gray-700">
            24/7 emergency support is available throughout your journey. 
            Contact information and assistance details are in your guide.
          </p>
        </div>
      </div>
    </section>
  );
}

