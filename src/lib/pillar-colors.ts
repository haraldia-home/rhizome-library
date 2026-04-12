/**
 * Maps each pillar to a color scheme used for gradient fallbacks
 * when an article has no mediaUrl.
 *
 * Each entry provides:
 *  - `from` / `to` — Tailwind gradient stops
 *  - `accent` — border / text highlight color
 *  - `glyph` — a decorative Unicode symbol rendered inside the fallback block
 */

export type PillarColorScheme = {
  from: string;
  to: string;
  accent: string;
  glyph: string;
};

const pillarColors: Record<string, PillarColorScheme> = {
  'Rational Satirist':   { from: 'from-blue-950',    to: 'to-neutral-950', accent: 'text-blue-500',   glyph: '∴' },
  'Ecosophist Garden':   { from: 'from-green-950',   to: 'to-neutral-950', accent: 'text-green-500',  glyph: '⌬' },
  'Human Spirit':        { from: 'from-pink-950',    to: 'to-neutral-950', accent: 'text-pink-500',   glyph: '♯' },
  'Tech/AI':             { from: 'from-cyan-950',    to: 'to-neutral-950', accent: 'text-cyan-500',   glyph: '⟐' },
  'Food Culture':        { from: 'from-orange-950',  to: 'to-neutral-950', accent: 'text-orange-500', glyph: '◎' },
  'Absurdism':           { from: 'from-yellow-950',  to: 'to-neutral-950', accent: 'text-yellow-500', glyph: '∞' },
  'Quantum Poetics':     { from: 'from-violet-950',  to: 'to-neutral-950', accent: 'text-violet-500', glyph: 'ψ' },
  'Digital Humanities':  { from: 'from-indigo-950',  to: 'to-neutral-950', accent: 'text-indigo-500', glyph: '⊹' },
  'Acoustic Archaeology':{ from: 'from-teal-950',    to: 'to-neutral-950', accent: 'text-teal-500',   glyph: '∿' },
  'Strategic Heresy':    { from: 'from-red-950',     to: 'to-neutral-950', accent: 'text-red-500',    glyph: '⊘' },
};

const fallback: PillarColorScheme = {
  from: 'from-neutral-900', to: 'to-neutral-950', accent: 'text-neutral-500', glyph: '◇',
};

export function getPillarColors(pillar: string): PillarColorScheme {
  return pillarColors[pillar] ?? fallback;
}
