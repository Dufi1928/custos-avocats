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

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    categorie: z.string(),
    auteur: z.string().optional(),
  }),
});

export const collections = { expertises, articles };
