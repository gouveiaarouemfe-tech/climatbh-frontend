'use client';

import { Suspense } from 'react';
import CategoryFilter from './CategoryFilter';

interface CategoryFilterWrapperProps {
  variant?: 'sidebar' | 'header' | 'grid';
  showSearch?: boolean;
  showViewToggle?: boolean;
  currentCategory?: string;
  onCategoryChange?: (category: string) => void;
  onViewChange?: (view: 'grid' | 'list') => void;
  initialCategories?: any[];
}

function CategoryFilterFallback() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="animate-pulse">
        <div className="h-6 bg-gray-200 rounded mb-4"></div>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-10 bg-gray-200 rounded mb-2"></div>
        ))}
      </div>
    </div>
  );
}

export default function CategoryFilterWrapper(props: CategoryFilterWrapperProps) {
  return (
    <Suspense fallback={<CategoryFilterFallback />}>
      <CategoryFilter {...props} />
    </Suspense>
  );
}
