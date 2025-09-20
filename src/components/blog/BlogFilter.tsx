
import React, { useState, useEffect } from 'react';
import { Post } from '@/lib/strapi';

interface BlogFilterProps {
  posts: Post[];
  onFilteredPosts: (filteredPosts: Post[]) => void;
}

export default function BlogFilter({ posts, onFilteredPosts }: BlogFilterProps) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filtered = posts.filter(post =>
      post.attributes.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.attributes.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onFilteredPosts(filtered);
  }, [searchTerm, posts, onFilteredPosts]);

  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Buscar posts..."
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

