import React, { useState } from 'react';
import { NewsArticle } from '../types';
import { X, User, Calendar, Bookmark, BookmarkCheck, Share2, Check, ExternalLink } from 'lucide-react';

interface ArticleDetailModalProps {
  article: NewsArticle;
  onClose: () => void;
  isSaved?: boolean;
  onToggleSave?: (articleId: string) => void;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({
  article,
  onClose,
  isSaved = false,
  onToggleSave
}) => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl p-5 w-full max-w-md border border-slate-200 dark:border-emerald-800/80 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-amber-500 bg-amber-500/10 dark:bg-amber-400/15 border border-amber-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
            {article.category}
          </span>
          <div className="flex items-center gap-2">
            {onToggleSave && (
              <button
                onClick={() => onToggleSave(article.id)}
                className={`p-2 rounded-xl transition-all ${
                  isSaved
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-500'
                }`}
                title={isSaved ? 'Remove from Saved Articles' : 'Save Article'}
              >
                {isSaved ? <BookmarkCheck className="w-4 h-4 fill-slate-950" /> : <Bookmark className="w-4 h-4" />}
              </button>
            )}
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-500 transition-all relative"
              title="Share Article"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {copied && (
          <div className="p-2.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800 rounded-xl text-xs font-bold text-center">
            Article link copied to clipboard!
          </div>
        )}

        {/* Title and Metadata */}
        <div className="space-y-2">
          <h2 className="text-lg font-black leading-snug text-slate-900 dark:text-white">
            {article.title}
          </h2>
          <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-emerald-300/80">
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-amber-500" /> {article.author}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {article.date}
            </span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden h-48 bg-slate-800 relative group">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="space-y-3 text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-sans">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="bg-slate-50 dark:bg-slate-800/40 p-3 rounded-xl border border-slate-100 dark:border-slate-800/80">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {article.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-800">
              #{tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-extrabold text-xs shadow-md transition-all"
        >
          Close Article
        </button>
      </div>
    </div>
  );
};
