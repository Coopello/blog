/**
 * @package
 */
export type Article = {
  articleTags: ArticleTagType[];
};

type ArticleTagType =
  | "chip"
  | "frontend"
  | "backend"
  | "mobile"
  | "infrastructure"
  | "design"
  | "us";
