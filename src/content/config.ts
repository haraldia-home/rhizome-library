import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    pillar: z.enum([
      'Rational Satirist',
      'Ecosophist Garden',
      'Human Spirit',
      'Tech/AI',
      'Food Culture',
      'Absurdism',
      'Quantum Poetics',
      'Digital Humanities',
      'Acoustic Archaeology',
      'Strategic Heresy',
    ]),
    format: z.enum([
      'course',
      'surrealism',
      'poetry',
      'essay',
      'satire',
      'code',
      'media',
      'manifesto',
      'theorem',
      'chronicle',
      'dialogue',
      'treatise',
    ]),
    commentary: z.string(),
    tags: z.array(z.string()),
    mediaUrl: z.string().optional(),
    chapters: z
      .array(
        z.object({
          title: z.string(),
          author: z.string(),
          focus: z.string(),
          link: z.string(),
        })
      )
      .optional(),
  }),
});

export const collections = { articles };
