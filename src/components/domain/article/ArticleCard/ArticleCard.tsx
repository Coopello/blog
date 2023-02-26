import Image from "next/image";
import type { FC } from "react";
import { CategoryTag } from "src/components/domain/category/CategoryTag";
import type { Category } from "src/models/category";

type Props = {
  title: string;
  name: string;
  description: string;
  imageUrl?: string;
  category: Category;
  tags: string[];
};

/**
 * @package
 */
export const ArticleCard: FC<Props> = ({
  category,
  description,
  imageUrl,
  name,
  tags,
  title,
}) => {
  return (
    <div className="flex max-w-full flex-1 gap-4 rounded bg-custom-white p-4">
      {imageUrl ? (
        <Image
          className="hidden rounded object-contain sm:inline-block md:hidden lg:inline-block"
          src={imageUrl}
          width={120}
          height={120}
          alt="記事のイメージ画像"
        />
      ) : null}
      <div className="flex flex-1 flex-col gap-1 overflow-x-hidden">
        <h2 className="border-b pb-1 text-xl">{title}</h2>
        <ul className="hidden-scrollbar flex w-full overflow-y-clip overflow-x-scroll">
          {tags.map((tag) => {
            return (
              <li key={tag} className="whitespace-nowrap">
                <CategoryTag type={category} text={tag} />
              </li>
            );
          })}
        </ul>
        <p className="text-base">{name}</p>
        <p className="text-sm text-custom-gray">{description}</p>
      </div>
    </div>
  );
};
