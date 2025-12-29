// app/page.tsx
import Link from 'next/link';
import { filmData } from './data';

export default function Home() {
  const categories = Object.values(filmData);

  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-8">
      <div className="text-center mb-16 mt-8">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 tracking-tight mb-6">
          The Filmmaker's Handbook
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          The essential visual dictionary for Directors, DPs, and Editors.
          Master the language of cinema.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
        {categories.map((cat) => (
          <Link 
            key={cat.slug}
            href={`/wiki/${cat.slug}`} 
            className="group block p-8 bg-gray-800/50 rounded-2xl border border-gray-700 hover:bg-gray-800 hover:border-gray-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
              {cat.title} &rarr;
            </h2>
            <p className="text-gray-400 text-base">
              {cat.description}
            </p>
          </Link>
        ))}
      </div>
      
      <footer className="mt-20 text-gray-600 text-sm">
        Film Theory Interactive Reference
      </footer>
    </main>
  );
}