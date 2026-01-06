export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-[6%] py-16 max-w-4xl">
      <h1 className="text-5xl font-serif font-bold text-camino-charcoal mb-12">
        Privacy Policy
      </h1>
      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <section>
          <h2 className="text-2xl font-serif font-bold text-camino-charcoal mt-8 mb-4">
            Introduction
          </h2>
          <p>
            Camino respects your privacy and is committed to protecting your personal data.
            This privacy policy explains how we collect, use, and safeguard your information
            when you use our services.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-serif font-bold text-camino-charcoal mt-8 mb-4">
            Information We Collect
          </h2>
          <p>We collect information you provide directly, including:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Name and contact information</li>
            <li>Payment information</li>
            <li>Travel preferences and trip details</li>
            <li>Communication preferences</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-serif font-bold text-camino-charcoal mt-8 mb-4">
            How We Use Your Information
          </h2>
          <p>We use your information to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Process and manage your bookings</li>
            <li>Send trip confirmations and updates</li>
            <li>Improve our services</li>
            <li>Send marketing communications (with your consent)</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-serif font-bold text-camino-charcoal mt-8 mb-4">
            Data Security
          </h2>
          <p>
            We implement appropriate technical and organizational measures to protect your
            personal data against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-serif font-bold text-camino-charcoal mt-8 mb-4">
            Contact Us
          </h2>
          <p>
            If you have questions about this privacy policy, please contact us at{' '}
            <a href="mailto:privacy@camino.com" className="text-camino-orange hover:underline">
              privacy@camino.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

