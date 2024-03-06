import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { Tag } from "src/components/ui/Tag";

import styles from "./ArticleLargeCard.module.css";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  url: string;
};
/**
 * @package
 */
export const ArticleLargeCard: FC<Props> = ({
  description,
  imageUrl,
  tags,
  title,
  url,
}) => {
  return (
    // TODO: サムネイルを常に左右中央揃えにする（背景を忘れたので、問題が生じたら修正する）
    <article className="flex-1 rounded">
      <Link
        className="flex size-full cursor-pointer flex-col gap-2 overflow-x-hidden rounded bg-custom-white p-4 text-left hover:opacity-60"
        href={url}
      >
        <div className="relative aspect-video w-full overflow-hidden rounded">
          <Image
            className="object-cover"
            src={imageUrl}
            fill
            alt="記事のサムネイル画像"
          />
        </div>
        <p className="line-clamp-2 w-full flex-1 border-b pb-2 text-lg">
          {title}
        </p>
        <p className={`text-sm text-custom-gray ${styles.description}`}>
          {description}
        </p>
        <ul className="hidden-scrollbar flex w-full gap-2 overflow-y-clip overflow-x-scroll">
          {tags.map((tag) => {
            return (
              <li key={tag} className="whitespace-nowrap">
                <Tag color={"#5AC8D8"} text={tag} />
              </li>
            );
          })}
        </ul>
      </Link>
    </article>
  );
};
