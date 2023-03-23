import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { CategoryTag } from ".";

export default { title: "domain/category/CategoryTag" } as ComponentMeta<
  typeof CategoryTag
>;

export const Initial: ComponentStory<typeof CategoryTag> = (args) => (
  <CategoryTag {...args} />
);

Initial.args = {
  color: "#00b8d2",
  text: "front-end",
};
