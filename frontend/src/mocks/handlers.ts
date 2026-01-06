import { http, HttpResponse } from 'msw';
import {
  mockCollections,
  mockDestinations,
  mockTrips,
  mockArticles,
  mockFAQs,
  mockReviews,
} from './data';
import type { TripFilters } from '../types';

export const handlers = [
  // Collections
  http.get('/api/collections', () => {
    return HttpResponse.json(mockCollections);
  }),

  http.get('/api/collections/:slug', ({ params }) => {
    const collection = mockCollections.find((c) => c.slug === params.slug);
    if (!collection) {
      return HttpResponse.json({ message: 'Collection not found' }, { status: 404 });
    }
    return HttpResponse.json(collection);
  }),

  // Trips
  http.get('/api/trips', ({ request }) => {
    const url = new URL(request.url);
    const filters: TripFilters = {};
    
    url.searchParams.forEach((value, key) => {
      filters[key as keyof TripFilters] = value as any;
    });

    let filteredTrips = [...mockTrips];

    // Apply filters
    if (filters.region) {
      filteredTrips = filteredTrips.filter((t) => t.region === filters.region);
    }
    if (filters.country) {
      filteredTrips = filteredTrips.filter((t) => t.country === filters.country);
    }
    if (filters.duration) {
      const [min, max] = filters.duration.split('-').map(Number);
      filteredTrips = filteredTrips.filter(
        (t) => t.durationDays >= min && t.durationDays <= (max || min)
      );
    }
    if (filters.priceMin) {
      filteredTrips = filteredTrips.filter((t) => t.priceFrom >= Number(filters.priceMin));
    }
    if (filters.priceMax) {
      filteredTrips = filteredTrips.filter((t) => t.priceFrom <= Number(filters.priceMax));
    }
    if (filters.pace) {
      filteredTrips = filteredTrips.filter((t) => t.pace === filters.pace);
    }

    return HttpResponse.json(filteredTrips);
  }),

  http.get('/api/trips/:slug', ({ params }) => {
    const trip = mockTrips.find((t) => t.slug === params.slug);
    if (!trip) {
      return HttpResponse.json({ message: 'Trip not found' }, { status: 404 });
    }
    return HttpResponse.json(trip);
  }),

  // Destinations
  http.get('/api/destinations', () => {
    return HttpResponse.json(mockDestinations);
  }),

  http.get('/api/destinations/:slug', ({ params }) => {
    const destination = mockDestinations.find((d) => d.slug === params.slug);
    if (!destination) {
      return HttpResponse.json({ message: 'Destination not found' }, { status: 404 });
    }
    return HttpResponse.json(destination);
  }),

  // Journal
  http.get('/api/journal', () => {
    return HttpResponse.json(mockArticles);
  }),

  http.get('/api/journal/:slug', ({ params }) => {
    const article = mockArticles.find((a) => a.slug === params.slug);
    if (!article) {
      return HttpResponse.json({ message: 'Article not found' }, { status: 404 });
    }
    return HttpResponse.json(article);
  }),

  // FAQs
  http.get('/api/faqs', () => {
    return HttpResponse.json(mockFAQs);
  }),

  // Reviews
  http.get('/api/reviews', ({ request }) => {
    const url = new URL(request.url);
    const tripSlug = url.searchParams.get('trip');
    
    let reviews = [...mockReviews];
    if (tripSlug) {
      reviews = reviews.filter((r) => r.tripSlug === tripSlug);
    }
    
    return HttpResponse.json(reviews);
  }),

  // Newsletter
  http.post('/api/newsletter', async ({ request }) => {
    await request.json() as { email: string };
    // Mock success
    return HttpResponse.json({ success: true });
  }),

  // Lead
  http.post('/api/lead', async ({ request }) => {
    await request.json() as { email: string; name?: string; message?: string };
    // Mock success
    return HttpResponse.json({ success: true });
  }),

  // Drafts
  http.post('/api/drafts', async ({ request }) => {
    const body = await request.json() as Record<string, unknown>;
    const draft = {
      id: String(Date.now()),
      ...body,
      createdAt: new Date().toISOString(),
    };
    return HttpResponse.json(draft);
  }),

  http.get('/api/drafts/:id', ({ params }) => {
    // Mock draft retrieval
    return HttpResponse.json({
      id: params.id,
      tripSlug: 'scottish-highlands-explorer',
      people: 2,
      rooms: 1,
      createdAt: new Date().toISOString(),
    });
  }),
];

