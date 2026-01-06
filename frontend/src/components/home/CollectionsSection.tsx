import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCollections } from '../../hooks/useCollections';
import Card from '../ui/Card';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function CollectionsSection() {
  const { data: collections, isLoading } = useCollections();
  const featuredCollections = Array.isArray(collections) ? collections.slice(0, 4) : [];

  if (isLoading) {
    return (
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-12">
            <div className="h-12 bg-gray-200 rounded-lg w-64 mx-auto animate-pulse mb-4" />
            <div className="h-6 bg-gray-200 rounded w-96 mx-auto animate-pulse" />
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
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-camino-charcoal mb-4">
            Featured Collections
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Curated journeys that celebrate slow travel and authentic European experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredCollections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/collections/${collection.slug}`}>
                <Card interactive className="h-[500px] relative overflow-hidden group">
                  <div className="absolute inset-0">
                    <img
                      src={collection.imageUrl}
                      alt={collection.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-serif text-2xl font-bold mb-2 text-white">{collection.title}</h3>
                    <p className="text-white/90 line-clamp-2 text-sm leading-relaxed">
                      {collection.description}
                    </p>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/collections">
            <Button variant="secondary">
              View All Collections
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
