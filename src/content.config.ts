import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const experience = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    location: z.string(),
    date: z.string(),
    dateStart: z.string().optional(),
    dateEnd: z.string().optional(),
    employmentType: z.enum(['Full-time', 'Part-time', 'Freelance', 'Contract']).default('Full-time'),
    order: z.number(),
    highlights: z.array(z.string()),
  }),
});

const skills = defineCollection({
  loader: file('src/content/skills.json'),
});

export const collections = { experience, skills };
