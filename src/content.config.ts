import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const experience = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    location: z.string(),
    date: z.string(),
    order: z.number(),
    highlights: z.array(z.string()),
  }),
});

export const collections = { experience };
