import type { Author } from "src/models/author";
import type { Tag } from "src/models/tag";
import type { Thumbnail } from "src/models/thumbnail";

/**
 * @package
 */
export type Article = {
  title: string;
  content: string;
  thumbnail: Thumbnail;
  categories: string[];
  tags: Tag[];
  author: Author;
};
