import Image from "next/image";
import type { FC } from "react";
import { Icon } from "src/assets";

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
    <div className="flex w-full items-center gap-6 rounded bg-white p-8">
      <div className="relative h-[100px] w-[100px]">
        <Image
          alt="プロフィールアイコン"
          className="rounded-full object-contain"
          fill
          src={imageUrl}
        />
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-2xl">{name}</p>
            <p className="text-custom-gray">{job}</p>
          </div>
          <div className="flex">
            {twitter ? <Icon icon="twitter" href={twitter} isBlank /> : null}
            {github ? <Icon icon="github" href={github} isBlank /> : null}
          </div>
        </div>
        <p className="">{description}</p>
      </div>
    </div>
  );
};
