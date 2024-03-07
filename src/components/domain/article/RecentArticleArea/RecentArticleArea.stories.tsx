import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { RecentArticleArea } from "./";

export default { title: "domain/article/RecentArticleArea" } as ComponentMeta<
  typeof RecentArticleArea
>;

export const Initial: ComponentStory<typeof RecentArticleArea> = (args) => (
  <RecentArticleArea {...args} />
);

Initial.args = {
  articles: {
    contents: [
      {
        id: "1",
        type: "tech",
        title: "タイトル",
        description: "記事の説明",
        content: "記事の本文",
        eyecatch: {
          url: "https://example.com/eyecatch.jpg",
          height: 200,
          width: 300,
        },
        tags: [
          { id: "hoge", name: "タグ1" },
          { id: "fuga", name: "タグ2" },
          { id: "piyo", name: "タグ3" },
        ],
        author: {
          id: "1",
          createdAt: "2022-01-01T00:00:00.000Z",
          updatedAt: "2022-01-02T00:00:00.000Z",
          publishedAt: "2022-01-03T00:00:00.000Z",
          revisedAt: "2022-01-04T00:00:00.000Z",
          name: "著者名",
          job: "職業",
          description: "著者の自己紹介",
          github: "example",
          twitter: "example",
          icon: {
            url: "https://example.com/icon.jpg",
            height: 216,
            width: 216,
          },
        },
      },
    ],
    totalCount: 1,
  },
};
