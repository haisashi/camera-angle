// app/wiki/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { filmData } from '../../data';
import WikiCard from '@/components/WikiCard'; 

// 1. Define params as a Promise
interface PageProps {
  params: Promise<{ slug: string }>;
}

// Optional: Helps SEO by telling Next.js what pages to build
export async function generateStaticParams() {
  return Object.keys(filmData).map((slug) => ({
    slug: slug,
  }));
}

// 2. Make the component 'async'
export default async function WikiPage({ params }: PageProps) {
  
  // 3. AWAIT the params here! (This fixes your error)
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const category = filmData[slug];

  if (!category) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Navigation */}
      <div className="mb-8 max-w-7xl mx-auto">
        <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
          &larr; Back to Dashboard
        </Link>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-7xl text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 capitalize mb-2">
          {category.title}
        </h1>
        <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
          {category.description}
        </p>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-7xl grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {category.items.map((item) => (
          <WikiCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}