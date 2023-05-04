import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { ArticleBreadcrumbList } from "./";

export default { title: "domain/article/ArticleBreadcrumbList" } as ComponentMeta<
  typeof ArticleBreadcrumbList
>;

export const Initial: ComponentStory<typeof ArticleBreadcrumbList> = (args) => <ArticleBreadcrumbList {...args} />;
