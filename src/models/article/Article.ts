import type { Author, Eyecatch } from "./";
import type { Tag } from "./";

/**
 * @package
 */
export type Article = {
  id: string;
  type: "tech" | "slides" | "events";
  title: string;
  description: string;
  content?: string;
  slideUrl?: string;
  eyecatch: Eyecatch;
  tags: Tag[];
  author: Author;
};
