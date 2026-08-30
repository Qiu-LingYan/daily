import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const daily = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './daily' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    writer: z.string().default('QiuLingYan'),
  }),
});

export const collections = { daily };
