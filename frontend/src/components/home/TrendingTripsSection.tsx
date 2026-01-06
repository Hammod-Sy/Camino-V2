import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTrips } from '../../hooks/useTrips';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function TrendingTripsSection() {
  const { data: trips, isLoading } = useTrips();
  const [currentIndex, setCurrentIndex] = useState(0);
  const trendingTrips = Array.isArray(trips) ? trips.slice(0, 6) : [];
  const visibleTrips = trendingTrips.slice(currentIndex, currentIndex + 3);

  const nextTrips = () => {
    if (currentIndex + 3 < trendingTrips.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const prevTrips = () => {
    if (currentIndex > 0) {
      setCurrentIndex(Math.max(0, currentIndex - 3));
    }
  };

  if (isLoading) {
    return (
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center mb-12">
            <div className="h-12 bg-gray-200 rounded-lg w-64 mx-auto animate-pulse" />
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 md:mb-16 gap-4"
        >
          <div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-camino-charcoal mb-4">
              Trending Trips
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              The most popular journeys our travelers are booking right now
            </p>
          </div>
          <Link to="/collections">
            <Button variant="secondary">See All Trips</Button>
          </Link>
        </motion.div>

        <div className="relative">
          {/* Carousel container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 min-h-[500px]">
            {visibleTrips.map((trip, index) => (
              <motion.div
                key={trip.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link to={`/trip/${trip.slug}`}>
                  <Card interactive className="h-full overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={trip.heroImage}
                        alt={trip.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="default">Trending</Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-bold text-camino-charcoal mb-2 line-clamp-1">
                        {trip.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {trip.routeCities.join(' → ')}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-brand-600">
                          From {trip.currency} {trip.priceFrom.toLocaleString()}
                        </span>
                        <span className="text-brand-600 font-medium">View →</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Carousel controls */}
          {trendingTrips.length > 3 && (
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTrips}
                disabled={currentIndex === 0}
                className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 hover:border-brand-500 hover:bg-brand-50 flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous trips"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTrips}
                disabled={currentIndex + 3 >= trendingTrips.length}
                className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 hover:border-brand-500 hover:bg-brand-50 flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next trips"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
