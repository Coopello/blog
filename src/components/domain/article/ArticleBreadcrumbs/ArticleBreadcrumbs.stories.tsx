import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { ArticleBreadcrumbs } from "./";

export default { title: "domain/article/ArticleBreadcrumbs" } as ComponentMeta<
  typeof ArticleBreadcrumbs
>;

export const Initial: ComponentStory<typeof ArticleBreadcrumbs> = (args) => (
  <ArticleBreadcrumbs {...args} />
);

Initial.args = {
  items: [{ label: "トップ", href: "/" }, { label: "test" }],
};
