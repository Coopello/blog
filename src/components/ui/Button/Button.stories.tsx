import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "./";

export default {
  title: "ui/Button",
  argTypes: {
    color: {
      options: ["white"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Button>;

export const Initial: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

Initial.args = {
  children: "ボタン",
  color: "white",
};
