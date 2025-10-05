'use client';

import { useState } from 'react';
import { Share2, Facebook, Twitter, Linkedin, MessageCircle, Mail, Link2, Copy, Check, Heart, Bookmark } from 'lucide-react';

interface EnhancedSocialShareProps {
  url: string;
  title: string;
  description?: string;
  variant?: 'horizontal' | 'vertical' | 'floating' | 'compact' | 'sticky';
  showLabels?: boolean;
  showEngagement?: boolean;
  className?: string;
}

export default function EnhancedSocialShare({
  url,
  title,
  description = '',
  variant = 'horizontal',
  showLabels = true,
  showEngagement = true,
  className = ''
}: EnhancedSocialShareProps) {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [shareCount, setShareCount] = useState(0);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar link:', err);
    }
  };

  const handleShare = (platform: string) => {
    const link = shareLinks[platform as keyof typeof shareLinks];
    if (link) {
      window.open(link, '_blank', 'width=600,height=400');
      setShareCount(prev => prev + 1);
    }
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  const shareButtons = [
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-blue-600 hover:bg-blue-700',
      textColor: 'text-blue-600',
      platform: 'facebook'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'bg-sky-500 hover:bg-sky-600',
      textColor: 'text-sky-500',
      platform: 'twitter'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'bg-blue-700 hover:bg-blue-800',
      textColor: 'text-blue-700',
      platform: 'linkedin'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'bg-green-600 hover:bg-green-700',
      textColor: 'text-green-600',
      platform: 'whatsapp'
    },
    {
      name: 'E-mail',
      icon: Mail,
      color: 'bg-gray-600 hover:bg-gray-700',
      textColor: 'text-gray-600',
      platform: 'email'
    }
  ];

  if (variant === 'sticky') {
    return (
      <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
        <div className="bg-white rounded-full shadow-lg p-2 flex items-center space-x-2">
          {showEngagement && (
            <>
              <button
                onClick={handleLike}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                  liked ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-500'
                }`}
                title="Curtir"
              >
                <Heart className={`h-5 w-5 ${liked ? 'fill-current' : ''}`} />
              </button>
              
              <button
                onClick={handleBookmark}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                  bookmarked ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-600 hover:bg-yellow-50 hover:text-yellow-500'
                }`}
                title="Salvar"
              >
                <Bookmark className={`h-5 w-5 ${bookmarked ? 'fill-current' : ''}`} />
              </button>
            </>
          )}
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
            title="Compartilhar"
          >
            <Share2 className="h-5 w-5" />
          </button>
          
          {isOpen && (
            <div className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-lg p-2 flex space-x-2 animate-in slide-in-from-bottom-2 duration-200">
              {shareButtons.slice(0, 3).map((button) => {
                const IconComponent = button.icon;
                return (
                  <button
                    key={button.platform}
                    onClick={() => handleShare(button.platform)}
                    className={`w-8 h-8 ${button.color} text-white rounded-lg flex items-center justify-center transition-colors duration-200`}
                    title={`Compartilhar no ${button.name}`}
                  >
                    <IconComponent className="h-4 w-4" />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'floating') {
    return (
      <div className={`fixed left-4 top-1/2 transform -translate-y-1/2 z-50 ${className}`}>
        <div className="bg-white rounded-lg shadow-lg p-2 space-y-2">
          {showEngagement && (
            <>
              <button
                onClick={handleLike}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                  liked ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-red-50'
                }`}
                title="Curtir"
              >
                <Heart className={`h-5 w-5 ${liked ? 'fill-current' : ''}`} />
              </button>
              
              <button
                onClick={handleBookmark}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                  bookmarked ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-600 hover:bg-yellow-50'
                }`}
                title="Salvar"
              >
                <Bookmark className={`h-5 w-5 ${bookmarked ? 'fill-current' : ''}`} />
              </button>
              
              <div className="w-10 h-px bg-gray-200"></div>
            </>
          )}
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
            title="Compartilhar"
          >
            <Share2 className="h-5 w-5" />
          </button>
          
          {isOpen && (
            <div className="space-y-2 animate-in slide-in-from-left-2 duration-200">
              {shareButtons.map((button) => {
                const IconComponent = button.icon;
                return (
                  <button
                    key={button.platform}
                    onClick={() => handleShare(button.platform)}
                    className={`w-10 h-10 ${button.color} text-white rounded-lg flex items-center justify-center transition-colors duration-200`}
                    title={`Compartilhar no ${button.name}`}
                  >
                    <IconComponent className="h-4 w-4" />
                  </button>
                );
              })}
              
              <button
                onClick={handleCopyLink}
                className={`w-10 h-10 ${copied ? 'bg-green-600' : 'bg-gray-600'} text-white rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200`}
                title="Copiar link"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center justify-between ${className}`}>
        {showEngagement && (
          <div className="flex items-center space-x-3">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-1 text-sm transition-colors duration-200 ${
                liked ? 'text-red-600' : 'text-gray-600 hover:text-red-500'
              }`}
            >
              <Heart className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
              <span>Curtir</span>
            </button>
            
            <button
              onClick={handleBookmark}
              className={`flex items-center space-x-1 text-sm transition-colors duration-200 ${
                bookmarked ? 'text-yellow-600' : 'text-gray-600 hover:text-yellow-500'
              }`}
            >
              <Bookmark className={`h-4 w-4 ${bookmarked ? 'fill-current' : ''}`} />
              <span>Salvar</span>
            </button>
          </div>
        )}
        
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">Compartilhar:</span>
          <div className="flex space-x-1">
            {shareButtons.slice(0, 3).map((button) => {
              const IconComponent = button.icon;
              return (
                <button
                  key={button.platform}
                  onClick={() => handleShare(button.platform)}
                  className={`w-8 h-8 ${button.color} text-white rounded-full flex items-center justify-center transition-colors duration-200`}
                  title={`Compartilhar no ${button.name}`}
                >
                  <IconComponent className="h-3 w-3" />
                </button>
              );
            })}
            
            <button
              onClick={handleCopyLink}
              className={`w-8 h-8 ${copied ? 'bg-green-600' : 'bg-gray-600'} text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200`}
              title="Copiar link"
            >
              {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Variant horizontal (default)
  return (
    <div className={`bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100 ${className}`}>
      <div className="flex flex-col space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Share2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Gostou do conteúdo?</h4>
              <p className="text-sm text-gray-600">Compartilhe com seus colegas e ajude mais pessoas</p>
            </div>
          </div>
          
          {shareCount > 0 && (
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{shareCount}</div>
              <div className="text-xs text-gray-500">compartilhamentos</div>
            </div>
          )}
        </div>
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
          {/* Engagement buttons */}
          {showEngagement && (
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                  liked 
                    ? 'bg-red-100 text-red-700 border border-red-200' 
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200'
                }`}
              >
                <Heart className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
                <span className="font-medium">Curtir</span>
              </button>
              
              <button
                onClick={handleBookmark}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                  bookmarked 
                    ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' 
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-yellow-50 hover:text-yellow-600 hover:border-yellow-200'
                }`}
              >
                <Bookmark className={`h-4 w-4 ${bookmarked ? 'fill-current' : ''}`} />
                <span className="font-medium">Salvar</span>
              </button>
            </div>
          )}
          
          {/* Share buttons */}
          <div className="flex flex-wrap gap-2">
            {shareButtons.map((button) => {
              const IconComponent = button.icon;
              return (
                <button
                  key={button.platform}
                  onClick={() => handleShare(button.platform)}
                  className={`flex items-center space-x-2 px-4 py-2 ${button.color} text-white rounded-lg transition-colors duration-200 ${
                    showLabels ? '' : 'px-3'
                  }`}
                  title={`Compartilhar no ${button.name}`}
                >
                  <IconComponent className="h-4 w-4" />
                  {showLabels && <span className="text-sm font-medium">{button.name}</span>}
                </button>
              );
            })}
            
            <button
              onClick={handleCopyLink}
              className={`flex items-center space-x-2 px-4 py-2 ${
                copied ? 'bg-green-600' : 'bg-gray-600 hover:bg-gray-700'
              } text-white rounded-lg transition-colors duration-200 ${
                showLabels ? '' : 'px-3'
              }`}
              title="Copiar link"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {showLabels && (
                <span className="text-sm font-medium">
                  {copied ? 'Copiado!' : 'Copiar'}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
