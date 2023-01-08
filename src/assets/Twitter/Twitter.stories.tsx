import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Twitter } from "./";

export default { title: "assets/Twitter" } as ComponentMeta<typeof Twitter>;

export const initial: ComponentStory<typeof Twitter> = (args) => (
  <Twitter {...args} />
);
