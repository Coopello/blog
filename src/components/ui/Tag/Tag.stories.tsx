import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Tag } from "./";

export default {
  title: "ui/Tag",
} as ComponentMeta<typeof Tag>;

export const initial: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;
initial.args = {
  color: "#000",
  text: "front-end",
  filled: false,
};
