import type { Author } from "./";
import type { Tag } from "./";
import type { Thumbnail } from "./";

/**
 * @package
 */
export type Article = {
  id: string;
  title: string;
  description: string;
  content: string;
  thumbnail: Thumbnail;
  tags: Tag[];
  author: Author;
};
