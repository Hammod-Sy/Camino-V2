import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Destination } from '../types';

interface DestinationsMenuProps {
  destinations: Destination[];
}

export default function DestinationsMenu({ destinations }: DestinationsMenuProps) {
  const regions = Array.isArray(destinations) ? Array.from(new Set(destinations.map((d) => d.region))).sort() : [];
  const countries = Array.isArray(destinations) ? Array.from(new Set(destinations.map((d) => d.country))).sort() : [];

  // Featured destination for preview
  const featured = Array.isArray(destinations) ? destinations[0] : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-[900px] max-w-[90vw] bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-brand-100/50 p-8"
      style={{ zIndex: 10000 }}
    >
      <div className="grid grid-cols-3 gap-8">
        {/* Regions */}
        <div>
          <h3 className="font-serif font-semibold text-camino-charcoal mb-4 text-lg">Regions</h3>
          <ul className="space-y-2.5">
            <li>
              <Link
                to="/destinations"
                className="text-sm text-gray-700 hover:text-brand-600 transition-colors inline-flex items-center group"
              >
                Top destinations
                <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </li>
            {regions.map((region) => (
              <li key={region}>
                <Link
                  to={`/destinations?region=${encodeURIComponent(region)}`}
                  className="text-sm text-gray-700 hover:text-brand-600 transition-colors inline-flex items-center group"
                >
                  {region}
                  <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Countries */}
        <div>
          <h3 className="font-serif font-semibold text-camino-charcoal mb-4 text-lg">Countries</h3>
          <ul className="space-y-2.5">
            {Array.isArray(countries) ? countries.slice(0, 12).map((country) => {
              const dest = Array.isArray(destinations) ? destinations.find((d) => d.country === country) : null;
              if (!dest) return null;
              return (
                <li key={country}>
                  <Link
                    to={`/destinations/${dest.slug}`}
                    className="text-sm text-gray-700 hover:text-brand-600 transition-colors inline-flex items-center group"
                  >
                    {country}
                    <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              );
            }) : null}
          </ul>
        </div>

        {/* Featured destination preview */}
        {featured && (
          <div>
            <Link to={`/destinations/${featured.slug}`}>
              <div className="rounded-xl overflow-hidden aspect-[4/3] relative group cursor-pointer">
                <img
                  src={featured.imageUrl}
                  alt={featured.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="font-serif font-semibold text-lg mb-1">{featured.name}</h4>
                  <p className="text-sm text-white/90">{featured.region}</p>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
}
