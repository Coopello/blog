"use client";

import { LargeProfileCard } from "src/components/domain/user/LargeProfileCard";
import { ProfileCard } from "src/components/domain/user/ProfileCard";
import { Tag } from "src/components/ui/Tag";

/**
 * @package
 */
export const Main: React.FC = () => {
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
        myUrl={{
          twitter: "https://twitter.com/akt_prs10",
          github: "https://github.com/akito-10",
        }}
        name="Akito Fukuda"
        description="Web Dev"
      />
      <LargeProfileCard
        imageUrl="https://placehold.jp/150x150.png"
        myUrl={{
          twitter: "https://twitter.com/akt_prs10",
          github: "https://github.com/akito-10",
        }}
        name="Akito Fukuda"
        description="Web Dev"
      />
    </div>
  );
};
