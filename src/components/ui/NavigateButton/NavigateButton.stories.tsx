import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Twitter } from "src/assets/Twitter";

import { NavigateButton } from "./";

export default { title: "ui/NavigateButton" } as ComponentMeta<
  typeof NavigateButton
>;

export const Initial: ComponentStory<typeof NavigateButton> = (args) => (
  <NavigateButton {...args} />
);

Initial.args = {
  children: <Twitter />,
  href: "https://www.google.com/?hl=ja",
  isBlank: false,
};
