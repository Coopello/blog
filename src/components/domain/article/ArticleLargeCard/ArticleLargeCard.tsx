import Image from "next/image";
import type { FC } from "react";
import { CategoryTag } from "src/components/domain/category/CategoryTag";
import type { Category } from "src/models/category";

type Props = {
  name: string;
  description: string;
  imageUrl: string;
  category: Category;
  tags: string[];
};
/**
 * @package
 */
export const ArticleLargeCard: FC<Props> = ({
  category,
  description,
  imageUrl,
  name,
  tags,
}) => {
  return (
    // TODO: サムネイルを常に左右中央揃えにする
    <div className="flex max-w-full flex-1 flex-col gap-3 overflow-x-hidden rounded bg-custom-white p-6">
      <div className="relative h-[250px] w-full max-w-[416px]">
        <Image
          className="object-contain"
          src={imageUrl}
          fill
          alt="記事のサムネイル画像"
        />
      </div>
      <ul className="hidden-scrollbar flex w-full gap-2 overflow-y-clip overflow-x-scroll">
        {tags.map((tag) => {
          return (
            <li key={tag} className="whitespace-nowrap">
              <CategoryTag type={category} text={tag} filled />
            </li>
          );
        })}
      </ul>
      <div className="flex flex-1 flex-col gap-1">
        <p className="text-base">{name}</p>
        <p className="text-sm text-custom-gray">{description}</p>
      </div>
    </div>
  );
};
