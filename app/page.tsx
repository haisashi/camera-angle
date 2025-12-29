// app/page.tsx
import { cameraAngles } from './data';
import AngleCard from '../components/AngleCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="mx-auto max-w-7xl text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          The 9 Essential Camera Angles
        </h1>
        <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
          From the imposing Low Angle to the stylistic Ground Level, understanding these perspectives allows you to control the narrative.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="mx-auto max-w-7xl grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cameraAngles.map((angle) => (
          <AngleCard key={angle.id} angle={angle} />
        ))}
      </div>
    </main>
  );
}