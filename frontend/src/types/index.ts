export interface Destination {
  id: string;
  slug: string;
  name: string;
  region: string;
  country: string;
  description: string;
  imageUrl: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Stop {
  id: string;
  city: string;
  country: string;
  nights: number;
  date?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  description?: string;
  imageUrl?: string;
}

export interface Trip {
  id: string;
  slug: string;
  title: string;
  description: string;
  routeCities: string[];
  priceFrom: number;
  currency: string;
  durationDays: number;
  heroImage: string;
  images: string[];
  stops: Stop[];
  included: string[];
  co2Emissions?: number;
  co2Unit?: string;
  region?: string;
  country?: string;
  pace?: 'relaxed' | 'moderate' | 'active';
  collection?: string;
}

export interface Collection {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  tripIds?: string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  publishedAt: string;
  author?: string;
  category?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  tripSlug?: string;
  date: string;
}

export interface BookingDraft {
  id: string;
  tripSlug: string;
  startDate?: string;
  startFrom?: string;
  people: number;
  rooms: number;
  filters?: Record<string, any>;
  createdAt: string;
}

export interface TripFilters {
  startDate?: string;
  startFrom?: string;
  people?: number;
  rooms?: number;
  duration?: string;
  region?: string;
  country?: string;
  priceMin?: number;
  priceMax?: number;
  pace?: string;
}

