import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "./";

export default { title: "ui/Button" } as ComponentMeta<
  typeof Button
>;

export const Initial: ComponentStory<typeof Button> = (args) => <Button {...args} />;
