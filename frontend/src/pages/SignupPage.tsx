import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock signup - would integrate with auth system
    console.log('Signup attempt', formData);
  };

  return (
    <div className="container mx-auto px-[6%] py-8 sm:py-16 max-w-xl">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-camino-charcoal mb-6 sm:mb-8 text-center">
        Create Account
      </h1>
      <div className="card p-4 sm:p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-camino-orange text-sm"
            />
          </div>
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
            Create Account
          </button>
        </form>
        <p className="mt-4 sm:mt-6 text-center text-gray-600 text-xs sm:text-sm">
          Already have an account?{' '}
          <Link to="/account/login" className="text-camino-orange hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

