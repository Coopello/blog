import type { FC } from "react";
import { Tag } from "src/components/ui/Tag";
import type { Category } from "src/models/category";

type Props = {
  type: Category;
  text: string;
  filled?: boolean;
};

const CATEGORY_TAG_COLORS: { [key in Category]: `#${string}` } = {
  frontend: "#E10718",
  backend: "#1362F9",
  android: "#43DC49",
  ios: "#FF6E27",
  infrastructure: "#6806E4",
  design: "#FFD63D",
  us: "#00B8D2",
  pr: "#C9C9C9",
};

/**
 * @package
 */
export const CategoryTag: FC<Props> = ({ filled = false, text, type }) => {
  const color = CATEGORY_TAG_COLORS[type];

  return <Tag tagInfo={{ color, text }} filled={filled} />;
};
