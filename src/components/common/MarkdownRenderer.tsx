
'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { getImageUrl } from '@/lib/strapi';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className="prose prose-lg prose-blue max-w-none text-gray-800 leading-relaxed">
      <ReactMarkdown
        components={{
          h1: ({ children }) => <h1 className="text-2xl font-bold mt-8 mb-4 text-blue-800">{children}</h1>,
          h2: ({ children }) => <h2 className="text-xl font-semibold mt-6 mb-3 text-blue-700">{children}</h2>,
          h3: ({ children }) => <h3 className="text-lg font-medium mt-4 mb-2 text-blue-600">{children}</h3>,
          p: ({ children }) => <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>,
          ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
          li: ({ children }) => <li className="text-gray-700">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50 italic text-gray-700">
              {children}
            </blockquote>
          ),
          strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
          img: ({ node, ...props }) => {
                        const markdownImageUrl = typeof props.src === 'string' ? getImageUrl({ attributes: { url: props.src } } as { attributes: { url: string } }) : '';
            return (
              <Image
                src={markdownImageUrl}
                alt={props.alt || ''}
                width={typeof props.width === 'number' ? props.width : (typeof props.width === 'string' ? parseInt(props.width) : 800)}
                height={typeof props.height === 'number' ? props.height : (typeof props.height === 'string' ? parseInt(props.height) : 600)}
                className="my-4 rounded-lg shadow-md"
              />
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;

