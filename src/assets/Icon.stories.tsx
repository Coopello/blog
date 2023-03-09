import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Icon } from "./Icon";

export default {
  title: "assets/Icon",
  argTypes: {
    color: {
      options: ["black"],
      control: { type: "radio" },
    },
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "radio" },
    },
    icon: {
      options: ["twitter", "github"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Icon>;

export const Initial: ComponentStory<typeof Icon> = (args) => (
  <Icon {...args} />
);

Initial.args = {
  icon: "twitter",
  size: "md",
};
