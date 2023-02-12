"use client";

import type { FC } from "react";
import { LargeProfileCard } from "src/components/domain/user/LargeProfileCard";
import { ProfileCard } from "src/components/domain/user/ProfileCard";
import { TableOfContents } from "src/components/ui/TableOfContents";
import { Tag } from "src/components/ui/Tag";

/**
 * @package
 */
export const Main: FC = () => {
  return (
    <div>
      <Tag type="chip" filled onClick={() => console.log()} />
      <Tag type="frontend" filled onClick={() => console.log()} />
      <Tag type="backend" filled />
      <Tag type="mobile" filled />
      <Tag type="infrastructure" filled />
      <Tag type="design" filled />
      <Tag type="us" filled />
      <ProfileCard
        imageUrl="https://placehold.jp/150x150.png"
        myLinks={{
          twitter: "https://twitter.com/akt_prs10",
          github: "https://github.com/akito-10",
        }}
        name="Akito Fukuda"
        description="Web Dev"
      />
      <LargeProfileCard
        imageUrl="https://placehold.jp/150x150.png"
        myLinks={{
          twitter: "https://twitter.com/akt_prs10",
          github: "https://github.com/akito-10",
        }}
        name="Akito Fukuda"
        description="Web Dev"
      />
      <div className="fixed top-0">
        <TableOfContents
          contents={["hoge", "piyo", "fuga"]}
          contentId="contents"
        />
      </div>
      <div id="contents">
        <h1 className="h-[1000px] text-5xl" id="hoge">
          hoge
        </h1>
        <h1 className="h-[1000px]  text-5xl" id="piyo">
          piyo
        </h1>
        <h1 className="h-[1000px]  text-5xl" id="fuga">
          fuga
        </h1>
      </div>
    </div>
  );
};
