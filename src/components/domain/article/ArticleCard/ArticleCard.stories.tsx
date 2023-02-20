import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { ArticleCard } from "./";

export default {
  title: "domain/article/ArticleCard",
} as ComponentMeta<typeof ArticleCard>;

export const Initial: ComponentStory<typeof ArticleCard> = (args) => (
  <ArticleCard {...args} />
);

Initial.args = {
  imageUrl: "https://placehold.jp/150x150.png",
  nickname: "ニックネーム",
  description: "XXX Developer",
  tagInfoList: [
    { type: "front-end", text: "front-end" },
    { type: "android", text: "android" },
  ],
  title: "タイトル",
};
