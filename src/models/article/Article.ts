/**
 * @package
 */

import type { Category } from "src/models/category";
import type { Tag } from "src/models/tag";
import type { Thumbnail } from "src/models/thumbnail";

export type Article = {
  title: string;
  content: string;
  thumbnail: Thumbnail;
  category: Category;
  tags: Tag[];
};
