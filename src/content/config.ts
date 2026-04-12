import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.string(),
    pillar: z.enum([
      'Rational Satirist',
      'Ecosophist Garden',
      'Human Spirit',
      'Tech/AI',
      'Food Culture',
      'Absurdism',
    ]),
    format: z.enum([
      'course',
      'surrealism',
      'poetry',
      'essay',
      'satire',
      'code',
      'media',
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
