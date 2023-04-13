import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { BackHomeButton } from "./";

export default { title: "ui/BackHomeButton" } as ComponentMeta<
  typeof BackHomeButton
>;

export const Initial: ComponentStory<typeof BackHomeButton> = (args) => (
  <BackHomeButton {...args} />
);
