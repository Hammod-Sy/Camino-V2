import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTrips } from '../../hooks/useTrips';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function ShortBreaksSection() {
  const { data: trips, isLoading } = useTrips({ duration: '3-5' });
  const shortBreakTrips = Array.isArray(trips) ? trips.slice(0, 6) : [];

  if (isLoading) {
    return (
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-12">
            <div className="h-12 bg-gray-200 rounded-lg w-64 mx-auto animate-pulse" />
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24">
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
              Short Breaks by Train
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Perfect getaways for long weekends. Explore Europe's most charming destinations in 3-5 days.
            </p>
          </div>
          <Link to="/collections/short-breaks-by-train">
            <Button variant="secondary">See All Trips</Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {shortBreakTrips.map((trip, index) => (
            <motion.div
              key={trip.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/trip/${trip.slug}`}>
                <Card interactive className="overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={trip.heroImage}
                      alt={trip.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="brand">{trip.durationDays} days</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-camino-charcoal mb-2 line-clamp-1">
                      {trip.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {trip.routeCities.slice(0, 3).join(' → ')}
                      {trip.routeCities.length > 3 ? '...' : ''}
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
      </Container>
    </section>
  );
}
