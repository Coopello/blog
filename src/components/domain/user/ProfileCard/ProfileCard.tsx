import Image from "next/image";
import type { FC } from "react";
import { forwardRef } from "react";
import { GitHub } from "src/assets/GitHub";
import { Twitter } from "src/assets/Twitter";
import { NavigateButton } from "src/components/ui/NavigateButton";

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
  return (
    <div className="flex w-full items-center gap-6 rounded-xl border p-8">
      <div className="relative h-[100px] w-[100px]">
        <Image
          alt="プロフィールアイコン"
          className="rounded-full object-contain"
          fill
          src={imageUrl}
        />
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex justify-between gap-2">
          <div>
            <p className="text-2xl">{name}</p>
            <p className="text-custom-gray">{job}</p>
          </div>
          <div className="flex">
            {myLinks.twitter ? (
              <NavigateButton href={myLinks.twitter} isBlank>
                <TwitterIcon />
              </NavigateButton>
            ) : null}
            {myLinks.github ? (
              <NavigateButton href={myLinks.github} isBlank>
                <GitHubIcon />
              </NavigateButton>
            ) : null}
          </div>
        </div>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

const TwitterIcon = forwardRef<HTMLSpanElement>((_, ref) => {
  return (
    <span ref={ref}>
      <Twitter />
    </span>
  );
});

TwitterIcon.displayName = "TwitterIcon";

const GitHubIcon = forwardRef<HTMLInputElement>((_, ref) => {
  return (
    <span ref={ref}>
      <GitHub />
    </span>
  );
});

GitHubIcon.displayName = "GitHubIcon";
