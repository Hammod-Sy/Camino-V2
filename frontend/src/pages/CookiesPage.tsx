export default function CookiesPage() {
  return (
    <div className="container mx-auto px-[6%] py-16 max-w-4xl">
      <h1 className="text-5xl font-serif font-bold text-camino-charcoal mb-12">
        Cookie Policy
      </h1>
      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <section>
          <h2 className="text-2xl font-serif font-bold text-camino-charcoal mt-8 mb-4">
            What Are Cookies
          </h2>
          <p>
            Cookies are small text files that are placed on your device when you visit our website.
            They help us provide you with a better experience and understand how you use our site.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-serif font-bold text-camino-charcoal mt-8 mb-4">
            How We Use Cookies
          </h2>
          <p>We use cookies to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Remember your preferences</li>
            <li>Analyze website traffic and usage</li>
            <li>Improve website functionality</li>
            <li>Provide personalized content</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-serif font-bold text-camino-charcoal mt-8 mb-4">
            Managing Cookies
          </h2>
          <p>
            You can control and manage cookies through your browser settings. Note that
            disabling cookies may affect website functionality.
          </p>
        </section>
      </div>
    </div>
  );
}

