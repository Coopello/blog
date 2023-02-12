import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { ContentArea } from ".";

export default { title: "ui/ContentArea" } as ComponentMeta<typeof ContentArea>;

export const Initial: ComponentStory<typeof ContentArea> = (args) => (
  <ContentArea {...args} />
);

Initial.args = {
  id: "test",
  content: "<h1>test</h1>",
};
