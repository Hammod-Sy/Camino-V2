import { Link } from 'react-router-dom';

export default function AccountPage() {
  return (
    <div className="container mx-auto px-[6%] py-16 max-w-2xl">
      <h1 className="text-5xl font-serif font-bold text-camino-charcoal mb-12 text-center">
        Account
      </h1>
      <div className="card p-8 text-center space-y-6">
        <p className="text-gray-700">
          Please sign in to access your account, view your trips, and manage your bookings.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link to="/account/login" className="btn-primary">
            Sign In
          </Link>
          <Link to="/account/signup" className="btn-secondary">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}

