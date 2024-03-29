import type { Icon } from "src/models/article/Icon";

/**
 * @package
 */
export type Author = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  job: string;
  description: string;
  github?: string;
  twitter?: string;
  icon: Icon;
};
