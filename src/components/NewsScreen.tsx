import React, { useState } from 'react';
import { NewsArticle } from '../types';
import { Newspaper, Bookmark, BookmarkCheck, Share2, Flame, X, Clock, User } from 'lucide-react';

interface NewsScreenProps {
  news: NewsArticle[];
  savedArticles: string[];
  onToggleSaveArticle: (articleId: string) => void;
  selectedArticle: NewsArticle | null;
  onSelectArticle: (article: NewsArticle | null) => void;
}

const CATEGORIES = ['All', 'AFCON 2026', 'Team News', 'Tactical Analysis', 'Travel & Hospitality'];

export const NewsScreen: React.FC<NewsScreenProps> = ({
  news,
  savedArticles,
  onToggleSaveArticle,
  selectedArticle,
  onSelectArticle
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedNotification, setCopiedNotification] = useState(false);

  const filteredNews = news.filter(
    (n) => selectedCategory === 'All' || n.category === selectedCategory
  );

  const handleShare = (article: NewsArticle) => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.summary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2000);
    }
  };

  return (
    <div className="space-y-4 pb-24 animate-fadeIn">
      <div>
        <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
          <Newspaper className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> Football & AFCON Newsroom
        </h2>
        <p className="text-xs text-slate-500 dark:text-emerald-300/80">
          Breaking news, player quotes, tactical breakdowns & host city updates
        </p>
      </div>

      {/* Categories Horizontal Slider */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-emerald-800 text-slate-700 dark:text-emerald-200 hover:border-amber-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* News Cards Feed */}
      <div className="space-y-3">
        {filteredNews.map((article) => {
          const isSaved = savedArticles.includes(article.id);
          return (
            <div
              key={article.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-emerald-800/80 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all space-y-3"
            >
              <div 
                onClick={() => onSelectArticle(article)}
                className="cursor-pointer space-y-2"
              >
                <div className="relative rounded-xl overflow-hidden h-40 bg-slate-800">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {article.isTrending && (
                    <span className="absolute top-2 left-2 bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-1 shadow">
                      <Flame className="w-3 h-3 fill-slate-950" /> TRENDING
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide">
                    {article.category}
                  </span>
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-emerald-200/80 line-clamp-2">
                    {article.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="flex items-center justify-between text-xs text-slate-400 dark:text-emerald-400/80 pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className="flex items-center gap-2 text-[10px]">
                  <Clock className="w-3 h-3" /> {article.date} • {article.readTime}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleShare(article)}
                    className="p-1 text-slate-400 hover:text-emerald-600 transition-colors"
                    title="Share Article"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onToggleSaveArticle(article.id)}
                    className="p-1 text-slate-400 hover:text-amber-500 transition-colors"
                    title={isSaved ? 'Remove Bookmark' : 'Bookmark Article'}
                  >
                    {isSaved ? (
                      <BookmarkCheck className="w-4 h-4 text-amber-500" />
                    ) : (
                      <Bookmark className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {copiedNotification && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-4 py-2 rounded-full shadow-2xl border border-amber-400 z-50 animate-bounce">
          Article link copied to clipboard!
        </div>
      )}

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl p-5 w-full max-w-md border border-slate-200 dark:border-emerald-800 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-full">
                {selectedArticle.category}
              </span>
              <button
                onClick={() => onSelectArticle(null)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              <h2 className="text-base font-black leading-snug">{selectedArticle.title}</h2>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {selectedArticle.author}</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-44 bg-slate-800">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3 text-xs text-slate-700 dark:text-emerald-100/90 leading-relaxed">
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {selectedArticle.tags.map((tag) => (
                <span key={tag} className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-md">
                  #{tag}
                </span>
              ))}
            </div>

            <button
              onClick={() => onSelectArticle(null)}
              className="w-full py-2.5 rounded-xl bg-emerald-700 text-white font-bold text-xs"
            >
              Close Article
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
