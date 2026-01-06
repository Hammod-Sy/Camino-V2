/**
 * Local images helper - maps to images in /public/imgs
 */
const localImages = [
  '/imgs/julentto-photography-CIuakYIjadc-unsplash.jpg',
  '/imgs/ryan-spencer-XGKaRnWjv1c-unsplash.jpg',
  '/imgs/fabio-comparelli-uq2E2V4LhCY-unsplash.jpg',
  '/imgs/alex-azabache-V83v-MYB_Z8-unsplash.jpg',
  '/imgs/yousef-alfuhigi-bMIlyKZHKMY-unsplash.jpg',
  '/imgs/ian-dooley-hpTH5b6mo2s-unsplash.jpg',
  '/imgs/mesut-kaya-eOcyhe5-9sQ-unsplash.jpg',
  '/imgs/jack-ward-rknrvCrfS1k-unsplash (1).jpg',
  '/imgs/tom-barrett-M0AWNxnLaMw-unsplash.jpg',
  '/imgs/neom-eOWabmCNEdg-unsplash.jpg',
];

let imageIndex = 0;

/**
 * Get next image in sequence (cycles through available images)
 */
export const getNextImage = (): string => {
  const image = localImages[imageIndex % localImages.length];
  imageIndex++;
  return image;
};

/**
 * Get image by index
 */
export const getImageByIndex = (index: number): string => {
  return localImages[index % localImages.length];
};

/**
 * Get images for a collection/trip/destination based on keyword (deterministic)
 */
export const getImageByKeyword = (keyword: string): string => {
  // Create a simple hash from keyword to get consistent image
  let hash = 0;
  for (let i = 0; i < keyword.length; i++) {
    hash = ((hash << 5) - hash) + keyword.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
  }
  const index = Math.abs(hash) % localImages.length;
  return localImages[index];
};

/**
 * Get multiple images for galleries
 */
export const getMultipleImages = (count: number, seed?: string): string[] => {
  const images: string[] = [];
  const startIndex = seed 
    ? Math.abs(seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % localImages.length
    : 0;
  
  for (let i = 0; i < count; i++) {
    images.push(localImages[(startIndex + i) % localImages.length]);
  }
  return images;
};

// Keep Unsplash functions for backward compatibility, but prefer local images
export const getUnsplashImage = (
  keywords: string,
  _width: number = 1600,
  _height: number = 900
): string => {
  return getImageByKeyword(keywords);
};

export const getTripImage = (slug: string): string => {
  return getImageByKeyword(slug);
};

export const getDestinationImage = (name: string): string => {
  return getImageByKeyword(name.toLowerCase());
};

export const getCollectionImage = (keywords: string): string => {
  return getImageByKeyword(keywords);
};

