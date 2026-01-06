import { useQuery } from '@tanstack/react-query';
import { api } from '../api/client';

export function useCollections() {
  return useQuery({
    queryKey: ['collections'],
    queryFn: () => api.getCollections(),
  });
}

export function useCollection(slug: string) {
  return useQuery({
    queryKey: ['collection', slug],
    queryFn: () => api.getCollection(slug),
    enabled: !!slug,
  });
}

