import { useQuery } from '@tanstack/react-query';
import { api } from '../api/client';
import type { TripFilters } from '../types';

export function useTrips(filters?: TripFilters) {
  return useQuery({
    queryKey: ['trips', filters],
    queryFn: () => api.getTrips(filters),
  });
}

export function useTrip(slug: string) {
  return useQuery({
    queryKey: ['trip', slug],
    queryFn: () => api.getTrip(slug),
    enabled: !!slug,
  });
}

