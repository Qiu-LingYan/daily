import { defineCollection, z } from 'astro:content';

const daily = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    writer: z.string().default('QiuLingYan'),
  }),
});

export const collections = { daily };
