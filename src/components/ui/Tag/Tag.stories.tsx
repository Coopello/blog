import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Tag } from "./";

export default {
  title: "ui/Tag",
  argTypes: {
    type: {
      options: [
        "chip",
        "frontend",
        "backend",
        "mobile",
        "infrastructure",
        "design",
        "us",
      ],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Tag>;

export const initial: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;
initial.args = {
  type: "chip",
  filled: false,
};

export const frontend: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;
frontend.args = {
  type: "frontend",
  filled: false,
};

export const backend: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;
backend.args = {
  type: "backend",
  filled: false,
};

export const mobile: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;
mobile.args = {
  type: "mobile",
  filled: false,
};

export const infrastructure: ComponentStory<typeof Tag> = (args) => (
  <Tag {...args} />
);
infrastructure.args = {
  type: "infrastructure",
  filled: false,
};

export const design: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;
design.args = {
  type: "design",
  filled: false,
};

export const us: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;
us.args = {
  type: "us",
  filled: false,
};
