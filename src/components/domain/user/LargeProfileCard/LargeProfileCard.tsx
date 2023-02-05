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
};
/**
 * @package
 */
export const LargeProfileCard: FC<Props> = ({
  description,
  imageUrl,
  myLinks,
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
        <p className="text-sm">{description}</p>
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
