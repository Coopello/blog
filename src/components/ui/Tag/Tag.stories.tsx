import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Tag } from "./";

export default { title: "ui/Tag" } as ComponentMeta<typeof Tag>;

export const initial: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;
initial.args = {
  type: "chip",
  outline: false,
};

export const frontend: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;
frontend.args = {
  type: "frontend",
  outline: false,
};

export const backend: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;
backend.args = {
  type: "backend",
  outline: false,
};

export const mobile: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;
mobile.args = {
  type: "mobile",
  outline: false,
};

export const infrastructure: ComponentStory<typeof Tag> = (args) => (
  <Tag {...args} />
);
infrastructure.args = {
  type: "infrastructure",
  outline: false,
};

export const design: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;
design.args = {
  type: "design",
  outline: false,
};

export const us: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;
us.args = {
  type: "us",
  outline: false,
};
