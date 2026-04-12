// src/app/view/[id]/page.tsx
import { libraryContent } from '../../../lib/syntax-data';
import Link from 'next/link';

// NOTE: In Next.js 15+, 'params' is a Promise.
type Params = Promise<{ id: string }>;

export default async function UniversalViewer(props: { params: Params }) {
  const params = await props.params;
  const seed = libraryContent.find((s) => s.id === params.id);

  if (!seed) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-neutral-500 font-mono">
      <h1 className="text-4xl mb-4">404</h1>
      <p>Artifact Not Found: {params.id}</p>
      <Link href="/" className="mt-8 border border-neutral-800 px-4 py-2 hover:bg-white hover:text-black transition-colors">
        Return to Lab
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-neutral-200 animate-in fade-in duration-700 selection:bg-blue-500 selection:text-white pb-24">
      
      {/* --- LAYOUT 1: THE COURSE (Physics Syllabus) --- */}
      {seed.format === 'course' && (
        <main className="max-w-4xl mx-auto py-20 px-6">
          <header className="mb-12 border-l-4 border-blue-500 pl-6">
            <span className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.3em]">Curriculum Protocol</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mt-2 mb-4 tracking-tighter">{seed.title}</h1>
            <p className="text-xl text-neutral-400 font-serif italic">"{seed.commentary}"</p>
          </header>

          <div className="grid gap-6">
            <div className="bg-neutral-900/50 p-6 rounded border border-neutral-800 mb-8">
              <h3 className="font-mono text-xs text-green-500 mb-2">&gt; ABSTRACT</h3>
              <p className="font-serif text-lg leading-relaxed text-neutral-300">{seed.content}</p>
            </div>

            <h2 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4">Reading Path</h2>
            
            {seed.chapters?.map((chapter, i) => (
              <div key={i} className="group flex flex-col md:flex-row gap-6 p-6 border border-neutral-800 hover:border-blue-500 transition-all bg-neutral-900/20 items-start md:items-center">
                <div className="text-4xl font-bold text-neutral-800 group-hover:text-blue-500/50 font-serif">
                  {i + 1 < 10 ? `0${i + 1}` : i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{chapter.title}</h3>
                  <p className="text-sm text-neutral-400 font-mono">Auth: {chapter.author}</p>
                </div>
                <div className="w-full md:w-1/3 bg-black p-4 rounded border border-neutral-800">
                  <span className="text-[10px] text-green-500 block mb-1">FOCUS AREA:</span>
                  <p className="text-xs text-neutral-300 mb-3">{chapter.focus}</p>
                  <a 
                    href={`https://www.google.com/search?q=${encodeURIComponent(chapter.link)}`} 
                    target="_blank" 
                    className="text-[10px] font-bold bg-white text-black px-2 py-1 hover:bg-blue-500 hover:text-white transition-colors block text-center uppercase tracking-wider"
                  >
                    Search Source →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* --- LAYOUT 2: SURREALISM (Art/Absurdity) --- */}
      {seed.format === 'surrealism' && (
        <main className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-white text-black">
          <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none select-none">
             <h1 className="text-[20vw] font-bold leading-none -ml-20">ABSURD</h1>
             <h1 className="text-[20vw] font-bold leading-none ml-20">REALITY</h1>
          </div>

          <div className="z-10 max-w-2xl text-center">
            <span className="bg-black text-white px-2 py-1 text-xs font-mono uppercase transform -rotate-3 inline-block mb-8">
              {seed.pillar}
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-black mb-8 hover:italic transition-all cursor-help glitch-hover">
              {seed.title}
            </h1>
            {seed.mediaUrl && (
              <div className="relative inline-block my-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src={seed.mediaUrl} className="max-w-md w-full shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] border-2 border-black filter contrast-125" />
              </div>
            )}
            <p className="text-2xl font-serif leading-relaxed border-t-2 border-black pt-8 mt-8">
              {seed.content}
            </p>
            <p className="text-xs font-mono mt-12 text-neutral-500">
              {seed.commentary}
            </p>
          </div>
        </main>
      )}

      {/* --- LAYOUT 3: POETRY --- */}
      {seed.format === 'poetry' && (
        <main className="max-w-2xl mx-auto py-24 px-6 text-center">
          <span className="text-[10px] font-mono text-blue-500 mb-8 block tracking-widest uppercase border border-blue-900/30 inline-block px-3 py-1 rounded-full">
            {seed.pillar} // Poetic Node
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-16 italic text-white leading-tight">
            {seed.title}
          </h1>
          <div className="font-serif text-lg md:text-2xl leading-relaxed whitespace-pre-line text-neutral-300 italic border-l-2 border-neutral-800 pl-6 md:border-none md:pl-0">
            {seed.content}
          </div>
          <div className="mt-16 text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
            Generated: {seed.date}
          </div>
        </main>
      )}

      {/* --- LAYOUT 4: STANDARD ESSAY / SATIRE --- */}
      {(seed.format === 'essay' || seed.format === 'satire') && (
        <main className="max-w-3xl mx-auto py-16 px-6">
          <header className="border-b-4 border-white/10 mb-12 pb-6">
             <div className="flex justify-between items-end mb-4">
               <span className="bg-white text-black font-bold px-2 py-1 text-[10px] uppercase tracking-tighter">THE DAILY RHIZOME</span>
               <span className="font-mono text-[10px] text-neutral-500">{seed.date}</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-bold text-white leading-none tracking-tight mb-6">{seed.title}</h1>
             <p className="text-xl text-neutral-400 font-serif italic pl-6 border-l-2 border-blue-500">"{seed.commentary}"</p>
          </header>

          {seed.mediaUrl && (
            <div className="mb-12 relative group">
              <img src={seed.mediaUrl} className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-700 rounded-sm" />
              <div className="absolute bottom-2 right-2 text-[9px] font-mono text-white/50">FIG. 1.0</div>
            </div>
          )}

          <article className="prose prose-invert prose-lg text-neutral-300 font-serif leading-loose">
            {seed.content.split('\n').map((p, i) => (
              <p key={i} className="mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-white first-letter:mr-2 first-letter:float-left">
                {p}
              </p>
            ))}
          </article>
        </main>
      )}

      {/* --- LAYOUT 5: CODE --- */}
      {seed.format === 'code' && (
        <main className="max-w-6xl mx-auto py-12 md:py-24 px-6 grid md:grid-cols-2 gap-12 items-center">
           <div className="order-2 md:order-1">
             <span className="text-[10px] font-mono text-green-500 mb-4 block">&gt; SYSTEM.EXECUTE({seed.pillar.toUpperCase()})</span>
             <h1 className="text-4xl font-bold text-white mb-6">{seed.title}</h1>
             <p className="text-neutral-400 mb-8 font-serif text-lg leading-relaxed">{seed.commentary}</p>
             
             <div className="bg-black border border-neutral-800 p-6 rounded-lg font-mono text-xs md:text-sm text-green-400 shadow-[0_0_30px_rgba(0,255,0,0.1)] overflow-x-auto">
               <div className="flex gap-2 mb-4 border-b border-white/10 pb-2">
                 <div className="w-2 h-2 rounded-full bg-red-500"></div>
                 <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                 <div className="w-2 h-2 rounded-full bg-green-500"></div>
               </div>
               {seed.content}
             </div>
           </div>
           
           {seed.mediaUrl && (
             <div className="relative group order-1 md:order-2">
               <div className="absolute inset-0 bg-blue-500/20 blur-3xl opacity-20"></div>
               <img src={seed.mediaUrl} className="relative rounded-lg shadow-2xl border border-neutral-800 opacity-90 group-hover:opacity-100 transition-opacity" />
               <div className="absolute -bottom-4 -right-4 bg-neutral-900 text-[10px] px-3 py-1 border border-neutral-700 font-mono text-green-500">
                 RENDER COMPLETE
               </div>
             </div>
           )}
        </main>
      )}

      {/* --- LAYOUT 6: MEDIA (Immersive) --- */}
      {seed.format === 'media' && (
        <main className="h-[calc(100vh-2rem)] flex flex-col justify-center items-center bg-neutral-900 relative overflow-hidden m-4 rounded-3xl border border-neutral-800">
          {seed.mediaUrl && (
            <div className="absolute inset-0 opacity-30 blur-3xl scale-110">
               <img src={seed.mediaUrl} className="w-full h-full object-cover" />
            </div>
          )}
          <div className="z-10 text-center relative max-w-2xl px-6">
            <div className="w-64 h-64 md:w-96 md:h-96 mx-auto bg-black border border-neutral-700 shadow-2xl mb-12 relative group cursor-pointer hover:scale-105 transition-transform rounded-full overflow-hidden">
               {seed.mediaUrl && <img src={seed.mediaUrl} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity animate-spin-slow" style={{animationDuration: '20s'}} />}
               <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm group-hover:backdrop-blur-none transition-all">
                 <div className="bg-white text-black rounded-full w-20 h-20 flex items-center justify-center pl-1 hover:scale-110 transition-transform">▶</div>
               </div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">{seed.title}</h1>
            <p className="text-blue-400 font-mono text-xs tracking-[0.2em] uppercase mb-12">{seed.pillar}</p>
            <div className="w-full h-1 bg-neutral-700 rounded-full overflow-hidden mb-4"><div className="w-1/3 h-full bg-white"></div></div>
            <div className="flex justify-between text-[10px] font-mono text-neutral-400"><span>0:00</span><span>∞:∞</span></div>
          </div>
        </main>
      )}

      {/* --- SHARED FOOTER WITH TAGS --- */}
      <footer className="w-full max-w-4xl mx-auto mt-16 px-6">
        <div className="border-t border-white/10 pt-8">
          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-4">
            Connect to Node:
          </span>
          <div className="flex flex-wrap gap-2">
            {seed.tags.map(tag => (
              <Link 
                key={tag} 
                href={`/topics/${tag}`} 
                className="text-[10px] font-mono text-blue-400 border border-blue-900/30 px-3 py-1.5 rounded hover:bg-blue-900/20 hover:text-blue-300 transition-colors uppercase"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 flex justify-between items-center text-[10px] font-mono text-neutral-600">
           <span>ID: {seed.id}</span>
           <Link href="/prompts" className="hover:text-white transition-colors">
             [ RETURN TO ARCHIVE ]
           </Link>
        </div>
      </footer>

    </div>
  );
}