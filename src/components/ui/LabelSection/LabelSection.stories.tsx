import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { LabelSection } from "./";

export default { title: "ui/LabelSection" } as ComponentMeta<
  typeof LabelSection
>;

export const Initial: ComponentStory<typeof LabelSection> = (args) => <LabelSection {...args} />;
