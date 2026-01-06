export default function TermsPage() {
  return (
    <div className="container mx-auto px-[6%] py-16 max-w-4xl">
      <h1 className="text-5xl font-serif font-bold text-camino-charcoal mb-12">
        Terms & Conditions
      </h1>
      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <section>
          <h2 className="text-2xl font-serif font-bold text-camino-charcoal mt-8 mb-4">
            Booking Terms
          </h2>
          <p>
            By making a booking with Camino, you agree to these terms and conditions.
            All bookings are subject to availability and confirmation.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-serif font-bold text-camino-charcoal mt-8 mb-4">
            Pricing and Payment
          </h2>
          <p>
            All prices are in EUR unless otherwise stated. Prices are subject to change
            until booking is confirmed. Payment terms will be specified at the time of booking.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-serif font-bold text-camino-charcoal mt-8 mb-4">
            Cancellation Policy
          </h2>
          <p>
            Cancellation policies vary by trip and accommodation provider. Full details
            will be provided at booking. We recommend purchasing travel insurance.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-serif font-bold text-camino-charcoal mt-8 mb-4">
            Liability
          </h2>
          <p>
            Camino acts as an intermediary between you and service providers. We are not
            liable for the acts, omissions, or defaults of third-party providers.
          </p>
        </section>
      </div>
    </div>
  );
}

