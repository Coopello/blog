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
  description: "Firestore は〇〇です。\nガチ完成なのでぜひ読んでくださいね！",
  color: "#00b8d2",
  tags: ["Front-end", "React"],
};
