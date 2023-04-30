import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { RecentArticleArea } from "./";

export default { title: "domain/article/RecentArticleArea" } as ComponentMeta<
  typeof RecentArticleArea
>;

export const Initial: ComponentStory<typeof RecentArticleArea> = (args) => <RecentArticleArea {...args} />;
