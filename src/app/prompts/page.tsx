"use client";
import Link from 'next/link';
import { libraryContent } from '@/lib/syntax-data';

export default function GalleryPage() {
  return (
    <div className="min-h-screen p-6 md:p-12">
      <header className="mb-12 border-b border-neutral-800 pb-8">
        <h1 className="text-5xl font-serif font-bold mb-4 text-white">The <span className="text-blue-500">Rhizome</span>.</h1>
        <p className="text-neutral-500 font-mono text-xs max-w-lg">
          [ ARCHIVE MODE ] :: Select a node to expand.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {libraryContent.map((seed) => (
          <Link key={seed.id} href={`/view/${seed.id}`} className="group relative border border-neutral-800 bg-neutral-900/30 rounded-lg overflow-hidden hover:border-blue-500 transition-all block h-full flex flex-col">
              
              {/* Image Preview */}
              {seed.mediaUrl && (
                <div className="h-48 w-full overflow-hidden relative border-b border-neutral-800">
                  <img src={seed.mediaUrl} alt={seed.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0" />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[9px] font-mono text-white uppercase border border-white/10 tracking-wider">
                    {seed.format}
                  </div>
                </div>
              )}

              {/* Text Content */}
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-[9px] font-mono text-blue-400 uppercase tracking-widest block mb-3">{seed.pillar}</span>
                <h3 className="text-xl font-bold font-serif text-white mb-3 leading-tight group-hover:text-blue-200 transition-colors">{seed.title}</h3>
                <p className="text-neutral-500 text-xs italic mt-auto">"{seed.commentary}"</p>
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
}