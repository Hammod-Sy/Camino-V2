import { useParams, Link } from 'react-router-dom';
import { useCollection } from '../hooks/useCollections';
import { useTrips } from '../hooks/useTrips';

export default function CollectionDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: collection, isLoading } = useCollection(slug || '');
  const { data: trips } = useTrips();

  if (isLoading) {
    return (
      <div className="container mx-auto px-[6%] py-8 sm:py-16 text-center">
        <div className="text-lg sm:text-xl">Loading collection...</div>
      </div>
    );
  }

  if (!collection) {
    return (
      <div className="container mx-auto px-[6%] py-8 sm:py-16 text-center">
        <div className="text-lg sm:text-xl">Collection not found</div>
      </div>
    );
  }

  const collectionTrips = trips?.filter((t) => t.collection === slug) || [];

  return (
    <div>
      <div className="relative h-[250px] sm:h-[350px] md:h-[400px] mb-6 sm:mb-12">
        <img
          src={collection.imageUrl}
          alt={collection.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 md:p-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-2 sm:mb-4">{collection.title}</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl">{collection.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-[6%] pb-8 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {collectionTrips.map((trip) => (
            <Link key={trip.id} to={`/trip/${trip.slug}`}>
              <div className="card overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={trip.heroImage}
                    alt={trip.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-camino-charcoal mb-2">
                    {trip.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">{trip.routeCities.join(' → ')}</p>
                  <div className="btn-primary w-full text-center text-sm sm:text-base py-2 sm:py-3">See trip</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

