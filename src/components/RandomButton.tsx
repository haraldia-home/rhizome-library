export default function RandomButton({ slugs }: { slugs: string[] }) {
  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * slugs.length);
    window.location.href = `/view/${slugs[randomIndex]}`;
  };

  return (
    <button
      onClick={handleRandom}
      className="w-full text-left py-2 px-3 mt-3 border border-dashed border-neutral-800 rounded text-[9px] font-mono text-blue-400 hover:bg-blue-900/10 hover:border-blue-500 transition-all flex justify-between items-center group"
    >
      <span>🎲 RANDOM DISCOVERY</span>
      <span className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">→</span>
    </button>
  );
}
