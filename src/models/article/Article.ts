import type { Category } from "src/models/category";

/**
 * @package
 */
export type Article = {
  title: string;
  category: Category;
  tags: string[];
  name: string;
  description: string;
};
