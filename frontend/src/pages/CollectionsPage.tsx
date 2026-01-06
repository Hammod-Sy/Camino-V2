import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCollections } from '../hooks/useCollections';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Skeleton from '../components/ui/Skeleton';

export default function CollectionsPage() {
  const { data: collections, isLoading } = useCollections();

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
              Collections
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Curated journeys that celebrate slow travel and authentic European experiences
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Collections grid */}
      <section className="py-16 md:py-24">
        <Container>
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} variant="rectangular" height={500} className="rounded-2xl" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
              {collections?.map((collection, index) => (
                <motion.div
                  key={collection.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
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
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3 text-white">
                          {collection.title}
                        </h2>
                        <p className="text-white/90 text-sm md:text-base leading-relaxed line-clamp-2">
                          {collection.description}
                        </p>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
