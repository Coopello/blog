import type { FC } from "react";
import { Tag } from "src/components/ui/Tag";
import type { Article } from "src/models/article";

type Props = {
  type: Article["articleTags"][0];
  text: string;
  filled?: boolean;
};

const ARTICLE_TAG: { [key in Article["articleTags"][0]]: `#${string}` } = {
  chip: "#222222",
  frontend: "#FF7971",
  backend: "#717FFF",
  mobile: "#43DC49",
  infrastructure: "#FFBA69",
  design: "#A055FF",
  us: "#5AC8D8",
};

/**
 * @package
 */
export const ArticleTag: FC<Props> = ({ filled = false, text, type }) => {
  const color = ARTICLE_TAG[type];

  return <Tag tagInfo={{ color, text }} filled={filled} />;
};
