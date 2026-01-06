import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { getImageByKeyword, getImageByIndex } from '../lib/images';

const teamMembers = [
  { name: 'Sarah Chen', role: 'Founder & Route Curator', image: getImageByIndex(0) },
  { name: 'Marco Rossi', role: 'Destination Expert', image: getImageByIndex(1) },
  { name: 'Emma Thompson', role: 'Sustainability Lead', image: getImageByIndex(2) },
  { name: 'Lucas Berg', role: 'Customer Experience', image: getImageByIndex(3) },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-brand-600 to-brand-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-pattern" />
        <div className="absolute inset-0">
          <img
            src={getImageByKeyword('europe travel team office')}
            alt="About Camino"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center max-w-4xl mx-auto"
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              About Camino
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              We're on a mission to make slow travel accessible, sustainable, and deeply rewarding
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Our Philosophy */}
      <Section spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-camino-charcoal mb-6">
                Our Philosophy
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  At Camino, we believe that travel should be more than just reaching a destination. 
                  Slow travel is about embracing the journey, connecting with local cultures, and 
                  creating meaningful experiences that enrich your life.
                </p>
                <p>
                  We craft each route with intention, balancing must-see destinations with hidden gems 
                  that only locals know. Our approach prioritizes sustainability, supporting local 
                  communities while minimizing environmental impact through train travel.
                </p>
                <p>
                  Every journey is designed to give you the freedom to explore at your own pace, 
                  with comprehensive guides and 24/7 support available whenever you need it.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={getImageByKeyword('slow travel philosophy europe')}
                alt="Slow travel philosophy"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* How We Craft Routes */}
      <Section spacing="lg" background="light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-camino-charcoal mb-4">
              How We Craft Routes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every journey starts with careful planning and deep local knowledge
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                step: '01',
                title: 'Research & Discovery',
                description: 'Our team travels extensively, building relationships with local experts and discovering authentic experiences that capture the essence of each destination.',
                image: getImageByIndex(4),
              },
              {
                step: '02',
                title: 'Route Design',
                description: 'We map out optimal train connections, balance travel time with exploration, and create logical sequences that maximize your experience at each stop.',
                image: getImageByIndex(5),
              },
              {
                step: '03',
                title: 'Testing & Refinement',
                description: 'Every route is personally tested by our team. We refine details, update recommendations, and ensure everything works seamlessly before you travel.',
                image: getImageByIndex(6),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 md:p-8">
                    <span className="text-4xl font-bold text-brand-600 mb-2 block">{item.step}</span>
                    <h3 className="font-serif text-2xl font-bold text-camino-charcoal mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Support Model */}
      <Section spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={getImageByKeyword('customer support travel help')}
                alt="Support model"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-camino-charcoal mb-6">
                Support, Not Supervision
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  You travel independently, but you're never alone. Our comprehensive travel guides 
                  include detailed route information, local recommendations, and practical tips for 
                  each destination.
                </p>
                <p>
                  Our 24/7 support team is always available via chat, phone, or email to help with 
                  any questions or issues that arise during your journey. Whether you need to adjust 
                  your itinerary, find an alternative route, or just want local recommendations, 
                  we're here to help.
                </p>
                <p>
                  We provide all the information and support you need to travel confidently, while 
                  giving you the freedom to create your own unique experience.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Sustainability */}
      <Section spacing="lg" background="light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-camino-charcoal mb-4">
              Sustainability by Design
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Responsible travel is at the heart of everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: '🚂',
                title: 'Train-First Approach',
                description: 'Rail travel produces significantly fewer emissions than air travel, making it the most sustainable way to explore Europe.',
              },
              {
                icon: '🏘️',
                title: 'Local Impact',
                description: 'We partner with local businesses and communities, ensuring your travel supports local economies and preserves cultural heritage.',
              },
              {
                icon: '🌱',
                title: 'Carbon Conscious',
                description: 'Every trip includes carbon footprint information, helping you make informed decisions about your travel impact.',
              },
              {
                icon: '♻️',
                title: 'Responsible Tourism',
                description: 'We promote respectful travel practices that minimize environmental impact and contribute positively to destinations.',
              },
            ].map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 md:p-8 text-center">
                  <div className="text-5xl mb-4">{principle.icon}</div>
                  <h3 className="font-serif text-xl font-bold text-camino-charcoal mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team */}
      <Section spacing="lg">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-camino-charcoal mb-4">
              Meet the Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate travelers dedicated to creating unforgettable journeys
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden text-center">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-camino-charcoal mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section spacing="lg" background="gradient">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-camino-charcoal mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Create your perfect trip and discover Europe at your own pace
            </p>
            <Link to="/create">
              <Button variant="primary" size="lg">
                Create a Trip
              </Button>
            </Link>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}
