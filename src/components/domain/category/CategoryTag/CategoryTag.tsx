import type { FC } from "react";
import { CATEGORY_TAG_COLORS } from "src/components/domain/category/CategoryTag/constant";
import { Tag } from "src/components/ui/Tag";
import type { Category } from "src/models/category";

type Props = {
  type: Category;
  text: string;
  filled?: boolean;
};

/**
 * @package
 */
export const CategoryTag: FC<Props> = ({ filled = false, text, type }) => {
  const color = CATEGORY_TAG_COLORS[type];

  return <Tag color={color} text={text} filled={filled} />;
};
