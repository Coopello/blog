import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { ProfileCard } from ".";

export default { title: "domain/user/ProfileCard" } as ComponentMeta<
  typeof ProfileCard
>;

export const initial: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

initial.args = {
  imageUrl: "https://placehold.jp/150x150.png",
  myLinks: {
    twitter: "https://twitter.com/akt_prs10",
    github: "https://github.com/akito-10",
  },
  name: "Akito Fukuda",
  description: `大学2年生でAndroidアプリ開発を始め、ONE PIECEを手に入れた男
最近のマイブームはメンズメイク。
綺麗になりたいお年頃。ちなみに今年は年男。`,
  job: "Web Dev",
};
