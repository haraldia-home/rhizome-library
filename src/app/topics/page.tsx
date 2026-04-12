// src/app/topics/[tag]/page.tsx
import Link from 'next/link';
import { libraryContent } from '../../../lib/syntax-data';

// Helper to clean up URL tags (e.g. "Artificial%20Intelligence" -> "artificial intelligence")
const normalize = (str: string) => decodeURIComponent(str).toLowerCase();

export default async function TopicNode({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);

  // 1. Find every seed that includes this tag
  const relatedSeeds = libraryContent.filter(seed => 
    seed.tags.some(t => normalize(t) === normalize(tag))
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-8 md:p-16 animate-in fade-in duration-700">
      
      {/* HEADER */}
      <header className="mb-16 border-b border-neutral-800 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          <span className="text-blue-500 font-mono text-xs uppercase tracking-widest">
            Rhizome Node // {relatedSeeds.length} Connections
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl font-serif font-bold capitalize text-white mb-6">
          #{decodedTag}
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl font-serif italic">
          "A gathering of thoughts, code, and artifacts related to {decodedTag}."
        </p>
      </header>

      {/* GRID OF CONTENT */}
      {relatedSeeds.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedSeeds.map(seed => (
            <Link key={seed.id} href={`/view/${seed.id}`} className="group block border border-neutral-800 bg-neutral-900/20 p-6 rounded hover:border-blue-500 transition-all">
              
              {/* Card Header */}
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] border border-neutral-700 px-2 py-1 rounded text-neutral-500 uppercase group-hover:text-blue-400 group-hover:border-blue-900/50 transition-colors">
                  {seed.format}
                </span>
                <span className="text-[10px] font-mono text-neutral-600">
                  {seed.date}
                </span>
              </div>

              {/* Card Title */}
              <h3 className="text-2xl font-bold mb-3 group-hover:text-white text-neutral-200 group-hover:underline decoration-blue-500 underline-offset-4">
                {seed.title}
              </h3>
              
              {/* Card Summary */}
              <p className="text-neutral-400 text-sm italic mb-6 line-clamp-3">
                "{seed.commentary}"
              </p>

              {/* Visual Indicator */}
              <div className="w-full h-1 bg-neutral-800 rounded overflow-hidden">
                <div className="w-0 group-hover:w-full h-full bg-blue-500 transition-all duration-700"></div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-neutral-500 font-mono text-sm py-12">
          [!] No artifacts found for this node. The archive is incomplete.
        </div>
      )}

      {/* FOOTER */}
      <footer className="mt-24 pt-12 border-t border-neutral-800 flex justify-between items-end">
        <Link href="/prompts" className="text-neutral-500 hover:text-white font-mono text-xs border border-neutral-800 px-4 py-2 rounded hover:bg-neutral-800 transition-colors">
          ← Return to Main Rhizome
        </Link>
        <div className="text-neutral-700 font-mono text-[10px] uppercase tracking-widest">
          End of Node
        </div>
      </footer>
    </div>
  );
}