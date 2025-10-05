'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, Send, User, Calendar, Reply, Heart, Flag } from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  email: string;
  content: string;
  date: string;
  likes: number;
  replies: Comment[];
  isApproved: boolean;
}

interface CommentSystemProps {
  postId: string;
  postTitle: string;
}

export default function CommentSystem({ postId, postTitle }: CommentSystemProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({
    author: '',
    email: '',
    content: ''
  });
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Carregar comentários do localStorage (simulação)
  useEffect(() => {
    const savedComments = localStorage.getItem(`comments-${postId}`);
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, [postId]);

  // Salvar comentários no localStorage
  const saveComments = (updatedComments: Comment[]) => {
    localStorage.setItem(`comments-${postId}`, JSON.stringify(updatedComments));
    setComments(updatedComments);
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.author || !newComment.email || !newComment.content) return;

    setIsSubmitting(true);

    const comment: Comment = {
      id: Date.now().toString(),
      author: newComment.author,
      email: newComment.email,
      content: newComment.content,
      date: new Date().toISOString(),
      likes: 0,
      replies: [],
      isApproved: true // Auto-aprovado para demo
    };

    const updatedComments = [...comments, comment];
    saveComments(updatedComments);

    setNewComment({ author: '', email: '', content: '' });
    setIsSubmitting(false);
    setShowForm(false);
  };

  const handleLikeComment = (commentId: string) => {
    const updatedComments = comments.map(comment => 
      comment.id === commentId 
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    );
    saveComments(updatedComments);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-gray-900 flex items-center">
          <MessageCircle className="h-6 w-6 mr-3 text-blue-600" />
          Comentários ({comments.length})
        </h3>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
        >
          <MessageCircle className="h-4 w-4" />
          <span>Deixar Comentário</span>
        </button>
      </div>

      {/* Formulário de Comentário */}
      {showForm && (
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h4 className="text-lg font-semibold mb-4">Deixe seu comentário</h4>
          <form onSubmit={handleSubmitComment} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="author"
                  value={newComment.author}
                  onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  value={newComment.email}
                  onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                Comentário *
              </label>
              <textarea
                id="content"
                rows={4}
                value={newComment.content}
                onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Compartilhe sua opinião sobre este post..."
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Seu e-mail não será publicado. Campos obrigatórios marcados com *
              </p>
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2 disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                  <span>{isSubmitting ? 'Enviando...' : 'Publicar'}</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Lista de Comentários */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <div className="text-center py-12">
            <MessageCircle className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Seja o primeiro a comentar!</p>
            <p className="text-gray-400">Compartilhe sua opinião sobre este post.</p>
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="border-l-4 border-blue-200 pl-6 py-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 rounded-full p-2">
                    <User className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{comment.author}</h4>
                    <div className="flex items-center text-sm text-gray-500 space-x-2">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(comment.date)}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleLikeComment(comment.id)}
                    className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors duration-200"
                  >
                    <Heart className="h-4 w-4" />
                    <span className="text-sm">{comment.likes}</span>
                  </button>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                    <Flag className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">{comment.content}</p>
              <button
                onClick={() => setReplyTo(comment.id)}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1"
              >
                <Reply className="h-3 w-3" />
                <span>Responder</span>
              </button>
            </div>
          ))
        )}
      </div>

      {/* Política de Comentários */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-2">Política de Comentários</h4>
        <p className="text-sm text-blue-700">
          Valorizamos sua participação! Mantenha os comentários respeitosos e relacionados ao tema. 
          Comentários ofensivos ou spam serão removidos. Seu e-mail não será compartilhado.
        </p>
      </div>
    </div>
  );
}
