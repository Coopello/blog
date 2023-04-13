import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "src/components/ui/Button";

import { ExceptionContent } from "./";

export default { title: "ui/ExceptionContent" } as ComponentMeta<
  typeof ExceptionContent
>;

export const Initial: ComponentStory<typeof ExceptionContent> = (args) => (
  <ExceptionContent {...args} />
);

Initial.args = {
  message: "テスト",
  buttonComponent: <Button>テスト</Button>,
};
