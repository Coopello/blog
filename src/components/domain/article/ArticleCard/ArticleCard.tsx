import Image from "next/image";
import type { FC } from "react";
import { Tag } from "src/components/ui/Tag";
import type { Article } from "src/models/article";

type Props = {
  title: string;
  nickname: string;
  description: string;
  imageUrl: string;
  tagTypes: Article["articleTags"];
};

/**
 * @package
 */
export const ArticleCard: FC<Props> = ({
  description,
  imageUrl,
  nickname,
  tagTypes,
  title,
}) => {
  return (
    <div className="flex w-[380px] max-w-full flex-col gap-4 rounded-xl border p-6">
      <h2 className="border-b pb-2 text-2xl">{title}</h2>
      <div className="flex gap-4">
        <Image
          className="rounded-full object-contain"
          src={imageUrl}
          width={48}
          height={48}
          alt="プロフィール画像"
        />
        <div>
          <h3 className="text-base">{nickname}</h3>
          <p className="text-base text-custom-gray">{description}</p>
        </div>
      </div>
      <ul className="flex gap-2">
        {tagTypes.map((tagType) => {
          return (
            <li key={tagType}>
              <Tag type={tagType} filled />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
