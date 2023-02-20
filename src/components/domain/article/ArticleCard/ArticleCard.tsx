import Image from "next/image";
import type { FC } from "react";
import { CategoryTag } from "src/components/domain/category/CategoryTag";
import type { Category } from "src/models/category";

type Props = {
  title: string;
  nickname: string;
  description: string;
  imageUrl: string;
  tagInfoList: { type: Category; text: string }[];
};

/**
 * @package
 */
export const ArticleCard: FC<Props> = ({
  description,
  imageUrl,
  nickname,
  tagInfoList,
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
        {tagInfoList.map(({ text, type }) => {
          return (
            <li key={text}>
              <CategoryTag type={type} text={text} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
