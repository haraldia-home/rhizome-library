"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { libraryContent } from '../../lib/syntax-data'; // Adjust path if needed

export default function CommandMenu() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  // 1. Listen for Ctrl+K or Cmd+K to toggle
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  // 2. Filter the Library based on search input
  const filtered = libraryContent.filter((seed) => {
    const search = query.toLowerCase();
    return (
      seed.title.toLowerCase().includes(search) ||
      seed.pillar.toLowerCase().includes(search) ||
      seed.tags.some(tag => tag.toLowerCase().includes(search))
    );
  });

  // 3. Handle Navigation
  const handleSelect = (id: string) => {
    router.push(`/view/${id}`);
    setIsOpen(false);
    setQuery('');
  };

  // Don't render if closed
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      
      {/* The Search Box Container */}
      <div className="w-full max-w-2xl bg-neutral-900 border border-neutral-700 shadow-2xl rounded-lg overflow-hidden flex flex-col max-h-[60vh]">
        
        {/* Input Field */}
        <div className="flex items-center border-b border-neutral-800 p-4 bg-neutral-950">
          <span className="text-green-500 mr-3 font-mono text-sm">&gt;_</span>
          <input 
            autoFocus
            className="bg-transparent text-white w-full outline-none font-mono text-lg placeholder:text-neutral-700"
            placeholder="Search the Rhizome..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className="text-[10px] text-neutral-600 border border-neutral-800 px-2 py-1 rounded">ESC TO CLOSE</span>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 bg-neutral-900">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-neutral-600 font-mono text-xs">
              [!] ERROR: Artifact not found in memory.
            </div>
          ) : (
            filtered.map((seed) => (
              <button
                key={seed.id}
                onClick={() => handleSelect(seed.id)}
                className="w-full text-left flex items-center gap-4 p-3 hover:bg-neutral-800 group rounded border border-transparent hover:border-neutral-700 transition-all mb-1"
              >
                {/* Format Badge */}
                <span className={`text-[9px] uppercase font-mono px-2 py-1 rounded border opacity-70 group-hover:opacity-100 w-16 text-center ${
                  seed.format === 'code' ? 'text-green-400 border-green-900 bg-green-900/10' :
                  seed.format === 'poetry' ? 'text-pink-400 border-pink-900 bg-pink-900/10' :
                  seed.format === 'course' ? 'text-blue-400 border-blue-900 bg-blue-900/10' :
                  'text-neutral-400 border-neutral-800'
                }`}>
                  {seed.format}
                </span>
                
                {/* Text Info */}
                <div className="flex-1">
                  <div className="text-neutral-300 font-bold group-hover:text-white text-sm">{seed.title}</div>
                  <div className="text-neutral-600 text-[10px] truncate w-64 md:w-96 font-mono">{seed.pillar} // {seed.tags.join(', ')}</div>
                </div>

                {/* Arrow Hint */}
                <span className="text-neutral-700 text-[10px] font-mono group-hover:text-green-500 opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-x-2">
                  ENTER ⏎
                </span>
              </button>
            ))
          )}
        </div>

        {/* Footer Info */}
        <div className="p-2 bg-neutral-950 border-t border-neutral-800 text-[9px] text-neutral-600 flex justify-between px-4 font-mono uppercase tracking-widest">
          <span>{filtered.length} RESULTS FOUND</span>
          <span>SYSTEM READY</span>
        </div>

      </div>
    </div>
  );
}