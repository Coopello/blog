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
  description: "Web Dev",
};
