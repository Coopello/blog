import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { ArticleLargeCard } from "./";

export default { title: "domain/article/ArticleLargeCard" } as ComponentMeta<
  typeof ArticleLargeCard
>;

export const Initial: ComponentStory<typeof ArticleLargeCard> = (args) => <ArticleLargeCard {...args} />;
