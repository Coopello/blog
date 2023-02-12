import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { TableOfContents } from "./";

export default { title: "ui/TableOfContents" } as ComponentMeta<
  typeof TableOfContents
>;

export const Initial: ComponentStory<typeof TableOfContents> = (args) => (
  <TableOfContents {...args} />
);

Initial.args = {
  contents: ["hoge", "piyo", "fuga"],
};
