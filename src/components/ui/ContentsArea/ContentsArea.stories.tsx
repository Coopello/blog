import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { ContentsArea } from "./";

export default { title: "ui/ContentsArea" } as ComponentMeta<
  typeof ContentsArea
>;

export const Initial: ComponentStory<typeof ContentsArea> = (args) => <ContentsArea {...args} />;
