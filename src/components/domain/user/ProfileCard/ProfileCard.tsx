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
export const ProfileCard: FC<Props> = ({
  description,
  imageUrl,
  myUrl,
  name,
}) => {
  return (
    <div className="w-60 rounded-xl border p-6">
      <div className="flex gap-4 border-b pb-2">
        <span className="relative h-12 w-12">
          <Image
            alt="プロフィールアイコン"
            className="rounded-full object-contain"
            fill
            src={imageUrl}
          />
        </span>
        <div className="flex flex-col gap-2">
          <p>{name}</p>
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
      </div>
      <p className="pt-2 text-xs">{description}</p>
    </div>
  );
};
