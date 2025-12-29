// app/components/AngleCard.tsx
import Image from 'next/image';
import { CameraAngle } from '@/app/data';

interface AngleCardProps {
  angle: CameraAngle;
}

export default function AngleCard({ angle }: AngleCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl hover:-translate-y-1 border border-gray-200">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-200">
        <Image 
          src={angle.imageUrl} 
          alt={angle.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold text-gray-900">
          {angle.id}. {angle.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {angle.description}
        </p>
      </div>
    </div>
  );
}