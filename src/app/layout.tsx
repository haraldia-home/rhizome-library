import './globals.css'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import RandomButton from './_components/RandomButton'
import CommandMenu from './_components/CommandMenu' // <--- IMPORT THIS
import Cursor from './_components/Cursor'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata = {
  title: 'The Living Library',
  description: 'A curated rhizome of Syntax, Art, and Rationality.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${mono.variable}`}>
      <body className="bg-neutral-950 text-neutral-200 min-h-screen flex flex-col md:flex-row font-sans selection:bg-blue-500 selection:text-white">
        
        {/* THE COMMAND MENU COMPONENT (Hidden until Ctrl+K is pressed) */}
        <CommandMenu />

        {/* SIDEBAR */}
        <aside className="w-full md:w-64 border-r border-neutral-800 p-6 flex flex-col h-auto md:h-screen sticky top-0 bg-neutral-950/80 backdrop-blur-md z-50">
          <div className="mb-8 pt-2">
            <h1 className="font-serif text-2xl font-bold text-white tracking-tighter leading-none">
              LIVING<br/>LIBRARY
            </h1>
            <div className="flex items-center gap-2 mt-3">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">System Online</p>
            </div>
          </div>

          {/* NEW SEARCH BUTTON (Visual Trigger) */}
          <div className="mb-8">
            <button 
              className="w-full bg-neutral-900 border border-neutral-800 text-neutral-500 text-[10px] font-mono py-2 rounded flex justify-between px-3 hover:border-neutral-600 hover:text-white transition-colors group text-left"
              // This relies on the event listener in CommandMenu.tsx, but we can also trigger it manually by simulating the key press or passing state if we wanted to be fancier. 
              // For now, this is a visual cue. The user will likely click it and nothing happens, 
              // so let's make it actually helpful by adding a small script tag or just treating it as a hint.
              // BETTER APPROACH: Just show the hint.
            >
              <span>SEARCH...</span>
              <span className="bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-400 group-hover:text-white border border-neutral-700">Ctrl K</span>
            </button>
          </div>
          
          <nav className="space-y-10 font-mono text-sm flex-1 overflow-y-auto">
            
            {/* The Lab */}
            <div>
              <div className="text-neutral-600 text-[9px] uppercase tracking-widest mb-4 font-bold flex items-center gap-2">
                <span>The Lab</span>
                <span className="h-px bg-neutral-800 flex-1"></span>
              </div>
              <a href="/" className="block py-2 hover:text-white transition-colors pl-3 border-l border-transparent hover:border-green-500 text-neutral-400 text-xs">Dashboard</a>
              <a href="/prompts" className="block py-2 hover:text-white transition-colors pl-3 border-l border-transparent hover:border-blue-500 text-neutral-400 text-xs">Syntax Gallery</a>
              <div className="pl-3 mt-2"><RandomButton /></div>
            </div>

            {/* The Rhizome */}
            <div>
              <div className="text-neutral-600 text-[9px] uppercase tracking-widest mb-4 font-bold flex items-center gap-2">
                <span>The Pillars</span>
                <span className="h-px bg-neutral-800 flex-1"></span>
              </div>
              <a href="/prompts" className="block py-1.5 text-neutral-500 hover:text-white pl-3 text-xs">Rationality</a>
              <a href="/prompts" className="block py-1.5 text-neutral-500 hover:text-white pl-3 text-xs">Ecosophy</a>
              <a href="/prompts" className="block py-1.5 text-neutral-500 hover:text-white pl-3 text-xs">Humanity</a>
              <a href="/prompts" className="block py-1.5 text-neutral-500 hover:text-white pl-3 text-xs">Food Culture</a>
            </div>

            {/* Deep Storage */}
            <div>
              <div className="text-neutral-600 text-[9px] uppercase tracking-widest mb-4 font-bold flex items-center gap-2">
                <span>Deep Storage</span>
                <span className="h-px bg-neutral-800 flex-1"></span>
              </div>
              <a href="/manifesto" className="block py-1.5 text-neutral-500 hover:text-white pl-3 text-xs">The Manifesto</a>
            </div>
          </nav>

          <div className="pt-6 border-t border-neutral-800 mt-auto">
             <div className="text-[9px] text-neutral-600 font-mono flex justify-between">
               <span>LATENCY: 12ms</span>
               <span>LOC: NORWAY</span>
             </div>
          </div>
        </aside>

        {/* CONTENT */}
        <main className="flex-1 overflow-y-auto scroll-smooth">
          {children}
        </main>

      </body>
    </html>
  )
}