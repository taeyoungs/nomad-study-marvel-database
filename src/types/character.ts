import { z } from 'zod';

const ThumbnailSchema = z.object({
  path: z.string(),
  extension: z.string(),
});

const ResourceItemSchema = z.object({
  name: z.string(),
});

const CategorySchema = z.object({
  available: z.number(),
  items: z.array(ResourceItemSchema),
});

export type CharacterCategory = z.infer<typeof CategorySchema>;

const URLSchema = z.object({
  type: z.string(),
  url: z.string(),
});

export type CharacterURL = z.infer<typeof URLSchema>;

export const CharacterSchema = z.object({
  id: z.number(),
  name: z.string(),
  modified: z.string(),
  thumbnail: ThumbnailSchema,
  comics: CategorySchema,
  series: CategorySchema,
  stories: CategorySchema,
  events: CategorySchema,
  urls: z.array(URLSchema),
});

export type Character = z.infer<typeof CharacterSchema>;

export const CharacterListSchema = z.array(CharacterSchema);

export type CharacterList = z.infer<typeof CharacterListSchema>;
