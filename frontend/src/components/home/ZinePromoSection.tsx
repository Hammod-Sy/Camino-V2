import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { getImageByKeyword } from '../../lib/images';

export default function ZinePromoSection() {
  const image = getImageByKeyword('travel magazine journal reading');

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative aspect-[3/2] lg:aspect-auto lg:h-auto min-h-[400px]">
                <img
                  src={image}
                  alt="Camino Zine"
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:hidden" />
              </div>
              <div className="bg-gradient-to-br from-brand-50 to-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-camino-charcoal mb-4">
                  NEW: Camino Zine
                </h3>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  Our quarterly publication brings you stories from the rails, destination guides,
                  and insights into slow travel culture. Each issue features beautiful photography
                  and thoughtful articles from fellow travelers.
                </p>
                <Link to="/journal">
                  <Button variant="primary" size="lg">
                    Read the Zine
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
