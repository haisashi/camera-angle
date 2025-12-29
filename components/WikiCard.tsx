// app/components/WikiCard.tsx
import Image from 'next/image';
import { WikiItem } from '@/app/data';

interface WikiCardProps {
  item: WikiItem;
}

export default function WikiCard({ item }: WikiCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl hover:-translate-y-1 border border-gray-200">
      <div className="relative h-48 w-full overflow-hidden bg-gray-200">
        <Image 
          src={item.imageUrl} 
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Fallback overlay if image missing */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800/10 opacity-0 group-hover:opacity-100 transition-opacity">
        </div>
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold text-gray-900">
          {item.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}