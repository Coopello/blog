import Image from "next/image";
import type { FC } from "react";
import { Tag } from "src/components/ui/Tag";

import styles from "./ArticleCard.module.css";

type Props = {
  title: string;
  name: string;
  description: string;
  imageUrl?: string;
  color: `#${string}`;
  tags: string[];
};

/**
 * @package
 */
export const ArticleCard: FC<Props> = ({
  color,
  description,
  imageUrl,
  name,
  tags,
  title,
}) => {
  return (
    <button className="flex max-w-full flex-1 cursor-pointer gap-4 rounded bg-custom-white p-4 text-left hover:bg-custom-black/5">
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
                <Tag color={color} text={tag} />
              </li>
            );
          })}
        </ul>
        <p className="text-base">{name}</p>
        <p className={`w-full ${styles.description} text-sm text-custom-gray`}>
          {description}
        </p>
      </div>
    </button>
  );
};
