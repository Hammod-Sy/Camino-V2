import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDestinations } from '../hooks/useDestinations';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Skeleton from '../components/ui/Skeleton';

export default function DestinationsPage() {
  const { data: destinations, isLoading } = useDestinations();
  const regions = Array.from(new Set(destinations?.map((d) => d.region) || [])).sort();

  return (
    <div>
      {/* Hero header */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-brand-600 to-brand-800 text-white">
        <div className="absolute inset-0 opacity-10 bg-pattern" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Destinations
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Explore Europe's most captivating destinations by train
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Destinations by region */}
      <section className="py-16 md:py-24">
        <Container>
          {isLoading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <Skeleton key={i} variant="rectangular" height={300} className="rounded-2xl" />
              ))}
            </div>
          ) : (
            <>
              {regions.map((region, regionIndex) => {
                const regionDestinations = destinations?.filter((d) => d.region === region) || [];
                return (
                  <div key={region} className="mb-16 md:mb-24">
                    <motion.h2
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: regionIndex * 0.1 }}
                      className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-camino-charcoal mb-8 md:mb-12"
                    >
                      {region}
                    </motion.h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                      {regionDestinations.map((destination, index) => (
                        <motion.div
                          key={destination.id}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: (regionIndex * 0.1) + (index * 0.05) }}
                        >
                          <Link to={`/destinations/${destination.slug}`}>
                            <Card interactive className="overflow-hidden">
                              <div className="aspect-[4/3] overflow-hidden relative">
                                <img
                                  src={destination.imageUrl}
                                  alt={destination.name}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-3 right-3">
                                  <Badge variant="default" className="bg-white/90 text-camino-charcoal">
                                    {destination.country}
                                  </Badge>
                                </div>
                              </div>
                              <div className="p-4 md:p-5">
                                <h3 className="font-semibold text-camino-charcoal text-lg mb-1">
                                  {destination.name}
                                </h3>
                                <p className="text-sm text-gray-600 line-clamp-2">
                                  {destination.country}
                                </p>
                              </div>
                            </Card>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </Container>
      </section>
    </div>
  );
}
