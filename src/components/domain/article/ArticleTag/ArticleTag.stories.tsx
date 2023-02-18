import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { ArticleTag } from "./";

export default { title: "domain/article/ArticleTag" } as ComponentMeta<
  typeof ArticleTag
>;

export const Initial: ComponentStory<typeof ArticleTag> = (args) => (
  <ArticleTag {...args} />
);

Initial.args = {
  type: "chip",
  text: "chip",
};
