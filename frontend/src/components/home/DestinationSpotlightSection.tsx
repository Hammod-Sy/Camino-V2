import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDestinations } from '../../hooks/useDestinations';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { getImageByKeyword } from '../../lib/images';

export default function DestinationSpotlightSection() {
  const { data: destinations, isLoading } = useDestinations();
  const featured = Array.isArray(destinations) ? destinations[0] : null;
  const image = featured ? featured.imageUrl : getImageByKeyword('paris france travel');

  if (isLoading || !featured) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-camino-charcoal mb-6">
              Destination Spotlight
            </h2>
            <h3 className="font-serif text-3xl md:text-4xl font-semibold text-brand-600 mb-4">
              {featured.name}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {featured.description}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Explore {featured.region} and discover why {featured.name} captivates travelers with its unique blend of history, culture, and stunning landscapes. Our carefully crafted routes make it easy to experience the best this destination has to offer.
            </p>
            <Link to={`/destinations/${featured.slug}`}>
              <Button variant="primary" size="lg">
                Explore {featured.name}
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt={featured.name}
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

