import type { Author, Eyecatch } from "./";
import type { Tag } from "./";

/**
 * @package
 */
export type Article = {
  id: string;
  title: string;
  description: string;
  content: string;
  eyecatch?: Eyecatch;
  tags: Tag[];
  author: Author;
};
