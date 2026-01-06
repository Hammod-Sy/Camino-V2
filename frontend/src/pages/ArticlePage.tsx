import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { api } from '../api/client';

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: article, isLoading } = useQuery({
    queryKey: ['article', slug],
    queryFn: () => api.getArticle(slug || ''),
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-[6%] py-8 sm:py-16 text-center">
        <div className="text-lg sm:text-xl">Loading article...</div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="container mx-auto px-[6%] py-8 sm:py-16 text-center">
        <div className="text-lg sm:text-xl">Article not found</div>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-[6%] py-8 sm:py-16 max-w-4xl">
      {article.category && (
        <span className="text-xs sm:text-sm text-camino-orange font-semibold uppercase tracking-wide">
          {article.category}
        </span>
      )}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-camino-charcoal mt-2 sm:mt-4 mb-4 sm:mb-6">
        {article.title}
      </h1>
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
        {article.author && <span>By {article.author}</span>}
        <span className="hidden sm:inline">•</span>
        <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
      </div>
      <div className="aspect-video mb-6 sm:mb-12 rounded-lg sm:rounded-card-lg overflow-hidden">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">{article.excerpt}</p>
        <div className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line">
          {article.content}
        </div>
      </div>
    </article>
  );
}

