import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../api/client';

interface TripFAQProps {
  tripSlug: string;
}

export default function TripFAQ({ tripSlug: _tripSlug }: TripFAQProps) {
  const { data: faqs } = useQuery({
    queryKey: ['faqs'],
    queryFn: () => api.getFAQs(),
  });

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const tripFAQs = Array.isArray(faqs) ? faqs.slice(0, 5) : [];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-serif font-bold text-camino-charcoal mb-8">Frequently asked questions</h2>
      <div className="space-y-4 max-w-3xl">
        {tripFAQs.map((faq, index) => (
          <div key={faq.id} className="card overflow-hidden">
            <button
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors text-left"
            >
              <h3 className="text-lg font-semibold text-camino-charcoal pr-4">{faq.question}</h3>
              <svg
                className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                  openFAQ === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openFAQ === index && (
              <div className="px-6 pb-4 border-t bg-gray-50">
                <p className="mt-4 text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

