export default function AccessibilityPage() {
  return (
    <div className="container mx-auto px-[6%] py-16 max-w-4xl">
      <h1 className="text-5xl font-serif font-bold text-camino-charcoal mb-12">
        Accessibility Statement
      </h1>
      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <section>
          <h2 className="text-2xl font-serif font-bold text-camino-charcoal mt-8 mb-4">
            Our Commitment
          </h2>
          <p>
            Camino is committed to ensuring digital accessibility for people with disabilities.
            We are continually improving the user experience for everyone and applying relevant
            accessibility standards.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-serif font-bold text-camino-charcoal mt-8 mb-4">
            Standards
          </h2>
          <p>
            We aim to conform to WCAG 2.1 Level AA standards. Our website is designed to be
            accessible to users with visual, auditory, motor, and cognitive disabilities.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-serif font-bold text-camino-charcoal mt-8 mb-4">
            Feedback
          </h2>
          <p>
            We welcome your feedback on the accessibility of our website. If you encounter
            any accessibility barriers, please contact us at{' '}
            <a href="mailto:accessibility@camino.com" className="text-camino-orange hover:underline">
              accessibility@camino.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

