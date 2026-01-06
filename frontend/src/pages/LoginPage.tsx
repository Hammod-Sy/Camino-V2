import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - would integrate with auth system
    console.log('Login attempt', formData);
  };

  return (
    <div className="container mx-auto px-[6%] py-8 sm:py-16 max-w-xl">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-camino-charcoal mb-6 sm:mb-8 text-center">
        Sign In
      </h1>
      <div className="card p-4 sm:p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-camino-orange text-sm"
            />
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-camino-orange text-sm"
            />
          </div>
          <button type="submit" className="btn-primary w-full text-sm sm:text-base py-2 sm:py-3">
            Sign In
          </button>
        </form>
        <p className="mt-4 sm:mt-6 text-center text-gray-600 text-xs sm:text-sm">
          Don't have an account?{' '}
          <Link to="/account/signup" className="text-camino-orange hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

