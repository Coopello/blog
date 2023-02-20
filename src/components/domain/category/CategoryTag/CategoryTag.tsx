import type { FC } from "react";
import { Tag } from "src/components/ui/Tag";
import type { Category } from "src/models/category";

type Props = {
  type: Category;
  text: string;
  filled?: boolean;
};

const CATEGORY_TAG: { [key in Category]: `#${string}` } = {
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
export const CategoryTag: FC<Props> = ({ filled = false, text, type }) => {
  const color = CATEGORY_TAG[type];

  return <Tag tagInfo={{ color, text }} filled={filled} />;
};
