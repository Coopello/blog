import type { Author } from "./";
import type { Tag } from "./";
import type { Thumbnail } from "./";

/**
 * @package
 */
export type Article = {
  title: string;
  description: string;
  content: string;
  thumbnail: Thumbnail;
  categories: string[];
  tags: Tag[];
  author: Author;
};
