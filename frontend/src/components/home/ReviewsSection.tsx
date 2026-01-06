import { useQuery } from '@tanstack/react-query';
import { api } from '../../api/client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Card from '../ui/Card';

export default function ReviewsSection() {
  const { data: reviews } = useQuery({
    queryKey: ['reviews'],
    queryFn: () => api.getReviews(),
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const displayReviews = Array.isArray(reviews) ? reviews.slice(currentIndex, currentIndex + 3) : [];

  const nextReviews = () => {
    if (Array.isArray(reviews) && currentIndex + 3 < reviews.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const prevReviews = () => {
    if (currentIndex > 0) {
      setCurrentIndex(Math.max(0, currentIndex - 3));
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 fill-yellow-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-camino-charcoal mb-4">
            What Travelers Say
          </h2>
          <p className="text-lg text-gray-600">
            Rated 4.9 out of 5 based on 247 reviews
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <button
              onClick={prevReviews}
              disabled={currentIndex === 0}
              className="hidden md:flex w-12 h-12 rounded-full bg-white border-2 border-gray-200 hover:border-brand-500 hover:bg-brand-50 items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              aria-label="Previous reviews"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
              {displayReviews.map((review) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="h-full p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400' : 'fill-gray-300'}`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed line-clamp-5">{review.comment}</p>
                    <p className="text-sm font-semibold text-camino-charcoal">{review.author}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <button
              onClick={nextReviews}
              disabled={Array.isArray(reviews) ? currentIndex + 3 >= reviews.length : true}
              className="hidden md:flex w-12 h-12 rounded-full bg-white border-2 border-gray-200 hover:border-brand-500 hover:bg-brand-50 items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              aria-label="Next reviews"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Mobile navigation */}
          <div className="flex justify-center gap-4 mt-8 md:hidden">
            <button
              onClick={prevReviews}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 hover:border-brand-500 items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md flex"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextReviews}
              disabled={Array.isArray(reviews) ? currentIndex + 3 >= reviews.length : true}
              className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 hover:border-brand-500 items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md flex"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
