import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const expertises = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/expertises' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    cover: z.string().optional(),
    focus: z.array(z.string()),
    cta: z.string().optional(),
    ordre: z.number().optional(),
  }),
});

export const collections = { expertises };
