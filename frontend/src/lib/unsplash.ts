/**
 * Local images available in /public/imgs
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

/**
 * Get image by keyword - deterministic helper using local images
 */
const getImageByKeywordLocal = (keyword: string): string => {
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
 * Generate image using local images (backward compatibility)
 */
export const getUnsplashImage = (
  keywords: string,
  width: number = 1600,
  height: number = 900
): string => {
  return getImageByKeywordLocal(keywords);
};

/**
 * Get image by keyword - deterministic helper for consistent images
 */
export const getImageByKeyword = (
  keyword: string,
  w: number = 1600,
  h: number = 900
): string => {
  return getImageByKeywordLocal(keyword);
};

export const getTripImage = (slug: string, width: number = 1600, height: number = 900): string => {
  return getImageByKeywordLocal(`train,travel,${slug}`);
};

export const getDestinationImage = (
  name: string,
  width: number = 1600,
  height: number = 900
): string => {
  return getImageByKeywordLocal(`city,${name.toLowerCase()}`);
};

export const getCollectionImage = (
  keywords: string,
  width: number = 1600,
  height: number = 900
): string => {
  return getImageByKeywordLocal(keywords);
};

