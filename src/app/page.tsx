import Link from 'next/link';
import { libraryContent } from '@/lib/syntax-data';

export default function Home() {
  // 1. Calculate Real Stats
  const totalSeeds = libraryContent.length;
  const lastUpdate = libraryContent[0]?.date || 'Unknown';
  const featured = libraryContent[0]; // Uses the first item as featured

  return (
    <div className="max-w-6xl animate-in fade-in duration-700 p-6 md:p-12">
      
      {/* HEADER */}
      <header className="mb-16 border-b border-neutral-800 pb-10">
        <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 text-white tracking-tight">
          This Week in <br/><span className="text-blue-500 italic">Creation</span>.
        </h1>
        <p className="text-xl md:text-2xl text-neutral-400 font-light max-w-2xl leading-relaxed">
          A living archive of <span className="text-white">Rational Satire</span>, <span className="text-white">Ecosophy</span>, and <span className="text-white">Human Spirit</span>.
        </p>
      </header>

      {/* DASHBOARD GRID */}
      <div className="grid md:grid-cols-12 gap-8 md:gap-12">
        
        {/* LEFT: Stats & Pulse */}
        <section className="md:col-span-4 space-y-8">
           <div className="bg-neutral-900/50 p-6 rounded-lg border border-neutral-800">
             <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">Lab Metrics</h2>
             <div className="space-y-3 font-mono text-sm text-neutral-300">
               
               {/* DYNAMIC COUNT */}
               <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span>Total Nodes</span>
                  <span className="text-green-400">{totalSeeds}</span>
               </div>
               
               {/* DYNAMIC DATE */}
               <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span>Last Sync</span>
                  <span className="text-blue-400">{lastUpdate}</span>
               </div>

               <div className="flex justify-between pt-2"><span>System</span><span className="text-purple-400">v1.1.0</span></div>
             </div>
           </div>

           <div className="p-6 border-l-2 border-blue-500 bg-blue-500/5 rounded-r-lg">
             <h3 className="font-bold text-white mb-2 text-sm uppercase tracking-wide">💡 Current Experiment</h3>
             <p className="text-neutral-400 italic text-sm leading-relaxed">
               "Can we create a cooking recipe based entirely on the molecular structure of a jazz chord?"
             </p>
           </div>
        </section>

        {/* RIGHT: Featured Content */}
        <section className="md:col-span-8">
          <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-6">Featured Syntax</h2>
          
          <Link href={`/view/${featured.id}`} className="block group">
            <div className="border border-neutral-800 bg-neutral-900/40 p-8 rounded-xl hover:border-blue-500 transition-all relative overflow-hidden">
              <span className="text-[10px] font-mono text-blue-400 mb-3 block px-2 py-1 border border-blue-900/50 rounded-full inline-block bg-blue-900/10">
                {featured.pillar}
              </span>
              
              <h3 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-white group-hover:underline decoration-blue-500 underline-offset-4">
                {featured.title}
              </h3>
              
              <p className="text-neutral-400 italic font-serif text-lg border-l-2 border-neutral-700 pl-4 mb-6">
                "{featured.commentary}"
              </p>

              <div className="flex items-center text-xs font-mono text-neutral-500">
                <span>READ FULL ENTRY</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>

          <div className="mt-8 flex gap-4">
            <Link href="/prompts" className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors text-xs font-mono tracking-wide">
              OPEN PROMPT LAB
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}