import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Collection } from '../types';

interface CollectionsMenuProps {
  collections: Collection[];
}

export default function CollectionsMenu({ collections }: CollectionsMenuProps) {
  // Display only 6 collections in the grid
  const featuredCollections = Array.isArray(collections) ? collections.slice(0, 6) : [];
  const remainingCollections = Array.isArray(collections) ? collections.slice(6) : [];

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
        {/* Collections Grid */}
        <div className="col-span-2">
          <h3 className="font-serif font-semibold text-camino-charcoal mb-4 text-lg">Collections</h3>
          <div className="grid grid-cols-3 gap-4">
            {featuredCollections.map((collection) => (
              <Link
                key={collection.id}
                to={`/collections/${collection.slug}`}
                className="group"
              >
                <div className="rounded-xl overflow-hidden aspect-[4/3] relative">
                  <img
                    src={collection.imageUrl}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                    <h4 className="font-semibold text-sm mb-1 text-white">{collection.title}</h4>
                    <p className="text-xs text-white/90 line-clamp-2">{collection.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {remainingCollections.length > 0 && (
            <div className="mt-6">
              <Link
                to="/collections"
                className="text-sm text-brand-600 hover:text-brand-700 font-medium inline-flex items-center group"
              >
                View all collections
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          )}
        </div>

        {/* Browse all link */}
        <div>
          <h3 className="font-serif font-semibold text-camino-charcoal mb-4 text-lg">Explore</h3>
          <Link
            to="/collections"
            className="block text-sm text-gray-700 hover:text-brand-600 transition-colors mb-4 font-medium"
          >
            Browse all collections
          </Link>
          {remainingCollections.length > 0 && (
            <p className="text-xs text-gray-500">
              {remainingCollections.length} more collection{remainingCollections.length > 1 ? 's' : ''} available
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
