import Link from 'next/link';
import Image from 'next/image';
import { Post, getImageUrl } from '@/lib/strapi';

interface RelatedPostsProps {
  posts: Post[];
  currentPostId: number;
  maxPosts?: number;
}

export default function RelatedPosts({ posts, currentPostId, maxPosts = 3 }: RelatedPostsProps) {
  const related = posts
    .filter(post => post.id !== currentPostId)
    .sort(() => 0.5 - Math.random())
    .slice(0, maxPosts);

  if (related.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Posts Relacionados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map(post => {
          // featured_image agora é um array, então pegamos o primeiro item
          const featuredImage = post.featured_image?.data?.[0];
          // getImageUrl espera um objeto StrapiImage, que é o que featuredImage é
          const imageUrl = getImageUrl(featuredImage);

          return (
            <article key={post.id} className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-40 w-full">
                  <Image
                    src={imageUrl}
                    // Acessa alternativeText diretamente de featuredImage.attributes
                    alt={featuredImage?.attributes?.alternativeText || post.image_alt || post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {post.seo_description || post.content.replace(/[#*]/g, '').substring(0, 100) + '...'}
                  </p>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
