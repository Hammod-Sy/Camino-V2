import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../api/client';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function FAQSection() {
  const { data: faqs } = useQuery({
    queryKey: ['faqs'],
    queryFn: () => api.getFAQs(),
  });
  const featuredFAQs = Array.isArray(faqs) ? faqs.slice(0, 4) : [];

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
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-camino-charcoal mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about planning your journey with Camino
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredFAQs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full p-6 hover:shadow-xl transition-shadow">
                <h3 className="font-serif text-xl font-semibold text-camino-charcoal mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed line-clamp-4">{faq.answer}</p>
              </Card>
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
          <Link to="/faqs">
            <Button variant="secondary">View All FAQs</Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
