// src/app/manifesto/page.tsx
import Link from 'next/link';

export default function Manifesto() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 font-serif selection:bg-red-900 selection:text-white pb-24">
      
      {/* 1. THE HOOK */}
      <section className="h-screen flex flex-col justify-center px-8 md:px-24 border-b border-neutral-900">
        <span className="font-mono text-xs text-red-500 mb-8 uppercase tracking-widest block">
          /// Deep Storage Protocol
        </span>
        <h1 className="text-6xl md:text-9xl font-bold text-white mb-8 leading-[0.85] tracking-tighter mix-blend-difference">
          We are<br/>
          drowning<br/>
          in <span className="italic text-neutral-500">noise.</span>
        </h1>
        <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl leading-relaxed">
          The internet was supposed to be a library. It became a slot machine.
          This archive is an attempt to reclaim the <span className="text-white border-b border-red-500">Signal</span>.
        </p>
      </section>

      {/* 2. THE THREE PILLARS */}
      <section className="grid md:grid-cols-3 border-b border-neutral-900">
        
        {/* Pillar 1: Science */}
        <div className="p-12 border-r border-neutral-900 hover:bg-neutral-900/30 transition-colors group">
          <span className="text-5xl font-bold text-neutral-800 group-hover:text-blue-500 transition-colors mb-4 block">01.</span>
          <h2 className="text-2xl font-bold text-white mb-4">The Quantum Anchor</h2>
          <p className="leading-loose text-neutral-400">
            Science is not just data; it is the poetry of reality. From General Relativity to Mycelial Networks, we study the systems that govern existence to understand our place within them.
          </p>
        </div>

        {/* Pillar 2: Ecosophy */}
        <div className="p-12 border-r border-neutral-900 hover:bg-neutral-900/30 transition-colors group">
          <span className="text-5xl font-bold text-neutral-800 group-hover:text-green-500 transition-colors mb-4 block">02.</span>
          <h2 className="text-2xl font-bold text-white mb-4">The Garden</h2>
          <p className="leading-loose text-neutral-400">
            "Ecosophy" matches ecological harmony with philosophical wisdom. We reject the separation of Man and Nature. The server farm and the forest must learn to breathe the same air.
          </p>
        </div>

        {/* Pillar 3: Art */}
        <div className="p-12 hover:bg-neutral-900/30 transition-colors group">
          <span className="text-5xl font-bold text-neutral-800 group-hover:text-purple-500 transition-colors mb-4 block">03.</span>
          <h2 className="text-2xl font-bold text-white mb-4">The Human Spirit</h2>
          <p className="leading-loose text-neutral-400">
            In an age of AI generation, human imperfection is the ultimate luxury. We celebrate the glitch, the rough draft, the atonal symphony, and the absurd laughter of the Surrealist.
          </p>
        </div>
      </section>

      {/* 3. THE CALL TO ACTION */}
      <section className="py-24 px-8 md:px-24 text-center">
        <p className="font-mono text-xs text-neutral-500 mb-8 uppercase tracking-widest">
          Status: Online // Curating since 2026
        </p>
        <div className="inline-block relative group">
          <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <Link href="/prompts" className="relative bg-neutral-900 border border-neutral-800 text-white px-8 py-4 text-xl font-bold hover:bg-white hover:text-black transition-all rounded">
            Enter The Rhizome
          </Link>
        </div>
      </section>

    </div>
  );
}