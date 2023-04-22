import Image from "next/image";
import type { FC } from "react";
import { Tag } from "src/components/ui/Tag";

type Props = {
  description: string;
  imageUrl: string;
  color: `#${string}`;
  tags: string[];
};
/**
 * @package
 */
export const ArticleLargeCard: FC<Props> = ({
  color,
  description,
  imageUrl,
  tags,
}) => {
  return (
    // TODO: サムネイルを常に左右中央揃えにする（背景を忘れたので、問題が生じたら修正する）
    <button className="flex max-w-full flex-1 cursor-pointer flex-col gap-3 overflow-x-hidden rounded bg-custom-white p-6 text-left hover:opacity-60">
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
              <Tag color={color} text={tag} filled />
            </li>
          );
        })}
      </ul>
      <p className="text-base text-custom-gray">{description}</p>
    </button>
  );
};
