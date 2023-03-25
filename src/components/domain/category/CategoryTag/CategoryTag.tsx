import type { FC } from "react";
import { Tag } from "src/components/ui/Tag";
import type { Category } from "src/models/category";

type Props = {
  color: Category["color"];
  text: string;
  filled?: boolean;
};

/**
 * @package
 */
export const CategoryTag: FC<Props> = ({ color, filled = false, text }) => {
  return <Tag color={color} text={text} filled={filled} />;
};
