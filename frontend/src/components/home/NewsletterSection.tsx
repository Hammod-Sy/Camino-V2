import { useState } from 'react';
import { motion } from 'framer-motion';
import { api } from '../../api/client';
import Container from '../ui/Container';
import Input from '../ui/Input';
import Button from '../ui/Button';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await api.subscribeNewsletter(email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => {
        setSubscribed(false);
        setIsSubmitting(false);
      }, 3000);
    } catch (error) {
      console.error('Newsletter subscription failed:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-brand-600 to-brand-800 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 bg-pattern" />
      
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Stay Inspired
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Get travel inspiration, slow travel tips, and exclusive destination guides delivered to your inbox. 
            Join thousands of travelers discovering Europe by train.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              disabled={isSubmitting || subscribed}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/40"
            />
            <Button
              type="submit"
              variant="secondary"
              disabled={isSubmitting || subscribed}
              isLoading={isSubmitting}
              className="bg-white text-brand-600 hover:bg-white/90 border-white sm:w-auto"
            >
              {subscribed ? 'Subscribed!' : 'Subscribe'}
            </Button>
          </form>
          
          <p className="text-white/70 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

