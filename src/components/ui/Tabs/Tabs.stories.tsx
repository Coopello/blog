import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "./Tabs";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "ui/Tabs",
  component: Tabs,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    activeTabIndex: 0,
    tabs: [
      {
        label: "タブ1",
        content: "タブ1のコンテンツ",
      },
      {
        label: "タブ2",
        content: "タブ2のコンテンツ",
      },
      {
        label: "タブ3",
        content: "タブ3のコンテンツ",
      },
    ],
  },
};
