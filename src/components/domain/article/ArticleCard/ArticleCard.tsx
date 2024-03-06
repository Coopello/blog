import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { Tag } from "src/components/ui/Tag";

import styles from "./ArticleCard.module.css";

type Props = {
  title: string;
  description: string;
  imageUrl?: string;
  tags: string[];
  url: string;
};

/**
 * @package
 */
export const ArticleCard: FC<Props> = ({
  description,
  imageUrl,
  tags,
  title,
  url,
}) => {
  return (
    <article>
      <Link
        className="flex w-full items-center gap-4 rounded bg-custom-white p-4 text-left backdrop:cursor-pointer hover:opacity-60"
        href={url}
      >
        {imageUrl ? (
          <div className="relative hidden aspect-video h-[120px] overflow-hidden rounded sm:inline-block">
            <Image
              className="object-cover"
              src={imageUrl}
              fill
              alt={`${title}のアイキャッチ`}
            />
          </div>
        ) : null}
        <div className="flex min-h-[120px] flex-1 flex-col gap-1 overflow-x-hidden">
          <h2 className="flex flex-1 items-start border-b pb-1 text-xl">
            {title}
          </h2>
          <p
            className={`w-full ${styles.description} text-sm text-custom-gray`}
          >
            {description}
          </p>
          <ul className="hidden-scrollbar flex w-full overflow-y-clip overflow-x-scroll">
            {tags.map((tag) => {
              return (
                <li key={tag} className="whitespace-nowrap">
                  <Tag color={"#5AC8D8"} text={tag} />
                </li>
              );
            })}
          </ul>
        </div>
      </Link>
    </article>
  );
};
