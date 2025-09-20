import Link from 'next/link';
import { Post } from '@/lib/strapi';

interface PostNavigationProps {
  previousPost: Post | null;
  nextPost: Post | null;
}

export default function PostNavigation({ previousPost, nextPost }: PostNavigationProps) {
  return (
    <div className="mt-12 flex justify-between items-center">
      {previousPost ? (
        <Link
          href={`/blog/${previousPost.slug}`}
          className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {previousPost.title}
        </Link>
      ) : (
        <div />
      )}

      {nextPost ? (
        <Link
          href={`/blog/${nextPost.slug}`}
          className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
        >
          {nextPost.title}
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
