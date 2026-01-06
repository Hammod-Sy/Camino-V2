import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useTrip } from '../hooks/useTrips';
import TripFiltersBar from '../components/trip/TripFiltersBar';
import TripHeader from '../components/trip/TripHeader';
import PhotoMosaic from '../components/trip/PhotoMosaic';
import RouteMap from '../components/trip/RouteMap';
import TripItinerary from '../components/trip/TripItinerary';
import TripPracticalInfo from '../components/trip/TripPracticalInfo';
import TripFAQ from '../components/trip/TripFAQ';

export default function TripDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: trip, isLoading } = useTrip(slug || '');
  const [filters, setFilters] = useState({
    startDate: '',
    startFrom: 'London',
    people: 2,
    rooms: 1,
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-[6%] py-8 sm:py-16 text-center">
        <div className="text-lg sm:text-xl">Loading trip details...</div>
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="container mx-auto px-[6%] py-8 sm:py-16 text-center">
        <div className="text-lg sm:text-xl">Trip not found</div>
      </div>
    );
  }

  return (
    <div>
      <TripFiltersBar filters={filters} onFiltersChange={setFilters} />
      <div className="container mx-auto px-[6%] py-4 sm:py-8">
        <TripHeader trip={trip} />
        <PhotoMosaic trip={trip} />
        <RouteMap trip={trip} />
        <TripItinerary trip={trip} />
        <TripPracticalInfo trip={trip} />
        <TripFAQ tripSlug={trip.slug} />
      </div>
    </div>
  );
}

