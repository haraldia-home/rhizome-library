import { libraryContent } from '@/lib/syntax-data';
import Link from 'next/link';

export default function IdeasPage() {
  return (
    <div className="min-h-screen max-w-4xl">
      <header className="mb-16">
        <h1 className="text-6xl font-serif font-bold mb-4 text-white">The Rhizome</h1>
        <p className="text-xl text-neutral-400">
          Wander through the nodes. Get lost, but not too lost.
        </p>
      </header>

      <div className="space-y-12 relative border-l border-neutral-800 ml-4 pl-8">
        {libraryContent.map((seed) => (
          <article key={seed.id} className="relative">
            {/* The Timeline Dot */}
            <div className="absolute -left-[37px] top-2 w-4 h-4 rounded-full bg-neutral-900 border border-neutral-600"></div>

            <div className="flex items-baseline gap-4 mb-2">
               <span className="text-xs font-mono text-neutral-500">{seed.date}</span>
               <span className="text-xs font-mono text-blue-500 uppercase tracking-widest">{seed.pillar}</span>
            </div>

            <Link href="/prompts" className="block group">
              <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {seed.title}
              </h2>
            </Link>
            
            <p className="text-neutral-400 italic mb-4 font-serif text-lg">
              "{seed.commentary}"
            </p>

            <div className="flex gap-2">
              {seed.tags.map(tag => (
                <span key={tag} className="text-xs text-neutral-600 hover:text-white cursor-pointer transition-colors">
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}