import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Header } from "./";

export default { title: "ui/Header" } as ComponentMeta<typeof Header>;

export const Initial: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
);
