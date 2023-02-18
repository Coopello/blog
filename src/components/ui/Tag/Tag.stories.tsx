import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Tag } from "./";

export default {
  title: "ui/Tag",
} as ComponentMeta<typeof Tag>;

export const initial: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;
initial.args = {
  tagInfo: {
    text: "chip",
    color: "#000",
  },
  filled: false,
};
