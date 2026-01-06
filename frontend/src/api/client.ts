import { http } from './http';
import type {
  Collection,
  Destination,
  Trip,
  Article,
  FAQ,
  Review,
  BookingDraft,
  TripFilters,
} from '../types';

export const api = {
  // Collections
  getCollections: (): Promise<Collection[]> => {
    return http.get<Collection[]>('/collections');
  },

  getCollection: (slug: string): Promise<Collection> => {
    return http.get<Collection>(`/collections/${slug}`);
  },

  // Trips
  getTrips: (filters?: TripFilters): Promise<Trip[]> => {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, String(value));
        }
      });
    }
    const query = params.toString();
    return http.get<Trip[]>(`/trips${query ? `?${query}` : ''}`);
  },

  getTrip: (slug: string): Promise<Trip> => {
    return http.get<Trip>(`/trips/${slug}`);
  },

  // Destinations
  getDestinations: (): Promise<Destination[]> => {
    return http.get<Destination[]>('/destinations');
  },

  getDestination: (slug: string): Promise<Destination> => {
    return http.get<Destination>(`/destinations/${slug}`);
  },

  // Journal
  getArticles: (): Promise<Article[]> => {
    return http.get<Article[]>('/journal');
  },

  getArticle: (slug: string): Promise<Article> => {
    return http.get<Article>(`/journal/${slug}`);
  },

  // FAQs
  getFAQs: (): Promise<FAQ[]> => {
    return http.get<FAQ[]>('/faqs');
  },

  // Reviews
  getReviews: (tripSlug?: string): Promise<Review[]> => {
    const query = tripSlug ? `?trip=${tripSlug}` : '';
    return http.get<Review[]>(`/reviews${query}`);
  },

  // Newsletter
  subscribeNewsletter: (email: string): Promise<{ success: boolean }> => {
    return http.post('/newsletter', { email });
  },

  // Lead generation
  submitLead: (data: {
    email: string;
    name?: string;
    message?: string;
  }): Promise<{ success: boolean }> => {
    return http.post('/lead', data);
  },

  // Booking drafts
  createDraft: (data: Partial<BookingDraft>): Promise<BookingDraft> => {
    return http.post('/drafts', data);
  },

  getDraft: (id: string): Promise<BookingDraft> => {
    return http.get<BookingDraft>(`/drafts/${id}`);
  },
};

