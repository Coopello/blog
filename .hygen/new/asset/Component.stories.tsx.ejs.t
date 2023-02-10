---
to: <%= abs_path %>/<%= h.changeCase.pascal(component_name) %>.stories.tsx
---
import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { <%= h.changeCase.pascal(component_name) %> } from "./";

export default { title: "assets/<%= path %>" } as ComponentMeta<
  typeof <%= h.changeCase.pascal(component_name) %>
>;

export const Initial: ComponentStory<typeof <%= h.changeCase.pascal(component_name) %>> = (args) => <<%= h.changeCase.pascal(component_name) %> {...args} />;
