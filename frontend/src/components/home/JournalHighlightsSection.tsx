import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../api/client';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function JournalHighlightsSection() {
  const { data: articles, isLoading } = useQuery({
    queryKey: ['articles'],
    queryFn: () => api.getArticles(),
  });
  const featuredArticles = Array.isArray(articles) ? articles.slice(0, 3) : [];

  if (isLoading) {
    return null;
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
              From the Journal
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Stories, guides, and inspiration from the rails
            </p>
          </div>
          <Link to="/journal">
            <Button variant="secondary">Read More</Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featuredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
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
                      <span className="text-xs font-medium text-brand-600 uppercase tracking-wide mb-2 block">
                        {article.category}
                      </span>
                    )}
                    <h3 className="font-serif text-xl font-bold text-camino-charcoal mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <span className="text-brand-600 font-medium text-sm">Read article →</span>
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

