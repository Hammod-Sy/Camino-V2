import HeroSection from '../components/home/HeroSection';
import CollectionsSection from '../components/home/CollectionsSection';
import IconPillarsSection from '../components/home/IconPillarsSection';
import ShortBreaksSection from '../components/home/ShortBreaksSection';
import TrendingTripsSection from '../components/home/TrendingTripsSection';
import DestinationSpotlightSection from '../components/home/DestinationSpotlightSection';
import ReviewsSection from '../components/home/ReviewsSection';
import ZinePromoSection from '../components/home/ZinePromoSection';
import JournalHighlightsSection from '../components/home/JournalHighlightsSection';
import NewsletterSection from '../components/home/NewsletterSection';
import FAQSection from '../components/home/FAQSection';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <CollectionsSection />
      <IconPillarsSection />
      <ShortBreaksSection />
      <TrendingTripsSection />
      <DestinationSpotlightSection />
      <ReviewsSection />
      <ZinePromoSection />
      <JournalHighlightsSection />
      <NewsletterSection />
      <FAQSection />
    </div>
  );
}
