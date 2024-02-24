import Image from "next/image";
import type { FC } from "react";
import { Icon } from "src/components/ui/Icon";

type Props = {
  description: string;
  imageUrl: string;
  myLinks: {
    twitter?: string;
    github?: string;
  };
  name: string;
  job: string;
};

/**
 * @package
 */
export const ProfileCard: FC<Props> = ({
  description,
  imageUrl,
  job,
  myLinks,
  name,
}) => {
  const { github, twitter } = myLinks;

  return (
    <div className="flex w-full items-center gap-6 rounded bg-white p-4 sm:p-8">
      <div className="relative hidden size-[100px] sm:block">
        <Image
          alt="プロフィールアイコン"
          className="rounded-full object-contain"
          fill
          src={imageUrl}
        />
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <p className="text-lg sm:text-xl md:text-2xl">{name}</p>
            <p className="text-sm text-custom-gray sm:text-base">{job}</p>
          </div>
          <div className="flex">
            {twitter ? (
              <Icon
                icon="twitter"
                href={`https://twitter.com/${twitter}`}
                isBlank
              />
            ) : null}
            {github ? (
              <Icon
                icon="github"
                href={`https://github.com/${github}`}
                isBlank
              />
            ) : null}
          </div>
        </div>
        <p className="text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
};
