import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { LargeProfileCard } from "./";

export default { title: "domain/user/LargeProfileCard" } as ComponentMeta<
  typeof LargeProfileCard
>;

export const Initial: ComponentStory<typeof LargeProfileCard> = (args) => (
  <LargeProfileCard {...args} />
);

Initial.args = {
  imageUrl: "https://placehold.jp/150x150.png",
  myLinks: {
    twitter: "https://twitter.com/akt_prs10",
    github: "https://github.com/akito-10",
  },
  name: "Akito Fukuda",
  description: "Web Dev",
};
