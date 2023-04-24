import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { ArticleCard } from "./";

export default {
  title: "domain/article/ArticleCard",
} as ComponentMeta<typeof ArticleCard>;

export const Initial: ComponentStory<typeof ArticleCard> = (args) => (
  <ArticleCard {...args} />
);

export const ImageNotDisplayed: ComponentStory<typeof ArticleCard> = (args) => (
  <ArticleCard {...args} />
);

Initial.args = {
  imageUrl: "https://placehold.jp/120x120.png",
  description: "Firestore は〇〇です。\nガチ完成なのでぜひ読んでくださいね！",
  color: "#00b8d2",
  tags: ["Front-end", "React"],
  title: "タイトル",
};

ImageNotDisplayed.args = {
  imageUrl: undefined,
  description: "Firestore は〇〇です。\nガチ完成なのでぜひ読んでくださいね！",
  color: "#00b8d2",
  tags: ["Front-end", "React"],
  title: "タイトル",
};
