import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { api } from '../api/client';

export default function FAQsPage() {
  const { data: faqs, isLoading } = useQuery({
    queryKey: ['faqs'],
    queryFn: () => api.getFAQs(),
  });
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  if (isLoading) {
    return (
      <div className="container mx-auto px-[6%] py-8 sm:py-16 text-center">
        <div className="text-lg sm:text-xl">Loading FAQs...</div>
      </div>
    );
  }

  const categories = Array.from(new Set(faqs?.map((f) => f.category).filter(Boolean) || []));

  return (
    <div className="container mx-auto px-[6%] py-8 sm:py-16 max-w-4xl">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-camino-charcoal mb-6 sm:mb-12 text-center">
        Frequently Asked Questions
      </h1>
      {categories.length > 0 ? (
        categories.map((category) => {
          const categoryFAQs = faqs?.filter((f) => f.category === category) || [];
          return (
            <div key={category} className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-camino-charcoal mb-4 sm:mb-6">
                {category}
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {categoryFAQs.map((faq, index) => (
                  <div key={faq.id} className="card overflow-hidden">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center hover:bg-gray-50 transition-colors text-left"
                    >
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-camino-charcoal pr-2 sm:pr-4">
                        {faq.question}
                      </h3>
                      <svg
                        className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0 transition-transform ${
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
                      <div className="px-4 sm:px-6 pb-3 sm:pb-4 border-t bg-gray-50">
                        <p className="mt-3 sm:mt-4 text-gray-700 text-sm sm:text-base">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })
      ) : (
        <div className="space-y-3 sm:space-y-4">
          {faqs?.map((faq, index) => (
            <div key={faq.id} className="card overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center hover:bg-gray-50 transition-colors text-left"
              >
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-camino-charcoal pr-2 sm:pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0 transition-transform ${
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
                <div className="px-4 sm:px-6 pb-3 sm:pb-4 border-t bg-gray-50">
                  <p className="mt-3 sm:mt-4 text-gray-700 text-sm sm:text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

