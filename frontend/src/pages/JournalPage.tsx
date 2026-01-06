import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { api } from '../api/client';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Skeleton from '../components/ui/Skeleton';

export default function JournalPage() {
  const { data: articles, isLoading } = useQuery({
    queryKey: ['articles'],
    queryFn: () => api.getArticles(),
  });

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
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Journal
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Stories, guides, and inspiration from the rails
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Articles grid */}
      <section className="py-16 md:py-24">
        <Container>
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i}>
                  <Skeleton variant="rectangular" height={300} className="rounded-2xl mb-4" />
                  <Skeleton variant="text" height={24} className="mb-2" />
                  <Skeleton variant="text" height={20} width="60%" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {articles?.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link to={`/journal/${article.slug}`}>
                    <Card interactive className="overflow-hidden h-full">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={article.imageUrl}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-6">
                        {article.category && (
                          <Badge variant="brand" className="mb-3">
                            {article.category}
                          </Badge>
                        )}
                        <h2 className="font-serif text-xl md:text-2xl font-bold text-camino-charcoal mb-3 line-clamp-2">
                          {article.title}
                        </h2>
                        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                          <span className="text-brand-600 font-medium">Read →</span>
                        </div>
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
