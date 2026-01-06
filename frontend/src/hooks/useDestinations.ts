import { useQuery } from '@tanstack/react-query';
import { api } from '../api/client';

export function useDestinations() {
  return useQuery({
    queryKey: ['destinations'],
    queryFn: () => api.getDestinations(),
  });
}

export function useDestination(slug: string) {
  return useQuery({
    queryKey: ['destination', slug],
    queryFn: () => api.getDestination(slug),
    enabled: !!slug,
  });
}
