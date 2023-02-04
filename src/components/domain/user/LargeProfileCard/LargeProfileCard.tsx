import Image from "next/image";
import type { FC } from "react";
import { GitHub } from "src/assets/GitHub";
import { Twitter } from "src/assets/Twitter";
import { NavigateButton } from "src/components/ui/NavigateButton";

type Props = {
  description: string;
  imageUrl: string;
  myUrl: {
    twitter?: string;
    github?: string;
  };
  name: string;
};
/**
 * @package
 */
export const LargeProfileCard: FC<Props> = ({
  description,
  imageUrl,
  myUrl,
  name,
}) => {
  return (
    <div className="flex w-[790px] max-w-full items-center gap-12 rounded-xl border p-12">
      <span className="relative h-[100px] w-[100px]">
        <Image
          alt="プロフィールアイコン"
          className="rounded-full object-contain"
          fill
          src={imageUrl}
        />
      </span>
      <div>
        <div className="flex items-center gap-4">
          <p className="text-xl font-bold">{name}</p>
          <div className="flex">
            {myUrl.twitter ? (
              <NavigateButton href={myUrl.twitter} isBlank>
                <Twitter />
              </NavigateButton>
            ) : null}
            {myUrl.github ? (
              <NavigateButton href={myUrl.github} isBlank>
                <GitHub />
              </NavigateButton>
            ) : null}
          </div>
        </div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};
