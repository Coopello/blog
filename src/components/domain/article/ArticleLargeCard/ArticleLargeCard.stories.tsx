import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { ArticleLargeCard } from "./";

export default { title: "domain/article/ArticleLargeCard" } as ComponentMeta<
  typeof ArticleLargeCard
>;

export const Initial: ComponentStory<typeof ArticleLargeCard> = (args) => (
  <ArticleLargeCard {...args} />
);

Initial.args = {
  imageUrl: "https://placehold.jp/512x512.png",
  name: "ニックネーム",
  description: "XXX Developer",
  color: "#00b8d2",
  tags: ["Front-end", "React"],
};
