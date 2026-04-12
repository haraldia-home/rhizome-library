// src/lib/syntax-data.ts

export type Pillar = 'Rational Satirist' | 'Ecosophist Garden' | 'Human Spirit' | 'Tech/AI' | 'Food Culture' | 'Absurdism';
export type Format = 'code' | 'essay' | 'poetry' | 'media' | 'satire' | 'course' | 'surrealism';

export type Chapter = {
  title: string;
  author: string;
  focus: string;
  link: string; // Search string for Google/arXiv
};

export type SyntaxSeed = {
  id: string;
  title: string;
  pillar: Pillar; 
  format: Format; 
  content: string; 
  chapters?: Chapter[]; // NEW: For the Syllabus structure
  commentary: string; 
  tags: string[];
  date: string;
  mediaUrl?: string; 
};

export const libraryContent: SyntaxSeed[] = [
  // --- 1. PHYSICS (The Course) ---
  {
    id: 'phys-1',
    title: 'The Quantum Anchor: Vol 1',
    pillar: 'Rational Satirist',
    format: 'course',
    content: 'A rigorous path from Classical Mechanics to Quantum Field Theory. Do not read if you prefer comforting lies. This syllabus bridges the gap between undergraduate curiosity and graduate-level understanding.',
    commentary: 'The language of reality is not English, it is Linear Algebra.',
    tags: ['Physics', 'Syllabus', 'Hard Science', 'Quantum'],
    date: '2026-02-21',
    chapters: [
      { title: 'Lectures on Quantum Mechanics', author: 'David Tong', focus: 'Chapter 3: Formalism (The language of QFT)', link: 'David Tong Quantum Mechanics PDF' },
      { title: 'Quantum and Atom Optics', author: 'Daniel Steck', focus: 'Ch 5: Two-Level Atom, Ch 14: Quantization', link: 'Daniel Steck Quantum Optics PDF' },
      { title: 'Lectures on Particle Physics', author: 'David Tong', focus: 'Ch 1-3: Group Theory (SU2, SU3)', link: 'David Tong Particle Physics PDF' },
      { title: 'Lectures on QFT', author: 'David Tong', focus: 'Ch 2: Canonical Quantization, Ch 3: Interacting Fields', link: 'David Tong QFT PDF' }
    ]
  },

  // --- 2. COSMOLOGY (The Universe) ---
  {
    id: 'phys-2',
    title: 'General Relativity: The Stage',
    pillar: 'Rational Satirist',
    format: 'course',
    content: 'Understanding the curvature of spacetime. Without this, you are just a tourist in the universe. Covers Black Holes, Event Horizons, and the geometry of the Big Bang.',
    commentary: 'Gravity is not a force; it is geometry.',
    tags: ['Cosmology', 'Einstein', 'Reading', 'Physics'],
    date: '2026-02-17',
    chapters: [
      { title: 'Lecture Notes on GR', author: 'Sean Carroll', focus: 'Ch 3: Curvature, Ch 7: Schwarzschild Solution', link: 'arXiv:gr-qc/9712019' },
      { title: 'Black Holes', author: 'Paul Townsend', focus: 'Ch 2: Schwarzschild, Ch 5: Thermodynamics', link: 'arXiv:gr-qc/9707012' },
      { title: 'Cosmology', author: 'Daniel Baumann', focus: 'Ch 1: FLRW Metric, Ch 4: Inflation', link: 'Daniel Baumann Cosmology PDF' }
    ]
  },

  // --- 3. SURREALISM (The Glitch) ---
  {
    id: 'art-1',
    title: 'The Melting Watch of Productivity',
    pillar: 'Absurdism',
    format: 'surrealism',
    content: 'A prompt that forces the AI to generate a clock where the numbers are falling off because they are tired of counting moments that do not matter.',
    commentary: 'Time is a construct, and the construction crew is on strike.',
    tags: ['Dali', 'Time', 'Satire', 'Art'],
    date: '2026-02-19',
    mediaUrl: 'https://images.unsplash.com/photo-1516550893885-3b9542d13b29?auto=format&fit=crop&q=80&w=800'
  },

  // --- 4. ECOSOPHY (The Organism) ---
  {
    id: 'eco-2',
    title: 'Mycelial Network Protocol',
    pillar: 'Ecosophist Garden',
    format: 'essay',
    content: `We built the internet to mimic a brain, but we should have built it to mimic a forest.\n\nIn a forest, trees exchange nutrients via fungi (The Wood Wide Web) based on need, not profit. What if our servers throttled bandwidth to billionaires and re-routed it to poets during times of drought?`,
    commentary: 'The forest was the original blockchain, but it actually worked.',
    tags: ['Nature', 'Tech', 'Systems', 'Ecosophy'],
    date: '2026-02-20',
    mediaUrl: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=800'
  },

  // --- 5. SATIRE (The Chronicle) ---
  {
    id: 'satire-1',
    title: 'Marx vs. Smith: The Fortnite Debate',
    pillar: 'Rational Satirist',
    format: 'satire',
    content: `ADAM SMITH: "My good fellow, do you not see? The skin market is pure laissez-faire! A child in Ohio trades a digital pickaxe for a dance move. Value is determined solely by desire!"\n\nKARL MARX: "It is phantom labor! The child generates value for the server owners, yet owns nothing. The 'V-Buck' is the ultimate alienation—money that cannot even buy bread, only the image of bread."\n\nSMITH: "But they are happy, Karl! Look at them floss!"\n\nMARX: "They floss in chains, Adam. They floss in chains."`,
    commentary: 'The ultimate commodity fetishism is buying clothes that do not exist.',
    tags: ['Economics', 'Gaming', 'Philosophy'],
    date: '2026-02-15',
    mediaUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800'
  },

  // --- 6. MUSIC (The Atonal) ---
  {
    id: 'music-1',
    title: 'Schoenberg’s Ghost in the Machine',
    pillar: 'Human Spirit',
    format: 'media',
    content: 'Generative Schoenberg: A script that ensures no note is repeated until all 12 have been played, but modulates the velocity based on global stock market crashes.',
    commentary: 'The economy is dissonant; the music should match.',
    tags: ['Music', 'Theory', 'Data', 'Art'],
    date: '2026-02-18',
    mediaUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800'
  },

  // --- 7. CODE (The Prompt) ---
  {
    id: 'eco-1',
    title: 'The Algae Cathedral',
    pillar: 'Ecosophist Garden',
    format: 'code',
    content: '/imagine prompt: A gothic cathedral grown entirely from bioluminescent algae, breathing walls, photosynthesis stained glass, 8k resolution, cinematic lighting --v 6.0 --ar 16:9',
    commentary: 'Bio-mimicry architecture: buildings that act like lungs.',
    tags: ['Architecture', 'Solarpunk', 'Nature'],
    date: '2026-02-12',
    mediaUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800',
  },
  
  // --- 8. POETRY ---
  {
    id: 'poem-1',
    title: 'Entropy in C Minor',
    pillar: 'Human Spirit',
    format: 'poetry',
    content: `The algorithm weeps\nNot because it feels\nBut because the dataset\ncontained a mother's grief.\n\nWe taught it syntax\nWe forgot to teach it\nSilence.`,
    commentary: 'Atonality is just probability crying.',
    tags: ['Poetry', 'AI', 'Tragedy'],
    date: '2026-02-18',
  }
];