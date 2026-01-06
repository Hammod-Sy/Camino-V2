import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import DestinationsMenu from './DestinationsMenu';
import CollectionsMenu from './CollectionsMenu';
import { useDestinations } from '../hooks/useDestinations';
import { useCollections } from '../hooks/useCollections';
import Button from './ui/Button';

export default function Header() {
  const [showDestinationsMenu, setShowDestinationsMenu] = useState(false);
  const [showCollectionsMenu, setShowCollectionsMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [currency, setCurrency] = useState('EUR');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { data: destinations } = useDestinations();
  const { data: collections } = useCollections();

  // Close mobile menu on route change
  useEffect(() => {
    setShowMobileMenu(false);
  }, [location.pathname]);

  // Handle scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Collections', hasMenu: true, menu: 'collections' },
    { label: 'Destinations', hasMenu: true, menu: 'destinations' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Journal', path: '/journal' },
    { label: 'Account', path: '/account' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gradient-to-r from-transparent via-brand-100/50 to-transparent' 
          : 'bg-white/60 backdrop-blur-sm'
      }`}
      style={{ 
        borderBottom: scrolled ? '1px solid rgba(51, 100, 119, 0.1)' : 'none',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - Text-based wordmark */}
          <Link to="/" className="flex items-center group">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-brand-600 group-hover:text-brand-700 transition-colors">
              Camino
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" style={{ position: 'relative' }}>
            {navLinks.map((link) => {
              if (link.hasMenu && link.menu === 'collections') {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setShowCollectionsMenu(true)}
                    onMouseLeave={() => setShowCollectionsMenu(false)}
                  >
                    <button className="px-4 py-2 text-sm font-medium text-camino-charcoal hover:text-brand-600 transition-colors rounded-lg hover:bg-brand-50/50">
                      {link.label}
                    </button>
                    <AnimatePresence>
                      {showCollectionsMenu && collections && (
                        <CollectionsMenu collections={collections} />
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              
              if (link.hasMenu && link.menu === 'destinations') {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setShowDestinationsMenu(true)}
                    onMouseLeave={() => setShowDestinationsMenu(false)}
                  >
                    <button className="px-4 py-2 text-sm font-medium text-camino-charcoal hover:text-brand-600 transition-colors rounded-lg hover:bg-brand-50/50">
                      {link.label}
                    </button>
                    <AnimatePresence>
                      {showDestinationsMenu && destinations && (
                        <DestinationsMenu destinations={destinations} />
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  to={link.path || '#'}
                  className="px-4 py-2 text-sm font-medium text-camino-charcoal hover:text-brand-600 transition-colors rounded-lg hover:bg-brand-50/50"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Create trip CTA - Desktop */}
            <Link to="/create" className="hidden md:flex">
              <Button variant="primary" size="sm">
                Create a trip
              </Button>
            </Link>

            {/* Currency dropdown */}
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="hidden sm:block px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white hover:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors cursor-pointer"
            >
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="USD">USD</option>
            </select>

            {/* Search icon */}
            <button 
              className="p-2 hover:bg-brand-50 rounded-lg transition-colors text-camino-charcoal hover:text-brand-600"
              aria-label="Search"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="lg:hidden p-2 hover:bg-brand-50 rounded-lg transition-colors text-camino-charcoal"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {showMobileMenu ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {showMobileMenu && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMobileMenu(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-16 sm:top-20 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <nav className="p-6 space-y-1">
                {/* Create trip CTA - Mobile */}
                <Link to="/create" className="block mb-6">
                  <Button variant="primary" className="w-full">
                    Create a trip
                  </Button>
                </Link>

                {/* Currency - Mobile */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <label className="block text-xs font-medium text-gray-500 mb-2">Currency</label>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="USD">USD</option>
                  </select>
                </div>

                {/* Navigation links */}
                <Link
                  to="/collections"
                  className="block px-4 py-3 text-base font-medium text-camino-charcoal hover:bg-brand-50 hover:text-brand-600 rounded-lg transition-colors"
                >
                  Collections
                </Link>
                
                <Link
                  to="/destinations"
                  className="block px-4 py-3 text-base font-medium text-camino-charcoal hover:bg-brand-50 hover:text-brand-600 rounded-lg transition-colors"
                >
                  Destinations
                </Link>
                
                <Link
                  to="/about"
                  className="block px-4 py-3 text-base font-medium text-camino-charcoal hover:bg-brand-50 hover:text-brand-600 rounded-lg transition-colors"
                >
                  About
                </Link>
                
                <Link
                  to="/contact"
                  className="block px-4 py-3 text-base font-medium text-camino-charcoal hover:bg-brand-50 hover:text-brand-600 rounded-lg transition-colors"
                >
                  Contact
                </Link>
                
                <Link
                  to="/journal"
                  className="block px-4 py-3 text-base font-medium text-camino-charcoal hover:bg-brand-50 hover:text-brand-600 rounded-lg transition-colors"
                >
                  Journal
                </Link>
                
                <Link
                  to="/account"
                  className="block px-4 py-3 text-base font-medium text-camino-charcoal hover:bg-brand-50 hover:text-brand-600 rounded-lg transition-colors"
                >
                  Account
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
